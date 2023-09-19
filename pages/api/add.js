import { sql } from '@vercel/postgres';

function getCurrentTime(separator=''){
    let newDate = new Date()
    let hour = newDate.getUTCHours() + 17;
    let minute = newDate.getMinutes();
  
    minute = (Math.round(minute/15) * 15);

    if (minute == 60) {
        minute = 0;
        hour++;
    }

    hours = hours % 24
    
    return hour.toString() + ":" + minute.toString()
}
 
export default async function handler(request, response) {
    await sql`UPDATE Timebase SET Value = 99 WHERE Time = ${getCurrentTime()};`;
    const pets = await sql`SELECT * FROM Timebase;`;
    return response.status(200).json({ pets });
}
