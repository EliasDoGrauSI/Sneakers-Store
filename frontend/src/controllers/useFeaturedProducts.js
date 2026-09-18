import { MOCK_PRODUCTS } from '../models/Product';

// Controller — decide de onde vêm os dados e o que a view recebe.
// Hoje devolve o mock; troque o corpo por um fetch('/api/products')
// quando o backend estiver no ar, sem mexer nas views.
export function useFeaturedProducts() {
  return { products: MOCK_PRODUCTS, loading: false, error: null };
}
