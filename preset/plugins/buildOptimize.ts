import DTS from "vite-plugin-dts";
import { visualizer as Visualizer } from "rollup-plugin-visualizer";

export default [
  DTS(),

  Visualizer({
    filename: "./node_modules/.cache/visualizer/stats.html",
    open: true,
    gzipSize: true,
    brotliSize: true,
  }),
];
