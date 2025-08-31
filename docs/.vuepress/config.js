import { viteBundler } from "@vuepress/bundler-vite";
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";

export default defineUserConfig({
  base: "/ts-handbook-org/", // 프로젝트 페이지용 필수
  bundler: viteBundler(),
  title: "TypeScript Handbook",
  description: "TypeScript 정리",
  theme: defaultTheme({
    logo: "/images/profile.png",
    navbar: [
      { text: "소개", link: "/introduction.md" },
      { text: "기본 타입", link: "/basic-types.md" },
      { text: "함수", link: "/functions.md" },
    ],
    sidebar: ["/introduction.md", "/basic-types.md", "/functions.md"],
  }),
});
