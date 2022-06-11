import fs from 'fs'

import { promises } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'
import os from 'os'
import fs from 'fs'
import fetch from 'node-fetch'

let handler = async (m, { conn, args, command }) => {
let oct = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
    
let text = `╭─● *Biodata*
┃● *Nama*: Yusuf
┃● *Tanggal lahir*: Loading...
┃● *Alamat*: Isekai
┃● *Status*: Not responding
╰─●`

let inputPath = './banner.png'
const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => './oct.jpg')


    //------------------ DOCUMENT
    let d1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
    let d2 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    let d3 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    let d4 = 'application/pdf'
    let d5 = 'text/rtf'
    let td = `${pickRandom([d1,d2,d3,d4,d5])}`
    


let buttonMessage={
    'document':{'url':sgc},
    'mimetype':d4,
    'fileName':global['wm'],
    'fileLength':fsizedoc,
    'pageCount':fpagedoc,
    'contextInfo':{'forwardingScore':100,'isForwarded':true,
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
            'type':2},
            {
            'buttonId':'.donasi',
            'buttonText':{
            'displayText':'Donasi'},
            'type':3}],
            'headerType':4};
                
await conn.sendMessage(m.chat,buttonMessage,{'quoted':m,'mentionedJid':[m.sender]});


/*await conn.sendMessage(m.chat, { "contentText": '──────────[ *DASHBOARD* ]──────────', "footerText": text,
"buttons": [
{buttonId: '.owner', buttonText: {displayText: 'OWNER'}, type: 1},
{buttonId: '.donasi', buttonText: {displayText: 'DONASI'}, type: 1},
{buttonId: '.rules', buttonText: {displayText: 'RULES'}, type: 1}
],
"headerType": "DOCUMENT", "documentMessage": {
            "url": "https://mmg.whatsapp.net/d/f/AsO5KpESy9E0WI72xEVp65rx505bQxvuIma79L8Ue076.enc",
            "mimetype": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            "title": "ness.docx",
            "fileSha256": "8Xfe3NQDhjwVjR54tkkShLDGrIFKR9QT5EsthPyxDCI=",
            "fileLength": "99999999999999",
            "pageCount": 100,
            "mediaKey": "XWv4hcnpGY51qEVSO9+e+q6LYqPR3DbtT4iqS9yKhkI=",
            "fileName": 'Creαted by : ℓettα - sαmα ♡',
            "fileEncSha256": "NI9ykWUcXKquea4BmH7GgzhMb3pAeqqwE+MTFbH/Wk8=",
            "directPath": "/v/t62.7118-24/35150115_287008086621545_8250021012380583765_n.enc?ccb=11-4&oh=6f0f730e5224c054969c276a6276a920&oe=61A21F46",
            "mediaKeyTimestamp": "1634472176",
            "jpegThumbnail": await (await fetch('https://telegra.ph/file/6e45318d7c76f57e4a8bd.jpg')).buffer(),
  }}, 'buttonsMessage', { contextInfo: { mentionedJid: conn.parseMention(text), forwardingScore: 999, isForwarded: true, externalAdReply: { title: global.wm, body: `${pickRandom(['udah makan belum kak?', 'udh mandi belum kak?', 'Semangat ya kak!', 'Jangan begadang mulu ya!', 'jangan spam ya kak!', 'Jangan lupa donasi yak kak! >.<', 'Jaga kesehatan yaw kak!', 'Jangan lupa makan!', 'Jangan lupa istirahat yak! >.<', 'I Love you kak >.< 💗✨', 'Pr nya udh belum kak?', 'Jangan kebanyakan main hp yk! nanti sakit :‹'])}`, description: `${pickRandom(['udah makan belum kak?', 'udh mandi belum kak?', 'Semangat ya kak!', 'Jangan begadang mulu ya!', 'jangan spam ya kak!', 'Jangan lupa donasi yak kak! >.<', 'Jaga kesehatan yaw kak!', 'Jangan lupa makan!', 'Jangan lupa istirahat yak! >.<', 'I Love you kak >.< 💗✨', 'Pr nya udh belum kak?', 'Jangan kebanyakan main hp yk! nanti sakit :‹'])}`, mediaType: 2, thumbnail: await (await fetch(`${thumb()}`)).buffer(), mediaUrl: `https://youtube.com/watch?v=uIedYGN3NQQ`}}})
}*/

handler.help = ['oct2']
handler.tags = ['elite']
handler.command = ['oct2']
export default handler
