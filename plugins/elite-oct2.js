import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
let oct = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
    
let text = `╭─● *Biodata*
┃● *Nama*: Yusuf
┃● *Tanggal lahir*: Loading...
┃● *Alamat*: Isekai
┃● *Status*: Not responding
╰─●`

let inputPath = './banner.png'
const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => './oct.jpg')
/*await conn.sendButton(m.chat, text, botdate + '\n\n' + wm, inputPath, [[null, null], [null, null]], m, {
contextInfo: { externalAdReply :{
                        description: stickauth,
                        title: author,
                        body: 'Jangan lupa Follow',
                        thumbnail: fs.readFileSync("./oct.jpg"),
                        sourceUrl: sig }}}) }*/

await conn.sendMessage(m.chat, text)}

handler.help = ['oct2']
handler.tags = ['elite']
handler.command = ['oct2']
export default handler
