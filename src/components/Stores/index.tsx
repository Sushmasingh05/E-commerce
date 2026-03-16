import React from 'react';
import Image from 'next/image';
import styles from './Stores.module.css';

const Stores = () => {
  return (
    <section className={styles.storesSection}>
      <div className={styles.topIllustration}>
        <Image 
          src="/images/chicken_cars_illustration.png" 
          alt="Chickens driving cars illustration" 
          width={1920} 
          height={600} 
          className={styles.illustrationImage}
        />
      </div>
      
      <div className={styles.contentWrapper}>
        <div className={styles.textContainer}>
          <h2 className={styles.heading}>WE'RE IN STORES</h2>
          <p className={styles.description}>
            Use our store locator map to find your nearest Barcoop Bevy.
          </p>
          <button className={styles.storeBtn}>
            STORE LOCATOR &rarr;
          </button>
        </div>
      </div>
      
      <div className={styles.bottomBar}>
        <div className={styles.barText}>
           <span>STAY IN THE COOP</span>
           <div className={styles.newsletter}>
             <input type="email" placeholder="Your email" />
             <button>SIGN UP</button>
           </div>
           <div className={styles.socials}>
             <span></span>
             <span></span>
             <span></span>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Stores;
