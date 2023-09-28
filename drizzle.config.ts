import type { Config } from "drizzle-kit";

export default {
  schema: "./src/server/db/*.ts",
  driver: "turso",
  dbCredentials: {
    url: process.env.DATABASE_URL || "",
    authToken: process.env.DATABASE_AUTH_TOKEN || "",
  },
  strict: true,
  out: "./drizzle",
  verbose: true,
} satisfies Config;
