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
            'mediaUrl':sig,
            'mediaType':2,
            'previewType':'Yusuf',
            'title':wm,
            'body':'Created By Yusuf',
            'thumbnail':fs.readFileSync("./banner.png"),
            'sourceUrl':'https://wa.me/6283873115706'}},
            'caption':'*OWNER*',
            'footer':text+'\n\n'+botdate+'\n\n'+wm,
            'templateButtons': [
                {
                    'urlButton': {
                        'displayText': `${namebot}`,
                        'url': 'https://kannxapi.herokuapp.com/'
                    }
                },
                {
                    'urlButton': {
                        'displayText': 'Group Official',
                        'url': sgc
                    }
                },
                {
                    'quickReplyButton': {
                        'displayText': 'Owner',
                        'id': '.owner'
                    }
                },
                {
                    'quickReplyButton': {
                        'displayText': 'Speed',
                        'id': '.ping'
                    }
                },
                {
                    'quickReplyButton': {
                        'displayText': 'Donasi',
                        'id': '.donasi'
                    }
                },
            ],
                'headerType':'Yusuf'};
                
await conn.sendMessage(m.chat,yusufMsg,{'quoted':m,'mentionedJid':[m.sender]});
}

handler.help = ['oct3']
handler.tags = ['elite']
handler.command = ['oct3']
export default handler
