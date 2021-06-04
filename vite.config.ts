import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import mdx from "vite-plugin-mdx";
import reactJsx from "vite-react-jsx";
import path from "path";

const mdxOptions = {
  remarkPlugins: [],
  rehypePlugins: [],
};

export default defineConfig({
  plugins: [reactRefresh(), mdx(mdxOptions), reactJsx()],
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
