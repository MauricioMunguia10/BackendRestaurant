export const createDishesTable = async (db) => {
  try {
    await db.execute(`
      CREATE TABLE IF NOT EXISTS dishes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        price REAL NOT NULL,
        description TEXT,
        category TEXT NOT NULL
      );
    `);
    console.log("Dishes table created or already exists");
  } catch (error) {
    console.error("Error creating dishes table:", error);
  }
};
