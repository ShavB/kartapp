import { Box } from "@mui/material";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";
import SearchBar from "../../app/layout/SearchBar";
import { useState } from "react";

type Props = {
  products: Product[];
};

export default function Catalog({ products }: Props) {
  const [inputValue, setInputValue] = useState("");
  const [filterProducts, setFilterProducts] = useState(products);

  const handleInputSearch = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFilterProducts(products);
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
  return (
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
