'use client';

import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import styles from './ProductCard.module.css';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  id: number;
  title: string;
  flavor: string;
  image: string;
  price: string;
  location?: string;
  roast?: string;
  altitude?: string;
}

export default function ProductCard({ id, title, flavor, image, price, location, roast, altitude }: ProductCardProps) {
  const { addToCart } = useCart();
  
  // 3D Tilt state
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { stiffness: 100, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 100, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const [isAdded, setIsAdded] = React.useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart({ id, title, price, image });
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <div className={styles.imageWrapper}>
          <Image 
            src={image} 
            alt={title} 
            fill
            className={styles.productImage}
            priority={id <= 2}
          />
          <div className={styles.hoverOverlay}></div>
          <button 
            className={styles.addToCartFloating} 
            onClick={handleAddToCart}
          >
            {isAdded ? (
              <span className="material-symbols-outlined">done</span>
            ) : (
              <span className="material-symbols-outlined">add_shopping_cart</span>
            )}
          </button>
        </div>
      </div>

      <div className={styles.cardHeader}>
        <div>
          <span className={styles.location}>{location}</span>
          <h3 className={styles.title}>{title}</h3>
        </div>
        <span className={styles.price}>{price}</span>
      </div>

      <p className={styles.flavor}>{flavor}</p>

      <div className={styles.metadataGrid}>
        <div className={styles.metaItem}>
          <span className={styles.metaLabel}>{roast ? 'Roast Level' : 'Process'}</span>
          <span className={styles.metaValue}>{roast || 'Washed & Sun-Dried'}</span>
        </div>
        <div className={styles.metaItem}>
          <span className={styles.metaLabel}>{altitude ? 'Altitude' : 'Profile'}</span>
          <span className={styles.metaValue}>{altitude || 'Nutty, Cacao'}</span>
        </div>
      </div>
      
      <div className={styles.cardFooter}>
         <button 
          className={styles.addBtn} 
          onClick={handleAddToCart}
          disabled={isAdded}
        >
          {isAdded ? 'ADDED TO BASKET' : 'ADD TO BASKET —'}
        </button>
      </div>
    </div>
  );
}
