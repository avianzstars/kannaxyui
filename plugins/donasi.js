import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
let oct = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
    
let text = `╭─● *D O N A S I*
┃● *Pulsa*
┃➥ 083873115706
╰─●`

let pdf = './media/wa.pdf'
let name = m.pushName || conn.getName(m.sender)
let ykon = {
    key: {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'},
    message: { contactMessage: {
        displayName: 'Donasi',
        vcard: `BEGIN:VCARD\nVERSION:3.0\nFN:Yusuf\nORG:Owner;\nTEL;type=CELL;type=VOICE;waid=6283873115706:+62 838 7311 5706\nEND:VCARD`}}}

let ydoc = {
    key: {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'},
    message: { 
    "documentMessage": {
    'document':{'url':pdf},
    'mimetype':'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'fileName':'Donasi',
    'fileLength':1000000000,
    'pageCount':1
}}}

const ybut = [
  {buttonId: '.owner', buttonText: {displayText: '👑 OWNER'}, type: 1},
  {buttonId: '.menu', buttonText: {displayText: '⋮☰ MENU'}, type: 1}
]

const yusufMsg={
    'document':{'url':'./media/CBY.docx'},
    'mimetype':'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'fileName':'『 Yusuf Expert 』',
    'fileLength':1000000000,
    'pageCount':1,
    'contextInfo':{
        'externalAdReply':{
            'showAdAttribution': true,
            'mediaUrl':sig,
            'mediaType':1,
            'title':wm,
            'body':'Created by Yusuf',
            'thumbnail':fs.readFileSync("./media/logo.jpg"),
            'sourceUrl':'https://wa.me/6283873115706'}},
            'caption':'➦ *DONASI*',
            'footer':text+'\n\n'+wm,
            'buttons':ybut,
                'headerType':4};
                
const ymsg = conn.sendMessage(m.chat,yusufMsg,{'quoted':ydoc,'mentionedJid':[m.sender]});

}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i
export default handler
