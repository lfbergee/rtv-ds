import styleImport from "vite-plugin-style-import";
import { resolveStyle } from "./resolveStyle";

export const styleResolver = styleImport({
  libs: [
    {
      libraryName: "@rikstv/shared-components",
      esModule: true,
      resolveStyle,
    },
  ],
});
