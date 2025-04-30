import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Toolbar,
  Tooltip,
} from "@mui/material";
import { useState } from "react";

export default function Shimmer() {

    const [shimmerCard, setShimmerCard] = useState<[number, number, number, number, number, number, number, number]>([1, 2, 3, 4 ,5 ,6, 7, 8])

  return (
    <Container sx={{ height: "screen" }}>
      <AppBar sx={{ width: "full", backgroundColor: "silver"}}>
        <Container>
          <Toolbar>
            <Box sx={{backgroundColor: "white", padding: 2, width: 20, borderRadius: 3}}></Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Container sx={{mt: 14, display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: 2}}>
        {shimmerCard.map((card) => (
            <Card key={card} elevation={5} sx={{ width: 250, borderRadius: 4 }}>
            <CardMedia sx={{ height: 240, backgroundSize: "cover" }}></CardMedia>
            <CardContent>
              <Button></Button>
            </CardContent>
          </Card>
        ))}
        
      </Container>
    </Container>
  );
}
