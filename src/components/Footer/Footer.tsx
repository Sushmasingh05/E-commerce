import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className="editorial-grid gap-16">
          <div className={styles.newsletter}>
            <h2 className={styles.newsTitle}>The Connoisseur’s Circle</h2>
            <p className={styles.newsText}>Receive exclusive access to micro-lot releases and private brewing masterclasses.</p>
            <form className={styles.form}>
              <input type="email" placeholder="Email Address" className={styles.input} />
              <button type="submit" className={styles.submitBtn}>
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </form>
          </div>

          <div className={styles.linkColumn}>
            <h4 className={styles.columnTitle}>Discovery</h4>
            <ul className={styles.links}>
              <li><Link href="/shop" className={styles.link}>Roastery</Link></li>
              <li><Link href="/shop" className={styles.link}>Brew & Steep</Link></li>
              <li><Link href="/shop" className={styles.link}>Tea House</Link></li>
            </ul>
          </div>

          <div className={styles.linkColumn}>
            <h4 className={styles.columnTitle}>Principles</h4>
            <ul className={styles.links}>
              <li><Link href="/about" className={styles.link}>Sustainability</Link></li>
              <li><Link href="/about" className={styles.link}>Sourcing</Link></li>
              <li><Link href="/about" className={styles.link}>Heritage</Link></li>
            </ul>
          </div>
        </div>
        
        <div className={styles.bottomBar}>
          <div className={styles.copyright}>
            © 2024 Brew & Steep | Handcrafted in India
          </div>
          <div className={styles.socialIcons}>
            <span>Instagram</span>
            <span>Facebook</span>
            <span>Pinterest</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
