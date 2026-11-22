import HomeHero from "../components/home/HomeHero";
import TrustStrip from "../components/home/TrustStrip";
import FeaturedPackages from "../components/home/FeaturedPackages";
import TripTypes from "../components/home/TripTypes";
import WhyUs from "../components/home/WhyUs";
import GroupsBanner from "../components/home/GroupsBanner";
import Destinations from "../components/home/Destinations";
import Confidence from "../components/home/Confidence";
import Faq from "../components/home/Faq";
import Reviews from "../components/home/Reviews";
import Cta from "../components/home/Cta";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <TrustStrip />
      <FeaturedPackages />
      <TripTypes />
      <WhyUs />
      <GroupsBanner />
      <Destinations />
      <Confidence />
      <Faq />
      <Reviews />
      <Cta />
    </>
  );
}
