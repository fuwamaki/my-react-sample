import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { fields } from "constants/fields";

export default function TopBar({ handleDrawerToggle }: { handleDrawerToggle: () => void }) {
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
      </Toolbar>
    </AppBar>
  );
}
