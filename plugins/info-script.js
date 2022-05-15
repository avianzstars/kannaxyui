let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
	
	// ‼️ NOTE: Link script Jangan diubah, dihapus atau diganti
let text = `╭─● *S C R I P T  M D*
┃● *Script :* 
┃➥ youtube.com/c/LeonGanz
┃● *Node_Modules:*
┃➥ www.mediafire.com/file/q8ogv16wd5j7iju/node.tar.gz/file
┃● *Base :* 
┃➥ github.com/DikaArdnt/Hisoka-Morou
╰─●

╭─● *S C R I P T  N O N  M D*
┃● *Script :* 
┃➥ youtube.com/c/LeonGanz
┃● *Base :* 
┃➥ github.com/melcanz/melcanz-bot
╰─●

📍 *N o t e :* 
• Jangan lupa minta izin owner sebelum menggunakan scriptnya kak!
• Jangan Lupa kasih star, follow & kasih credit
• Dilarang menjual Script Ini!
• Jika menemukan bug di script, harap lapor owner
• Dilarang reupload sc, Hanya boleh fork
`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'My Github', url: sgh}},
    {index: 2, quickReplyButton: {displayText: 'Owner', id: '.owner'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: thumb
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['sc']
handler.tags = ['info']
handler.command = /^(s(ourcode|c))$/i

export default handler
