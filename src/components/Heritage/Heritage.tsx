import React from 'react';
import Image from 'next/image';
import styles from './Heritage.module.css';

export default function Heritage() {
  return (
    <section className={styles.heritageSection}>
      <div className={styles.container}>
        <div className={styles.editorialGrid}>
          <div className={styles.visualContent}>
            <div className={styles.imageCard}>
              <Image 
                src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=2000&auto=format&fit=crop" 
                alt="Traditional Coffee Ritual" 
                fill
                className={styles.heritageImage}
              />
            </div>
          </div>

          <div className={styles.textContent}>
            <h2 className={styles.title}>
              The Soul of the <br/><em className={styles.italic}>Indian Household</em>
            </h2>
            
            <div className={styles.points}>
              <div className={styles.point}>
                <span className={styles.number}>01</span>
                <div>
                  <h5 className={styles.pointTitle}>Sustainable Ancestry</h5>
                  <p className={styles.pointText}>
                    We partner with generational farmers who use age-old regenerative methods to protect the biodiversity of the Western Ghats.
                  </p>
                </div>
              </div>
              
              <div className={styles.point}>
                <span className={styles.number}>02</span>
                <div>
                  <h5 className={styles.pointTitle}>Slow-Roasted Artistry</h5>
                  <p className={styles.pointText}>
                    Rejecting the rush of modern commerce, our beans are slow-roasted in small batches to preserve their inherent oils and complex aromas.
                  </p>
                </div>
              </div>

              <div className={styles.point}>
                <span className={styles.number}>03</span>
                <div>
                  <h5 className={styles.pointTitle}>Preserving the Ritual</h5>
                  <p className={styles.pointText}>
                    Whether it's the brass filter of the South or the clay pots of the North, we celebrate the diverse brewing ceremonies of the subcontinent.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
