const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setTitle('bruh')
        .setAuthor('you are a small man')
        .setDescription('ew belgian')
        .setColor('#FF2D00')
        .setImage('https://cdn.discordapp.com/attachments/740902437111726172/778544369858641980/uXJHtN8AAAAASUVORK5CYII.png')
        .setFooter('imagine')
        .setTimestamp()
        
    message.channel.send(embed);
}

module.exports.config = {
    name: "JDM_Blue",
    description: "JDM_Blue",
    usage: ".JDM_Blue",
    accessableby: "Members",
    aliases: ['jdmblue']
}