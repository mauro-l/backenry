import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { productsUrl } from "../services/env";
import { buildUrl } from "../utils/urlBuilder";

function useGetProducts(PRODUCT_LIMITS, STATUS_DEFAULT) {
  const [ready, setReady] = useState(null);
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(null);
  const [params] = useSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      const searchParams = {};
      if (params.get("page")) {
        searchParams.page = params.get("page") || 1;
      }
      if (params.get("limit")) {
        searchParams.limit = params.get("limit");
      } else {
        searchParams.limit = PRODUCT_LIMITS;
      }
      if (params.get("sortField")) {
        searchParams.sortField = params.get("sortField");
        searchParams.sortOrder = params.get("sortOrder");
      }
      if (params.get("status")) {
        searchParams.status = params.get("status");
      } else {
        searchParams.status = STATUS_DEFAULT;
      }
      if (params.get("category")) {
        searchParams.category = params.get("category");
      }
      if (params.get("maxPrice")) {
        searchParams.maxPrice = params.get("maxPrice");
      }
      const url = buildUrl(productsUrl, searchParams);

      try {
        setReady(false);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

        setProduct(data.payload);
        setError(null);
      } catch (err) {
        setError("Error al obtener los productos", err);
      } finally {
        setReady(true);
      }
    };
    fetchData();
  }, [PRODUCT_LIMITS, STATUS_DEFAULT, params]);

  return { ready, product, error };
}

export default useGetProducts;
