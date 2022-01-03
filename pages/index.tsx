import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import HeroSection from '../components/HeroSection';
import NavBar from '../components/NavBar';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
    </>
  );
};

export default Home;