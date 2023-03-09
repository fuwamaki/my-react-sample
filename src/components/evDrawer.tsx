import { Toolbar, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { DRAWER_ITEM_TYPE } from "constants/drawerItemType";

export default function EvDrawer() {
  const upperDrawerItems = [
    DRAWER_ITEM_TYPE.HOME,
    DRAWER_ITEM_TYPE.TREND,
    DRAWER_ITEM_TYPE.MEDIA,
    DRAWER_ITEM_TYPE.NEWLY,
  ];
  const middleDrawerItems = [DRAWER_ITEM_TYPE.POST_QUESTION];
  const lowerDrawerItems = [DRAWER_ITEM_TYPE.MYPAGE, DRAWER_ITEM_TYPE.SETTINGS];

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
