const path = require("path");
const packageConfig = require(path.resolve(__dirname, "./package.json"));

module.exports = {
  AppID: packageConfig.AppID,
  Env: packageConfig.config.env,
  qconfig: packageConfig.config.qconfig,
  'vi.ignite': true,
};
