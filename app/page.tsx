import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import About from "@/components/About";

export default function Home() {
  return (
      // Added 'font-mono' to enforce JetBrains Mono everywhere
      <main className="min-h-screen font-mono antialiased ">
        <Navigation/>
        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-4 py-12 md:px-8">
            <Hero />
          </div>
        </section>
        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-4 py-12 md:px-8">
            <About />
          </div>
        </section>
      </main>
  );
}