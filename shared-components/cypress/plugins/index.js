// eslint-disable-next-line @typescript-eslint/no-var-requires
const { startDevServer } = require("@cypress/vite-dev-server");

module.exports = (on, config) => {
  on("dev-server:start", (options) => startDevServer({ options }));

  return config;
};
