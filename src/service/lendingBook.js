import db from '../database/config.js'
import email from '../email/config.js'

// Verifica os emprestimos que estão proximos ao vencimento de 1 dia
async function checkLendingBook() {
    const conn = await db.connect()
    const [rows] = await conn.query('SELECT * FROM VW_lending_CloseToDate_1')
    conn.end()
    return rows
}

// Função que gera o dia da semana em portugues
function getDayOfWeek(day){
    switch (day) {
        case 0:
            return 'Domingo'
        case 1:
            return 'Segunda-feira'
        case 2:
            return'Terça-feira'
        case 3:
            return 'Quarta-feira'
        case 4:
            return 'Quinta-feira'
        case 5:
            return 'Sexta-feira'
        case 6:
            return 'Sábado'
    }
}

// Envia email para o usuario com o livro proximo ao vencimento
async function sendMAil(lending){

    const { user_email, user_name, book_name, return_prediction, lending_code} = lending

    // Formata a data para o padrao brasileiro
    const return_prediction_formatted = return_prediction.toLocaleDateString('pt-BR')

    // Coloca o dia da semana em portugues
    const return_prediction_day = getDayOfWeek(return_prediction.getDay())

    const to = user_email
    const subject = `Empréstimo de livro ${book_name} proximo ao vencimento`
    const html = `
        <h1>Olá, ${user_name}</h1>
        <p>O livro: ${book_name}, está próximo ao vencimento.</p>
        <p>A data de devolução é de até ${return_prediction_formatted} na ${return_prediction_day}</p>
        <p>O código do empréstimo: ${lending_code}</p>
        <p> Att, Equipe Etec Embu - Jade Biblioteca</p>
        <br>
        <p>Este é um email automático, não responda!</p>
    `

    // Comentado para não enviar email
    // await email.sendMailHTML(to, subject, html)
}

// Recebe o emprestimo e envia email para o usuario
async function lendindCloseToDate(){

    const rows = await checkLendingBook()

    // Envia email para todos os usuarios com livros proximos ao vencimento
    for(const lending of rows){
        await sendMAil(lending)
    }
}

export {
    lendindCloseToDate
}