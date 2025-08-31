// docs/.vuepress/config.mjs
import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import { defaultTheme } from "@vuepress/theme-default"; // <- default가 아님

export default defineUserConfig({
  title: "TypeScript Handbook",
  description: "TypeScript 정리",
  bundler: viteBundler(),
  theme: defaultTheme({
    logo: "/images/profile.png",
    navbar: [
      { text: "소개", link: "/introduction/" },
      { text: "기본 타입", link: "/basic-types/" },
      { text: "함수", link: "/functions/" },
    ],
    sidebar: {
      "/introduction/": [
        {
          text: "소개", // 카테고리 이름
          collapsible: true, // 접고 펼치기 가능
          children: ["", "guide"], // "" = README.md, guide.md = 서브페이지
        },
      ],
      "/basic-types/": [
        {
          text: "기본 타입",
          collapsible: true,
          children: ["", "number", "string"],
        },
      ],
      "/functions/": [
        {
          text: "함수",
          collapsible: true,
          children: ["", "arrow", "generic"],
        },
      ],
    },
  }),
});
