import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  build: {
    target: "chrome89",
  },
  plugins: [
    react(),
    federation({
      name: "vite-react-ts-consumer-app",
      remotes: {
        // 遠端應用程式名稱
        remoteA: {
          type: "module",
          name: "remoteA",
          entry:
            process.env.NODE_ENV === "production"
              ? "https://vite-react-ts-remote-a.vercel.app/remoteEntry.js"
              : "http://localhost:2000/remoteEntry.js",
          entryGlobalName: "remoteA",
          shareScope: "default",
        },
      },
      filename: "remoteEntry.js",
      shared: {
        react: {
          singleton: true,
        },
        "react/": {
          singleton: true,
        },
      },
    }),
  ],
});
