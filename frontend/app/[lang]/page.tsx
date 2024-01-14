import Footer from "@/components/shared/footer";
import About from "@/components/marketing/about";
import Hero from "@/components/marketing/hero";
import NavBar from "@/components/shared/navbar/navbar";

export default function Home() {
  return (
    <section className="px-24">
      <Hero />
      <About />
    </section>
  );
}
