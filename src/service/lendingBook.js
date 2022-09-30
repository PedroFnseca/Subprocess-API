import {checkLendingBook1} from '../database/lending.js'
import closeToDateEmail from '../mail/closeToDate.js'
import sendEmail from './sendMail.js'

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
    const subject = `Empréstimo do livro ${book_name} próximo ao vencimento`
    const html = closeToDateEmail(user_name, book_name, return_prediction_formatted, return_prediction_day)

    // sendEmail(to, subject, html)
}

// Recebe o emprestimo e envia email para o usuario
async function lendindCloseToDate(){

    const rows = await checkLendingBook1()

    // Envia email para todos os usuarios com livros proximos ao vencimento
    for(const lending of rows){
        await sendMAil(lending)
    }
}

export {
    lendindCloseToDate
}