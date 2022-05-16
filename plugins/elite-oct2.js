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

await conn.sendHydrated(m.chat, text, botdate + '\n\n' + wm, inputPath, global.sgc, '🌎 Join My Group Official', `${m.sender.split`@`[0]}`, '🌹 U S E R', [
      ['▣ VERIFY ▣', '/daftar']
    ], m)}

let m1 = global.dmenut
let m2 = global.dmenub
let m3 = global.dmenub2
let m4 = global.dmenuf

handler.help = ['oct2']
handler.tags = ['elite']
handler.command = ['oct2']
export default handler
