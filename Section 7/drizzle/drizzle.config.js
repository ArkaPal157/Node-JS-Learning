const dotenv = require("dotenv");
const { defineConfig } = require("drizzle-kit");

dotenv.config();

const config = defineConfig({
  dialect: "postgresql",
  out: "./drizzle",
  schema: "./drizzle/schema.js",
  dbCredentials: {
    url: "postgres://postgres:admin@localhost:5432/mydb",
  },
});

module.exports = config;