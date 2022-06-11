import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
let oct = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
    
let text = `╭─● *Owner*
┃● *Yusuf Oct*
┃➥ wa.me/6283873115706
┃➥ instagram.com/yusuf.expert
╰─●
*Catatan*: _Jika ada yg error, gw males benerin_.`

let inputPath = './banner.png'
const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => './oct.jpg')

conn.sendButton(m.chat, text, wm, inputPath, 
      [['Menu', '.menu'], ['Owner', '.oct2']], 
      null, { asLocation: true }
)}

handler.help = ['oct3']
handler.tags = ['elite']
handler.command = ['oct3']
export default handler
