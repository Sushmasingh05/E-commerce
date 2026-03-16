import Hero from '@/components/Hero/Hero';
import FeaturedProducts from '@/components/FeaturedProducts/FeaturedProducts';
import Ingredients from '@/components/Ingredients/Ingredients';
import Recipes from '@/components/Recipes';
import Stores from '@/components/Stores';
import ScrollThemeWrapper from '@/components/ScrollThemeWrapper/ScrollThemeWrapper';

export default function Home() {
  return (
    <main>
      <ScrollThemeWrapper>
        <Hero />
        <Ingredients />
        <FeaturedProducts />
        <Recipes />
        <Stores />
      </ScrollThemeWrapper>
    </main>
  );
}
