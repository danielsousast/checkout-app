import {useEffect, useState} from 'react';
import {ProductRequet} from '../http/product';
import api from '../../services/axios';

// import { Container } from './styles';

const useCategories = () => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<string[]>();

  async function getCategories() {
    const httpRequest = new ProductRequet(api);
    const response = await httpRequest.getAllCategories();
    setCategories(response);
    setLoading(false);
  }

  useEffect(() => {
    getCategories();
  }, []);

  return {
    categories,
    loading,
  };
};

export default useCategories;
