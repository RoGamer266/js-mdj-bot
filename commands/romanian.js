const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setTitle('DIN SOMUL CEL DIN MOARTE')
        .setAuthor('DESTEAPTATE ROMANE')
        .setDescription('LA CARE TE-ADANCIRA BARBARII DE TIRAN')
        .setColor('#FF2D00')
        .setImage('https://cdn.discordapp.com/attachments/740902437111726172/783299095757979668/for_1_december.jpg')
        .setFooter('chad')
        .setTimestamp()
        
    message.channel.send(embed);
}

module.exports.config = {
    name: "romanian",
    description: "romanian yws",
    usage: ".romanian",
    accessableby: "Members",
    aliases: ['rom']
}