module.exports.run = (client, message, args, server) => {
    const { MessageEmbed } = require("discord.js");
    message.channel
      .send(
        new MessageEmbed()
          .setDescription("Pong!")
          .setFooter('Edited* by RoGamer266')
      )
      .then(sentEmbed => {
        let ping = sentEmbed.createdTimestamp - message.createdTimestamp;
        sentEmbed.edit(
          new MessageEmbed()
            .setDescription(`**Ping:** ${ping} ms`)
            .setFooter('Edited* by RoGamer266')
        );
      });
}; 

module.exports.config = {
    name: "ping",
    description: "send ping",
    usage: ".ping",
    accessableby: "Members",   
    aliases: ['p']
};