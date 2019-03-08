const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "+"; // ضع البريفكس الخاص بك هنا



console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
console.log('         [Wait please .. ]       ')
console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
client.on('ready', () => {
	console.log('')
	console.log('')
	console.log('')
	console.log('')
	console.log('')
	console.log('')
	console.log('')
	console.log('')
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log(`Logged in as [ ${client.user.tag}! ]`);
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log('[           BOT IS ONLINE         ]')
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log('[        info         ]')
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
});


client.on('message', message => {
    let messageArray = message.content.split(" ");
    
    let command = messageArray[0];
    
    
    if (command === `${prefix}help`) {
      message.channel.send(`**تم الارسال في الخاص**`);
			let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .addField('     **=-=-:: [Oméega Bot ,] ::-=-=** ' ,'╔[❖═════════════════════❖]╗')
				.addField(`**${prefix}sug | لعمل اقترح لتطوير البوت  **` ,'**=-=-=-=-=-=-=-=-=-=-=**')
				.addField(`**${prefix}count | رسالة جماعية للاونلاين فقط**` ,'**=-=-=-=-=-=-=-=-=-=-=**')
				.addField(`**${prefix}bc2 | رسالة جماعية للوفلاين فقط**` ,'**=-=-=-=-=-=-=-=-=-=-=**')
				.addField(`**${prefix}bcrole | رسالة جماعية لرتبة معينه**` ,'**=-=-=-=-=-=-=-=-=-=-=**')
                .addField('=-=- [ شكرا على استعمال البوت ] -=-= ' ,'╚[❖═════════════════════❖]╝')
                .setFooter(`by Va | NoHaxJustAbdou#6562`)
                .setTimestamp()
			
                message.author.sendEmbed(embed)
	}
});

client.on('message', message =>{
if(message.content.startsWith(prefix + 'count')){
message.channel.send(`

 
${message.guild.memberCount} <== ** عدد الكل**
${message.guild.members.filter(m =>!m.user.bot).size} <==  ** عدد الاعضاء**
${message.guild.members.filter(m=>m.user.bot).size} <== ** عدد البوتات**
`)
}
});

client.on('message', message => {  
            if(!message.channel.guild) return; 
var args = message.content.split(' ').slice(1).join(' '); 
if (message.content.startsWith('+Founder')){ 
 if (message.author.id !== '538349275713634315') return message.reply('** هذا الأمر قفط لصاحب البوت و شكراًً **') 
message.channel.sendMessage('جار ارسال الرسالة |✅') 
client.users.forEach(m =>{ 
m.sendMessage(args) 
}) 
} 
});

client.on('message', message => {let prefix = "+";
if(message.content.startsWith(prefix + "sug")) {
      message.delete()

const args = message.content.slice(prefix.length).trim().split(/ +/g);

  var suggestMessage = args.slice(1).join(" ")
  if(!suggestMessage) return message.reply("الرجاء وضع اقتراح")
  let suggestsEMBED = new Discord.RichEmbed()
   .setColor('#0028db')
   .setTitle(" !أقتراح جديد ")
   .setDescription(`**${suggestMessage}**`)
   .setFooter(` المقترح : ${message.author.tag}`)
  
       let suggests = message.guild.channels.find(ch => ch.name === "الاقتراحات");
                   if (!suggests) return message.reply("يرجى صنع روم بأسم : الاقتراحات")
               suggests.send(suggestsEMBED);
}
})

client.on('message', message => {
    var BotServersChannel = "541216757784903693";// ايدي الروم المطلوب يرسل فيه السيرفرات
    var BotOwnerID = "538349275713634315";// ايدي اونر البوت
    if(message.author.bot) return;
    if(message.content === prefix + 'botservers') {
    if (message.author.id !== BotOwnerID) return;
      client.guilds.forEach(g => {
          var botserverembed = new Discord.RichEmbed()
        .setTimestamp()
        .setColor('RANDOM')
        .setThumbnail(g.iconURL)
        .addField("**ServerName**", `**${g.name}**`, true)
        .addField("**ServerID**", `**${g.id}**`, true)
        .addField("**Members**", `**${g.memberCount}**`, true)
        .addField("**Roles**", `**${g.roles.size}** Role `, true)
        .addField('**Channels**', `**${g.channels.size}**`, true);
        g.channels.get(g.channels.first().id).createInvite({
          maxUses: 5,
          maxAge: 86400,
        }).then(i => client.channels.get(BotServersChannel).send(`Invite Link: <https://discord.gg/${i.code}>\nServer Owner: <@${g.owner.id}>`,{embed: botserverembed}));
      })
    }
});//By MK ... Alpha Codes


client.on('ready', () => {
  client.user.setPresence('dnd')
  client.user.setActivity(`+help | Servers: ${client.guilds.size} | Version: 1.0.1`)
  console.log(' Logged in as community Bot ')
});



client.login(process.env.TOKEN); 
