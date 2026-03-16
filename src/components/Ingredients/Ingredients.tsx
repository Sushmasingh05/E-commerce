import styles from './Ingredients.module.css';
import Image from 'next/image';

export default function Ingredients() {
  return (
    <section className={styles.heritageSection}>
      <div className={styles.container}>
        <div className={styles.editorialGrid}>
          <div className={styles.textContent}>
            <h4 className={styles.overline}>Our Heritage</h4>
            <h2 className={styles.title}>
              The Ancestral <br/><em className={styles.italic}>Brass & Clay</em>
            </h2>
            
            <div className={styles.points}>
              <div className={styles.point}>
                <span className={styles.number}>01</span>
                <div>
                  <h5 className={styles.pointTitle}>Sustainable Terroir</h5>
                  <p className={styles.pointText}>
                    Direct relationships with biodiversity-friendly estates in Karnataka and Assam that prioritize soil health over mass yield.
                  </p>
                </div>
              </div>
              
              <div className={styles.point}>
                <span className={styles.number}>02</span>
                <div>
                  <h5 className={styles.pointTitle}>Artisan Small-Batching</h5>
                  <p className={styles.pointText}>
                    We roast to order in our Mumbai atelier, using vintage-inspired drum roasters to preserve the delicate aromatic volatiles.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.visualContent}>
            <div className={styles.imageCard}>
              <Image 
                src="https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?q=80&w=2000&auto=format&fit=crop" 
                alt="Macro of tea leaves" 
                fill
                className={styles.heritageImage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
