import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
let oct = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
    
let text = `╭─● *Owner*
┃● *Yusuf Oct*
┃➥ wa.me/6283873115706
┃➥ instagram.com/yusuf.expert
╰─●
*Catatan*: _Jika ada yg error, gw males benerin_.`

let inputPath = './banner.png'
const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => './oct.jpg')

const yusufMsg = {
    'document':{'url':sgc},
    'mimetype':'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'fileName':'Yusuf Expert',
    'fileLength':fsizedoc,
    'pageCount':fpagedoc,
    'contextInfo':{
    'forwardingScore':100,
    'isForwarded':true,
    'externalAdReply':{
        'mediaUrl':global['sig'],
        'mediaType':2,
        'previewType':"Tes",
        'title':global['titlebot'],
        'body':global['titlebot'],
        'thumbnail':fs.readFileSync("./banner.png"),
        'sourceUrl':sgc}},
        'caption':'➦ *OWNER*',
        'footer':text + '\n\n' + wm,
        'templateButtons': [
                {
                    urlButton: {
                        displayText: `${namebot}`,
                        url: sig
                    }
                },
                {
                    quickReplyButton: {
                        displayText: 'Owner',
                        id: '.owner'
                    }
                },
                {
                    quickReplyButton: {
                        displayText: 'Ping',
                        id: '.ping'
                    }
                },
            ],
            'headerType':"Tes"};
                
await conn.sendMessage(m.chat,yusufMsg,{'quoted':m,'mentionedJid':[m.sender]});
}

handler.help = ['oct2']
handler.tags = ['elite']
handler.command = ['oct2']
export default handler
