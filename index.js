const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("config.json");
const fs = require('fs'); 
const { measureMemory } = require('vm');
const prefix = '>';

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () =>{
    console.log('Our Bot is good to Go!');
    client.user.set
    client.user.setActivity("Helping Noobs!");
})

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get(command).execute(message, args);
    }
})


client.login(config.token); 