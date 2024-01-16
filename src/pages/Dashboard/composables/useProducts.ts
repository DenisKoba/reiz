import { ref, watch } from 'vue';
import {
  fetchProducts,
  Product,
  searchProducts,
} from '../../../core/api/fetchProducts';

const products = ref<Product[]>([]);
const skip = ref(0);
const fullList = ref<boolean>(false);
const selectedProducts = ref<number[]>([]);

export const useProducts = () => {
  const fetchProductsInitially = async () => {
    const response = await fetchProducts();
    products.value = response?.products ?? [];
    skip.value += 20;
  };

  const loadMoreProducts = async () => {
    if (products.value.length === 0 || fullList.value) return;

    const response = await fetchProducts(20, skip.value);
    products.value = [...products.value, ...(response?.products ?? [])];
    if (response?.products.length < 20) fullList.value = true;
    skip.value += 20;
  };

  const searchProductsCall = async (
    searchTitle: string,
    searchBrand: string,
  ) => {
    const response = await searchProducts(searchTitle, searchBrand);
    products.value = response?.products ?? [];
  };

  const toggleSingleSelected = (id: number, value: boolean) => {
    if (value) {
      selectedProducts.value.push(id);
    } else {
      const index = selectedProducts.value.indexOf(id);

      selectedProducts.value.splice(index, 1);
    }

    console.log(selectedProducts.value);
  };

  const selectAllProducts = (value: boolean) => {
    if (value) {
      selectedProducts.value = products.value.map((product) => product.id);
    } else {
      selectedProducts.value = [];
    }
  }

  return {
    products,
    fetchProductsInitially,
    loadMoreProducts,
    searchProductsCall,
    toggleSingleSelected,
    selectAllProducts,
    selectedProducts
  };
};
