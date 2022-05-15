let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let txt = `Yusuf Oct`

const tb = [
    {index: 1, urlButton: {displayText: 'Follow', url: sig}},
]

let tm = {
text: txt,
footer: global.wm,
templateButtons: tb }
//image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}

handler.help = ['oct']
handler.tags = ['oct']
handler.command = /^(oct)$/i

export default handler
