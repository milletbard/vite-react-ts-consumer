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
    // target 指定瀏覽器版本
    target: "chrome89",
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
          entry: "http://localhost:2000/remoteEntry.js",
        },
      },
      shared: ["react", "react-dom"],
    }),
  ],
});
