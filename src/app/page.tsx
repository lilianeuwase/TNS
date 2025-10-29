import HeroSection from '@/components/sections/Hero/HeroSection';
import HScroll from '@/components/sections/HScroll'
import ContactButton from '@/components/sections/ContactButton'
import ExploreHero from '@/components/sections/Explore/ExploreHero';

export default function Home() {
  return (
    <main className="m-0 p-0 overflow-x-hidden">
      <HeroSection />
      <HScroll />
      <ExploreHero/>
      <ContactButton/>
    </main>
  );
}
