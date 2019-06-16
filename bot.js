const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BNTYyNjc4Mzk3MTUxNjA4ODM0.XQYuMQ.8AqZpjd9LW-S9_6iWKRih4p-KFM);
