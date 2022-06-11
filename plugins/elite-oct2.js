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

const buttonMessage = {
    'document':{'url':sgc},
    'mimetype':d4,
    'fileName':global['wm'],
    'fileLength':fsizedoc,
    'pageCount':fpagedoc,
    'contextInfo':{
    'forwardingScore':100,
    'isForwarded':true,
    'externalAdReply':{
        'mediaUrl':global['sig'],
        'mediaType':pdf,
        'previewType':"tes",
        'title':global['titlebot'],
        'body':global['titlebot'],
        'thumbnail':fs.readFileSync("./banner.png"),
        'sourceUrl':sgc}},
        'caption':'Yusuf Expert',
        'footer':text + '\n\n' +botdate + '\n\n' + wm,
        'buttons':[
            {
            'buttonId':'.owner',
            'buttonText':{
            'displayText':'Owner'},
            'type':1},
            {
            'buttonId':'.ping',
            'buttonText':{
            'displayText':'Ping'},
            'type':1},
            {
            'buttonId':'.donasi',
            'buttonText':{
            'displayText':'Donasi'},
            'type':1}],
            'headerType':"Tes"};
                
await conn.sendMessage(m.chat,buttonMessage,{'quoted':m,'mentionedJid':[m.sender]});
}

handler.help = ['oct2']
handler.tags = ['elite']
handler.command = ['oct2']
export default handler
