import emailTemplate from "./main.js";

function closeToDateEmail(
  user_name,
  book_name,
  return_prediction_formatted,
  return_prediction_day,
  lending_code
) {
  const title = `Empréstimo próximo ao vencimento`;

  const message = `
  <p>O empréstimo do livro <b>${book_name}</b> está chegando <b>próximo ao vencimento!</b></p>
  <br>
  <p>O código do empréstimo é <b>${lending_code}.</b></p>
  <p>Fique atento, pois a validade do empréstimo vai <b>até ${return_prediction_formatted} (${return_prediction_day}).</b></p>
  <br>
  <p>Caso já tenha devolvido, ignore essa mensagem.</p>`;

  return emailTemplate(user_name, title, message);
}

export default closeToDateEmail;
