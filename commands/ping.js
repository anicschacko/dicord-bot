module.exports = {
    name : 'ping',
    description : "this is a ping command!",
    execute(message, args){
        message.channel.send("Ping?");
        message.edit(`Pong! ${message.editedTimestamp - message.createdTimestamp}ms`);
    }
}