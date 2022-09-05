import emailTemplate from "./template.js"

export default function closeToDateEmail(user_name, book_name, return_prediction_formatted, return_prediction_day){
    
    const title = `Empréstimo do livro ${book_name} próximo ao vencimento`
    
    const message = `
        <p>O empréstimo do livro <b>${book_name}</b> está chegando <b>próximo ao vencimento.</b></p>
        <br>
        <p>Fique atento pois a válidade do empréstimo vai <b>até ${return_prediction_formatted}</b> na <b>${return_prediction_day}</b></p>
        <br><br>
        <p>Caso já tenha devolvido, ignore essa mensagem.</p>
    `
    return emailTemplate(user_name, title, message)
}