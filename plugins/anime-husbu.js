import fetch from 'node-fetch'
import fs from 'fs'

let handler = async (m, { conn, usedPrefix }) => {
    let res = await fetch('https://recoders-area.caliph.repl.co/api/husbu?apikey=FreeApi')
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.url) throw 'Error!'
    //conn.sendButton(m.chat, 'Suami kok kartun', botdate + '\n\n' + wm, json.url, [['Ganti Suami', `${usedPrefix}husbu`]], m)
    conn.sendButton(m.chat, 'Suami kok kartun', wm, json.url, [['Ganti Suami', '.husbu']], m, {
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
handler.help = ['husbu']
handler.tags = ['anime']
handler.command = /^(husbu)$/i
handler.limit = true
handler.private = false
export default handler
