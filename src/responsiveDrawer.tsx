import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import SampleCard from "components/sampleCard";
import { DrawerItemType } from "constants/drawerItemType";
import TopBar from "components/topBar";

const drawerWidth = 240;

interface Props {
  window?: () => Window;
}

export default function ResponsiveDrawer(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const upperDrawerItems = [DrawerItemType.HOME, DrawerItemType.TREND, DrawerItemType.MEDIA, DrawerItemType.NEWLY];
  const middleDrawerItems = [DrawerItemType.POST_QUESTION];
  const lowerDrawerItems = [DrawerItemType.MYPAGE, DrawerItemType.SETTINGS];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {upperDrawerItems.map((type) => (
          <ListItem key={type.title} disablePadding>
            <ListItemButton href={type.path}>
              <ListItemIcon>{type.component}</ListItemIcon>
              <ListItemText primary={type.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {middleDrawerItems.map((type) => (
          <ListItem key={type.title} disablePadding>
            <ListItemButton href={type.path}>
              <ListItemIcon>{type.component}</ListItemIcon>
              <ListItemText primary={type.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {lowerDrawerItems.map((type) => (
          <ListItem key={type.title} disablePadding>
            <ListItemButton href={type.path}>
              <ListItemIcon>{type.component}</ListItemIcon>
              <ListItemText primary={type.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <TopBar />
      <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }} aria-label="mailbox folders">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <SampleCard />
      </Box>
    </Box>
  );
}
