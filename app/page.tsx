import LoadingCarousel from "@/components/Carsoul";
import { TabsDemo } from "@/components/CaseStudy";
import { HeroScrollDemo } from "@/components/ContianerScrollDemo";
import TwoColumnFooter from "@/components/Footer";
import { Example } from "@/components/Hero";
import { LogoCarouselDemo } from "@/components/Logo";
import { NavbarDemo } from "@/components/Navbardemo";
import { WorldMapDemo } from "@/components/Worldmapdemo";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen overflow-x-hidden"> {/* Center and background */}
      <NavbarDemo />
      <section id="example" className="w-full -mb-72  bg-black">
        <Example />
      </section>
      <section id="hero-scroll-demo" className="w-full lg:-mt-96 lg:-mb-96 -mt-80  bg-black">
        <HeroScrollDemo />
      </section>
          <section id="hero-scroll-demo" className="w-full bg-black -mb-80">
            <h1 className="text-center text-4xl md:text-6xl font-extrabold text-white mt-40">
            The Case for Modern Solutions</h1><TabsDemo /></section>
            <section id="hero-scroll-demo" className="w-full mt-96 mb-20 bg-black">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white flex items-center justify-center gap-4">
          <span role="img" aria-label="Settings" className="text-9xl md:text-6xl text-blue-500">
            ⚙️
          </span>
          Services
        </h2>
        <p className="text-lg md:text-xl text-gray-400 mt-4">
          Discover what we offer to elevate your business.
        </p>
      </div>
      <LoadingCarousel />
    </section>

      <section id="#" className=" bg-black">
        <div className="mt-3"><LogoCarouselDemo/></div>
      </section>
      <section id="hero-scroll-demo" className="w-full  bg-black">
        <WorldMapDemo/>
      </section>
      <footer>
      <TwoColumnFooter/>
      </footer>
    </div>
  );
}
