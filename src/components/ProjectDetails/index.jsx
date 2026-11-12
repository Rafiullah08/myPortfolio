import { CloseRounded, GitHub, LinkedIn } from '@mui/icons-material';
import { Modal } from '@mui/material';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
background-color: #000000a7;
display: flex;
align-items: top;
justify-content: center;
overflow-y: scroll;
transition: all 0.5s ease;
`;

const Wrapper = styled.div`
max-width: ${({ $wide }) => ($wide ? "1100px" : "800px")};
width: 100%;
border-radius: 16px;
margin: 50px 12px;
height: min-content;
background-color: ${({ theme }) => theme.card};
color: ${({ theme }) => theme.text_primary};
padding: 20px;
display: flex;
flex-direction: column;
position: relative;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin: 8px 6px 0px 6px;
  @media only screen and (max-width: 600px) {
      font-size: 24px;
      margin: 6px 6px 0px 6px;
  }
`;

const Date = styled.div`
    font-size: 16px;
    margin: 2px 6px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`



const Desc = styled.div`
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary};
    margin: 8px 6px;
    @media only screen and (max-width: 600px) {
        font-size: 14px;
        margin: 6px 6px;
    }
`;

const LiveScroll = styled.div`
    width: 100%;
    height: min(72vh, 720px);
    margin-top: 30px;
    overflow: auto;
    border-radius: 12px;
    background: #ffffff;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.3);
`;

const LiveImage = styled.img`
    width: 100%;
    height: auto;
    display: block;
`;

const ShotRow = styled.div`
    display: flex;
    gap: 14px;
    overflow-x: auto;
    margin-top: 28px;
    padding: 4px 2px 10px;
`;

const Shot = styled.img`
    height: 440px;
    width: auto;
    flex: 0 0 auto;
    object-fit: cover;
    object-position: top center;
    border-radius: 24px;
    border: 3px solid rgba(255, 255, 255, 0.14);
    background: #0e1116;
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.28);
`;

const LiveSwitch = styled.div`
    display: flex;
    gap: 8px;
    margin-top: 16px;
`;

const SwitchButton = styled.button`
    border: 1px solid ${({ theme, $active }) => ($active ? theme.primary : "rgba(255,255,255,0.16)")};
    background: ${({ theme, $active }) => ($active ? theme.primary + "33" : "transparent")};
    color: ${({ theme }) => theme.text_primary};
    border-radius: 999px;
    padding: 8px 14px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
`;

const PhoneLive = styled.div`
    width: min(390px, 100%);
    height: min(68vh, 640px);
    margin: 16px auto 0;
    border-radius: 32px;
    overflow: hidden;
    border: 10px solid #111318;
    background: #ffffff;
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.45);
`;

const LiveFrame = styled.iframe`
    width: 100%;
    height: ${({ $phone }) => ($phone ? "100%" : "min(72vh, 720px)")};
    margin-top: ${({ $phone, $tight }) => ($phone ? "0" : $tight ? "12px" : "30px")};
    border: 0;
    border-radius: ${({ $phone }) => ($phone ? "0" : "12px")};
    background: #ffffff;
    box-shadow: ${({ $phone }) => ($phone ? "none" : "0px 0px 10px 0px rgba(0,0,0,0.3)")};
    display: block;
`;

const Label = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    margin: 8px 6px;
    @media only screen and (max-width: 600px) {
        font-size: 16px;
        margin: 8px 6px;
    }
`;

const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 8px 0px;
    @media only screen and (max-width: 600px) {
        margin: 4px 0px;
    }
`;

const Tag = styled.div`
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.primaryText};
    margin: 4px;
    padding: 4px 8px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.primary + 20};
    @media only screen and (max-width: 600px) {
        font-size: 12px;
    }
`;

const Members = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    flex-wrap: wrap;
    margin: 12px 6px;
    @media only screen and (max-width: 600px) {
        margin: 4px 6px;
    }
`;

const Member = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

const MemberImage = styled.img`
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 4px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.3);
    @media only screen and (max-width: 600px) {
        width: 32px;
        height: 32px;
    }
`;

const MemberName = styled.div`
    font-size: 16px;
    font-weight: 600;
    width: 200px;
    color: ${({ theme }) => theme.text_primary};
    @media only screen and (max-width: 600px) {
        font-size: 14px;
    }
`;


const ButtonGroup = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 12px 0px;
    gap: 12px;
`;

const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 16px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border: none;
    border-radius: 8px;
    background: transparent;
    color: ${({ theme }) => theme.text_primary};
    cursor: pointer;
`;

