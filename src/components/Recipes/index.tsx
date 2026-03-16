import Image from 'next/image';
import styles from './Recipes.module.css';

const INFUSIONS = [
  { 
    title: 'Artisan Masala Chai', 
    image: '/images/brew_matcha.png', 
    description: 'Hand-pounded spices from the Malabar coast blended with robust CTC leaves. Warmth in a cup.' 
  },
  { 
    title: 'Matcha Heritage', 
    image: '/images/recipe_margarita.png', 
    description: 'Ceremonial grade Uji Matcha whisked to a perfect froth. The ultimate cognitive ritual.' 
  },
];

const Recipes = () => {
  return (
    <section className={styles.recipesSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.overline}>The Tea Atelier</span>
          <h2 className={styles.mainTitle}>Ethereal Infusions</h2>
        </div>

        <div className="editorial-grid gap-12 lg:gap-24">
          {INFUSIONS.map((item, index) => (
            <div key={item.title} className={`${styles.recipeCard} ${index % 2 === 1 ? styles.cardOffset : ''}`}>
              <div className={styles.imageWrapper}>
                <div className="relative w-full h-full">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill
                    className={styles.recipeImage}
                  />
                </div>
              </div>
              <h3 className={styles.recipeTitle}>{item.title}</h3>
              <p className={styles.recipeText}>{item.description}</p>
              <span className={styles.actionBtn}>Explore Tasting Notes</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recipes;
