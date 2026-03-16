"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import styles from "./IngredientsWheel.module.css";

const SVG_ASSETS = {
  dots: (
    <svg width="100%" viewBox="0 0 48 48" fill="none">
      <circle cx="2" cy="46" r="2" fill="#CDBD81" />
      <circle cx="10.8" cy="46" r="2" fill="#CDBD81" />
      <circle cx="19.6001" cy="46" r="2" fill="#CDBD81" />
      <circle cx="28.4001" cy="46" r="2" fill="#CDBD81" />
      <circle cx="37.2002" cy="46" r="2" fill="#CDBD81" />
      <circle cx="6.3999" cy="39.5" r="2" fill="#CDBD81" />
      <circle cx="10.8" cy="33" r="2" fill="#CDBD81" />
      <circle cx="15.2" cy="39.5" r="2" fill="#CDBD81" />
      <circle cx="15.2002" cy="26.5" r="2" fill="#CDBD81" />
      <circle cx="19.6001" cy="33" r="2" fill="#CDBD81" />
      <circle cx="19.6001" cy="20" r="2" fill="#CDBD81" />
      <circle cx="24" cy="39.5" r="2" fill="#CDBD81" />
      <circle cx="24" cy="26.5" r="2" fill="#CDBD81" />
      <circle cx="24" cy="13.5" r="2" fill="#CDBD81" />
      <circle cx="28.4001" cy="33" r="2" fill="#CDBD81" />
      <circle cx="32.8" cy="39.5" r="2" fill="#CDBD81" />
      <circle cx="28.4001" cy="20" r="2" fill="#CDBD81" />
      <circle cx="32.8003" cy="26.5" r="2" fill="#CDBD81" />
      <circle cx="37.2002" cy="33" r="2" fill="#CDBD81" />
      <circle cx="41.6001" cy="39.5" r="2" fill="#CDBD81" />
      <circle cx="46" cy="46" r="2" fill="#CDBD81" />
    </svg>
  ),
  citrus: (
    <svg width="100%" viewBox="0 0 48 48" fill="none">
      <path d="M30.1475 17.7579C28.606 16.9414 26.607 16.4924 23.9999 16.4924C21.3891 16.4924 19.3875 16.9418 17.8445 17.759C19.0121 18.3927 20.1799 19.0265 21.3479 19.6603L23.9949 21.0968L26.6498 19.656C27.8159 19.0233 28.9819 18.3905 30.1475 17.7579Z" fill="#FFC517" />
      <path d="M31.273 18.4779C29.9121 19.2165 28.551 19.9552 27.1896 20.6939L25.221 21.7622C26.9596 22.7058 28.6982 23.6497 30.4366 24.594L34.1518 22.577C33.5241 20.9047 32.6187 19.509 31.273 18.4779Z" fill="#FFC517" />
      <path d="M34.5236 23.7061L31.6619 25.2598C32.8499 25.9053 34.0377 26.551 35.2253 27.197C35.0555 25.9529 34.8334 24.7829 34.5236 23.7061Z" fill="#FFC517" />
      <path d="M35.3955 28.6212C35.4044 28.7064 35.4131 28.792 35.4217 28.8778L30.4327 31.5864L25.2206 28.7567L30.4364 25.9251C32.0898 26.8233 33.7429 27.722 35.3955 28.6212Z" fill="#FFC517" />
    </svg>
  ),
  lime: (
    <svg width="100%" viewBox="0 0 48 48" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24ZM45.66 24C45.66 35.9625 35.9625 45.66 24 45.66C12.0375 45.66 2.34 35.9625 2.34 24C2.34 12.0375 12.0375 2.34 24 2.34C35.9625 2.34 45.66 12.0375 45.66 24Z" fill="#3A8075" />
      <path fillRule="evenodd" clipRule="evenodd" d="M44.4898 24C44.4898 35.3163 35.3161 44.49 23.9998 44.49C12.6835 44.49 3.50977 35.3163 3.50977 24C3.50977 12.6837 12.6835 3.51001 23.9998 3.51001C35.3161 3.51001 44.4898 12.6837 44.4898 24Z" fill="#95CC7D" />
    </svg>
  ),
  agave: (
    <svg width="100%" viewBox="0 0 48 48" fill="none">
      <path d="M19.5 7L28.5 0V18H19.5V7Z" fill="#259E7E" />
      <rect x="19.5" y="19.1699" width="9" height="13.83" fill="#259E7E" />
      <path d="M18.476 32.9682C18.476 32.9682 19.089 24.307 14.1164 17.8523C9.15572 11.4061 0.5 9.62109 0.5 9.62109L18.476 32.9682Z" fill="#C1D544" />
      <path d="M29.524 32.9682C29.524 32.9682 28.911 24.307 33.8836 17.8523C38.8443 11.4061 47.5 9.62109 47.5 9.62109L29.524 32.9682Z" fill="#C1D544" />
    </svg>
  ),
};

const spokes = [
  { item: SVG_ASSETS.dots, rotate: 0 },
  { item: SVG_ASSETS.citrus, rotate: 30 },
  { item: SVG_ASSETS.lime, rotate: 60 },
  { item: SVG_ASSETS.agave, rotate: 90 },
  { item: SVG_ASSETS.dots, rotate: 120 },
  { item: SVG_ASSETS.citrus, rotate: 150 },
  { item: SVG_ASSETS.lime, rotate: 180 },
  { item: SVG_ASSETS.agave, rotate: 210 },
  { item: SVG_ASSETS.dots, rotate: 240 },
  { item: SVG_ASSETS.citrus, rotate: 270 },
  { item: SVG_ASSETS.lime, rotate: 300 },
  { item: SVG_ASSETS.agave, rotate: 330 },
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
            <div className={styles.foodItem}>{spoke.item}</div>
          </div>
        ))}
      </motion.div>
      <div className={styles.centerText}>
        REAL<br />Ingredients<br />Only
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
                ALL NATURAL • NO ARTIFICIAL COLORS • FRESH CITRUS • PURE AGAVE • BOTANICAL BLEND • 
              </textPath>
            </text>
         </svg>
      </motion.div>
    </div>
  );
}
