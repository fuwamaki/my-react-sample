import { Toolbar, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { DrawerItemType } from "constants/drawerItemType";

export default function EvDrawer() {
  const upperDrawerItems = [DrawerItemType.HOME, DrawerItemType.TREND, DrawerItemType.MEDIA, DrawerItemType.NEWLY];
  const middleDrawerItems = [DrawerItemType.POST_QUESTION];
  const lowerDrawerItems = [DrawerItemType.MYPAGE, DrawerItemType.SETTINGS];

  return (
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
}
