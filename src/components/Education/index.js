
import React from 'react'
import styled from 'styled-components'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { certifications, education } from '../../data/constants';
import EducationCard from '../Cards/EducationCard';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 0px 0px 60px 0px;
    @media (max-width: 960px) {
        padding: 0px;
    }
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 40px 0px 0px 0px;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
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
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
        padding: 0 20px;
    }
`;

const CertBlock = styled.div`
    width: 100%;
    max-width: 650px;
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const TimelineSection = styled.div`
    width: 100%;
    max-width: 1000px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    gap: 12px;
    padding: 0 16px;
    box-sizing: border-box;

    .MuiTimeline-root {
        padding: 0 !important;
        margin: 0 !important;
        width: 100%;
    }

    .MuiTimelineItem-root {
        min-width: 0;
        width: 100%;
    }

    .MuiTimelineItem-root:before {
        flex: 0 !important;
        padding: 0 !important;
        content: none;
    }

    .MuiTimelineContent-root {
        min-width: 0;
    }
`;



const index = () => {
    return (
        <Container id="education" as="section" aria-labelledby="education-title">
            <Wrapper>
                <Title as="h2" id="education-title">Education</Title>
                <Desc>
                    Education and certifications.
                </Desc>
                <TimelineSection>
                    <Timeline>
                        {education.map((educationItem, index) => (
                            <TimelineItem key={educationItem.id}>
                                <TimelineContent sx={{ py: '12px', px: { xs: 1, sm: 2 } }}>
                                    <EducationCard education={educationItem}/>
                                </TimelineContent>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="secondary" />
                                    {index !== education.length - 1 && <TimelineConnector style={{ background: '#854CE6' }} />}
                                </TimelineSeparator>
                            </TimelineItem>
                        ))}
                    </Timeline>
                    <CertBlock>
                        <Title as="h3" style={{ fontSize: "28px", marginTop: "28px" }}>Certifications</Title>
                        {certifications.map((item) => (
                            <EducationCard key={item.id} education={item} />
                        ))}
                    </CertBlock>

                </TimelineSection>
            </Wrapper>
        </Container>
    )
}

export default index