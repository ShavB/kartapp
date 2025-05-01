import { Box, TextField } from "@mui/material";
import { Product } from "../models/product";

type Props = {
  products: Product[];
  inputValue: string;
  handleInputSearch: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
};

export default function SearchBar({
  inputValue,
  handleInputSearch,
  handleKeyPress,
}: Props) {
  return (
    <Box sx={{ ml: 12, mr: 12, display: "flex", justifyContent: "end" }}>
      <TextField
        onKeyDown={handleKeyPress}
        onChange={handleInputSearch}
        value={inputValue}
        sx={{ m: 2, borderRadius: 5, width: 300 }}
        id="outlined-search"
        placeholder="Search items..."
        type="search"
      />
    </Box>
  );
}
