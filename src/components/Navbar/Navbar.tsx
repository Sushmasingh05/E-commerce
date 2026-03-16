'use client';

import Link from 'next/link';
import styles from './Navbar.module.css';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const { cartCount } = useCart();

  return (
    <header className={styles.header}>
      <div className={styles.establishDate}>Est. 2024</div>
      <Link href="/" className={styles.logo}>
        Brew & Steep
      </Link>
      <div className={styles.rightSection}>
        <div className={styles.links}>
          <Link href="/shop" className={styles.navLink}>Coffee Collections</Link>
          <Link href="/shop" className={styles.navLink}>The Tea Atelier</Link>
          <Link href="/shop" className={styles.navLink}>Our Terroir</Link>
        </div>
        <Link href="/cart" className={styles.basketBtn}>
          <span className="material-symbols-outlined">shopping_bag</span>
          <span className={styles.basketCount}>({cartCount})</span>
        </Link>
      </div>
    </header>
  );
}
