import fs from 'fs'
import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `Use example ${usedPrefix}${command} Minecraft`
  let vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw 'Video/Audio Tidak ditemukan'
  let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
  const url = 'https://www.youtube.com/watch?v=' + videoId

let pdf = './media/wa.pdf'

let ydoc = {
    key: {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'},
    message: { 
    "documentMessage": {
    //'document':{'url':pdf},
    'mimetype':'application/pdf',
    'fileName':'YouTube Play',
    'fileLength':1000000000,
    'pageCount':1
}}}

let txt = `
╭─● *P L A Y*
┃➥  *Judul*: ${title}
┃➥ *Diterbitkan*: ${publishedTime}
┃➥ *Durari*: ${durationH}
┃➥ *Penonton*: ${viewH}
╰─● *Deskripsi*:
${description}

*Url*: ${url}
`

const ybut = [
  {buttonId: `${usedPrefix}yta ${url} yes`, buttonText: {displayText: '🎵 Audio'}, type: 1},
  {buttonId: `${usedPrefix}ytv ${url} yes`, buttonText: {displayText: '🎥 Video'}, type: 1},
  {buttonId: `${usedPrefix}yts ${url}`, buttonText: {displayText: 'YouTube Search'}, type: 1}
]

const yusufMsg={
    'image':{'url':thumbnail},
    'contextInfo':{
        'externalAdReply':{
            'showAdAttribution': true,
            'mediaUrl':sig,
            'mediaType':1,
            'title':wm,
            'body':'Created by Yusuf',
            'thumbnail':fs.readFileSync("./media/logo.jpg"),
            'sourceUrl':'https://wa.me/6283873115706'}},
            'caption':`➦ *YOUTUBE PLAY*`,
            'footer':txt.trim()+'\n\n'+wm,
            'buttons':ybut,
                'headerType':4};
                
conn.sendMessage(m.chat,yusufMsg,{'quoted':ydoc,'mentionedJid':[m.sender]});

  /*await conn.sendHydrated(m.chat, `
*${htki} PLAY ${htka}*

${htjava} *Title:* ${title}
📤 *Published:* ${publishedTime}
⏰ *Duration:* ${durationH}
👁️ *Views:* ${viewH}

🔗 *Url:* ${url}
📔 *Description:* ${description}
  `.trim(), wm, thumbnail, url, '📣 GO TO YOUTUBE', null, null, [
    ['🎶 Audio', `${usedPrefix}yta ${url} yes`],
    ['🎥 Video', `${usedPrefix}ytv ${url} yes`],
    ['🔎 Youtube Search', `${usedPrefix}yts ${url}`]
  ], m)*/
}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play?$/i

handler.exp = 0
handler.limit = false
handler.register = false

export default handler