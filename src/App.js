
import LandingHeader from "./components/website/landingheader";
import Products from "./components/website/products";
import LandingStats from "./components/website/landingstats";
import LandingTestimonials from "./components/website/Testimonials";
import LandingFooter from "./components/website/landingfooter";

export default function App() {

  return (
    <>
      <div className="bg-white">
        
        <LandingHeader />
        <Products/>
        <LandingStats />
        <LandingTestimonials />
        <LandingFooter />
      </div>
    </>
      
  )
}
