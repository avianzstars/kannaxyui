import fetch from 'node-fetch'
import fs from 'fs'

let handler = async (m, { conn, usedPrefix }) => {
    let res = await fetch('https://api.waifu.pics/sfw/waifu')
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.url) throw 'Error!'
    //conn.sendButton(m.chat, 'Istri kok kartun', author, json.url, [['Ganti Istri', `${usedPrefix}waifu`]], m)
    conn.sendButton(m.chat, 'Istri kok kartun', wm, json.url, [['Ganti Istri', '.waifu'],['Delete','.delete']], m, { asLocation: true, 
contextInfo: { externalAdReply :{
            'showAdAttribution': true,
            'mediaUrl':sig,
            'mediaType':1,
            'previewType':'Yusuf',
            'title':wm,
            'body':'Created By Yusuf',
            'thumbnail':fs.readFileSync("./oct.jpg"),
            'sourceUrl':'https://wa.me/6283873115706' }}})
}
handler.help = ['waifu']
handler.tags = ['anime']
handler.command = /^(waifu)$/i
handler.limit = true
handler.private = false
//MADE IN ERPAN 1140 BERKOLABORASI DENGAN BTS
export default handler
