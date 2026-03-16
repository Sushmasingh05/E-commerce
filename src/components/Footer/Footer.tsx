import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.newsletterSection}>
            <h3 className={styles.newsletterHeading}>STAY IN THE COOP</h3>
            <div className={styles.newsletterForm}>
              <input 
                type="email" 
                placeholder="Your email" 
                className={styles.emailInput}
              />
              <button className={styles.submitBtn}>SIGN UP</button>
            </div>
          </div>
          
          <div className={styles.linksGrid}>
            <div className={styles.linkColumn}>
              <Link href="/shop">SHOP</Link>
              <Link href="/find-us">FIND US</Link>
              <Link href="/recipes">RECIPES</Link>
              <Link href="/about">ABOUT</Link>
            </div>
            <div className={styles.linkColumn}>
              <Link href="/recipes">RECIPES</Link>
              <Link href="/contact">CONTACT US</Link>
              <Link href="/trade">TRADE</Link>
            </div>
          </div>
        </div>

        {/* Large Logo Overlay */}
        <div className={styles.largeLogoWrapper}>
          <h1 className={styles.largeLogoText}>BARCOOP BEVY</h1>
        </div>

        <div className={styles.bottomSection}>
          <div className={styles.brandGroup}>
            <span>SUPPORTING THE COCKTAIL CULTURE SINCE 2013</span>
            <div className={styles.logos}>
              <span>BITTERMILK</span>
              <span>BARCOOP BEVY</span>
              <span>TIPPLEMAN'S</span>
            </div>
          </div>
          
          <div className={styles.legalInfo}>
            <p>&copy; {new Date().getFullYear()} BARCOOP BEVY | <Link href="/terms">Terms</Link> | <Link href="/privacy">Privacy</Link></p>
            <div className={styles.socialIcons}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
