import React from 'react';
import Image from 'next/image';
import styles from './Recipes.module.css';

const Recipes = () => {
  const mixers = [
    { name: 'Classic Margarita', icon: '🍸' },
    { name: 'Bloody Mary', icon: '🍅' },
    { name: 'Cucumber Mojito', icon: '🥒' },
    { name: 'Ginger Smash', icon: '🫚' },
    { name: 'Spicy Strawberry Margarita', icon: '🍓' },
    { name: 'Piña Colada', icon: '🍍' },
  ];

  const spirits = [
    { name: 'Tequila', icon: '🥃' },
    { name: 'Mezcal', icon: '🏺' },
    { name: 'Bourbon', icon: '🪵' },
    { name: 'Scotch', icon: '🏴' },
    { name: 'Rum', icon: '🏴‍☠️' },
    { name: 'Vodka', icon: '💧' },
    { name: 'Gin', icon: '🌿' },
    { name: 'Light Beer', icon: '🍺' },
    { name: 'Non-Alcoholic', icon: '🚫' },
  ];

  const recipeCards = [
    { title: 'MEZCAL MARGARITA', image: '/images/recipe_margarita.png', tags: ['Classic Margarita', 'Mezcal'] },
    { title: 'GINGER BEER', image: '/images/recipe_ginger_beer.png', tags: ['Ginger Smash', 'Rum'] },
    { title: 'FROZEN STRAWBERRY DAIQUIRI', image: '/images/recipe_daiquiri.png', tags: ['Piña Colada', 'Vodka'] },
  ];

  return (
    <section className={styles.recipesSection}>
      <div className={styles.container}>
        <h1 className={styles.title}>RECIPES</h1>
        
        <div className={styles.filterGroup}>
          <div className={styles.filterRow}>
            <span className={styles.filterLabel}>All Mixers</span>
            {mixers.map((m) => (
              <button key={m.name} className={styles.chip}>
                <span className={styles.chipIcon}>{m.icon}</span> {m.name}
              </button>
            ))}
          </div>
          
          <div className={styles.filterRow}>
            <span className={styles.filterLabel}>All Spirits</span>
            {spirits.map((s) => (
              <button key={s.name} className={styles.chip}>
                <span className={styles.chipIcon}>{s.icon}</span> {s.name}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.recipeGrid}>
          {recipeCards.map((recipe) => (
            <div key={recipe.title} className={styles.recipeCard}>
              <div className={styles.imageWrapper}>
                <Image 
                  src={recipe.image} 
                  alt={recipe.title} 
                  width={400} 
                  height={400} 
                  className={styles.recipeImage}
                />
              </div>
              <h3 className={styles.recipeTitle}>{recipe.title}</h3>
              <div className={styles.recipeTags}>
                {recipe.tags.map(tag => (
                   <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recipes;
