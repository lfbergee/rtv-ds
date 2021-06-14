import docgen from "react-docgen-typescript";
import { Plugin } from "rollup";
import path from "path";

const PREFIX = `\0virtual:`;
const options = {
  savePropValueAsString: true,
};

const exportType = (filePath: string) => {
  const type = docgen.parse(filePath, options);

  return `export default ${JSON.stringify(type)};`;
};

export default (): Plugin => {
  return {
    name: "react-docgen-typescript-rollup-plugin",
    resolveId(id) {
      if (id.endsWith("?type")) {
        return `${PREFIX}${id}`;
      }
    },
    transform(_, id) {
      if (!id.startsWith(PREFIX)) {
        return null;
      }

      const filePath = `..${id.replace(`${PREFIX}`, "").replace("?type", "")}.tsx`;

      return exportType(filePath);
    },
    load(id) {
      if (!id.startsWith(PREFIX)) {
        return null;
      }

      const rawFilePath = `${id.replace(`${PREFIX}`, "").replace("?type", "")}.tsx`;
      const filePath = path.resolve(__dirname, rawFilePath);

      return exportType(filePath);
    },
  };
};
