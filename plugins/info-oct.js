import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
 await conn.sendButton(m.chat, `IG: yusuf.oct\n`, botdate + '\n\n' + wm, giflogo, [['Follow', sig]], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: bottime,
                        body: 'Total Cintaku Padamu',          previewType: 0,
                        thumbnail: fs.readFileSync("./oct.jpg"),
                        sourceUrl: sig
                      }}
})
}


handler.help = ['oct']
handler.tags = ['info']
handler.command = ['oct']
export default handler