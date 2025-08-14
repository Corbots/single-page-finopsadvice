import Header from './components/Header';
import Hero from './components/Hero';
import Outcomes from './components/Outcomes';
import Services from './components/Services';
import Proof from './components/Proof';
import Footer from './components/Footer';

export default function Page() {
  return (
    <>
      {/* Skip link for accessibility */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:bg-white focus:text-black focus:px-4 focus:py-2 focus:rounded"
      >
        Skip to content
      </a>

      <Header />

      <main id="main">
        <Hero />
        <Outcomes />
        <Services />
        <Proof />
      </main>

      <Footer />
    </>
  );
}
