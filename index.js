const client = require('./app/config/client.js')
const refreshCommands = require('./app/commands/refresh.js');

const prefix = 'm!'
client.once('ready', refreshCommands);

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
});


client.on('messageCreate', async message => {
  if (!message.content.startsWith(prefix)) {
    return;
  }
  const command = message.content.slice(prefix.length).trim().split(/ +/).shift().toLowerCase();

  console.log(command)
});

