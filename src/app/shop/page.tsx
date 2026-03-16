import ProductCard from '@/components/ProductCard';
import styles from './page.module.css';

const COFFEE_PRODUCTS = [
  { 
    id: 1, 
    title: 'Malabar Monsoon', 
    category: 'coffee', 
    location: 'Karnataka High Highlands',
    flavor: 'Aged by the salt-laden winds of the Arabian Sea. Heavy body, low acidity.', 
    image: '/images/coffee_bag.png', 
    price: '₹749',
    roast: 'Medium-Dark',
    altitude: '1,200 MASL'
  },
  { 
    id: 2, 
    title: 'Espresso Reserve', 
    category: 'coffee', 
    location: 'Baba Budan Giri',
    flavor: 'A profound, velvety cup with dark chocolate undertones.', 
    image: '/images/espresso_bag.png', 
    price: '₹699',
    roast: 'Dark',
    altitude: '1,350 MASL'
  },
  { 
    id: 3, 
    title: 'Mysore Nuggets', 
    category: 'coffee', 
    location: 'Bababudangiris',
    flavor: 'Premium AAA grade beans with notes of caramel and toasted hazelnut.', 
    image: '/images/coffee_bag.png', 
    price: '₹850',
    roast: 'Medium',
    altitude: '1,400 MASL'
  },
];

const TEA_PRODUCTS = [
  { 
    id: 10, 
    title: 'Ceremonial Matcha', 
    category: 'tea', 
    location: 'Uji, Japan',
    flavor: 'Stone-ground heritage grade with deep umami and vibrant sweetness.', 
    image: '/images/matcha_jar.png', 
    price: '₹2,450',
    roast: '',
    altitude: 'Shaded Garden'
  },
  { 
    id: 11, 
    title: 'Earl Grey Reserve', 
    category: 'tea', 
    location: 'Sri Lanka Highlands',
    flavor: 'Bergamot-infused black tea with delicate blue cornflower petals.', 
    image: '/images/tea_canister.png', 
    price: '₹1,100',
    roast: '',
    altitude: '1,500 MASL'
  },
  { 
    id: 12, 
    title: 'Silver Needle White', 
    category: 'tea', 
    location: 'Fujian, China',
    flavor: 'Sun-dried buds with a delicate, honeyed sweetness and floral aroma.', 
    image: '/images/tea_canister.png', 
    price: '₹3,200',
    roast: '',
    altitude: '1,800 MASL'
  },
];

export default function Shop() {
  return (
    <main className={styles.main}>
      <header className={styles.headerArea}>
        <div className="container">
          <h1 className={styles.title}>The Collection</h1>
          <p className={styles.subtitle}>Curated rare cultivars and single-estate harvests.</p>
        </div>
      </header>
      
      <div className={styles.shopContainer}>
        <section className={styles.categorySection}>
          <h2 className={styles.categoryHeading}>Coffee Roastery</h2>
          <div className={styles.grid}>
            {COFFEE_PRODUCTS.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>

        <section className={styles.categorySection}>
          <h2 className={styles.categoryHeading}>The Tea Atelier</h2>
          <div className={styles.grid}>
            {TEA_PRODUCTS.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
