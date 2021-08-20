const express = require('express')
const server = express()
const port = 3000

const mysql = require("mysql");

server.get('/', (req, res) => {
  res.send('Hello World!')
})

server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);

  // Coloca aquí tus credenciales
  const connection = mysql.createPool({
    host: "xlf3ljx3beaucz9x.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "ee6zfxo4jzdc6sb1",
    password: "c79t54iu4wb7ag6x",
    database: "uc98qw0tbiy7ouks"
  });

  /*connection.query('CREATE TABLE testname(id int, name text)', (err, rows) => {
    if (err) throw err;
    console.log('The solution is: ', rows);
  });

  connection.query('SELECT * FROM testname', (err, rows) => {
    if (err) throw err;
    console.log('The solution is: ', rows);
  });*/
})