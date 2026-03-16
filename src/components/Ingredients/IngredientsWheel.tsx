"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import styles from "./IngredientsWheel.module.css";

const SVG_ASSETS = {
  beans: (
    <svg width="100%" viewBox="0 0 48 48" fill="none">
      <path d="M14 24C14 14 24 10 24 10C24 10 34 14 34 24C34 34 24 38 24 38C24 38 14 34 14 24Z" fill="#3D2B1F" />
      <path d="M24 10C26 15 22 24 24 38" stroke="#FDFCF0" strokeWidth="1" strokeLinecap="round" />
    </svg>
  ),
  leaf: (
    <svg width="100%" viewBox="0 0 48 48" fill="none">
      <path d="M24 40C24 40 40 32 40 16C40 8 32 8 32 8C32 8 24 16 24 16C24 16 16 8 16 8C16 8 8 8 8 16C8 32 24 40 24 40Z" fill="#7B8E5F" />
      <path d="M24 40V16" stroke="#FDFCF0" strokeWidth="1" />
    </svg>
  ),
  dripper: (
    <svg width="100%" viewBox="0 0 48 48" fill="none">
      <path d="M10 10H38L30 30H18L10 10Z" fill="#D6A449" />
      <rect x="14" y="32" width="20" height="4" fill="#3D2B1F" />
    </svg>
  ),
  scoop: (
    <svg width="100%" viewBox="0 0 48 48" fill="none">
      <circle cx="18" cy="24" r="10" fill="#2C1810" />
      <rect x="28" y="22" width="16" height="4" rx="2" fill="#2C1810" />
    </svg>
  ),
};

const spokes = [
  { item: SVG_ASSETS.beans, rotate: 0 },
  { item: SVG_ASSETS.leaf, rotate: 30 },
  { item: SVG_ASSETS.dripper, rotate: 60 },
  { item: SVG_ASSETS.scoop, rotate: 90 },
  { item: SVG_ASSETS.beans, rotate: 120 },
  { item: SVG_ASSETS.leaf, rotate: 150 },
  { item: SVG_ASSETS.dripper, rotate: 180 },
  { item: SVG_ASSETS.scoop, rotate: 210 },
  { item: SVG_ASSETS.beans, rotate: 240 },
  { item: SVG_ASSETS.leaf, rotate: 270 },
  { item: SVG_ASSETS.dripper, rotate: 300 },
  { item: SVG_ASSETS.scoop, rotate: 330 },
];

export default function IngredientsWheel() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <div ref={containerRef} className={styles.wrapper}>
      <motion.div style={{ rotate }} className={styles.wheel}>
        {spokes.map((spoke, i) => (
          <div
            key={i}
            className={styles.spoke}
            style={{ transform: `rotate(${spoke.rotate}deg)` }}
          >
            <motion.div 
              className={styles.foodItem}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
              whileHover={{ scale: 1.2, filter: "brightness(1.2)" }}
            >
              {spoke.item}
            </motion.div>
          </div>
        ))}
      </motion.div>
      <div className={styles.centerText}>
        FRESH<br />Roast &<br />Steep
      </div>
      
      {/* Decorative Rotating Ring Text */}
      <motion.div style={{ rotate: useTransform(scrollYProgress, [0, 1], [0, -360]) }} className={styles.ringText}>
         <svg viewBox="0 0 800 800" className={styles.circularTextSvg}>
            <path
              id="curve"
              fill="transparent"
              d="M 400, 400 m -320, 0 a 320,320 0 1,1 640,0 a 320,320 0 1,1 -640,0"
            />
            <text fill="currentColor" fontSize="24" letterSpacing="12">
               <textPath xlinkHref="#curve">
                ARABICA BEANS • SINGLE ORIGIN • ARTISAN ROAST • LOOSE LEAF • CEREMONIAL GRADE • 
              </textPath>
            </text>
         </svg>
      </motion.div>
    </div>
  );
}
