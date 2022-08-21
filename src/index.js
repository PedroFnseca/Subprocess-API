import {lendindCloseToDate} from './service/lendingBook.js'
import { config } from 'dotenv'

config()

async function verifyLendingBook(){
    await lendindCloseToDate()
    console.log('Verificação de empréstimos concluida')
}

setInterval(async () => {
    
    // coleta a data e hora atual
    const now = new Date()
    
    console.log(`Iniciando verficações: ${now.toLocaleString('pt-BR')}\n`)
    
    // verifica se a hora atual é a hora de verificar os empréstimos
    if(now.getHours() === parseInt(process.env.HOUR_TO_VERIFY)){
        console.log('Iniciando verificações de empréstimos\n')
        await verifyLendingBook()
        console.log('Verificações de empréstimos concluidas')
    } else {
        console.log(`Os emprestimos serão verificados às ${process.env.HOUR_TO_VERIFY}:00\n`)
    }

    console.log(`Verificações concluidas: ${now.toLocaleString('pt-BR')}`)    
}, 10000) // intervalo de 1 hora: 1000 * 60 * 60