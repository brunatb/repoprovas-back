require("dotenv").config();

module.exports = {
  type: "postgres",
  url: process.env.DATABASE_URL,
  migrationsTableName: "migrations",
  entities: [
    process.env.NODE_ENV === "production"
      ? "dist/entities/*.js"
      : "src/entities/*.ts",
  ],
  migrations: [
    process.env.NODE_ENV === "production"
      ? "dist/migrations/*.js"
      : "src/migrations/*.ts",
  ],
  cli: {
    migrationsDir: "src/migrations",
    entitiesDir:
      process.env.NODE_ENV === "development" ? "src/entities" : "dist/entities",
  },
};
