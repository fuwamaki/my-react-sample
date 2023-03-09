import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import SampleCard from "components/sampleCard";
import TopBar from "components/topBar";
import EvDrawerBox from "components/evDrawerBox";
import { fields } from "constants/fields";

export default function ResponsiveDrawer() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <TopBar handleDrawerToggle={handleDrawerToggle} />
      <EvDrawerBox props={{}} mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${fields.drawer.width}px)` },
        }}
      >
        <Toolbar />
        <SampleCard />
      </Box>
    </Box>
  );
}
