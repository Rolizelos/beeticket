const Discord = require('discord.js');//RABEL CODE
const data = require('quick.db')//RABEL CODE
//RABEL CODE
exports.run = async (client, message, args) => {//RABEL CODE
const prefix = await data.fetch(`prefix.${message.guild.id}`) || client.ayarlar.prefix;//RABEL CODE
const ad = await data.fetch(`numara.${message.channel.id}`)//RABEL CODE
if(!ad) {//RABEL CODE
ad = '0' }//RABEL CODE
  //RABEL CODE
if(message.channel.name === `ticket-${ad}` || message.channel.name === `closed-${ad}`) {//RABEL CODE
const ann = await data.fetch(`asd.${message.guild.id}.${message.channel.id}.${message.author.id}`)//RABEL CODE
if(!ann) return message.channel.send(`Bu bilet senin değil.`)//RABEL CODE
message.delete()//RABEL CODE
//RABEL CODE
message.channel.send(new Discord.RichEmbed()//RABEL CODE
.setColor('#ffff00')//RABEL CODE
.setDescription(`Bilet ${message.author} tarafından kapatıldı.`))//RABEL CODE
message.channel.setName(`closed-${ad}`)//RABEL CODE
message.channel.send(new Discord.RichEmbed()//RABEL CODE
.setColor('RED')//RABEL CODE
.setDescription(`:unlock:: Ticketi tekrar açar.//RABEL CODE
//RABEL CODE
:no_entry:: Ticketi siler.`)).then(m => {//RABEL CODE
m.react('🔓')//RABEL CODE
m.react('⛔')//RABEL CODE
let sil = (reaction, user) => reaction.emoji.name === "⛔" && user.id !== client.user.id && user.id == message.author.id//RABEL CODE
let sill = m.createReactionCollector(sil, { time: 0 });//RABEL CODE
let geri = (reaction, user) => reaction.emoji.name === "🔓" && user.id !== client.user.id && user.id == message.author.id//RABEL CODE
let geriaç = m.createReactionCollector(geri, { time: 0 });//RABEL CODE
//RABEL CODE
geriaç.on('collect', async reaction => {//RABEL CODE
const author = reaction.users.last()//RABEL CODE
m.delete('500')//RABEL CODE
reaction.remove(author.id) //RABEL CODE
message.channel.send(new Discord.RichEmbed()
.setColor('https://i.hizliresim.com/dg9kdN.png')//RABEL CODE
.setDescription(`Bilet ${message.author} tarafından tekrar açıldı.`))//RABEL CODE
message.channel.setName(`ticket-${ad}`)//RABEL CODE
})//RABEL CODE
//RABEL CODE
sill.on('collect', async reaction => {//RABEL CODE
const author = reaction.users.last()//RABEL CODE
reaction.remove(author.id) //RABEL CODE
message.channel.send(new Discord.RichEmbed()//RABEL CODE
.setColor('RED')//RABEL CODE
.setDescription(`Bilet 5 saniye sonra ebediyen silinecek.`))//RABEL CODE
setTimeout(async () => {//RABEL CODE
message.channel.delete()//RABEL CODE
data.delete(`asd.${message.guild.id}.${message.channel.id}`)//RABEL CODE
}, 5000)//RABEL CODE
//RABEL CODE
})  //RABEL CODE
//RABEL CODE
})//RABEL CODE
  //RABEL CODE//RABEL CODE
//RABEL CODE
} else { return message.channel.send(`Bu komutu bir bilet kanalında kullanın.`) }//RABEL CODE
//RABEL CODE
};//RABEL CODE
exports.conf = {//RABEL CODE
  enabled: true,//RABEL CODE
  guildOnly: true,
  aliases: [],
  permLevel: 0
}
//RABEL CODE
exports.help = {
  name: 'kapat'
};//RABEL CODE
//RABEL CODE