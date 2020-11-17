module.exports.run = async (bot, message, args) => {
    return message.channel.send("sup")
}

module.exports.config = {
    name: "hi",
    description: "",
    usage: ".hi",
    accessableby: "Members",
    aliases: ['h']
}