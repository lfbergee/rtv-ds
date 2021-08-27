const basePath = "@rikstv/shared-components/dist";

export const resolveStyle = (name: string): string => {
  switch (true) {
    case name === "light-mode":
      return "";
    case name === "strim-provider":
      return `${basePath}/core/Strim.css`;
    case name === "riks-tv-provider":
      return `${basePath}/core/RiksTV.css`;
    case ["display-title", "h1", "h2", "h3", "h4", "h5", "body", "sub-body", "bold", "meta", "tag"].includes(name):
      return `${basePath}/typography/Typography.css`;
    case ["radio-toggle-input", "field-set"].includes(name):
      return `${basePath}/toggle/RadioToggle.css`;
    case ["primary-button", "secondary-button", "tertiary-button"].includes(name):
      return `${basePath}/button/Button.css`;
    case ["primary-icon-button", "secondary-icon-button", "tertiary-icon-button"].includes(name):
      return `${basePath}/button/IconButton.css`;
    case name === "toggle-button":
      return `${basePath}/toggleButton/ToggleButton.css`;
    default:
      throw new Error(`Shared-component ${name} not mapped to css file`);
  }
};
