import { AppBar, Toolbar, IconButton, Typography, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { fields } from "constants/fields";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

export default function TopBar({
  handleDrawerToggle,
  handleDarkModeToggle,
}: {
  handleDrawerToggle: () => void;
  handleDarkModeToggle: () => void;
}) {
  const theme = useTheme();

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${fields.drawer.width}px)` },
        ml: { sm: `${fields.drawer.width}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          Title
        </Typography>
        <IconButton sx={{ ml: 1 }} onClick={handleDarkModeToggle} color="inherit">
          {theme.palette.mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
