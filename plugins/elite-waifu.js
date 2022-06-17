import fetch from 'node-fetch'
import fs from 'fs'

let handler = async (m, { conn, usedPrefix }) => {
    let res = await fetch('https://api.waifu.pics/sfw/waifu')
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.url) throw 'Error!'
let pdf = './wa.pdf'
const yusufMsg={
    'document':{'url':pdf},
    'mimetype':'application/pdf',
    'fileName':'Yusuf Expert',
    'fileLength':1000000000,
    'pageCount':1,
    'mediaType':2,
    'contextInfo':{
        'forwardingScore':0,
        'isForwarded':false,
        'externalAdReply':{
            'showAdAttribution': true,
            'mediaUrl':sig,
            'mediaType':2,
            'previewType':'Yusuf',
            'title':wm,
            'body':'Created By Yusuf',
            'thumbnail':json.url,
            'sourceUrl':'https://wa.me/6283873115706'}},
            'caption':'*OWNER*',
            'footer':botdate+'\n\n'+wm,
            'buttons':[
                {'buttonId':'.menu',
                'buttonText':{
                    'displayText':'Menu'},
                    'type':1},
                {'buttonId':'...',
                'buttonText':{
                    'displayText':'\n\n*Owner Ganteng Banget( ꈍᴗꈍ)*'},
                    'type':1}
                       ],
                'headerType':'Yusuf'};
                
await conn.sendMessage(m.chat,yusufMsg,{'quoted':m,'mentionedJid':[m.sender]});

}
handler.help = ['waifu2']
handler.tags = ['anime']
handler.command = /^(waifu2)$/i
handler.limit = true
handler.private = false
//MADE IN ERPAN 1140 BERKOLABORASI DENGAN BTS
export default handler
