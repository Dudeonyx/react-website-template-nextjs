// import React from 'react'

import { HeroBgContainer, HeroContainer, HeroVideoBg } from './HeroElements';

interface Props {}

const HeroSection = (props: Props) => {
  return (
    <HeroContainer>
      <HeroBgContainer>
        <HeroVideoBg />
      </HeroBgContainer>
    </HeroContainer>
  );
};

export default HeroSection;
