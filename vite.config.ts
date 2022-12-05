/// <reference types="vitest" />

import { defineConfig } from "vite";
import { resolve } from "path";

import { plugins } from "./preset";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": `${resolve(__dirname, "src")}/`,
      "@westhide/tai": `${resolve(__dirname, "src")}/`,
    },
  },
  plugins,
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "index",
      fileName: "index",
    },
  },
  test: {
    include: ["__tests__/**"],
    benchmark: {
      include: ["benchmark/**"],
    },
    environment: "jsdom",
    globals: true,
    transformMode: {
      web: [/\.tsx$/],
    },
  },
});
