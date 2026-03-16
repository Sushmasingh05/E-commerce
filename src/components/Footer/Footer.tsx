import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.newsletter}>
            <h2>STAY IN THE COOP</h2>
            <form className={styles.form}>
              <input type="email" placeholder="ENTER EMAIL" className={styles.input} />
              <button type="submit" className={styles.submitBtn}>→</button>
            </form>
          </div>
          
          <div className={styles.links}>
            <div className={styles.linkColumn}>
              <Link href="/shop">SHOP</Link>
              <Link href="/find">FIND US</Link>
              <Link href="/about">ABOUT</Link>
            </div>
            <div className={styles.linkColumn}>
              <Link href="/recipes">RECIPES</Link>
              <Link href="/contact">CONTACT US</Link>
              <Link href="/trade">TRADE</Link>
            </div>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <div className={styles.brandGroup}>
            <span>SUPPORTING THE COCKTAIL CULTURE SINCE 2013</span>
            <div className={styles.logos}>
              <span className={styles.logoItem}>BITTERMILK</span>
              <span className={styles.logoItem}>BARCOOP BEVY</span>
              <span className={styles.logoItem}>TIPPLEMAN'S</span>
            </div>
          </div>
          <div className={styles.copyright}>
            <p>&copy; {new Date().getFullYear()} BARCOOP BEVY | <Link href="/terms">Terms</Link> | <Link href="/privacy">Privacy</Link></p>
            <p>Built with Next.js</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
