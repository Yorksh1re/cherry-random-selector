/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import WindiCSS from "vite-plugin-windicss";

export default defineConfig({
  alias: {
    "@": "/src/",
    "~": "/src/assets/",
  },
  plugins: [
    solidPlugin(),
    WindiCSS({
      scan: {
        fileExtensions: ["html", "js", "ts", "jsx", "tsx"],
      },
    }),
  ],
  test: {
    environment: "jsdom",
    globals: true,
    transformMode: {
      web: [/\.[jt]sx?$/],
    },
    setupFiles: "./setupVitest.ts",
    // solid needs to be inline to work around
    // a resolution issue in vitest:
    deps: {
      inline: [/solid-js/],
    },
    // if you have few tests, try commenting one
    // or both out to improve performance:
    threads: false,
    isolate: false,
  },
  build: {
    target: "esnext",
    polyfillDynamicImport: false,
  },
  resolve: {
    conditions: ["development", "browser"],
  },
});
