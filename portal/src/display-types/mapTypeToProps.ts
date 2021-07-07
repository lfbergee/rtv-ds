import { RawTypeProps } from "../utils/makeComponent";

interface MappedType {
  prop: string;
  defaultValue: string;
  isRequired: boolean;
  type: string;
  isFromNodeModules: boolean;
}

export const mapTypeToProps = (typeToProp: RawTypeProps): Array<MappedType> =>
  Object.entries(typeToProp).map((p) => ({
    prop: p[0] || "",
    defaultValue: p[1]?.defaultValue?.value?.toString() || "",
    isRequired: !!p[1]?.required,
    type: p[1]?.type?.name || "",
    isFromNodeModules: !!p[1]?.declarations[0]?.fileName?.includes("/node_modules/"),
  }));
