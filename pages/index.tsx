import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useReducer, useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';

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
    </>
  );
};

export default Home;
