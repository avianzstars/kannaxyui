import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
let oct = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;

let text = `╭─● *Owner*
┃● *Yusuf Expert*
┃➥ facebook.com/yusuf.oct
┃➥ instagram.com/yusuf.expert
╰─●`

let img = './banner.png'
let img2 = './oct.jpg'
let pdf = './Project Pemuda.pdf'

conn.sendButton(m.chat, '*SOSMED*', text+'\n\n'+botdate+'\n\n'+wm, pdf, 
      [['Menu', '.menu'],
       ['Owner', '.oct2'],
       ['\n\n*Owner Ganteng Banget( ꈍᴗꈍ)*', '...']], m, {
contextInfo: { externalAdReply :{
                        description: wm,
                        title: 'Yusuf Expert',
                        body: wm,
                        thumbnail: fs.readFileSync("./oct.jpg"),
                        sourceUrl: 'https://wa.me/6283873115706' }}})
}
handler.help = ['sosmed']
handler.tags = ['elite']
handler.command = ['sosmed']
export default handler
