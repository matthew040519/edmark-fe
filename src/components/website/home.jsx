/* eslint-disable jsx-a11y/anchor-is-valid */
import LandingPolygon from "./polygon";
import LandingHero from "./landinghero";
import Products from "./products";
import LandingStats from "./landingstats";
import LandingTestimonials from "./Testimonials";
import LandingFooter from "./landingfooter";
import LandingHeader from "./landingheader";

export default function Home() {

  return (
    
        <>
        <LandingHeader/>
          <LandingPolygon></LandingPolygon>
          <LandingHero/>
            <Products />
            <LandingStats />
            <LandingTestimonials />
            <LandingFooter />
        </>
  )
}
