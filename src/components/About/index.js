import React from 'react'
import styled from 'styled-components'
import { about } from '../../data/constants'
import Reveal from '../Reveal'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 40px 0 20px 0;
`

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 900px;
  padding: 0 24px 40px 24px;
  gap: 16px;
`

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 12px;
  margin-bottom: 0;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    font-size: 32px;
  }
`

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.7;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
  margin: 0;
  max-width: 820px;
  @media (max-width: 768px) {
    font-size: 16px;
    text-align: left;
  }
`

const About = () => {
  return (
    <Container id="about-me" as="section" aria-labelledby="about-title">
      <Wrapper>
        <Reveal>
          <Title as="h2" id="about-title">{about.title}</Title>
        </Reveal>
        {about.paragraphs.map((text, index) => (
          <Reveal key={text.slice(0, 24)} delay={index * 70}>
            <Paragraph>{text}</Paragraph>
          </Reveal>
        ))}
      </Wrapper>
    </Container>
  )
}

export default About;
