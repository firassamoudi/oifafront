const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase, { defaultConfig }) => {
  // - Development
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      ...defaultConfig,
      env: {
      //  APP_URL: "http://dev.oifa.website:3000",
      //  API_URL: "http://dev.oifa.api:3001",
        APP_URL: "http://oifa.tech:3000",
        API_URL: "http://dev.oifa.api:3001",
      },
    };
  }

  // - Production
  return {
    ...defaultConfig,
    env: {
      APP_URL: "http://oifa.tech",
      API_URL: "http://oifa.tech",
    },
  };
};
