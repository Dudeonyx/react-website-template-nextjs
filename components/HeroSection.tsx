// import React from 'react'

import { useState } from 'react';
import {
  ArrowForward,
  ArrowRight,
  HeroBgContainer,
  HeroBtn,
  HeroBtnWrapper,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  HeroVideoBg,
} from './HeroElements';

interface Props {}

const HeroSection = (props: Props) => {
  const [hover, setHover] = useState(false);
  return (
    <HeroContainer>
      <HeroBgContainer>
        <HeroVideoBg src="/video.mp4" typeof="video/mp4" autoPlay loop muted />
      </HeroBgContainer>
      <HeroContent>
        <HeroH1>Virtual Banking Made Easy</HeroH1>
        <HeroP>
          Sign up for a new account today and receive $250 in credit towards your next payment
        </HeroP>
        <HeroBtnWrapper>
          <HeroBtn>Get Started {hover ? <ArrowRight /> : <ArrowForward />}</HeroBtn>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
