import express, {Application, Request, Response} from "express";
import productRoutes from "./routes/productRoutes";

const app : Application = express();
const PORT = 5010;

app.use(express.json());

app.use('/api/products', productRoutes);

app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});