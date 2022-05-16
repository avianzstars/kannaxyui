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

const message = {
            //document: { url: thumb },
            jpegThumbnail: inputPath,
            //fileName: '𝗧 𝗜 𝗠 𝗘 : ' + wktuwib,
            //mimetype: td,
            //fileLength: fsizedoc,
            //pageCount: fpagedoc,
            caption: text,
            footer: titlebot,
            templateButtons: [
                {
                    urlButton: {
                        displayText: `Instagram`,
                        url: sig
                    }
                },
                {
                    urlButton: {
                        displayText: 'WA Owner',
                        url: 'https://wa.me/6283873115706/'
                    }
                },
            ]
        }
        await conn.sendMessage(m.chat, message)

let m1 = global.dmenut
let m2 = global.dmenub
let m3 = global.dmenub2
let m4 = global.dmenuf

handler.help = ['oct2']
handler.tags = ['elite']
handler.command = ['oct2']
export default handler
