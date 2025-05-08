import { useDispatch, useSelector } from "react-redux";
import { CounterState, decrement, increment } from "./counterReducer";
import { Box, Button, ButtonGroup, Typography } from "@mui/material";

export default function ContactPage() {
  const data = useSelector((state: CounterState) => state.data);
  const dispatch = useDispatch();
  return (
    <Box>
      <Typography>The data is: {data}</Typography>
      <ButtonGroup>
        <Button
          onClick={() => increment()}
          color="success"
        >
          increment
        </Button>
        <Button
          onClick={() => decrement()}
          color="warning"
        >
          decrement
        </Button>
        <Button
          onClick={() => increment(5)}
          color="warning"
        >
          increment + 5
        </Button>
      </ButtonGroup>
    </Box>
  );
}
