import { Box } from "@mui/material";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";
import SearchBar from "../../app/layout/SearchBar";
import { useEffect, useState } from "react";
import Shimmer from "../../features/ShimmerUI/Shimmer";
import useProductData from "../../utils/Customhooks/useProductData";
import useOnlineStatus from "../../utils/Customhooks/useOnlineStatus";

export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);
  const [inputValue, setInputValue] = useState("");
  // custom hook
  // get fetch data here
  // const productData = useProductData();
  const productList = useProductData();
  const onlineStatus = useOnlineStatus();
  const [filterProducts, setFilterProducts] = useState(productList);

  const handleInputSearch = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFilterProducts(productList);
    setInputValue(event.target.value);
  };

  function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter" && inputValue.trim() !== "") {
      let data = filterProducts.filter((item) =>
        item.name.toLowerCase().includes(inputValue.toLowerCase())
      );
      console.log(data);
      setFilterProducts(data);
      setInputValue("");
    }
  }

  useEffect(() => {
    if (productList.length > 0) {
      setProducts(productList);
      setFilterProducts(productList);
    }
  }, [productList]);

  if (onlineStatus === false)
    return <h1>looks like you're offline, please check your connection!!!</h1>;

  return products.length === 0 ? (
    <Shimmer />
  ) : (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <SearchBar
        products={products}
        inputValue={inputValue}
        handleInputSearch={handleInputSearch}
        handleKeyPress={handleKeyPress}
      />
      <ProductList products={filterProducts} />
    </Box>
  );
}
