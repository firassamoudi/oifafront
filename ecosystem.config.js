module.exports = {
  apps: [
    {
      name: "oifa",
      script: "npm",
      args: "start",
      env_production: {
        NODE_ENV: "production",
        API_URL: "http://oifa.tech",
        PORT: 3000,
      },
    },
  ],
};
