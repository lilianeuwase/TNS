import HeroSection from '@/components/sections/Hero/HeroSection';
import HScroll from '@/components/sections/HScroll'
import ContactButton from '@/components/sections/ContactButton'
import HoverImageLinks from '@/components/sections/Footer';
import ExampleWrapper from '@/components/sections/Modal';
import {Example} from '@/components/sections/HoverImages';
import {TextParallaxContentExample} from '@/components/sections/VisionMision';
import Marquee from '@/components/common/container/marquee';
import GithubCardSkew from '@/components/common/card/CardSkew';
import Whys from '@/components/sections/whys'
import PackagesSection from '@/components/sections/Packages';
import Expandable from '@/components/sections/Gallery';
import ContactSection from "@/components/sections/ContactUs";
import ActualsGallery from '@/components/sections/Gallery/ActualsGallery';


export default function Home() {
  return (
    <main className="m-0 p-0 overflow-x-hidden">
      <HeroSection />
      <HScroll />
      <TextParallaxContentExample/>
      <ActualsGallery/>
      <Whys/>
      <Expandable/>
      <PackagesSection/>
      {/* <ContactButton/> */}
      {/* <HoverImageLinks/> */}
      {/* <ExampleWrapper/> */}
      <Example/>
      <ContactSection />
      {/* <div className="storybook-fix relative flex h-full max-h-96 min-h-72 w-full min-w-72 items-center justify-center overflow-hidden rounded border bg-background">
        <Marquee pauseOnHover>
          <GithubCardSkew />
        </Marquee>
      </div> */}
    </main>
  );
}
