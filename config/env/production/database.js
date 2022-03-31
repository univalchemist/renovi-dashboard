module.exports = ({ env }) => ({
    defaultConnection: "default",
    connections: {
      default: {
        connector: "bookshelf",
        settings: {
          client: "postgres",
          host: env("DATABASE_HOST", "localhost"),
          port: env.int("DATABASE_PORT", 5432),
          database: env("DATABASE_NAME", "renovi_backend"),
          username: env("DATABASE_USERNAME", "renovi_admin"),
          password: env("DATABASE_PASSWORD", "renovi2022backend"),
          schema: env("DATABASE_SCHEMA", "public"),
        },
        options: {},
      },
    },
  });
