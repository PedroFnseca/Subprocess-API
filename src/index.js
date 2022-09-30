import {lendindCloseToDate} from './service/lendingBook.js'
import { config } from 'dotenv'

config()

async function verifyLendingBook(){
    await lendindCloseToDate()
}

function verifyPenalty(){
    return true
}

setInterval(async () => {
    
    // coleta a data e hora atual
    const now = new Date()
    
    console.log('╔═══════════════════════════════════════════════════════╗')
    console.log(`║\tINICIANDO VERIFICAÇÕES: ${now.toLocaleString('pt-BR')}\t║`)
    console.log('╠═══════════════════════════════════════════════════════╣')
    
    // verifica se a hora atual é a hora de verificar os empréstimos
    if((now.getHours() === parseInt(process.env.HOUR_TO_VERIFY_LENDING))){
        console.log('║\t▪ Iniciando verificações de empréstimos\t\t║')
        // await verifyLendingBook()
        console.log('║\t◻ Verificações de empréstimos concluidas\t║')
        console.log('║\t\t\t\t\t\t\t║')
    } else {
        console.log(`║\t⊙ Os emprestimos serão verificados às ${process.env.HOUR_TO_VERIFY_LENDING}:00\t║`)
        console.log('║\t\t\t\t\t\t\t║')
    }

    if((now.getHours() === parseInt(process.env.HOUR_TO_VERIFY_PENALTY))){
        console.log('║\t▪ Iniciando verificações de multas\t\t║')
        // verifyPenalty()
        console.log('║\t◻ Verificações de multas concluidas\t\t║')
    } else {
        console.log(`║\t⊙ As multas serão verificadas às ${process.env.HOUR_TO_VERIFY_PENALTY}:00\t\t║`)
    }

    console.log('╠═══════════════════════════════════════════════════════╣')

    console.log(`║      Verificações concluidas: ${now.toLocaleString('pt-BR')}\t║`)
    console.log('╚═══════════════════════════════════════════════════════╝\n\n')
}, 3000) // intervalo de 1 hora: 1000 * 60 * 60