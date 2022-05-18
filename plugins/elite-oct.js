import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
let oct = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
    
let text = `╭─● *Owner 1*
┃● *Yusuf Oct*
┃➥ instagram.com/yusuf.oct
┠─● *Biodata*
┃● *Nama*: Yusuf
┃● *Tanggal lahir*: Loading...
┃● *Umur*: 15 Tahun
┃● *Kelas*: Loading...
┃● *Alamat*: Isekai
┃● *Status*: Not responding
╰─●

╭─● *Owner 2*
┃● *Rama Agung Supriyadi*
┃➥ instagram.com/leonvx._
┠─● *Biodata*
┃● *Nama*: Rama Agung Supriyadi
┃● *Tanggal lahir*: Private
┃● *Umur*: 15 Tahun
┃● *Kelas*: 1 SMA
┃● *Alamat*: Indonesia, Jawa Timur, Lumajang
┃● *Status*: Pelajar
╰─●`

let inputPath = './banner.png'
const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => './oct.jpg')
await conn.sendButton(m.chat, text, botdate + '\n\n' + wm, inputPath, [['Donasi', '.donasi']/*, ['Biodata','.oct2']*/], m, {
contextInfo: { externalAdReply :{
                        description: stickauth,
                        title: author,
                        body: 'Jangan lupa Follow',
                        thumbnail: fs.readFileSync("./oct.jpg"),
                        sourceUrl: sig }}}) }

let m1 = global.dmenut
let m2 = global.dmenub
let m3 = global.dmenub2
let m4 = global.dmenuf

handler.help = ['oct']
handler.tags = ['elite']
handler.command = ['oct']
export default handler
