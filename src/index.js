import { config } from "dotenv";

config();

setInterval(() => {
  console.log("\n\n");

  const qtdMultas = 0;
  const qtdAvisos = 0;

  const dataHora = new Date();

  console.log("\t╔═══════════════════════════════════════╗");
  console.log(`\t║\tINICIO: ${dataHora.toLocaleString()}\t║`);
  console.log("\t║                                       ║");
  console.log(`\t║» Multas aplicadas\t${qtdMultas}  \t\t║`);
  console.log(`\t║» Avisos enviados\t${qtdAvisos}  \t\t║`);
  console.log("\t╚═══════════════════════════════════════╝");
}, 1000);
