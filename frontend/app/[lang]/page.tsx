import Footer from "@/components/marketing/footer";
import About from "@/components/marketing/about";
import Hero from "@/components/marketing/hero";
import NavBar from "@/components/marketing/navbar/navbar";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="flex flex-col min-h-screen items-center justify-between p-24">
        <Hero />
        <About />
      </main>
      <Footer />
    </>
  );
}
