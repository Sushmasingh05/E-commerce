'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { useRef } from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Scroll Parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yImage = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Mouse Tilt (Dampened) stays static for now as per user request to dampen
  
  return (
    <section className={styles.section} ref={containerRef}>
      <div className="editorial-grid w-full items-center gap-12">
        <motion.div 
          className={styles.textContent}
          style={{ y: yText, opacity: opacityText }}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <span className={styles.overline}>The Art of Extraction</span>
          <h1 className={styles.title}>
            Defining the <br/><em className={styles.italic}>Connoisseur’s</em> Ritual
          </h1>
          <p className={styles.description}>
            An curated exploration of rare cultivars and single-estate harvests, sourced from India’s most secluded high-altitude gardens.
          </p>
          <Link href="#collections" className={styles.cta}>
            <span className={styles.ctaText}>Explore the Craft</span>
            <span className="material-symbols-outlined">arrow_right_alt</span>
          </Link>
        </motion.div>

        <div className={styles.visualContent}>
          <motion.div className={styles.mainImageWrapper} style={{ y: yImage }}>
            <Image 
              src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=2000&auto=format&fit=crop" 
              alt="Atmospheric brewing ritual" 
              fill
              className={styles.mainImage}
            />
          </motion.div>
          <div className={styles.notesBox}>
            <p className={styles.noteItalic}>"The perfect cup begins long before the water hits the bean; it starts in the mineral-rich soil of the Western Ghats."</p>
            <span className={styles.noteBadge}>— Master Roaster Notes</span>
          </div>
        </div>
      </div>
    </section>
  );
}
