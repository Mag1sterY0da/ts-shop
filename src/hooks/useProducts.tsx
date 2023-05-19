import { useContext } from 'react';
import {
  ProductsContext,
  UseProductsContextType,
} from '../context/ProductsProvider';

const useProducts = (): UseProductsContextType => useContext(ProductsContext);

export default useProducts;
