import ProductCard from '../ProductCard';
import styles from './FeaturedProducts.module.css';

const CONTENT = {
  coffee: {
    title: 'The Coffee Archives',
    subtitle: 'Single Origin Curations',
    linkText: 'EXPLORE SELECTED ROASTS →',
    products: [
      {
        id: 1,
        category: 'coffee',
        location: 'Karnataka High Highlands',
        title: 'Malabar Monsoon',
        flavor: 'Aged by the salt-laden winds of the Arabian Sea. Heavy body, low acidity.',
        image: '/images/coffee_bag.png',
        price: '₹749',
        roast: 'Medium-Dark',
        altitude: '1,200 MASL'
      },
      {
        id: 2,
        category: 'coffee',
        location: 'Baba Budan Giri Range',
        title: 'Espresso Reserve',
        flavor: 'The birthplace of Indian coffee. A profound, velvety cup with dark chocolate undertones.',
        image: '/images/espresso_bag.png',
        price: '₹699',
        roast: 'Dark',
        altitude: '1,350 MASL'
      }
    ]
  },
  tea: {
    title: 'The Tea Atelier',
    subtitle: 'High Altitude Harvests',
    linkText: 'DISCOVER RARE LEAVES →',
    products: [
      {
        id: 10,
        category: 'tea',
        location: 'Uji, Japan',
        title: 'Ceremonial Matcha',
        flavor: 'Stone-ground heritage grade with deep umami and vibrant sweetness.',
        image: '/images/matcha_jar.png',
        price: '₹2,450',
        roast: '', // Not used for tea
        altitude: 'Shaded Garden'
      },
      {
        id: 11,
        category: 'tea',
        location: 'Darjeeling, India',
        title: 'Summer Muscatel',
        flavor: 'A rare second-flush harvest with distinct floral and ripe fruit notes.',
        image: '/images/tea_canister.png',
        price: '₹1,250',
        roast: '',
        altitude: '2,100 MASL'
      }
    ]
  }
};

interface FeaturedProductsProps {
  type?: 'coffee' | 'tea';
}

export default function FeaturedProducts({ type = 'coffee' }: FeaturedProductsProps) {
  const data = CONTENT[type];

  return (
    <section className={styles.section} id={type === 'coffee' ? 'collections' : 'tea-collections'}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <h2 className={styles.title}>{data.title}</h2>
            <p className={styles.subtitle}>{data.subtitle}</p>
          </div>
          <a href="/shop" className={styles.exploreLink}>{data.linkText}</a>
        </div>

        <div className={styles.grid}>
          {data.products.map((product, index) => (
            <div key={product.id} className={index % 2 === 1 ? styles.offsetDown : ''}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
