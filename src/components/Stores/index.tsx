import React from 'react';
import Image from 'next/image';
import styles from './Stores.module.css';

export default function Stores() {
  return (
    <section className={styles.atelierSection}>
      <div className={styles.backgroundImage}>
        <Image 
          src="/images/roastery.png" 
          alt="Atmospheric Roastery" 
          fill
          className={styles.bgImg}
        />
      </div>
      
      <div className={styles.content}>
        <h2 className={styles.title}>Visit the Atelier</h2>
        <p className={styles.description}>
          Witness the transformation of bean and leaf at our sensory spaces in Mumbai, Bangalore, and Delhi.
        </p>
        <button className={styles.btn}>
          Locate Our Spaces
        </button>
      </div>
    </section>
  );
}
