import { Box } from "@mui/material";
import { Product } from "../../app/models/product";
import ProductCard, { isPromotedLabel } from "./ProductCard";

type Props = {
  products: Product[];
};

export default function ProductList({ products }: Props) {
  console.log("products: dsdad ", products);
  const IsPromoted = isPromotedLabel(ProductCard);
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 3,
        justifyContent: "center",
      }}
    >
      {products?.map((product) =>
        product.isPromoted ? (
          <IsPromoted product={product}/>
        ) : (
          <ProductCard key={product.id} product={product} />
        )
      )}
    </Box>
  );
}
