import type { NextPage } from 'next';

import { useReducer, useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection/InfoSection';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data';

export interface SideBarProps {
  showSideBar: boolean;
  toggleShowSideBar: () => void;
}

const Home: NextPage = () => {
  const [showSideBar, toggleShowSideBar] = useReducer((s) => !s, false);

  return (
    <>
      <NavBar toggleShowSideBar={toggleShowSideBar} />
      <SideBar showSideBar={showSideBar} toggleShowSideBar={toggleShowSideBar} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
    </>
  );
};

export default Home;
