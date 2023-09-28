import { sqliteTable, text } from "drizzle-orm/sqlite-core";

export const User = sqliteTable("user", {
  id: text("id").notNull().primaryKey(),
  last_name: text("last_name"),
  first_name: text("first_name"),
});
