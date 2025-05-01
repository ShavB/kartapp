import { useEffect, useState } from "react";
import { Product } from "../../app/models/product";

type Props = {
  id: string | undefined;
};

export default function useProduct({ id }: Props) {
  const [product, setProduct] = useState<Product | null>(null);

  const fetchData = async () => {
    try {
      const res = await fetch(`https://localhost:5001/api/products/${id}`);
      const data = await res.json();
      console.log(data);
      setProduct(data);
    } catch (error) {
      console.error("Failed to fetch product:", error);
    }
  };

  useEffect(() => {
    if (id) fetchData();
  }, [id]);

  return product;
}
