import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, PrimaryButton, SecondaryButton, ButtonRow } from './HeroStyle'
import profilePhoto from '../../images/rafiullah.jpg'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';

const HeroSection = () => {
    return (
        <div id="about">
            <HeroContainer as="section" aria-label="Introduction">
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <Title as="h1">Hi, I am <br /> {Bio.name}</Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <ButtonRow>
                            <PrimaryButton href="#book-call">Book a Call</PrimaryButton>
                            <SecondaryButton href={Bio.website} target="_blank" rel="noopener noreferrer">Visit VornSoft</SecondaryButton>
                        </ButtonRow>
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">

                        <Img src={profilePhoto} alt="Rafiullah, Founder and Lead Architect of VornSoft" width="400" height="400" fetchPriority="high" decoding="async" />
                    </HeroRightContainer>
                </HeroInnerContainer>

            </HeroContainer>
        </div>
    )
}

export default HeroSection