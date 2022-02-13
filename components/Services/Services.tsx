import React, { useState, useEffect } from 'react';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from './ServicesElements';

import car from '../../public/car.svg';
import savings from '../../public/savings.svg';
import secure_login from '../../public/secure_login.svg';
interface IServicesProps {}

const Services: React.FC<IServicesProps> = (props) => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src="/car.svg" />
          <ServicesH2>Reduces Expenses</ServicesH2>
          <ServicesP>We help reduce your fees and increase your overall revenue</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src="/secure_login.svg" />
          <ServicesH2>Virtual Offices</ServicesH2>
          <ServicesP>You can access our platform online anywhere in the world.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src="/savings.svg" />
          <ServicesH2>Premium Benefits</ServicesH2>
          <ServicesP>Unlock our special membership ard that returns 5% cash back</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
