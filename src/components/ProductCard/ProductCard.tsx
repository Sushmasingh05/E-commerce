'use client';

import styles from './ProductCard.module.css';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  id: number;
  title: string;
  flavor: string;
  imageColor: string;
  accentColor: string;
}

export default function ProductCard({ id, title, flavor, imageColor, accentColor }: ProductCardProps) {
  const { addToCart } = useCart();
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer} style={{ backgroundColor: imageColor }}>
        {/* Placeholder for the large bottle image */}
        <div className={styles.bottleShape} style={{ borderBottomColor: accentColor }}></div>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.flavor}>{flavor}</p>
        <button 
          className={styles.addBtn} 
          style={{ backgroundColor: accentColor }}
          onClick={() => addToCart({ id, title })}
        >
          Add to Basket
        </button>
      </div>
    </div>
  );
}
