/* eslint-disable jsx-a11y/anchor-has-content */
import { FC } from "react";
import "./style.scss";
import pkg from "../../../package.json";

export const GithubLink: FC = () => (
  <a
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub repository"
    href={pkg.repository.url.replace("git+", "").replace(".git", "")}
    className="portal-external-link portal-external-link--github"
  ></a>
);
