import { useEffect, useState } from "react";
import { PRODUCT_API } from "../constants";
import { Product } from "../../app/models/product";

const useProductData = () => {
  const [productList, setProductList] = useState<Product[]>([]);
  // fetch data
  const fetchData = async() => {
    try{
      await fetch(PRODUCT_API)
      .then((res) => res.json())
      .then((data) => setProductList(data));
    }catch(err){
      console.error(`error while fetching data`)
    }
    
  };
  useEffect(() => {
    fetchData();
  }, []);

  return productList;
};

export default useProductData;