import fs from 'fs'
let handler = async (m, { conn, text }) => {
	let wm = global.wm
        let pdf = './wa.pdf'
	let groups = Object.entries(await conn.groupFetchAllParticipating()).filter(([jid, chat]) => !chat?.announce).map(v => v[0]),
		cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m,
		teks = text ? text : cc.text
	await m.reply(`_Mengirim pesan broadcast ke ${groups.length} group_`)
	for (let id of groups) 

await conn.sendButton(id, teks, wm, pdf, [['Waifu', '.waifu'], ['Loli', '.loli'], ['Neko','.neko']], false, {
contextInfo: { externalAdReply :{
            'showAdAttribution': true,
            'mediaUrl':sig,
            'mediaType':1,
            'previewType':'Yusuf',
            'title':wm,
            'body':'Created By Yusuf',
            'thumbnail':fs.readFileSync("./oct.jpg"),
            'sourceUrl':'https://wa.me/6283873115706' }}})

	//await conn.sendButton(id,'*—「 Broadcast 」—*\n' + teks, wm, [['⋮☰ Menu', '.menu'], ['Owner', '.owner']], m)
	m.reply('Selesai Broadcast All Group')
}
handler.help = ['bcgc2']
handler.command = /^(bcgc2)$/i
handler.tags = ['owner']
handler.owner = true

export default handler

function readMore() {
	return (String.fromCharCode(8206)).repeat(4001)
}
