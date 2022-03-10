import { NextApiRequest, NextApiResponse } from 'next'
import { openDB } from '../../openDB'


export default async function handlerRooms(req: NextApiRequest, res: NextApiResponse) {
  const db = await openDB()
  if (req.method === 'GET') {
    if (req.query.faculty) {
      const rooms = await db.all('select * from rooms where fakultyId = ?', [req.query.faculty]);

      res.json(rooms);
    }
    else {
      const rooms = await db.all('select * from rooms');
      res.json(rooms);
    };
  } 
  else res.status(405).end();
};