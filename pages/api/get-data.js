import { sql } from '@vercel/postgres';

export default async function handler(request, response) {
    const pets = await sql`SELECT * FROM Timebase ORDER BY time ASC;;`;
    return response.status(200).json({ pets });
}
