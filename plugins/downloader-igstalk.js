import { instagramStalk } from '@bochilteam/scraper'
import fs from 'fs'
let handler= async (m, { args, usedPrefix, command }) => {
    if (!args[0]) throw `Example use ${usedPrefix}${command} <username>`
    const {
        username,
        name,
        description,
        followersH,
        followingH,
        postsH,
    } = await instagramStalk(args[0])
    /*m.reply(`
${name} *(${username})*
https://instagram.com/${username.replace(/^@/, '')}
*${followersH}* Followers
*${followingH}* Following
*${postsH}* Posts
*Bio:* ${description}
`.trim())*/


let msg = `╭─● ${name} *(${username})*
┃➥ Pengikut: *${followersH}*
┃➥ Mengikuti: *${followingH}*
┃➥ Postingan: *${postsH}*
╰─● *Bio*:
${description}

https://instagram.com/${username.replace(/^@/, '')}`
const ydoc={key:{remoteJid:'status@broadcast',
                 participant:'0@s.whatsapp.net'},
                 message:{documentMessage:{//document:{url:pdf},
                                           mimetype:'application/pdf',
                                           fileName:'IG Stalk',
                                           fileLength:1000000000,
                                           pageCount:1}}}
const ymsg={document:{url:'./media/wa.pdf'},
                mimetype:'application/pdf',
                fileName:'『 Yusuf Expert 』',
                fileLength:1000000000,
                pageCount:1,
                contextInfo:{externalAdReply:{showAdAttribution:true,
                                              mediaUrl:sig,
                                              mediaType:1,
                                              title:wm,
                                              body:'Created by Yusuf',
                                              thumbnail:fs.readFileSync("./media/logo.jpg"),
                                              sourceUrl:'https://wa.me/6283873115706'}},
                                              caption:`➦ *S T A L K*`,
                                              footer:msg+'\n\n'+wm,
                                              buttons:[{buttonId:'.donasi',buttonText:{displayText:'💰 Donasi'},type:1},
                                                       {buttonId:'.menu',buttonText:{displayText:'⋮☰ Menu'},type:1}],
                                              headerType:4}
conn.sendMessage(m.chat,ymsg,{quoted:ydoc,mentionedJid:[m.sender]})

}

handler.help = ['igstalk'].map(v => v + ' <username>')
handler.tags = ['downloader']

handler.command = /^(igstalk)$/i

export default handler