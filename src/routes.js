import express, { Router } from 'express'
import email from './controllers/EmailController.js'

const route = express.Router()

route.use('/email', email)

route.use('*', (req, res) => {
    res.status(404).json({
        message: 'Not found'
    })
})

export default route