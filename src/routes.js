import express from 'express'

const route = express.Router()

route.use('*', (req, res) => {
    res.status(404).json({
        message: 'Not found'
    })
})

export default route