import fetch from 'node-fetch'
import fs from 'fs'

let handler = async (m, { conn, usedPrefix }) => {
    let res = await fetch('https://api.waifu.pics/sfw/waifu')
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.url) throw 'Error!'
    //conn.sendButton(m.chat, 'Istri kok kartun', author, json.url, [['Ganti Istri', `${usedPrefix}waifu`]], m)
    conn.sendButton(m.chat, 'Istri kok kartun', botdate + '\n\n' + wm, json.url, [['Ganti Istri', `${usedPrefix}waifu`]], m, {
contextInfo: { externalAdReply :{
                        description: stickauth,
                        title: author,
                        body: 'Jangan lupa Follow',
                        thumbnail: fs.readFileSync("./oct.jpg"),
                        sourceUrl: sig }}})
}
handler.help = ['waifu']
handler.tags = ['anime']
handler.command = /^(waifu)$/i
handler.limit = true
//MADE IN ERPAN 1140 BERKOLABORASI DENGAN BTS
export default handler
