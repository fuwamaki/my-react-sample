import { Box, Drawer } from "@mui/material";
import { fields } from "constants/fields";
import EvDrawer from "components/evDrawer";

interface Props {
  window?: () => Window;
}

export default function EvDrawerBox({
  props,
  mobileOpen,
  handleDrawerToggle,
}: {
  props: Props;
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
}) {
  const { window } = props;
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      component="nav"
      sx={{ width: { sm: fields.drawer.width }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
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
            width: fields.drawer.width,
          },
        }}
      >
        <EvDrawer />
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: fields.drawer.width,
          },
        }}
        open
      >
        <EvDrawer />
      </Drawer>
    </Box>
  );
}
