import { Box } from "@mui/material";

type Props = {
    productData: string | undefined;
};

export const AccordionBody = ({productData} : Props) => {
  return <Box sx={{ padding: 2 }}>{productData}</Box>;
};
