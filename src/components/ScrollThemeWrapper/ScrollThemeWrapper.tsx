"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode } from "react";

export default function ScrollThemeWrapper({ children }: { children: ReactNode }) {
  const { scrollYProgress } = useScroll();
  
  // Define themes
  const bgLight = "#FDFCF0"; // var(--color-bg)
  const bgPlum = "#8C3B5E";  // var(--color-accent-plum)
  const bgDark = "#1A1A1A";  // var(--color-dark)
  
  const textDarkTeal = "#2E5B4D"; // var(--color-text)
  const textLight = "#FFFFFF";    // var(--color-white)

  // Smooth interpolation for background and text color based on scroll percentage
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.3, 0.45, 0.7, 0.85, 1],
    [bgLight, bgLight, bgPlum, bgPlum, bgDark, bgDark]
  );
  
  const color = useTransform(
    scrollYProgress,
    [0, 0.3, 0.45, 0.7, 0.85, 1],
    [textDarkTeal, textDarkTeal, textLight, textLight, textLight, textLight]
  );

  return (
    <motion.div 
      style={{ 
        backgroundColor, 
        color,
        minHeight: "100vh",
      }}
    >
      {children}
    </motion.div>
  );
}
