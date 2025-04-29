import { DarkMode, LightMode } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";

type Props = {
  darkMode : Boolean,
  toggleDarkMode: () => void
}

export default function Navbar({darkMode, toggleDarkMode} : Props) {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6">KartApp</Typography>
        <IconButton onClick={toggleDarkMode}>{darkMode ? <DarkMode /> : <LightMode />}</IconButton>
      </Toolbar>
    </AppBar>
  );
}
