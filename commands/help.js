const Discord = require('discord.js');
const data = require('quick.db')
exports.run = async (client, message, args) => {
const prefix = await data.fetch(`prefix.${message.guild.id}`) || client.ayarlar.prefix;
const embed = new Discord.RichEmbed()///Gweep-creative
                .setColor('GOLD')///Gweep-creative
        .setFooter(`${message.author.username} Başarıyla Yardım Komutunu Kullandı!`, message.author.avatarURL)///Gweep-creative
        .setAuthor('Ticket Bot Yardım Menüsü')///Gweep-creative
        .setThumbnail('https://i.hizliresim.com/dg9kdN.png')///Gweep-creative
        .setDescription('Botu Davet Etmek İçin '+ `${prefix}davet` + ' yazabilirisiniz.',false)///Gweep-creative
        .addField('**__Ekle__**',+ `${prefix}+ ekle @rol #kanal` + 'Ticket a başka birisini/rolü eklersiniz.',true )///Gweep-creative
        .addField('**__Sil__**','  `sil @etiket #kanal` Ticket a ekli birisini/rolü silersiniz.',true)///Gweep-creative
        .addField('**__Kapat__**',' `kapat` Ticket ı kapatırsınız.',true)///Gweep-creative
        .addField('**__Aç__**',' `aç @etiket #kanal` Ticket ı açarsınız.',true)///Gweep-creative
        .addField('**__Bilet Sil__**',' `bilet-sil` Ticket ı silersiniz.',true)///Gweep-creative
        .addField('**__Ping__**','`ping` Botun Pingini Gösterir.',true)///Gweep-creative
        .addField('**__Ticket Kanal__**','  `ticket-kanal [ayarla/sıfırla] (kanal)` Ticket Kanalı Ayarlarınız.',true)///Gweep-creative
        .addField('**__Ticket__**','  `ticket gönder` Ticket Mesajı Yolar.',false)///Gweep-creative
        .addField('**__Bilgilendirme__**','  `davet` | Botu Sununuya Davet Edersiniz',true)///Gweep-creative
message.channel.send(embed)  }  ///Gweep-creative
///Gweep-creative
  ///Gweep-creative
///Gweep-creative
exports.conf = {///Gweep-creative
  enabled: true,///Gweep-creative
  guildOnly: true,///Gweep-creative
  aliases: ["help"],///Gweep-creative
  permLevel: 0///Gweep-creative
}
///Gweep-creative
exports.help = {
  name: 'yardım'
};