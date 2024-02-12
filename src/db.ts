// db.ts
import pgPromise from 'pg-promise';
import dotenv from 'dotenv';

dotenv.config();

const pgp = pgPromise();

export async function createDbConnection() {
  const dbConfig = {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432,
    database: process.env.DB_NAME || 'Rafael_DB',
    user: process.env.DB_USER || 'rafael',
    password: process.env.DB_PASSWORD || 'teste123'
  };

  const db = pgp(dbConfig);

  try {
    // Initialize database schema if needed
    await db.none(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100),
        location VARCHAR(100)
      )
    `);
    await db.none(`
      CREATE TABLE IF NOT EXISTS user_languages (
        id SERIAL PRIMARY KEY,
        username VARCHAR(100),
        language VARCHAR(100)
      )
    `);
    return db;
  } catch (error) {
    console.error('Error initializing database:', error);
    throw error;
  }
}

export async function closeDbConnection(db: any) {
  try {
    await db.$pool.end();
  } catch (error) {
    console.error('Error closing database connection:', error);
    throw error;
  }
}
