import Hero from '@/components/Hero/Hero';
import FeaturedProducts from '@/components/FeaturedProducts/FeaturedProducts';
import Ingredients from '@/components/Ingredients/Ingredients';
import Recipes from '@/components/Recipes';
import Heritage from '@/components/Heritage/Heritage';
import Stores from '@/components/Stores';
import ScrollThemeWrapper from '@/components/ScrollThemeWrapper/ScrollThemeWrapper';

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedProducts type="coffee" />
      <Heritage />
      <Ingredients />
      <FeaturedProducts type="tea" />
      <Recipes />
      <Stores />
    </main>
  );
}
