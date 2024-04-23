import Events from "@/components/containers/home/events";
import Hero from "@/components/containers/home/hero";
import Inassetnfts from "@/components/containers/home/nftassets";
import Intro from "@/components/containers/home/intro";
import Quote from "@/components/containers/home/quote";
import Roadmap from "@/components/containers/home/roadmap";
import Tokenomics from "@/components/containers/home/tokenomics";
import Contact from "@/components/containers/home/contact";

export default function Home() {
  return (
    <main>
      <div className="_3d-pixel-cursor__arrow">
      <Hero />
      <Intro />
      <Quote />
      <Inassetnfts />
      <Tokenomics/>
      <Events />
      <Roadmap />
        <Contact />
        </div>
    </main>
  );
}
