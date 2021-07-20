/* eslint-disable jsx-a11y/anchor-has-content */
import { FC } from "react";
import "./style.scss";

export const NpmLink: FC = () => (
  <a
    target="_blank"
    rel="noopener noreferrer"
    aria-label="npm package"
    href="https://www.npmjs.com/package/@rikstv/shared-components"
    className="portal-external-link portal-external-link--npm"
  ></a>
);
