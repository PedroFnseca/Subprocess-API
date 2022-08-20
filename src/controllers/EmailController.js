import express from 'express'
import nodeMailer from '../email/config.js'
import { body, validationResult } from 'express-validator'

const route = express.Router()

// Endpoint para enviar email com html
route.post('/html',[
    body('email').isEmail().withMessage('Email inválido'),
    body('subject').isString().withMessage('Assunto inválido'),
    body('html').isString().withMessage('Html inválido')
], async (req, res) => {

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { email, subject, html } = req.body

    try {

        await nodeMailer.sendMailHTML(email, subject, html)

        res.status(200).json({
            message: 'Email sent'
        })
    } catch(error){
        res.status(500).json({
            message: 'Error sending email',
            error
        })
    }
})

export default route