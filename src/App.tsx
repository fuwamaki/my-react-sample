import "./assets/css/App.css";
import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import TopBar from "components/topBar";
import EvDrawerBox from "components/evDrawerBox";
import { fields } from "constants/fields";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SettingsPage from "pages/settingsPage";
import MypagePage from "pages/mypagePage";
import PostQuestionPage from "pages/postQuestionPage";
import NewlyPage from "pages/newlyPage";
import MediaPage from "pages/mediaPage";
import TrendPage from "pages/trendPage";
import HomePage from "pages/homePage";

function App() {
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
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/trend" element={<TrendPage />} />
            <Route path="/media" element={<MediaPage />} />
            <Route path="/newly" element={<NewlyPage />} />
            <Route path="/post_question" element={<PostQuestionPage />} />
            <Route path="/mypage" element={<MypagePage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </Router>
      </Box>
    </Box>
  );
}

export default App;
