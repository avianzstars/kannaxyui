import fs from 'fs'
let handler = async (m, { conn, text }) => {
	let wm = global.wm
        let pdf = './wa.pdf'
	let groups = Object.entries(await conn.groupFetchAllParticipating()).filter(([jid, chat]) => !chat?.announce).map(v => v[0]),
		cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m,
		teks = text ? text : cc.text
	await m.reply(`_Mengirim pesan broadcast ke ${groups.length} group_`)
	for (let id of groups) 

const yusufMsg2={
    'document':{'url':pdf},
    'mimetype':'application/pdf',
    'fileName':'Owner Ganteng',
    'fileLength':1000000000,
    'pageCount':1,
    'mediaType':2,
    'contextInfo':{
        'forwardingScore':0,
        'isForwarded':false,
        'externalAdReply':{
            'showAdAttribution': true,
            'mediaUrl':'https://wa.me/6283873115706',
            'mediaType':1,
            'previewType':'Yusuf',
            'title':'Halo kak👋',
            'body':'Afakah antum Wibu?',
            'thumbnail':fs.readFileSync("./oct.jpg"),
            'sourceUrl':'https://wa.me/6283873115706'}},
            'caption':'*[ ! ] Klik File PDF*',
            'footer':wm,
            'buttons':[
                {'buttonId':'.waifu',
                'buttonText':{
                    'displayText':'Waifu'},
                    'type':1},
                {'buttonId':'.loli',
                'buttonText':{
                    'displayText':'Loli'},
                    'type':2},
                {'buttonId':'.neko',
                'buttonText':{
                    'displayText':'Neko'},
                    'type':3},
                {'buttonId':'...',
                'buttonText':{
                    'displayText':'\n\n*Owner Ganteng Banget( ꈍᴗꈍ)*'},
                    'type':4}
                       ],
                'headerType':'Yusuf'};
                
await conn.sendMessage(m.chat,yusufMsg2);

	//await conn.sendButton(id,'*—「 Broadcast 」—*\n' + teks, wm, [['⋮☰ Menu', '.menu'], ['Owner', '.owner']], m)
	m.reply('Selesai Broadcast All Group')
}
handler.help = ['broadcastgroup']
handler.command = /^(broadcast|bc)(group|grup|gc)$/i
handler.tags = ['owner']
handler.owner = true

export default handler

function readMore() {
	return (String.fromCharCode(8206)).repeat(4001)
}
