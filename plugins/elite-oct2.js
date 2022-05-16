import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
let oct = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
    
let text = `╭─● *Biodata*
┃● *Nama*: Yusuf
┃● *Tanggal lahir*: Kepo
┃● *Alamat*: Isekai
┃● *Status*: Not responding
╰─●`

let inputPath = './banner.png'
const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => './oct.jpg')

const templateButtons = [
    {index: 1, urlButton: {displayText: 'Instagram', url: sig}},
    {index: 2, urlButton: {displayText: 'WA Owner', url: 'https://wa.me/6283873115706/'}},
]
let tm = {
text: text,
footer: botdate + '\n\n' + wm,
templateButtons: templateButtons
}
conn.sendMessage(m.chat, tm, inputPath, m)
}

let m1 = global.dmenut
let m2 = global.dmenub
let m3 = global.dmenub2
let m4 = global.dmenuf

handler.help = ['oct2']
handler.tags = ['elite']
handler.command = ['oct2']
export default handler
