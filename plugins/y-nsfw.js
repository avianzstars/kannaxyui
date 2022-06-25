import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, { conn, usedPrefix }) => {
    let res = await fetch('https://api.waifu.pics/nsfw/waifu')
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.url) throw 'Error!'

let ydoc = {
    key: {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'},
    message: { 
    documentMessage: {
    mimetype:'application/pdf',
    fileName:'NSFW',
    pageCount:1
}}}

const ybut = [
  {buttonId: '.ynsfw', buttonText: {displayText: '⏭ Lagi'}, type: 1},
  {buttonId: '.delete', buttonText: {displayText: '🗑 Hapus'}, type: 1}
]

const yusufMsg={
    image:{url:json.url},
    contextInfo:{
        externalAdReply:{
            showAdAttribution: true,
            mediaUrl:sig,
            mediaType:1,
            title:wm,
            body:'Created by Yusuf',
            thumbnail:fs.readFileSync("./media/logo.jpg"),
            sourceUrl:'https://wa.me/6283873115706'}},
            caption:`Birahi kok sama Kartun`,
            footer:`${json.url}\n\n${wm}`,
            buttons:ybut,
            headerType:4};
                
conn.sendMessage(m.chat,yusufMsg,{quoted:ydoc,mentionedJid:[m.sender]});

}
handler.help = ['ynsfw']
handler.tags = ['y']
handler.command = /^(ynsfw)/i
export default handler