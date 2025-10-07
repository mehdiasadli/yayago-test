import FeaturedCars from '@/components/home-sections/featured-cars';
import Hero from '@/components/home-sections/hero';
import TopLocations from '@/components/home-sections/top-locations';
import WhyYayaGo from '@/components/home-sections/why-yayago';
import BrowseCategories from '@/components/home-sections/browse-categories';
import Stats from '@/components/home-sections/stats';
import ListYourCarCTA from '@/components/home-sections/list-your-car-cta';
import BlogSection from '@/components/home-sections/blog-section';
import FAQs from '@/components/home-sections/faqs';

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedCars />
      <TopLocations />
      <WhyYayaGo />
      <Stats />
      <BrowseCategories />
      <ListYourCarCTA />
      <BlogSection />
      <FAQs />
    </div>
  );
}
