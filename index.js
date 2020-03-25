const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', message =>
{
    client.user.setPresence({ game: { name: '女神の祝福' }, status: 'idle' });  
    console.log('ルチアーナ起動');

    const ch_name = "【グローバルチャット】";

    client.channels.forEach(channel =>
    {
        if (channel.name === ch_name) 
        {
            channel.send("わたしは**ルチアーナ**です。**ルチア**とお呼びください。")
            channel.send(
            {
                embed: 
                {
                    color: 16757683,
                    title: "参加鯖名一覧",
                    url: "https://discord.gg/ENxnsJM",
                    description: "BOSS協定締結している鯖です。",
                    fields: [
                    {
                        name: "VIRTUAL SQUARE",
                        value: "[ここをクリック](https://discord.gg/6nhcRh9)",
                        inline: true
                    },
                    {
                        name: "GaminGprotocol",
                        value: "[ここをクリック](https://discord.gg/9m58qfR)",
                        inline: true
                    },
                    {
                        name: "mayayの甘味処",
                        value: "[ここをクリック](https://discord.gg/BrGG5HE)",
                        inline: true
                    },
                    {
                        name: "暇な鯖",
                        value: "[ここをクリック](https://discord.gg/7ruz7cA)",
                        inline: true
                    },
                    {
                        name: "†強欲の帝国†",
                        value: "[ここをクリック](https://discord.gg/fkUmDN3)",
                        inline: true
                    }]
                }
            })
            return;
        }
        return;
    });
})

client.on('message', message =>
{
    if (message.channel.name === '【グローバルチャット】')
    {
        if (message.author.bot) return;
        if (message.content.match(/discord.gg/)) 
        {
            message.delete(100)
            return;
        }
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
                if (channel.name === '【グローバルチャット】')
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
                if (channel.name === '【グローバルチャット】')
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


