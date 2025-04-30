import { DarkMode, LightMode } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";

type Props = {
  darkMode: Boolean;
  toggleDarkMode: () => void;
};

export default function Navbar({ darkMode, toggleDarkMode }: Props) {
  const [isLoggedIn, setIsLoggedOut] = useState(false);

  return (
    <AppBar>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">KartApp</Typography>
        <Box>
          <IconButton onClick={toggleDarkMode}>
            {darkMode ? <DarkMode /> : <LightMode />}
          </IconButton>
          <Button onClick={() => setIsLoggedOut(!isLoggedIn)} color="inherit">
            {" "}
            {isLoggedIn ? "Logout" : "Login"}
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
