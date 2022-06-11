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
/*await conn.sendButton(m.chat, text, botdate + '\n\n' + wm, inputPath, [['Menu', '.menu']/*, ['Biodata','.oct2']*/], m, {
/*contextInfo: { externalAdReply :{
                        description: stickauth,
                        title: author,
                        body: 'Jangan lupa Follow',
                        thumbnail: fs.readFileSync("./oct.jpg"),
                        sourceUrl: sig }}}) }*/

const buttonMessage = {
    'document':{'url':sgc},
    'mimetype':"application/pdf",
    'fileName':global['wm'],
    'fileLength':fsizedoc,
    'pageCount':fpagedoc,
    'contextInfo':{'forwardingScore':100,'isForwarded':true,
    'externalAdReply':{
        'mediaUrl':global['sig'],
        'mediaType':2,
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
            'headerType':"Document"};
                
await conn.sendMessage(m.chat,buttonMessage,{'quoted':m,'mentionedJid':[m.sender]});}

let m1 = global.dmenut
let m2 = global.dmenub
let m3 = global.dmenub2
let m4 = global.dmenuf

handler.help = ['oct']
handler.tags = ['elite']
handler.command = ['oct']
export default handler
