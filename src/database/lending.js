import db from './config.js'

// Verifica os emprestimos que estão proximos ao vencimento de 1 dia
async function checkLendingBook1() {
    const conn = await db.connect()
    const [rows] = await conn.query('SELECT * FROM VW_lending_CloseToDate_4')
    conn.end()
    return rows
}

export {
    checkLendingBook1
}
