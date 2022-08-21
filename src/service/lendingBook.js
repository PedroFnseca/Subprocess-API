import db from '../database/config.js'

// Verifica os livros que estão proximos a devolução
const lendingBook = async () => {
    const books = await db.all('SELECT * FROM books WHERE lending_date <= DATE("now") + INTERVAL 1 DAY')
}