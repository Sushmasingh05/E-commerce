import ProductCard from '../ProductCard/ProductCard';
import styles from './FeaturedProducts.module.css';

const PRODUCTS = [
  {
    id: 1,
    title: 'BLOODY MARY',
    flavor: 'WITH SMOKED SEA SALT AND CHILES',
    imageColor: '#F5E6E6', // Light red bg
    accentColor: '#D32F2F', // Red
  },
  {
    id: 2,
    title: 'MARGARITA',
    flavor: 'WITH LIME, TANGERINE AND FLORIDA GOLDEN CANE SUGAR',
    imageColor: '#EAF5E6', // Light green bg
    accentColor: '#388E3C', // Green
  },
  {
    id: 3,
    title: 'MOJITO',
    flavor: 'WITH MINT, LIME AND CANE SUGAR',
    imageColor: '#E6F0F5', // Light teal bg
    accentColor: '#00796B', // Teal
  }
];

export default function FeaturedProducts() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>MEET THE COCKTAIL COOP</h2>
          <p className={styles.subtitle}>Premium mixers designed for the perfect pour, every time.</p>
        </div>
        
        <div className={styles.grid}>
          {PRODUCTS.map(product => (
            <ProductCard 
              key={product.id}
              id={product.id}
              title={product.title}
              flavor={product.flavor}
              imageColor={product.imageColor}
              accentColor={product.accentColor}
            />
          ))}
        </div>
        
        <div className={styles.action}>
          <a href="/shop" className="btn btn-lime">SHOP ALL MIXERS</a>
        </div>
      </div>
    </section>
  );
}
