import { useParams } from "react-router";
import useProduct from "../../utils/Customhooks/useProduct";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import Accordian from "../accordian/Accordian";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/store/cartSlice";
import { CartItems } from "../../utils/store/cartSlice";
import { Product } from "../../app/models/product";

export default function ProductDetails() {
  const [showIndex, setShowIndex] = useState(null);
  const { id } = useParams<{ id: string }>();
  const tabName = ["name", "description", "brand"];
  const product = useProduct({ id });
  console.log(product);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    // dispatch an action -> call to the reducer function
    const item: CartItems = {
      id: product.id,
      name: product.name,
      quantity: product.quantityInStock,
      price: product.price,
      image: product.pictureUrl,
      description: product.description,
    };
    dispatch(addItem(item));
  };

  return (
    <Card
      sx={{
        maxWidth: 1000,
        borderRadius: "10px",
        margin: "auto",
        mt: 15,
        p: 2,
      }}
    >
      <Grid container spacing={4}>
        <Grid>
          <CardMedia
            component="img"
            image={product?.pictureUrl}
            alt={product?.name}
            sx={{ borderRadius: 3, height: 350, objectFit: "cover" }}
          />
        </Grid>
        <Grid size={7}>
          <CardContent>
            <Typography variant="h4">{product?.name}</Typography>
            <Divider sx={{ my: 2 }} />
            <Typography variant="body2">{product?.description}</Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 2 }}>
              <Chip label={`Brand: ${product?.brand}`} color="primary" />
              <Chip label={`Type: ${product?.type}`} color="primary" />
              <Chip
                label={`In Stock: ${product?.quantityInStock}`}
                color={product?.quantityInStock > 0 ? "success" : "error"}
              />
            </Box>
            {tabName.map((tab, index) => (
              <Box
                key={tab}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mt: 2,
                }}
              >
                <Accordian
                  tabName={tab}
                  product={product}
                  showItems={index === showIndex ? true : false}
                  setShowIndex={() => setShowIndex(index)}
                />
              </Box>
            ))}
            <Box sx={{ mt: 10 }}>
              <Grid size={8} spacing={4}>
                <TextField
                  variant="outlined"
                  type="number"
                  sx={{ mr: 1 }}
                  placeholder="Quantity..."
                />
                <Button
                  onClick={() => handleAddToCart(product)}
                  variant="outlined"
                  sx={{ padding: 1.8 }}
                >
                  Add to Cart
                </Button>
              </Grid>
            </Box>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
}
