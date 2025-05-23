import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Product } from "../../app/models/product";
import { Link } from "react-router";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <Card
      elevation={5}
      sx={{
        width: 280,
        borderRadius: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        cursor: "pointer",
      }}
    >
      <CardMedia
        sx={{ height: 240, backgroundSize: "cover" }}
        image={product.pictureUrl}
        title={product.name}
      />
      <CardContent>
        <Typography
          gutterBottom
          sx={{ color: "uppercase" }}
          variant="subtitle2"
        >
          {product.name}
        </Typography>
        <Typography variant="h6" sx={{ color: "secondary.main" }}>
          ${(product.price / 100).toFixed(2)}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-between" }}>
        <Button>Add to Cart</Button>
        <Button component={Link} to={`/catalog/${product.id}`}>
          View
        </Button>
      </CardActions>
    </Card>
  );
}

export const isPromotedLabel = (ProductCard) => {
  return (props) => {
    return (
      <Box>
        <Typography>Promoted</Typography>
        <ProductCard {...props}/>
      </Box>
    );
  };
};
