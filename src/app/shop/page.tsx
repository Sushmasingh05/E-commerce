import ProductCard from '@/components/ProductCard/ProductCard';
import styles from './page.module.css';

const ALL_PRODUCTS = [
  { id: 1, title: 'BLOODY MARY', flavor: 'WITH SMOKED SEA SALT AND CHILES', imageColor: '#F5E6E6', accentColor: '#D32F2F', price: '$15.00' },
  { id: 2, title: 'MARGARITA', flavor: 'WITH LIME, TANGERINE AND CANE SUGAR', imageColor: '#EAF5E6', accentColor: '#388E3C', price: '$15.00' },
  { id: 3, title: 'MOJITO', flavor: 'WITH MINT, LIME AND CANE SUGAR', imageColor: '#E6F0F5', accentColor: '#00796B', price: '$15.00' },
  { id: 4, title: 'PALOMA', flavor: 'WITH GRAPEFRUIT, LIME AND AGAVE', imageColor: '#FDF1E6', accentColor: '#F57C00', price: '$15.00' },
  { id: 5, title: 'SOUR MIX', flavor: 'WITH HONEY AND LEMON', imageColor: '#F9F5DE', accentColor: '#FBC02D', price: '$15.00' },
  { id: 6, title: 'OLD FASHIONED', flavor: 'WITH CHERRY AND BITTERS', imageColor: '#F5E6ED', accentColor: '#C2185B', price: '$20.00' },
];

export default function Shop() {
  return (
    <main className={styles.main}>
      <div className={styles.headerArea}>
        <div className="container">
          <h1 className={styles.title}>SHOP ALL</h1>
          <p className={styles.subtitle}>Premium mixers for your home bar.</p>
        </div>
      </div>
      
      <div className={styles.shopContainer}>
        <div className={styles.grid}>
          {ALL_PRODUCTS.map(product => (
            <div key={product.id} className={styles.productWrapper}>
              <ProductCard 
                title={product.title}
                flavor={product.flavor}
                imageColor={product.imageColor}
                accentColor={product.accentColor}
              />
              <div className={styles.priceRow}>
                <span className={styles.price}>{product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
