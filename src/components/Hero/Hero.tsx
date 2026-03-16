import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            <span className={styles.line1}>ALL NATURAL</span>
            <span className={styles.line2}>COCKTAIL MIXERS</span>
          </h1>
        </div>
      </div>
    </section>
  );
}
