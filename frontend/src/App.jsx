import Header from './views/Header';
import Hero from './views/Hero';
import FeaturedProducts from './views/FeaturedProducts';
import Footer from './views/Footer';

import './views/Header.css';
import './views/Hero.css';
import './views/ProductCard.css';
import './views/FeaturedProducts.css';
import './views/Footer.css';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedProducts />
      </main>
      <Footer />
    </>
  );
}
