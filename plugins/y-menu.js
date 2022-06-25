import db from '../lib/database.js'
import { promises } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
//import { plugins } from '../lib/plugins.js'
import fs from 'fs'
let handler = async (m, { conn, usedPrefix }) => {
let oct = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;

let pdf = './media/wa.pdf'
let wa = './media/wa.jpg'
let inputPath = './media/banner.png'
//let rndm = `${pickRandom(['Antum Wibu yaah?','Afakah antum Wibu?','Beliau ini Wibu gayming'])}`
//const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => './oct.jpg')
const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => './src/avatar_contact.png')

let name = m.pushName || conn.getName(m.sender)
//let ykon = { key: { fromMe: false, participant: `6283873115706@s.whatsapp.net`, ...(m.chat ? { remoteJid: '6283873115706@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nFN:Yusuf\nORG:Owner;\nTEL;type=CELL;type=VOICE;waid=6283873115706:+62 838 7311 5706\nEND:VCARD`}}}
let tag = `${m.sender.split('@')[0]}`
let ykon = {
    key: {
    fromMe: false,
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'},
    message: { contactMessage: {
        displayName: `${name}`,
        vcard: `BEGIN:VCARD\nVERSION:3.0\nFN:Yusuf\nORG:Owner;\nTEL;type=CELL;type=VOICE;waid=${tag}:+${tag}\nEND:VCARD`}}}

//BEGIN:VCARD\nVERSION:3.0\nFN:Yusuf\nORG:Owner;\nTEL;type=CELL;type=VOICE;waid=6283873115706:+62 838 7311 5706\nEND:VCARD

const react = {
    react: {
        text: "💎",
        key: m.key
    }
}

conn.sendMessage(m.chat, react)

let text = `Halo ${name}👋`
let text2 = `*Catatan*: _Hubungi Owner jika perlu_.`

const ybut = [
  {buttonId: '.yowner', buttonText: {displayText: '👑 Owner'}, type: 1},
  {buttonId: '.menu', buttonText: {displayText: '⋮☰ Menu'}, type: 1}
]

const yusufMsg={
    'document':{'url':pdf},
    'mimetype':'application/pdf',
    'fileName':'『 Yusuf Expert 』',
    'fileLength':1000000000,
    'pageCount':1,
    'contextInfo':{
        'externalAdReply':{
            'showAdAttribution': true,
            'mediaUrl':sig,
            'mediaType':1,
            'title':`Halo ${name}👋`,
            'body':wm,
            'thumbnail':fs.readFileSync("./media/logo.jpg"),
            'sourceUrl':'https://wa.me/6283873115706'}},
            'caption':'*[ ! ] Silahkan klik Menu*',
            'footer':`${text2}\n\n${wm}`,
            'buttons':ybut,
                'headerType':4};
                
const ymsg = conn.sendMessage(m.chat,yusufMsg,{'quoted':ykon,'mentionedJid':[m.sender]});

}

handler.help = ['bot']
handler.tags = ['y']
handler.command = ['bot']
export default handler
