import { useFeaturedProducts } from '../controllers/useFeaturedProducts';
import ProductCard from './ProductCard';

export default function FeaturedProducts() {
  const { products } = useFeaturedProducts();

  return (
    <section id="colecao" className="featured">
      <div className="wrap">
        <div className="featured__head">
          <h2>Em alta na quadra</h2>
          <p>Os modelos mais levados por quem joga todo fim de semana.</p>
        </div>

        <div className="featured__grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
