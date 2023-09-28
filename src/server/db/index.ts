import { createClient } from "@libsql/client/web";
import { drizzle } from "drizzle-orm/libsql";
import { User } from "./schema";
export const TEST = "test";
export * from "./schema";
const client = createClient({
  url: process.env.DATABASE_URL ?? "",
  authToken: process.env.DATABASE_AUTH_TOKEN ?? "",
});
export const schema = {
  User,
};
export const db = drizzle(client, {
  schema,
});
export type Db = typeof db;
