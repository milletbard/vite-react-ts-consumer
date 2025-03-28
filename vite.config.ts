import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

// https://vite.dev/config/
export default defineConfig({
  // 加入server配置
  server: {
    port: 3000,
  },
  build: {
    target: "esnext", // 使用最新語法
    minify: false, // 不壓縮
    cssCodeSplit: true, // 拆分css
  },
  plugins: [
    react(),

    federation({
      name: "vite-react-ts-consumer-app",
      remotes: {
        // 遠端應用程式名稱
        remoteA: {
          // type: "module" 指定遠端應用程式使用 module 模式
          type: "module",
          // name: 遠端應用程式名稱
          name: "remoteA",
          // entry:遠端應用程式入口
          entry: "https://vite-react-ts-remote-a.vercel.app/remoteEntry.js",

          // entry:
          //   process.env.NODE_ENV === "production"
          //     ? "https://vite-react-ts-remote-a.vercel.app/remoteEntry.js"
          //     : "http://localhost:2000/remoteEntry.js",

          // entryGlobalName 遠端應用程式入口的全局名稱
          // entryGlobalName: "remoteA",
          // shareScope 共享範圍
          // shareScope: "default",
        },
      },
      shared: ["react", "react-dom"],
    }),
  ],
});
