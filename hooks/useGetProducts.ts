import { PostgrestError } from '@supabase/supabase-js';
import { useContext, useEffect, useState } from 'react';
import { LoaderContext } from '../components/common/Loader/LoaderContext';
import { supabase } from '../supabase';
import { IProducts } from '../types';

export const useGetProducts = (): {
  products: IProducts[] | undefined;
  isError: PostgrestError | null | undefined;
} => {
  const [products, setProducts] = useState<IProducts[]>();
  const [isError, setIsError] = useState<PostgrestError | null>();
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
        setIsError(error);
        setIsLoading(false);
      }
    };
    void getProducts();
  }, [setIsLoading]);
  return { products, isError };
};
