import { Box, Divider, Stack, Typography } from "@mui/material";
import { useRouteError } from "react-router";

export default function ErrorPage() {
  const err: unknown = useRouteError();
  console.log(err);
  return (
    <Box
      sx={{
        top: "",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        flex: "flex",
        flexDirection: "col",
      }}
    >
      <Stack
        direction="column"
        divider={<Divider orientation="horizontal" flexItem />}
      >
        <Typography>Oops!!! Something went wrong</Typography>
        <Typography>
          {err.status} : {err.data}
        </Typography>
      </Stack>
    </Box>
  );
}
