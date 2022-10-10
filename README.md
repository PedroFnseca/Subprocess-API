# Backend auxiliar 🛠️

## Como funciona 🤔

### De forma resumida, o backend auxiliar realiza as seguintes tarefas:

- Registrar multa em caso de atraso de devolução.
- Enviar email para empréstimos atrasados avisando o usuário.
- Enviar email para empréstimos próximos da data de devolução avisando o usuário.

<br>

## Como usar 🤓

### Para usar o backend auxiliar, é necessário ter o [Node.js](https://nodejs.org/en/) instalado em sua máquina. Após isso, siga os passos abaixo:

- Clone o repositório em sua máquina.
- Abra o terminal na pasta do projeto e execute o comando `npm install` para instalar as dependências.
- Crie um arquivo `.env` na raiz do projeto e preencha as variáveis de ambiente com os dados do seu banco de dados e do seu servidor de email. Segue um exemplo de como deve ficar o arquivo:

```bash
DB_HOST=         # Host do banco de dados
DB_NAME=         # Nome do banco de dados
DB_USER=         # Usuário do banco de dados
DB_PWD=          # Senha do banco de dados
DB_PORT=         # Porta do banco de dados

EMAIL_URL=       # URL do servidor de email
EMAIL_PWD_APP=   # Senha email
```

- Execute o comando `npm start` para iniciar o servidor.

<br>

## Como irá ficar no seu terminal 🖥️

<p align="center">
<!-- Imagem aqui -->
<p>

<br>

## Tecnologias utilizadas 🛠️

<p align="center">
<img src="https://img.shields.io/badge/-Node.js-339933?style=flat-square&logo=Node.js&logoColor=white">
<img src="https://img.shields.io/badge/-Nodemailer-CC3534?style=flat-square&logo=Nodemailer&logoColor=white">
<img src="https://img.shields.io/badge/-Mysql-4479A1?style=flat-square&logo=Mysql&logoColor=white">
<p>
