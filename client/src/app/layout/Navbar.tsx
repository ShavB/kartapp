import { DarkMode, LightMode } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router";
import useOnlineStatus from "../../utils/Customhooks/useOnlineStatus";
import { TimelineDot } from "@mui/lab";

const navLinks = [
  { title: "catalog", path: "/catalog" },
  { title: "about", path: "/about" },
  { title: "contact", path: "/contact" },
  { title: "grocery", path: "/grocery" },
];

type Props = {
  darkMode: Boolean;
  toggleDarkMode: () => void;
};

export default function Navbar({ darkMode, toggleDarkMode }: Props) {
  const [isLoggedIn, setIsLoggedOut] = useState(false);
  const onlineStatus = useOnlineStatus();

  return (
    <AppBar>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">KartApp</Typography>
        <Box sx={{ display: "flex", gap: 2.6, alignItems: "center" }}>
          <List sx={{ display: "flex" }}>
            {navLinks.map(({ title, path }) => (
              <ListItem
                component={NavLink}
                to={path}
                key={path}
                sx={{ color: "inherit", typography: "h10" }}
              >
                {title.toUpperCase()}
              </ListItem>
            ))}
          </List>
          <IconButton onClick={toggleDarkMode}>
            {darkMode ? <DarkMode /> : <LightMode />}
          </IconButton>
          <Button onClick={() => setIsLoggedOut(!isLoggedIn)} color="inherit">
            {isLoggedIn ? "Logout" : "Login"}
          </Button>
          <TimelineDot color={onlineStatus === true ? "success" : "warning"}/>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
