import { AccountCircle, Add, FiberNew, Home, Newspaper, Settings, TrendingUp } from "@mui/icons-material";
import i18next from "i18n/configs";

export const DRAWER_ITEM_TYPE = {
  HOME: { title: i18next.t("drawer.home"), path: "/", component: <Home /> },
  TREND: { title: i18next.t("drawer.trend"), path: "/trend", component: <TrendingUp /> },
  MEDIA: { title: i18next.t("drawer.media"), path: "/media", component: <Newspaper /> },
  NEWLY: { title: i18next.t("drawer.newly"), path: "/newly", component: <FiberNew /> },
  POST_QUESTION: { title: i18next.t("drawer.postQuestion"), path: "/post_question", component: <Add /> },
  MYPAGE: { title: i18next.t("drawer.mypage"), path: "/mypage", component: <AccountCircle /> },
  SETTINGS: { title: i18next.t("drawer.settings"), path: "/settings", component: <Settings /> },
} as const;

export type DrawerItemType = typeof DRAWER_ITEM_TYPE[keyof typeof DRAWER_ITEM_TYPE];
