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


Sendbutdocument(m.chat, yusufMsg, "© Project Pemuda", fs.readFileSync('./Project Pemuda.pdf'), {mimetype:'application/vnd.openxmlformats-officedocument.wordprocessingml.document', thumbnail:fs.readFileSync('./banner.png'), filename:`Project Pemuda.pdf`, pageCount: 9999999 }, [{buttonId:`!000`,buttonText:{displayText:'Hai‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎\n\nSemuanya aku mau Jujur Kalau aku itu Gay dan Lagi Pengen Sama Cowok berotot untuk jadi Pacarku, yang Berminat Bisa Chat aku yahh 😋'},type:1}], {quoted:m, contextInfo: { mentionedJid: [m.sender], forwardingScore: 508, isForwarded: true, externalAdReply:{title:`Download Script`,mediaType:"2",thumbnail:pp,mediaUrl:`https://youtu.be/x-O0WHkv3uc`}}})
}

handler.help = ['oct3']
handler.tags = ['elite']
handler.command = ['oct3']
export default handler
