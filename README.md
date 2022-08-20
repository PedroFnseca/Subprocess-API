# Rotas 🛣️

<br>

## Rota de email 📬
> ### Método POST 

##### Enviar um email com html ```.../email/html```
```
{
    "email": "destinatário",
    "subject": "assunto",
    "html": "conteudo-html"
}
```

##### Enviar um email com texto simples ```.../email/text```
```
{
    "email": "destinatário",
    "subject": "assunto",
    "text": "conteudo-texto"
}
```