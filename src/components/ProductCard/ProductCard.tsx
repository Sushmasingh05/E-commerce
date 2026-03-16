import styles from './ProductCard.module.css';

interface ProductCardProps {
  title: string;
  flavor: string;
  imageColor: string;
  accentColor: string;
}

export default function ProductCard({ title, flavor, imageColor, accentColor }: ProductCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer} style={{ backgroundColor: imageColor }}>
        {/* Placeholder for the large bottle image */}
        <div className={styles.bottleShape} style={{ borderBottomColor: accentColor }}></div>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.flavor}>{flavor}</p>
        <button className={styles.addBtn} style={{ backgroundColor: accentColor }}>
          Add to Basket
        </button>
      </div>
    </div>
  );
}
