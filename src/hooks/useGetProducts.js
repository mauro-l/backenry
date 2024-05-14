import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import showProducts from "../services/product.services";

export default function useGetProducts() {
  const { category } = useParams();
  const [ready, setReady] = useState(null);
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setReady(false);
        const data = await showProducts(category);
        setProduct(data);
      } catch (err) {
        setError("Error al obtener los productos", err);
      } finally {
        setReady(true);
      }
    };
    fetchData();
  }, [category]);

  return { ready, product, error };
}
