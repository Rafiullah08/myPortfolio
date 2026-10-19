import React from 'react'
import styled from 'styled-components'

const Document = styled.img`
    display: none;
    height: 70px;
    width: fit-content;
    background-color: #000;
    border-radius: 10px;
    &:hover{
        cursor: pointer;
        opacity: 0.8;
    }
`

const Description = styled.div`
    width: 100%;
    font-size: 15px;
    font-weight: 400;
    color: #a1a1aa;
    margin-bottom: 10px;
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const BulletList = styled.ul`
    margin: 0;
    padding-left: 18px;
    display: flex;
    flex-direction: column;
    gap: 6px;
`

const Note = styled.p`
    margin: 4px 0 0;
    font-size: 13px;
    line-height: 1.5;
    color: #a1a1aa;
`

const Card = styled.div`
    width: 100%;
    max-width: 650px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
    padding: 12px 16px;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: all 0.3s ease-in-out;
    &:hover{
        box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
        transform: translateY(-5px);
    }
    @media only screen and (max-width: 768px){
        padding: 10px;
        gap: 8px;
    }

    &:hover ${Document}{
        display: flex;
    }

    border: 0.1px solid #306EE8;
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
`

const Top = styled.div`
    width: 100%;
    display: flex;
    gap: 12px
`

const Image = styled.img`
    height: 50px;
    width: 50px;
    object-fit: contain;
    background-color: #fff;
    border-radius: 10px;
    margin-top: 4px;
    padding: 4px;
    @media only screen and (max-width: 768px){
        height: 40px;
        width: 40px;
    }
`

const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column; 
`


const Role = styled.div`
    font-size: 18px;
    font-weight: 600;
    margin: 0;
    color: ${({ theme }) => theme.text_primary + 99};
    @media only screen and (max-width: 768px){
        font-size: 14px;
    }
`

const Company = styled.div`
    font-size: 14px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary + 99};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const DateText = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: #9a9ba3;
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const Duration = styled.span`
    font-size: 11px;
    font-weight: 600;
    color: ${({ theme }) => theme.primaryText};
    background: ${({ theme }) => theme.primary}22;
    border: 1px solid ${({ theme }) => theme.primary}55;
    border-radius: 999px;
    padding: 2px 8px;
`


const Skills = styled.div`
    width: 100%;
    display: flex;
    gap: 12px;
    margin-top: -10px;
`

const ItemWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`

const Skill = styled.div`
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + 99};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`



const formatTenure = (start, end) => {
    if (!start) return "";
    const from = new Date(start);
    const to = end ? new Date(end) : new Date();
    let months = (to.getFullYear() - from.getFullYear()) * 12 + (to.getMonth() - from.getMonth());
    if (to.getDate() < from.getDate()) months -= 1;
    months = Math.max(months, 0);
    const years = Math.floor(months / 12);
    const remainder = months % 12;
    if (years && remainder) return `${years} yr ${remainder} mo`;
    if (years === 1) return "1 year";
    if (years) return `${years} years`;
    if (months === 1) return "1 month";
    return `${months} months`;
};

const ExperienceCard = ({ experience }) => {
    const tenure = formatTenure(experience.start, experience.end);
    return (
        <Card>
            <Top>
                <picture>
                    {experience.imgWebp && <source srcSet={experience.imgWebp} type="image/webp" />}
                    <Image src={experience.img} alt={`${experience.company} logo`} width="50" height="50" loading="lazy" decoding="async" />
                </picture>
                <Body>
                    <Role as="h3">{experience.role}</Role>
                    <Company>{experience.company}</Company>
                    {experience.note && <Note>{experience.note}</Note>}
                    <DateText>
                      {experience.date}
                      {tenure && <Duration>{tenure}</Duration>}
                    </DateText>
                </Body>
            </Top>
            <Description>
                {experience?.points &&
                    <BulletList>
                        {experience.points.map((point) => (
                            <li key={point}>{point}</li>
                        ))}
                    </BulletList>
                }
                {experience?.skills &&
                    <>
                        <br />
                        <Skills>
                            <b>Skills:</b>
                            <ItemWrapper>
                                {experience?.skills?.map((skill) => (
                                    <Skill key={skill}>• {skill}</Skill>
                                ))}
                            </ItemWrapper>
                        </Skills>
                    </>
                }
            </Description>
            {experience.doc &&
                <a href={experience.doc} target="_blank" rel="noopener noreferrer">
                    <Document src={experience.doc} />
                </a>
            }
        </Card>
    )
}

export default ExperienceCard