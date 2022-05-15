import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix }) => {
    let res = await fetch('https://recoders-area.caliph.repl.co/api/husbu?apikey=FreeApi')
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.url) throw 'Error!'
    conn.sendButton(m.chat, 'Husbu kok kartun', author, json.url, [['Ganti Husbu', `${usedPrefix}husbu`]], m)
}
handler.help = ['husbu']
handler.tags = ['anime']
handler.command = /^(husbu)$/i
export default handler
