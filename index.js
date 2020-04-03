const Discord = require('discord.js');
const client = new Discord.Client();
const talkedRecently = new Set();

client.on('ready', message =>
{
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
                    color: 15844367,
                    title: "B.O.S.S.所属鯖名一覧",
                    url: "https://discord.gg/ENxnsJM",
                    description: "B.O.S.S.規約同意サーバーです。",
                    thumbnail: 
                    {
                        url: "https://cdn.discordapp.com/attachments/692195402304192542/692236540625158144/JPEG_20200324_191014.jpg"
                    },
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
    if (message.content.includes('じゃんけん')) 
    {
        message.react('✊')
            .then(() => message.react('✌'))
            .then(() => message.react('✋'))
    }
    if (message.channel.name === '雑談部屋')
    {
        if (message.content.startsWith('【開発状況閲覧希望】')) 
        {
            message.member.addRole('692213362624299030')
            message.channel.send("付与しました" + message.author)
            return;
        };
    }
    if (message.channel.name === '質問部屋')
    {
        if (message.content.startsWith('【質問】')) 
        {
            message.member.addRole('691953560190976010')
            message.channel.send("付与しました" + message.author)
            return;
        };
    }
    if (message.channel.name === '提案部屋')
    {
        if (message.content.startsWith('【提案】')) 
        {
            message.member.addRole('692264917591523349')
            message.channel.send("付与しました" + message.author)
            return;
        };
    }
    if (message.channel.name === '【グローバルチャット】')
    {
        if (message.author.bot) return;
        if (message.content.match(/discord.gg/)) 
        {
            message.delete(100)
            return;
        }
        if (talkedRecently.has(message.author.id)) 
        {
            message.channel.send("5秒間発言できません。-" + message.author)
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
                    talkedRecently.add(message.author.id);
                    setTimeout(() => 
                    {
                        talkedRecently.delete(message.author.id); 
                    }, 5000)
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
                    talkedRecently.add(message.author.id);
                    setTimeout(() => 
                    {
                        talkedRecently.delete(message.author.id);
                    }, 5000)
                    return;
                }
                return;
            }));
            return;
        });
    }
})

client.on('messageReactionAdd', async (reaction, user) => 
{
    // bot自身なら処理しない
    if(user.username === client.user.username) 
    {
        return;
    }
    if(reaction.message.content.includes('じゃんけん')) 
    {
        if(reaction.emoji.name === '✊' || reaction.emoji.name === '✌' || reaction.emoji.name === '✋') 
        {
            var guChokiPa = Math.floor( Math.random() * 3 );
            if(guChokiPa == 0) 
            {
                reaction.message.channel.send('✊');
            } 
            else if(guChokiPa == 1) 
            {
                reaction.message.channel.send('✌');
            } 
            else if(guChokiPa == 2) 
            {
                reaction.message.channel.send('✋');
            }
        }
    }
});

client.login(process.env.BOT_TOKEN);


