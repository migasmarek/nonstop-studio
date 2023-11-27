'use client';

import Image from 'next/image';
import Carousel from './ui/carousel';
import Navbar from './ui/navbar';
import Contact from './ui/contact';

import styles from './page.module.css';

export default function Home() {

  return (
    <main className={styles.main}>
       <Navbar />
      <Carousel />
      <Contact />
    </main>
  )
}
