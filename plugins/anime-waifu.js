import fetch from 'node-fetch'
import fs from 'fs'

let handler = async (m, { conn, usedPrefix }) => {
    let res = await fetch('https://api.waifu.pics/sfw/waifu')
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.url) throw 'Error!'
    //conn.sendButton(m.chat, 'Istri kok kartun', author, json.url, [['Ganti Istri', `${usedPrefix}waifu`]], m)
    /*conn.sendButton(m.chat, 'Istri kok kartun', wm, json.url, [['Ganti Istri', '.waifu'],['Delete','.delete']], m, { 
contextInfo: { externalAdReply :{
            'showAdAttribution': true,
            'mediaUrl':sig,
            'mediaType':1,
            'previewType':'Yusuf',
            'title':wm,
            'body':'Created By Yusuf',
            'thumbnail':fs.readFileSync("./oct.jpg"),
            'sourceUrl':'https://wa.me/6283873115706' }}})*/


let ydoc = {
    key: {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'},
    message: { 
    "documentMessage": {
    //'document':{'url':pdf},
    'mimetype':'application/pdf',
    'fileName':'Istri',
    'fileLength':1000000000,
    'pageCount':1
}}}

const ybut = [
  {buttonId: '.waifu', buttonText: {displayText: '⏭ Ganti Istri'}, type: 1},
  {buttonId: '.delete', buttonText: {displayText: '🗑 Delete'}, type: 1}
]

const yusufMsg={
    'image':{'url':json.url},
    'contextInfo':{
        'externalAdReply':{
            'showAdAttribution': true,
            'mediaUrl':sig,
            'mediaType':1,
            'title':wm,
            'body':'Created by Yusuf',
            'thumbnail':fs.readFileSync("./media/logo.jpg"),
            'sourceUrl':'https://wa.me/6283873115706'}},
            'caption':`Istri kok Kartun`,
            'footer':wm,
            'buttons':ybut,
                'headerType':4};
                
conn.sendMessage(m.chat,yusufMsg,{'quoted':ydoc,'mentionedJid':[m.sender]});

}
handler.help = ['waifu']
handler.tags = ['anime']
handler.command = /^(waifu)$/i
handler.limit = true
handler.private = false
//MADE IN ERPAN 1140 BERKOLABORASI DENGAN BTS
export default handler
