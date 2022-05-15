import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
let text = `Yusuf`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'Follow', url: sig}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}


handler.help = ['oct']
handler.tags = ['info']
handler.command = ['oct']
export default handler
