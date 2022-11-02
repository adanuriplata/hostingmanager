import { useContext, useEffect, useState } from 'react';
import { LoaderContext } from '../components/common/Loader/LoaderContext';
import { supabase } from '../supabase';

export const useGetProducts = (): {
  products: undefined;
  error: undefined;
} => {
  const [products, setProducts] = useState();
  const [error, setError] = useState();
  const { setIsLoading } = useContext(LoaderContext);
  useEffect(() => {
    const getProducts = async (): Promise<void> => {
      setIsLoading(true);
      const { data: products, error } = await supabase
        .from('products')
        .select('*');
      if (error == null) {
        setProducts(products);
        setIsLoading(false);
      } else {
        setError(error);
        setIsLoading(false);
      }
    };
    void getProducts();
  }, []);
  return { products, error };
};
