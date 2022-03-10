import { NextApiRequest, NextApiResponse } from 'next'
import { openDB } from '../../openDB'

export default async function handlerDesk(req:NextApiRequest, res: NextApiResponse) {
  const db = await openDB()
  if (req.method === 'GET') {
    if(req.query.room) {
      const desks = await db.all('select * from desks where room=?',(req.query.room));
      res.json(desks);
    }
    else {
      const desks = await db.all('select * from desks');
      res.json(desks);
    }
  }
  else if (req.method === 'POST') {
    await db.run(
      'INSERT INTO Desks (id, deskNum, room) VALUES(?,?,?)',
      req.body.id,
      req.body.deskNum,
      req.body.room
    );
    res.status(200).end();
  }
  else res.status(405).end();
};