import { Box, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Product } from "../../app/models/product";
import { useState } from "react";
import { AccordionBody } from "./AccordionBody";

type Props = {
  tabName: string | null;
  product: Product | null;
  showItems: boolean;
  setShowIndex: () => void;
};

export default function Accordian({ tabName, product, showItems, setShowIndex }: Props) {
//   const [showItems, setShowItems] = useState(false);
console.log(product)
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <Box onClick={handleClick} width="100%">
      <Box
        onClick={handleClick}
        width="100%"
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography>{tabName}</Typography>
          <KeyboardArrowDownIcon />
        </Box>
        {showItems && <AccordionBody productData={product[tabName]} />}
      </Box>
    </Box>
  );
}
