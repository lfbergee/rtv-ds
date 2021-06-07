import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import reactJsx from "vite-react-jsx";
import path from "path";
import copy from "rollup-plugin-copy";

export default defineConfig({
  plugins: [
    reactRefresh(),
    reactJsx(),
    {
      ...copy({
        targets: [
          {
            src: "src/components/**/*.scss",
            dest: "dist",
            rename: (_, __, fullPath) => {
              const scssFile = fullPath.split("/");
              scssFile.shift();
              scssFile.shift();
              return scssFile.join("/");
            },
          },
        ],
        verbose: true,
        hook: "writeBundle",
      }),
      apply: "build",
    },
  ],
  build: {
    cssCodeSplit: true,
    lib: {
      entry: path.resolve(__dirname, "src/components/index.ts"),
      name: "index",
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react"],
      output: {
        manualChunks(id) {
          if (id.match(/\/components\/[\w\W]*\/*.tsx$/)) {
            const componentPath = id.split(".");
            const componentName =
              componentPath[componentPath.length - 2].split("/");
            return `${componentName[componentName.length - 2]}/${
              componentName[componentName.length - 1]
            }`;
          }
        },
        globals: {
          react: "React",
        },
      },
    },
  },
});