const Badge = styled.div`
    display: inline-flex;
    align-items: center;
    padding: 10px 14px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    color: ${({ theme }) => theme.primaryText};
    background: ${({ theme }) => theme.primary}22;
    border: 1px solid ${({ theme }) => theme.primary}55;
`;

const Button = styled.a`
    width: 100%;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    padding: 12px 16px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.primary};
    ${({ dull, theme }) => dull && `
        background-color: ${theme.bgLight};
        color: ${theme.text_secondary};
        &:hover {
            background-color: ${({ theme }) => theme.bg + 99};
        }
    `}
    cursor: pointer;
    text-decoration: none;
    transition: all 0.5s ease;
    &:hover {
        background-color: ${({ theme }) => theme.primary + 99};
    }
    @media only screen and (max-width: 600px) {
        font-size: 12px;
    }
`;


const ProjectDetails = ({ openModal, setOpenModal }) => {
    const project = openModal?.project;
    const links = project?.links?.length
        ? project.links
        : (project?.webapp ? [{ label: "Visit Live", href: project.webapp }] : []);
    const firstHref = links[0]?.href || "";
    const [liveUrl, setLiveUrl] = useState(firstHref);
    useEffect(() => {
        setLiveUrl(firstHref);
    }, [project?.id, firstHref]);
    const showLiveSite = Boolean(project?.embed && liveUrl);
    const close = () => {
        const returnFocus = openModal?.returnFocus;
        setOpenModal({ state: false, project: null });
        window.setTimeout(() => returnFocus?.focus?.(), 0);
    };
    return (
        <Modal open={true} onClose={close} disableRestoreFocus>
            <Container>
                <Wrapper $wide={showLiveSite || Boolean(project?.image)} role="dialog" aria-modal="true" aria-labelledby="project-dialog-title">
                    <CloseButton type="button" aria-label="Close project details" onClick={close}>
                        <CloseRounded />
                    </CloseButton>
                    {project?.shots?.length ? (
                        <ShotRow>
                            {project.shots.map((shot) => (
                                <Shot key={shot.src} src={shot.src} alt={shot.alt} />
                            ))}
                        </ShotRow>
                    ) : null}
                    {links.length > 1 && (
                        <LiveSwitch>
                            {links.map((link) => (
                                <SwitchButton
                                    key={link.href}
                                    type="button"
                                    $active={liveUrl === link.href}
                                    onClick={() => setLiveUrl(link.href)}
                                >
                                    {link.label}
                                </SwitchButton>
                            ))}
                        </LiveSwitch>
                    )}
                    {showLiveSite && project?.shots?.length ? (
                        <PhoneLive>
                            <LiveFrame
                                key={liveUrl}
                                $phone
                                src={liveUrl}
                                title={`${project.title} live site`}
                            />
                        </PhoneLive>
                    ) : showLiveSite ? (
                        <LiveFrame
                            key={liveUrl}
                            $tight={links.length > 1}
                            src={liveUrl}
                            title={`${project.title} live site`}
                            loading="lazy"
                        />
                    ) : (
                        !project?.shots?.length && (
                            <LiveScroll>
                                <LiveImage
                                    src={project?.image}
                                    alt={`${project?.title || "Project"} preview`}
                                />
                            </LiveScroll>
                        )
                    )}
                    <Title as="h2" id="project-dialog-title">{project?.title}</Title>
                    {project?.date && <Date>{project.date}</Date>}
                    <Tags>
                        {project?.tags?.map((tag) => (
                            <Tag key={tag}>{tag}</Tag>
                        ))}
                    </Tags>
                    <Desc>{project?.description}</Desc>
                    {project?.member && (
                        <>
                            <Label>Members</Label>
                            <Members>
                                {project.member.map((member) => (
                                    <Member key={member.name}>
                                        <MemberImage src={member.img} alt="" width="50" height="50" />
                                        <MemberName>{member.name}</MemberName>
                                        <a href={member.github} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', color: 'inherit'}}>
                                            <GitHub />
                                        </a>
                                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', color: 'inherit'}}>
                                            <LinkedIn />
                                        </a>
                                    </Member>
                                ))}
                            </Members>
                        </>
                    )}
                    <ButtonGroup>
                        {project?.badge && <Badge>{project.badge}</Badge>}
                        {links.map((link) => (
                          <Button key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</Button>
                        ))}
                    </ButtonGroup>
                </Wrapper>
            </Container>

        </Modal>
    )
}

export default ProjectDetails