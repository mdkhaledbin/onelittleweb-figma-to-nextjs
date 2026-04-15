import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Pricing from "@/components/sections/Pricing";
import Tools from "@/components/sections/Tools";
import About from "@/components/sections/About";
import Review from "@/components/sections/Review";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      <Tools />
      <About />
      <Review />
    </>
  );
}
