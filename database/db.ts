import * as SQLite from "expo-sqlite";

export const initDatabase = async () => {
  const db = await SQLite.openDatabaseAsync("app.db");

  //   await db.execAsync(

  //   )

  return db;
};
