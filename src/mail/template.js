function emailTemplate(title, name, message) {
    return `<!DOCTYPE html>
    <html lang="pt-br">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
        * {
          margin: 0;
          padding: 0;
          font-family: 'Inter', sans-serif;
        }
        .email-container {
          width: 100vw;
        }
        .email-header {
          background-color: #192039;
          padding: 2rem;
          height: fit-content;
        }
        .email-img {
          display: flex;
          align-items: center;
          margin-bottom: 2rem;
        }
        .img {
          width: 10rem;
        }
        .titulo-header {
          color: #fff;
          font-size: 2rem;
        }
        .email-main {
          background-color: #dfdede;
          padding: 2rem;
          height: fit-content;
        }
        .email-nome-container {
          color: #192039;
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        .email-footer {
          background-color: #fff;
          padding: 2rem;
          height: fit-content;
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="email-header">
          <div class="email-img">
            <img class="img"
              src="https://github.com/IntecEmbu/Biblioteca-frontend/blob/main/src/images/logo.png?raw=true" />
          </div>
          <div class="email-titulo-container">
            <span class="titulo-header">${title}</span>
          </div>
        </div>
        <div class="email-main">
          <div class="email-nome-container">
            <span class="nome-main">Olá, ${name}!</span>
          </div>
          <div class="email-msg-container">
            <span class="msg-main">${message}</span>
          </div>
        </div>
        <div class="email-footer">
          <div class="email-footer-container">
            <span class="msg-footer">Este é um e-mail automático, por favor, não responda.</span>
          </div>
        </div>
      </div>
    </body>
    </html>` 
  }
  
export default emailTemplate
