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

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();

  const product = useProduct({ id });

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
            <Box sx={{ mt: 10 }}>
              <Grid size={8} spacing={4}>
                <TextField
                  variant="outlined"
                  type="number"
                  sx={{ mr: 1 }}
                  placeholder="Quantity..."
                />
                <Button variant="outlined" sx={{ padding: 1.8 }}>
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
