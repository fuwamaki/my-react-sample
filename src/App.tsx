import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import TopBar from "components/topBar";
import EvDrawerBox from "components/evDrawerBox";
import { fields } from "constants/fields";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import SettingsPage from "pages/settingsPage";
import MypagePage from "pages/mypagePage";
import PostQuestionPage from "pages/postQuestionPage";
import NewlyPage from "pages/newlyPage";
import MediaPage from "pages/mediaPage";
import TrendPage from "pages/trendPage";
import HomePage from "pages/homePage";

function App() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [darkMode, setDarkMode] = React.useState(localStorage.getItem("darkMode") === "on" ? true : false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        light: darkMode ? "#D4E5FF" : "#D4E5FF",
        main: darkMode ? "#5F9AF1" : "#5F9AF1",
      },
      secondary: {
        main: darkMode ? "#7FD4EF" : "#7FD4EF",
      },
      divider: darkMode ? "#8D949E" : "#B9C3D1",
      error: {
        main: darkMode ? "#E53F3F" : "#E53F3F",
      },
      text: {
        primary: darkMode ? "#FFFFFF" : "#282E37",
        secondary: darkMode ? "#EDF4FF" : "#727E90",
      },
      background: {
        default: darkMode ? "#282E37" : "#FFFFFF",
      },
    },
    typography: {
      fontFamily: [
        "Helvetica Neue",
        "Helvetica",
        "Arial",
        "Meiryo UI",
        "メイリオ",
        "Meiryo",
        "ＭＳ Ｐゴシック",
        "MS PGothic",
      ].join(","),
    },
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDarkModeToggle = () => {
    localStorage.setItem("darkMode", darkMode ? "off" : "on");
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <TopBar handleDrawerToggle={handleDrawerToggle} handleDarkModeToggle={handleDarkModeToggle} />
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
    </ThemeProvider>
  );
}

export default App;
