import { Chart } from "@/components/Charts";
import { ContainerScroll } from "@/components/container-scroll-animation";
import { HeroScrollDemo } from "@/components/ContianerScrollDemo";
import Gradient from "@/components/gradient";
import { Example } from "@/components/Hero";
import { NavbarDemo } from "@/components/Navbardemo";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen overflow-x-hidden"> {/* Center and background */}
      <NavbarDemo />
      <section id="example" className="w-full -mb-72">
        <Example />
      </section>
      <section id="hero-scroll-demo" className="w-full lg:-mt-96 lg:-mb-96 -mt-80 -mb-48">
        <HeroScrollDemo />
  
      </section>
      <section id="hero-scroll-demo" className="w-full mt-40">
        <Gradient/>
      </section>
    </div>
  );
}
