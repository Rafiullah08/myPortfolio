import React, { useState } from "react";
import styled from "styled-components";
import { Snackbar } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { Bio } from "../../data/constants";
import sendEmail from "../../utils/sendEmail";
import Reveal from "../Reveal";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 20px 0 40px;
  @media (max-width: 960px) {
    padding: 0;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  padding: 0 16px 80px;
  gap: 12px;
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: 0;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 640px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const LinkRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-top: 8px;
`;

const EmailChip = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
  padding: 10px 16px;
  border-radius: 999px;
  text-decoration: none;
  color: ${({ theme }) => theme.text_primary};
  border: 1px solid ${({ theme }) => theme.primary}55;
  background: ${({ theme }) => theme.primary}14;
  font-weight: 600;
  transition: transform 0.25s ease, border-color 0.25s ease;
  &:hover {
    transform: translateY(-2px);
    border-color: ${({ theme }) => theme.primary};
  }
`;

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 22px;
  margin-top: 28px;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.card};
  padding: 28px;
  border-radius: 18px;
  border: 1px solid ${({ theme }) => theme.primary}33;
  box-shadow: 0 12px 40px rgba(23, 92, 230, 0.12);
  gap: 12px;
  scroll-margin-top: 110px;
  transition: transform 0.35s ease, box-shadow 0.35s ease;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 18px 50px rgba(133, 76, 230, 0.18);
  }
`;

const CardTitle = styled.div`
  font-size: 22px;
  font-weight: 600;
  margin: 0;
  color: ${({ theme }) => theme.text_primary};
  display: flex;
  align-items: center;
  gap: 10px;
`;

const CardCopy = styled.p`
  margin: 0 0 6px;
  color: ${({ theme }) => theme.text_secondary};
  font-size: 14px;
  line-height: 1.6;
`;

const FieldRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInput = styled.input`
  width: 100%;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary}66;
  outline: none;
  font-size: 16px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 14px;
  color-scheme: dark;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  &:focus {
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.primary}22;
  }
`;

const ContactInputMessage = styled.textarea`
  width: 100%;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary}66;
  outline: none;
  font-size: 16px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 14px;
  resize: vertical;
  min-height: 120px;
  &:focus {
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.primary}22;
  }
`;

const ContactButton = styled.button`
  width: 100%;
  text-align: center;
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  padding: 13px 16px;
  margin-top: 4px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.white};
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.25s ease, filter 0.25s ease;
  &:hover:not(:disabled) {
    transform: translateY(-1px);
    filter: brightness(1.08);
  }
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const HoneyPot = styled.input`
  display: none;
`;

const Status = styled.div`
  font-size: 13px;
  color: ${({ error, theme }) => (error ? "#f87171" : theme.text_secondary)};
`;

const Contact = () => {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [meetingStatus, setMeetingStatus] = useState("");
  const [sending, setSending] = useState(false);
  const [booking, setBooking] = useState(false);

  const handleMessage = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.company.value) return;
    setSending(true);
    setStatus("");
    try {
      await sendEmail({
        name: form.from_name.value,
        email: form.from_email.value,
        subject: form.subject.value,
        message: form.message.value,
        _subject: `Portfolio message from ${form.from_name.value}`,
      });
      form.reset();
      setOpen(true);
      setStatus("Message sent. I’ll get back to you at this inbox.");
    } catch (error) {
      setStatus("Could not send the message. Please email me directly.");
    } finally {
      setSending(false);
    }
  };

  const handleMeeting = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.company.value) return;
    setBooking(true);
    setMeetingStatus("");
    const name = form.meeting_name.value;
    const email = form.meeting_email.value;
    const date = form.meeting_date.value;
    const time = form.meeting_time.value;
    const topic = form.meeting_topic.value;
    try {
      await sendEmail({
        name,
        email,
        type: "Meeting request",
        preferred_date: date,
        preferred_time: time,
        topic,
        _subject: `Meeting request from ${name}`,
      });
      form.reset();
      setOpen(true);
      setMeetingStatus("Meeting request sent. I’ll confirm the time over email.");
    } catch (error) {
      setMeetingStatus("Could not send the request. Please email me directly.");
    } finally {
      setBooking(false);
    }
  };

  return (
    <Container id="contact" as="section" aria-labelledby="contact-title">
      <Wrapper>
        <Reveal>
          <Title as="h2" id="contact-title">Let’s work together</Title>
          <Desc>
            Hiring for a remote full-stack role? Email me, message me on WhatsApp, or send a message below.
          </Desc>
          <LinkRow>
            <EmailChip href={`mailto:${Bio.email}`}>
              <EmailOutlinedIcon fontSize="small" />
              {Bio.email}
            </EmailChip>
            <EmailChip href={Bio.whatsapp} target="_blank" rel="noopener noreferrer">
              {Bio.whatsappLabel}
            </EmailChip>
            <EmailChip href={Bio.linkedin} target="_blank" rel="noopener noreferrer">
              linkedin.com/in/rafiullah08
            </EmailChip>
            <EmailChip href={Bio.github} target="_blank" rel="noopener noreferrer">
              github.com/Rafiullah08
            </EmailChip>
            <EmailChip href={Bio.resume} download>
              Download CV
            </EmailChip>
          </LinkRow>
        </Reveal>
        <Grid>
          <Reveal>
            <Card onSubmit={handleMessage} aria-label="Send a message">
              <CardTitle as="h3">
                <EmailOutlinedIcon /> Send a message
              </CardTitle>
              <CardCopy>Product ideas, partnerships, or questions — I’ll reply to this inbox.</CardCopy>
              <HoneyPot name="company" tabIndex="-1" autoComplete="off" />
              <ContactInput placeholder="Your name" name="from_name" autoComplete="name" required />
              <ContactInput placeholder="Your email" name="from_email" type="email" autoComplete="email" required />
              <ContactInput placeholder="Subject" name="subject" required />
              <ContactInputMessage placeholder="How can I help?" name="message" required />
              <ContactButton type="submit" disabled={sending}>
                {sending ? "Sending..." : "Send email"}
              </ContactButton>
              {status && <Status>{status}</Status>}
            </Card>
          </Reveal>
          <Reveal delay={120}>
            <Card id="book-call" onSubmit={handleMeeting} aria-label="Book a call">
              <CardTitle as="h3">
                <CalendarMonthOutlinedIcon /> Book a call
              </CardTitle>
              <CardCopy>
                Share a preferred time and I’ll confirm the meeting by email.
              </CardCopy>
              <HoneyPot name="company" tabIndex="-1" autoComplete="off" />
              <ContactInput placeholder="Your name" name="meeting_name" autoComplete="name" required />
              <ContactInput placeholder="Your email" name="meeting_email" type="email" autoComplete="email" required />
              <FieldRow>
                <ContactInput type="date" name="meeting_date" required aria-label="Preferred date" />
                <ContactInput type="time" name="meeting_time" required aria-label="Preferred time" />
              </FieldRow>
              <ContactInputMessage
                placeholder="What should we discuss?"
                name="meeting_topic"
                required
              />
              <ContactButton type="submit" disabled={booking}>
                {booking ? "Booking..." : "Request a meeting"}
              </ContactButton>
              {meetingStatus && <Status>{meetingStatus}</Status>}
            </Card>
          </Reveal>
        </Grid>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message="Sent to rafiullah@vornsoft.com"
        />
      </Wrapper>
    </Container>
  );
};

export default Contact;
