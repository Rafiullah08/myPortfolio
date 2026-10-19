import React from 'react'
import styled from 'styled-components'
import { skills } from '../../data/constants'
import Reveal from '../Reveal'

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
`

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1100px;
gap: 12px;
padding: 0 16px;
box-sizing: border-box;
@media (max-width: 960px) {
    flex-direction: column;
}
`

export const Title = styled.div`
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

export const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        font-size: 16px;
        padding: 0 20px;
    }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`

const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  background: ${({ theme }) => theme.card};
  border: 0.1px solid #854CE6;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  transition: transform 0.35s ease, box-shadow 0.35s ease;
  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 40px rgba(133, 76, 230, 0.22);
  }
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 100%;
    padding: 10px 16px;
  }


`

const SkillTitle = styled.h3`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  text-align: center;
`

const SkillList = styled.div`
  display: flex;
  justify-content: center; 
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`

const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
  ${({ $invert }) => $invert && "filter: invert(1);"}
`

const Skills = () => {
  return (
    <Container id="skills" as="section" aria-labelledby="skills-title">
      <Wrapper>
        <Reveal>
          <Title as="h2" id="skills-title">Skills</Title>
          <Desc>The stack I use to build and ship full-stack web, mobile and desktop applications.</Desc>
        </Reveal>
        <SkillsContainer>
          {skills.map((skill, index) => (
            <Reveal key={skill.title} delay={index * 80}>
              <Skill as="article" aria-label={`${skill.title} skills`}>
                <SkillTitle as="h3">{skill.title}</SkillTitle>
                <SkillList>
                  {skill.skills.map((item) => (
                    <SkillItem key={item.name}>
                      {item.image && (
                        <SkillImage src={item.image} alt="" $invert={item.invert} loading="lazy" decoding="async" width="24" height="24"/>
                      )}
                      {item.name}
                    </SkillItem>
                  ))}
                </SkillList>
              </Skill>
            </Reveal>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  )
}

export default Skills