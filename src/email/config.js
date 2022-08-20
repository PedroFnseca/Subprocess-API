import nodeMailer from 'nodemailer'

// Cria um transporte para o email
function createTransporter(){
    return nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PWD_APP
        },
        tls: {
          rejectUnauthorized: false
        }
      })
}

// Envia email com html
function sendMailHTML(to, subject, html){
    return createTransporter().sendMail({
        from: process.env.EMAIL_USER,
        to,
        subject,
        html
    })
}

// Envia email com texto simples
function sendMailText(to, subject, text){
    return createTransporter().sendMail({
        from: process.env.EMAIL_USER,
        to,
        subject,
        text
    })
}

export default {
    sendMailHTML,
    sendMailText
}