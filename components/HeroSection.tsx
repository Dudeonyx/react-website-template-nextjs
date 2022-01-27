// import React from 'react'

import { HeroBgContainer, HeroContainer, HeroVideoBg } from './HeroElements';

interface Props {}

const HeroSection = (props: Props) => {
  return (
    <HeroContainer>
      <HeroBgContainer>
        <HeroVideoBg src="/video.mp4" typeof="video/mp4" autoPlay loop muted />
      </HeroBgContainer>
    </HeroContainer>
  );
};

export default HeroSection;
