import SneakerMark from './SneakerMark';

function formatPrice(value) {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}

export default function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="product-card__art">
        <SneakerMark accent="var(--color-asphalt)" />
      </div>
      <p className="product-card__brand">{product.brand}</p>
      <h3 className="product-card__name">{product.name}</h3>
      <p className="product-card__colorway">{product.colorway}</p>
      <p className="product-card__price">{formatPrice(product.price)}</p>
    </article>
  );
}
