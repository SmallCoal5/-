import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import eslintPlugin from "vite-plugin-eslint";
import Components from "unplugin-vue-components/vite";
import { VantResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   host: "0.0.0.0",
  //   proxy: {
  //     "/api": {
  //       target: "http://172.31.225.62:8000",
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, ""),
  //     },
  //   },
  // },
  plugins: [
    vue(),
    eslintPlugin(),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
});
