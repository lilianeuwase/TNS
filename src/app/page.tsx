import HeroSection from '@/components/sections/HeroSection';

export default function Home() {
  return (
    <main className="m-0 p-0 overflow-x-hidden">
      <HeroSection />
      {/* Temporary section to enable scrolling for testing scroll animations */}
      <section className="min-h-screen bg-charcoal flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-sand mb-6">
            Explore Rwanda
          </h2>
          <p className="text-xl text-sand/80 max-w-2xl mx-auto px-8">
            Discover the breathtaking landscapes, wildlife, and culture of the Land of a Thousand Hills.
          </p>
        </div>
      </section>
    </main>
  );
}
