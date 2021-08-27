import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import reactSvgPlugin from "vite-plugin-react-svg";
import reactJsx from "vite-react-jsx";
import path from "path";
import copy from "rollup-plugin-copy";

export default defineConfig({
  plugins: [
    reactRefresh(),
    reactSvgPlugin(),
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
      formats: ["cjs"],
    },
    rollupOptions: {
      external: ["react", "vite-plugin-style-import"],
      input: {
        Components: path.resolve(__dirname, "src/components/index.ts"),
        Tools: path.resolve(__dirname, "src/tools/tools.ts"),
      },
      output: {
        entryFileNames: ({ facadeModuleId }) =>
          facadeModuleId?.includes("shared-components/src/tools") ? "tools.js" : "index.js",
        manualChunks(id) {
          if (id.match(/\/components\/[\w\W]*\/*.tsx$/)) {
            const componentPath = id.split(".");
            const componentName = componentPath[componentPath.length - 2].split("/");
            return `${componentName[componentName.length - 2]}/${componentName[componentName.length - 1]}`;
          }
        },
        globals: {
          react: "React",
        },
      },
    },
  },
});
