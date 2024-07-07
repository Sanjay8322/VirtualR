import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import FeatureSection from "./Components/FeatureSection";
import Workflow from "./Components/Workflow";
import Pricing from "./Components/Pricing";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";
export default function App() {
  return (
   <>
   <Navbar />
   <div className="max-w-7xl px-6 pt-20 mx-auto">
    <HeroSection />
    <FeatureSection />
    <Workflow />
    <Pricing />
    <Testimonials />
    <Footer />
   </div>
   </>
  )
}