import { NextApiRequest, NextApiResponse } from 'next'
import { openDB } from '../../openDB';

export default async function handlerFaculties(req: NextApiRequest, res: NextApiResponse) {
  const db = await openDB();
  if (req.method === 'GET') {
    const fax = await db.all('select * from faculty');
    res.json(fax);
  }
  res.status(405).end();
};