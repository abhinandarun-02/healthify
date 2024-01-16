import Footer from "@/components/shared/footer";
import About from "@/components/marketing/about";
import Hero from "@/components/marketing/hero";
import NavBar from "@/components/shared/navbar/navbar";
import Features from "@/components/marketing/features";

export default function Home() {
  return (
    <div className="py-20 px-24">
      <Hero />
      <Features />
      <About />
    </div>
  );
}
  