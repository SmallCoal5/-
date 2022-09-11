import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import eslintPlugin from "vite-plugin-eslint";
import Components from "unplugin-vue-components/vite";
import Unocss from "unocss/vite";
import { VantResolver } from "unplugin-vue-components/resolvers";
import {
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";
// https://vitejs.dev/config/
export default defineConfig({
  // resolve: {
  //   alias: {
  //     "@": resolve("./src"),
  //     "vue-i18n": "vue-i18n/dist/vue-i18n.cjs.js",
  //   },
  // },
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
    Unocss({
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
          scale: 1.2,
          warn: true,
        }),
      ],
      safelist: ["i-ep-chat-dot-round", "i-ep-user"],
      transformers: [transformerDirectives(), transformerVariantGroup()],
    }),
  ],
});
