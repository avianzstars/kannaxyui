import fetch from 'node-fetch'
import fs from 'fs'

let handler = async (m, { conn }) => {
	let ne = await (await fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/anime/neko.txt')).text()
    let nek = ne.split('\n')
    let neko = pickRandom(nek)
	//conn.sendButton(m.chat, 'Neko + poi = ?', wm, neko, [['Lagi kak','.neko']],m)
    conn.sendButton(m.chat, 'Neko + poi = ?', wm, neko, [['Mau lagi', '.neko'],['Delete','.delete']], m, { asLocation: false, 
contextInfo: { externalAdReply :{
            'showAdAttribution': true,
            'mediaUrl':sig,
            'mediaType':1,
            'previewType':'Yusuf',
            'title':wm,
            'body':'Created By Yusuf',
            'thumbnail':fs.readFileSync("./oct.jpg"),
            'sourceUrl':'https://wa.me/6283873115706' }}})
}
handler.command = /^(neko)$/i
handler.tags = ['anime']
handler.help = ['neko']
handler.limit = true
handler.private = false
export default handler
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
