import styles from './Ingredients.module.css';
import IngredientsWheel from './IngredientsWheel';

export default function Ingredients() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>REAL<br/>INGREDIENTS</h2>
          <p className={styles.text}>
            We source the finest agave, fresh citrus, and real botanicals to ensure 
            every pour tastes like it was made by a professional bartender. No artificial 
            colors, no synthetic flavors. Just the good stuff.
          </p>
          <button className="btn btn-plum">LEARN MORE</button>
        </div>
        
        <div className={styles.visual}>
          <IngredientsWheel />
        </div>
      </div>
    </section>
  );
}
