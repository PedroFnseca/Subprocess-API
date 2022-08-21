import lendingBook from './service/lendingBook.js'
import { config } from 'dotenv'

config()

// Faz o código acordar a cada 10 segundos
try{
    lendingBook.lendindCloseToDate()
} catch(err){
    console.log(err)
}

console.log('foi')