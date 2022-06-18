import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
let oct = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
    
let text = `╭─● *Owner*
┃● *Yusuf Expert*
┃➥ wa.me/6283873115706
┃➥ facebook.com/yusuf.oct
┃➥ instagram.com/yusuf.expert
╰─●
*Catatan*: _Jika ada yg error, gw males benerin_.`

let pdf = './wa.pdf'
let wa = './wa.jpg'
let inputPath = './banner.png'
const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => './oct.jpg')

conn.sendButton(m.chat, '*OWNER*', text+'\n\n'+botdate+'\n\n'+wm, pdf, [['Menu', '.menu']], false, {
contextInfo: { externalAdReply :{
            'showAdAttribution': true,
            'mediaUrl':sig,
            'mediaType':2,
            'previewType':'Yusuf',
            'title':wm,
            'body':'Created By Yusuf',
            'thumbnail':fs.readFileSync("./banner.png"),
            'sourceUrl':'https://wa.me/6283873115706' }}})

}

handler.help = ['oct3']
handler.tags = ['elite']
handler.command = ['oct3']
export default handler
