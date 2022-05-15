let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `Yusuf Oct`

const templateButtons = [
    {index: 1, urlButton: {displayText: 'Follow', url: sig}},
]

let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons }
//image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}

handler.help = ['oct']
handler.tags = ['oct']
handler.command = /^(oct)$/i

export default handler
