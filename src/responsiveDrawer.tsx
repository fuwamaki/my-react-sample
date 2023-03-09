import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SampleCard from "components/sampleCard";
import { AccountCircle, Add, FiberNew, Home, Newspaper, Settings, TrendingUp } from "@mui/icons-material";
import i18next from "i18n/configs";

const drawerWidth = 240;

const DrawerItemType = {
  HOME: { title: i18next.t("drawer.home"), path: "home", component: <Home /> },
  TREND: { title: i18next.t("drawer.trend"), path: "trend", component: <TrendingUp /> },
  MEDIA: { title: i18next.t("drawer.media"), path: "media", component: <Newspaper /> },
  NEWLY: { title: i18next.t("drawer.newly"), path: "newly", component: <FiberNew /> },
  POST_QUESTION: { title: i18next.t("drawer.postQuestion"), path: "post_question", component: <Add /> },
  MYPAGE: { title: i18next.t("drawer.mypage"), path: "mypage", component: <AccountCircle /> },
  SETTINGS: { title: i18next.t("drawer.settings"), path: "settings", component: <Settings /> },
} as const;

type DrawerItemType = typeof DrawerItemType[keyof typeof DrawerItemType];

interface Props {
  window?: () => Window;
}

export default function ResponsiveDrawer(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  // const drawerItems = Object.values(DrawerItemType);
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
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
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
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
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
