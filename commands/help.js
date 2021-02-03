const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setTitle('hello')
        .setAuthor('hello sir')
        .setDescription('so this bot was made by daewld soon to be 266_d00r, here are some commands')
        .setColor('#FF2D00')
        .setFooter('nerd')
        .addFields(
            { name: 'hi', value: 'hello', inline: true},
            { name: 'cat', value: 'sends cat', inline: true},
            { name: 'trenchboy', value: 'man', inline: true},
            { name: 'dutch', value: 'dutch', inline: true},
            { name: 'avatar', value: 'self explained', inline: true},
            { name: 'kick', value: 'yes kicks', inline: true},
            { name: 'and more', value: '**secret** ones (the commands are on github too)', inline: true},
        )
        .setTimestamp()
        
    message.channel.send(embed);
}

module.exports.config = {
    name: "help",
    description: "",
    usage: ".help",
    accessableby: "Members",
    aliases: []
}