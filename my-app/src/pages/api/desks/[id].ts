import { NextApiRequest, NextApiResponse } from 'next'
import { openDB } from '../../openDB'

export default async function deleteDesk(req:NextApiRequest,res:NextApiResponse) {
  const db = await openDB()
  if (req.method === 'DELETE') {
    await db.run(
      'DELETE FROM Desks WHERE id= ?',
      req.query.id
    );
    res.status(200).end();
  }
  else res.status(405).end();
};