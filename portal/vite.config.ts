import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import mdx from "vite-plugin-mdx";
import reactJsx from "vite-react-jsx";

const mdxOptions = {
  remarkPlugins: [],
  rehypePlugins: [],
};

export default defineConfig({
  plugins: [reactRefresh(), mdx(mdxOptions), reactJsx()],
});
