import { FC } from "react";

type Size = 2 | 4 | 8 | 16 | 24 | 32 | 48 | 64 | 80 | 96;

export const SpacingBlock: FC<{ size: Size }> = ({ size }) => {
  return (
    <div
      style={{
        backgroundColor: "var(--accent-color-dark)",
        width: `var(--rds-spacing--${size})`,
        height: `var(--rds-spacing--${size})`,
        marginLeft: "var(--rds-spacing--8)",
      }}
      title={`rds-spacing--${size}`}
    />
  );
};
