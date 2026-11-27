import { Pool } from "pg";
import config from "../config";


export const pool = new Pool({
    connectionString : config.connection_string
});


export const initDB = async ()=>{
    try {
        await pool.query(`
            CREATE TABLE IF NOT EXISTS users(
                id SERIAL PRIMARY KEY,
                name VARCHAR(255),
                email VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL,
                role VARCHAR(15) DEFAULT 'attendee',
                create_at TIMESTAMP DEFAULT NOW(),
                updated_at TIMESTAMP DEFAULT NOW()
            )
        `);
         await pool.query(`
            CREATE TABLE IF NOT EXISTS events(
                id SERIAL PRIMARY KEY,
                title TEXT NOT NULL,
                description TEXT NOT NULL, 
                category TEXT NOT NULL,
                date TIMESTAMP NOT NULL, 
                location TEXT NOT NULL,
                total_seats INT NOT NULL,
                available_seats INT NOT NULL,
                price NUMERIC(10,2) NOT NULL CHECK (price>=0), 
                organizer_id INT NOT NULL,

                create_at TIMESTAMP DEFAULT NOW(),
                updated_at TIMESTAMP DEFAULT NOW(),

                FOREIGN KEY(organizer_id) REFERENCES users(id) ON DELETE CASCADE
            )
        `);
        console.log("Database created successfully");
    } catch (error) {
        console.log(error);
    }
}