//Manter bot online
const express = require ('express');
const app = express();

app.get('/', (request, response) => {
    const ping = new Date();

    ping.setHours(ping.getHours() - 3);
    console.log(`Ligação: [${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}]`);
    response.sendStatus(200);
});
app.listen(process.env.PORT);


//Constantes
const Discord = require ('discord.js');
const client = new Discord.Client({
  disableMentions:'everyone' //para o bot não marcar @everyone
});


//Evento 'ready'
client.on("ready", () => {
  console.clear()
  console.log(`Conectado com sucesso ao ${client.user.tag}`);
  client.user.setActivity(`Conectado!`)
});


//Login ao bot
const loginToken = process.env['TOKEN'];
client.login(loginToken)
