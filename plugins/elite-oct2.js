import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
let oct = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
    
let text = `╭─● *Owner*
┃● *Yusuf Expert*
┃➥ wa.me/6283873115706
┃➥ facebook.com/yusuf.oct
┃➥ instagram.com/yusuf.expert
╰─●

*Catatan*: _Jika ada yg error, gw males benerin_.`

let pdf = './wa.pdf'
let wa = './wa.jpg'
let inputPath = './banner.png'
let rndm = `${pickRandom(['Antum Wibu yaah?','Afakah antum Wibu?','Beliau ini Wibu gayming'])}`
const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => './oct.jpg')

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
            'thumbnail':fs.readFileSync("./banner.png"),
            'sourceUrl':'https://wa.me/6283873115706'}},
            'caption':'*OWNER*',
            'footer':text+'\n\n'+botdate+'\n\n'+wm,
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
                
conn.sendMessage(m.chat,yusufMsg,{'quoted':m,'mentionedJid':[m.sender]});

await conn.sendButton(m.chat, '*Hello👋*', 'Apakah antum Wibu?\n\n'+wm, fs.readFileSync("./banner.png"), [['Waifu', '.waifu'],['Loli','.loli'],['Neko','.neko']], m, {
contextInfo: { externalAdReply :{
            'showAdAttribution': true,
            'mediaUrl':'https://wa.me/6283873115706',
            'mediaType':2,
            'previewType':'Yusuf',
            'title':wm,
            'body':'Created By Yusuf',
            'thumbnail':fs.readFileSync("./oct.jpg"),
            'sourceUrl':'https://wa.me/6283873115706' }}})
}

handler.help = ['oct2']
handler.tags = ['elite']
handler.command = ['oct2']
export default handler
