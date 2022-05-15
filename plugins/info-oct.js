import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
let text = `Yusuf`
//const templateButtons = [
    //{index: 1, urlButton: {displayText: 'Follow', url: sig}}, ]

let tm = {
contextInfo: { externalAdReply :{
mediaUrl: '',
mediaType: 2,
description: namebot,
title: bottime,
body: 'Total Cintaku Padamu',          
previewType: 0,
thumbnail: fs.readFileSync("./thumbnail.jpg"),
sourceUrl: sig,
text: text,
footer: global.wm,
templateButtons: [
    { urlButton: {displayText: 'Follow', url: sig}},
]
}
conn.sendMessage(m.chat, tm, text, m)
}


handler.help = ['oct']
handler.tags = ['info']
handler.command = ['oct']
export default handler
