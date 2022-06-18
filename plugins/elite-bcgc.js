import Connection from '../lib/connection.js'
import { randomBytes } from 'crypto'
import fs from 'fs'

let handler = async (m, { conn, text }) => {
  let groups = Object.entries(Connection.store.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !chat.metadata?.read_only && !chat.metadata?.announce).map(v => v[0])
  let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
  let teks = text ? text : cc.text
  conn.reply(m.chat, `_Mengirim pesan broadcast ke ${groups.length} grup_`, m)
  for (let id of groups)

let pdf = './wa.pdf'

const yusufMsg2={
    'document':{'url':pdf},
    'mimetype':'application/pdf',
    'fileName':'Owner Ganteng',
    'fileLength':1000000000,
    'pageCount':1,
    'mediaType':2,
    'contextInfo':{
        'forwardingScore':0,
        'isForwarded':false,
        'externalAdReply':{
            'showAdAttribution': true,
            'mediaUrl':'https://wa.me/6283873115706',
            'mediaType':1,
            'previewType':'Yusuf',
            'title':'Halo kak👋',
            'body':'Afakah antum Wibu?',
            'thumbnail':fs.readFileSync("./oct.jpg"),
            'sourceUrl':'https://wa.me/6283873115706'}},
            'caption':'*[ ! ] Klik File PDF*',
            'footer':wm,
            'buttons':[
                {'buttonId':'.waifu',
                'buttonText':{
                    'displayText':'Waifu'},
                    'type':1},
                {'buttonId':'.loli',
                'buttonText':{
                    'displayText':'Loli'},
                    'type':2},
                {'buttonId':'.neko',
                'buttonText':{
                    'displayText':'Neko'},
                    'type':3},
                {'buttonId':'...',
                'buttonText':{
                    'displayText':'\n\n*Owner Ganteng Banget( ꈍᴗꈍ)*'},
                    'type':4}
                       ],
                'headerType':'Yusuf'};
                
conn.sendMessage(id,yusufMsg2);

  m.reply('Selesai Broadcast All Group :)')
}
handler.help = ['.bcgc2']
handler.tags = ['owner']
handler.command = /^(.bcgc2)$/i

handler.owner = true

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

const randomID = length => randomBytes(Math.ceil(length * .5)).toString('hex').slice(0, length)
