import {
  Button,
  Card,
  CardMedia,
  Chip,
  Grid,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../utils/store/appStore";

const Cart = () => {
  const cartItemsData = useSelector((store: RootState) => store.cart.items);

  const handleCheckout = () => {
    console.log("checkout processed!!");
  };

  return (
    <Card
      sx={{
        maxWidth: 1000,
        borderRadius: "10px",
        margin: "auto",
        mt: 15,
        p: 4,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      {cartItemsData.length > 0 ? (
        cartItemsData.map((cartItem) => (
          <Grid container size={2} spacing={2} sx={{}}>
            <Grid size={3}>
              <CardMedia
                sx={{ objectFit: "cover", borderRadius: 2 }}
                component="img"
                src={cartItem.image}
              />
            </Grid>
            <Grid size={6} spacing={2}>
              <Typography variant="h5">{cartItem.name}</Typography>
              <Typography variant="body2" sx={{ mt: 4 }}>
                {cartItem.description}
              </Typography>
              <Typography variant="body2" sx={{ mt: 4 }}>
                <Chip
                  label={`Quantity: ${cartItem?.quantity}`}
                  color="primary"
                />
              </Typography>
            </Grid>
            <Grid
              size={2}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography>$ {cartItem.price}</Typography>
            </Grid>
          </Grid>
        ))
      ) : (
        <h1>NO items</h1>
      )}
      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "",
        }}
      >
        <Typography variant="h6">Subtotal</Typography>
        <Button onClick={handleCheckout}>Proceed to Checkout</Button>
      </Grid>
    </Card>
  );
};

export default Cart;
