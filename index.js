const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', message =>
{
  client.user.setPresence({ game: { name: '' } });  
  console.log('Logged in as ${client.user.tag}!');
});

client.on('message', message =>{
    if(message.author.bot){
        return;
    }
    if(message.content == '!n-doukoukai') {
        var member = message.guild.roles.fetch(499400272209248267) 
        message.member.addRole(member);
    }
});  

client.on('message', message =>
{
    if (message.channel.name === 'ｎグローバル')
    {
        if (message.author.bot) return;
        if (message.attachments.size <= 0)
        {
            message.delete()
        }
        client.channels.forEach(channel =>
        {
            if (message.attachments.size <= 0)
            {
                const embed = new Discord.RichEmbed()
                    .setAuthor(message.author.tag, message.author.avatarURL)
                    .setDescription(message.content)
                    .setColor(0x2C2F33)
                    .setFooter(message.guild.name, message.guild.iconURL)
                    .setTimestamp()
                if (channel.name === 'ｎグローバル')
                {
                    channel.send(embed)
                    return;
                }
                return;
            }
            if (!message.attachments.forEach(attachment =>
            {
                const embed = new Discord.RichEmbed()
                    .setAuthor(message.author.tag, message.author.avatarURL)
                    .setImage(attachment.url)
                    .setDescription(attachment.url)
                    .setColor(0x2C2F33)
                    .setFooter(message.guild.name, message.guild.iconURL)
                    .setTimestamp()
                if (channel.name === 'ｎグローバル')
                {
                    channel.send(embed)
                    return;
                }
                return;
            }));
            return;
        });
    }
})

client.login(process.env.BOT_TOKEN);


