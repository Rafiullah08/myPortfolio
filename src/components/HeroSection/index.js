import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, PrimaryButton, SecondaryButton, ButtonRow } from './HeroStyle'
import profilePhoto from '../../images/rafiullah.jpg'
import profilePhoto400 from '../../images/rafiullah-400.webp'
import profilePhoto800 from '../../images/rafiullah-800.webp'
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
                        <Title as="h1">{Bio.name}</Title>
                        <TextLoop>Full-Stack Developer</TextLoop>
                        <TextLoop>
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
                            <PrimaryButton href={Bio.resume} download>Download CV</PrimaryButton>
                            <SecondaryButton href="#projects">View Projects</SecondaryButton>
                            <SecondaryButton href={`mailto:${Bio.email}`}>Email Me</SecondaryButton>
                        </ButtonRow>
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">
                        <picture>
                            <source
                                type="image/webp"
                                srcSet={`${profilePhoto400} 400w, ${profilePhoto800} 800w`}
                                sizes="(max-width: 768px) 160px, 400px"
                            />
                            <Img src={profilePhoto} alt="Rafi Ullah, Full-Stack Developer" width="400" height="400" fetchPriority="high" decoding="async" />
                        </picture>
                    </HeroRightContainer>
                </HeroInnerContainer>

            </HeroContainer>
        </div>
    )
}

export default HeroSection
