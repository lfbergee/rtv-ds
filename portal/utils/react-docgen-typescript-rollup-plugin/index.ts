import docgen from "react-docgen-typescript";

export default () => {
  const options = {
    savePropValueAsString: true,
  };

  return {
    name: "react-docgen-typescript-rollup-plugin",
    transform(_: any, id: string) {
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
