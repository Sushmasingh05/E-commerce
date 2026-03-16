import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <header className={styles.header}>
      {/* Top Bar for sister brands */}
      <div className={styles.topbar}>
        <div className={styles.topbarInner}>
          <span className={styles.topbarActive}>BARCOOP BEVY</span>
          <Link href="#">BITTERMILK</Link>
          <Link href="#">DRINKMANSHIP</Link>
          <Link href="#">TIPPLEMAN'S</Link>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <Link href="/" className={styles.logo}>
            BARCOOP BEVY
          </Link>

          <div className={styles.links}>
            <Link href="/shop" className={styles.navLink}>SHOP</Link>
            <Link href="/find" className={styles.navLink}>FIND US</Link>
            <Link href="/recipes" className={styles.navLink}>RECIPES</Link>
            <Link href="/about" className={styles.navLink}>ABOUT</Link>
            
            <Link href="/cart" className={styles.basketBtn}>
              BASKET <span className={styles.basketCount}>0</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
