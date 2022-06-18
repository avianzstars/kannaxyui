import fetch from 'node-fetch'
import fs from 'fs'

let handler = async (m, { conn, usedPrefix }) => {
    let res = await fetch('https://api.waifu.pics/sfw/waifu')
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.url) throw 'Error!'
    //conn.sendButton(m.chat, 'Istri kok kartun', author, json.url, [['Ganti Istri', `${usedPrefix}waifu`]], m)
    conn.sendMessage(m.chat, 'Istri kok kartun', m, { asLocation: false, 
contextInfo: { externalAdReply :{
            'showAdAttribution': true,
            'mediaUrl':sig,
            'mediaType':2,
            'previewType':'Yusuf',
            'title':wm,
            'body':'Created By Yusuf',
            'thumbnail':fs.readFileSync("./banner.png"),
            'sourceUrl':'https://wa.me/6283873115706' }}})
}
handler.help = ['msg']
handler.tags = ['msg']
handler.command = /^(msg)$/i
export default handler
