import { Bio } from "../data/constants";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

const formatBody = (payload) =>
  [
    payload.name && `Name: ${payload.name}`,
    payload.email && `Email: ${payload.email}`,
    payload.subject && `Subject: ${payload.subject}`,
    payload.message && `Message: ${payload.message}`,
    payload.type && `Type: ${payload.type}`,
    payload.preferred_date && `Preferred date: ${payload.preferred_date}`,
    payload.preferred_time && `Preferred time: ${payload.preferred_time}`,
    payload.topic && `Topic: ${payload.topic}`,
  ]
    .filter(Boolean)
    .join("\n");

export const openMailto = (payload) => {
  const subject = payload._subject || payload.subject || "Portfolio contact";
  window.location.href = `mailto:${Bio.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(formatBody(payload))}`;
};

const sendEmail = async (payload) => {
  if (!Bio.web3formsAccessKey) {
    openMailto(payload);
    return { success: true, method: "mailto" };
  }

  const { _subject, _captcha, _template, ...fields } = payload;
  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: Bio.web3formsAccessKey,
      from_name: fields.name || "Portfolio visitor",
      subject: _subject || fields.subject || "New message from portfolio",
      email: fields.email,
      replyto: fields.email,
      ...fields,
      botcheck: "",
    }),
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok || data.success === false) {
    throw new Error(data.message || "Could not send the message.");
  }
  return data;
};

export default sendEmail;
