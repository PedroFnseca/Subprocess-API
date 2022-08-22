import mysql from 'mysql2/promise'

async function connect(){

  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PWD , 
    database: process.env.DB_NAME
  })

  return connection
}

export default {
  connect
}