import docgen from "react-docgen-typescript";

export default (): {
  name: string;
  transform: (source: string, id: string) => { code: string; map: { mappings: string } } | null;
} => {
  const options = {
    savePropValueAsString: true,
  };

  return {
    name: "react-docgen-typescript-rollup-plugin",
    transform(_, id) {
      if (!id.endsWith("?type")) {
        return null;
      }

      const type = docgen.parse(id.replace("?type", ""), options);
      return {
        code: `export default ${JSON.stringify(type)};`,
        map: { mappings: "" },
      };
    },
  };
};
