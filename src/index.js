import express from 'express'
import routes from './routes.js'
import { config } from 'dotenv'

config()

const api = express()

const PORT = process.env.PORT || 3333

api.use(express.json())
api.use('/', routes)

api.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})