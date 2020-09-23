const Discord = require('discord.js');
const data = require('quick.db')
//RABEL CODE
exports.run = async (client, message, args) => {//RABEL CODE
const prefix = await data.fetch(`prefix.${message.guild.id}`) || client.ayarlar.prefix;//RABEL CODE
const ad = await data.fetch(`numara.${message.channel.id}`)//RABEL CODE
if(message.channel.name === `ticket-${ad}` || message.channel.name === `closed-${ad}`) {//RABEL CODE
const ann = await data.fetch(`asd.${message.guild.id}.${message.channel.id}.${message.author.id}`)//RABEL CODE
if(!ann) return message.channel.send(`Bu bilet senin değil.`)//RABEL CODE
message.delete()//RABEL CODE
//RABEL CODE
message.channel.send(new Discord.RichEmbed()//RABEL CODE
.setColor('RED')//RABEL CODE
.setDescription(`Bilet 5 saniye sonra ebediyen silinecek.`))//RABEL CODE
setTimeout(async () => {
message.channel.delete()//RABEL CODE
data.delete(`asd.${message.guild.id}.${message.channel.id}.${message.author.id}`)//RABEL CODE
}, 5000)//RABEL CODE
//RABEL CODE
} else { return message.channel.send(`Bu komutu bir bilet kanalında kullanın.`) }//RABEL CODE
//RABEL CODE
};//RABEL CODE
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'bilet-sil'
};// codare