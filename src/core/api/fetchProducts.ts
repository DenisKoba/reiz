import { get } from './index';

export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

export const fetchProducts = (
  limit = 20,
  skip = 0,
): Promise<{ products: Product[] }> => {
  const slipParam = skip ? `&skip=${skip}` : '';

  return get<{ products: Product[] }>(
    `/products?limit=${limit}${slipParam}`,
    {},
    'https://dummyjson.com',
  );
};

export const fetchSingleProduct = (id: string): Promise<Product> => {
  return get<Product>(`/products/${id}`, {}, 'https://dummyjson.com');
};

export const searchProducts = (
  title: string,
  brand: string,
): Promise<{ products: Product[] }> => {
  const searchTitle = title ? `&title=${title}` : '';
  const searchBrand = brand ? `&brand=${brand}` : '';

  return get<{ products: Product[] }>(
    `/products/search?${searchTitle}${searchBrand}`,
    {},
    'https://dummyjson.com',
  );
};
