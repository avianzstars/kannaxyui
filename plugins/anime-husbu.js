import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix }) => {
    let res = await fetch('https://recoders-area.caliph.repl.co/api/husbu?apikey=FreeApi')
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.url) throw 'Error!'
    //conn.sendButton(m.chat, 'Suami kok kartun', botdate + '\n\n' + wm, json.url, [['Ganti Suami', `${usedPrefix}husbu`]], m)
    conn.sendButton(m.chat, 'Suami kok kartun', botdate + '\n\n' + wm, json.url, [['Ganti Suami', `${usedPrefix}husbu`]], m, {
contextInfo: { externalAdReply :{
                        description: stickauth,
                        title: author,
                        body: 'Jangan lupa Follow',
                        thumbnail: fs.readFileSync("./oct.jpg"),
                        sourceUrl: sig }}})
}
handler.help = ['husbu']
handler.tags = ['anime']
handler.command = /^(husbu)$/i
export default handler
