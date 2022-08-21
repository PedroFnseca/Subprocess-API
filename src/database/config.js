import mysql from 'mysql2/promise'

async function connect(){

  const DB_HOST = process.env.DB_HOST
  const DB_USER = process.env.DB_USER
  const DB_PWD = process.env.DB_PWD 
  const DB_NAME = process.env.DB_NAME

  const connection = await mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PWD, 
    database: DB_NAME
  })

  return connection
}

export default {connect}