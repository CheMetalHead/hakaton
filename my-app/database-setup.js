const sqlite = require('sqlite');
const sqlite3 = require('sqlite3');

(async () => {
  // open the database
  const db = await sqlite.open({
    filename: './faculty.sqlite',
    driver: sqlite3.Database
  });


  // testing DB connection
  await db.migrate({ force: true });
  const fax = await db.all('SELECT * FROM faculty');
  console.log('Fakulteti', JSON.stringify(fax, null, 2))

  const citaonice = await db.all('SELECT * FROM rooms');
  console.log('Citaonice', JSON.stringify(citaonice, null, 2))
})()