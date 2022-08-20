import nodeMailer from 'nodemailer'

// Cria um transporter para o envio de emails
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

// Envia email com texto simples
async function sendMailText(to, subject, text) {
  
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    text
  }

  await createTransporter().sendMail(mailOptions)
}


// Envia email com html 
async function sendMailHTML(to, subject, html) {

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    html
  }

  await createTransporter().sendMail(mailOptions)
}


export default {
  sendMailText,
  sendMailHTML
}