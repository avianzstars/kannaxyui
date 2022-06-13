import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
 await conn.sendButton(m.chat, `Total Fitur Bot Saat ini: ${totalf}, fs.readFileSync("./Project Pemuda.pdf"), [['MENU','.menu']], m, {
contextInfo: { externalAdReply :{
                        'mediaUrl':sig,
                        'mediaType':2,
                        'previewType':'Yusuf',
                        'title':wm,
                        'body':'Created By Yusuf',
                        'thumbnail':fs.readFileSync("./banner.png"),
                        'sourceUrl':'https://wa.me/6283873115706'}},
                        //'caption':'*OWNER*',
                        'footer': botdate+'\n\n'+wm
                      }}
})
}


handler.help = ['totalfitur']
handler.tags = ['info']
handler.command = ['totalfitur']
export default handler
