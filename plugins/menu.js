import { promises } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'
import os from 'os'
import fs from 'fs'
import fetch from 'node-fetch'

const defaultMenu = {
  before: `
%dash
%m1 *U S E R*
%m2 *Name:* %name
%m2 *Tag:* %tag
%m2 *Status:* %prems
%m2 *Limit:* %limit
%m3

%m1 *I N F O  C M D* 
%m4 *Ⓟ* = Premium
%m4 *Ⓛ* = Limit
%m3 %readmore
`.trimStart(),
  header: '%cc *%category* %c1',
  body: '%c2 %cmd %isPremium %islimit',
  footer: '%c3',
  after: `%c4 %me`,
}
let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
	let tags
	let teks = `${args[0]}`.toLowerCase()
  let arrayMenu = ['all', 'anime', 'update', 'maker', 'edukasi', 'news', 'random', 'game', 'xp', 'islamic', 'stiker', 'rpg', 'kerangajaib', 'quotes', 'admin', 'group', 'premium', 'internet', 'anonymous', 'nulis', 'downloader', 'tools', 'fun', 'database', 'vote', 'nsfw', 'audio', 'jadibot', 'info', 'owner', 'nocategory']
  if (!arrayMenu.includes(teks)) teks = '404'
  if (teks == 'all') tags = {
  'elite': 'Elite',
  'main': 'Main',
  'game': 'Game',
  'rpg': 'RPG Games',
  'xp': 'Exp & Limit',
  'sticker': 'Sticker',
  'kerang': 'Kerang Ajaib',
  'quotes': 'Quotes',
  'fun': 'Fun',
  'anime': 'Anime',
  'admin': 'Admin',
  'group': 'Group',
  'vote': 'Voting',
  'absen': 'Absen',
  'premium': 'Premium',
  'anonymous': 'Anonymous Chat',
  'internet': 'Internet',
  'downloader': 'Downloader',
  'tools': 'Tools',
  'nulis': 'MagerNulis & Logo',
  'audio': 'Audio',
  'maker': 'Maker',
  'database': 'Database',
  'quran': 'Al Qur\'an',
  'owner': 'Owner',
  'host': 'Host',
  'advanced': 'Advanced',
  'info': 'Info',
}
  if (teks == 'game') tags = {
    'game': 'Game'
  }
  if (teks == 'anime') tags = {
    'anime': 'Anime'
  }
  if (teks == 'nsfw') tags = {
    'nsfw': 'Nsfw'
  }
  if (teks == 'rpg') tags = {
    'rpg': 'Rpg'
  }
  if (teks == 'edukasi') tags = {
    'edukasi': 'Edukasi'
  }
  if (teks == 'news') tags = {
    'news': 'News'
  }
  if (teks == 'random') tags = {
    'random': 'Random'
  }
  if (teks == 'xp') tags = {
    'xp': 'Exp & Limit'
  }
  if (teks == 'stiker') tags = {
    'sticker': 'Stiker'
  }
  if (teks == 'kerangajaib') tags = {
    'kerang': 'Kerang Ajaib'
  }
  if (teks == 'quotes') tags = {
    'quotes': 'Quotes'
  }
  if (teks == 'admin') tags = {
    'group': 'Grup'
  }
  if (teks == 'group') tags = {
    'group': 'Group'
  }
  if (teks == 'premium') tags = {
    'premium': 'Premium'
  }
  if (teks == 'internet') tags = {
    'internet': 'Internet'
  }
  if (teks == 'anonymous') tags = {
    'anonymous': 'Anonymous Chat'
  }
  if (teks == 'nulis') tags = {
    'nulis': 'Nulis',
    'maker': 'Maker'
  }
  if (teks == 'downloader') tags = {
    'downloader': 'Downloader'
  }
  if (teks == 'tools') tags = {
    'tools': 'Tools'
  }
  if (teks == 'fun') tags = {
    'fun': 'Fun'
  }
  if (teks == 'database') tags = {
    'database': 'Database'
  }
  if (teks == 'vote') tags = {
    'vote': 'Voting',
    'absen': 'Absen'
  }
  if (teks == 'absen') tags = {
    'absen': 'Absen'
  }
  if (teks == 'quran') tags = {
    'quran': 'Al-Quran'
  }
  if (teks == 'quran') tags = {
    'quran': 'Al-Qur\'an'
  }
  if (teks == 'audio') tags = {
    'audio': 'Audio'
  }
  if (teks == 'jadibot') tags = {
    'jadibot': 'Jadi Bot'
  }
  if (teks == 'info') tags = {
    'info': 'Info'
  }
  if (teks == 'owner') tags = {
    'owner': 'Owner',
    'host': 'Host',
    'advanced': 'Advanced'
  }
 if (teks == 'nsfw') tags = {
    'nsfw': 'Nsfw'
  }
  if (teks == 'nocategory') tags = {
    'quran': 'Al-Quran'
  }
  try {
  	// DEFAULT MENU
      let dash = global.dashmenu
      let m1 = global.dmenut
      let m2 = global.dmenub
      let m3 = global.dmenuf
      let m4 = global.dmenub2
      
      // COMMAND MENU
      let cc = global.cmenut
      let c1 = global.cmenuh
      let c2 = global.cmenub
      let c3 = global.cmenuf
      let c4 = global.cmenua
      
      // LOGO L P
      let lprem = global.lopr
      let llim = global.lolm
      let tag = `@${m.sender.split('@')[0]}`
    
      const sections = [
     {
	title: `${htki} Elite ${htka}`,
	rows: [
	    {title: `${pmenus} Elite`, rowId: ".oct", description: "Khusus Elite"},
	]
    },{
	title: `${htki} MAIN ${htka}`,
	rows: [
	    {title: `${pmenus} Ping BOT`, rowId: ".ping", description: "Menampilkan kecepatan respon BOT"},
	    {title: `${pmenus} Owner BOT`, rowId: ".owner", description: "Menampilkan List owner BOT"},
	    {title: `${pmenus} Script BOT`, rowId: ".sc", description: `Source Code ${namebot}`},
	]
    },{
	title: `${htki} SUPPORT ${htka}`,
	rows: [
	    {title: `${pmenus} Sewa BOT`, rowId: ".sewa", description: "Menampilkan list harga sewa BOT"},
	    {title: `${pmenus} Beli Premium`, rowId: ".premium", description: "Menampilkan list harga premium"},
	    {title: `${pmenus} Donasi`, rowId: ".donasi", description: 'Support BOT agar lebih fast respon'},
	]
	},{
	title: `${htki} MENU ${htka}`,
	rows: [
	{title: `${pmenus} All`, rowId: ".? all", description: "Menampilkan Semua command BOT"},
	{title: `${pmenus} Rpg`, rowId: ".? rpg", description: "Game Epic Rpg!"},
	{title: `${pmenus} Exp`, rowId: ".? xp", description: "Ayo tingkatkan pangkat mu!"},
	{title: `${pmenus} Game`, rowId: ".? game", description: "Gamenya seru seru lho >-<"},
	{title: `${pmenus} Fun`, rowId: ".? fun", description: "Fitur yang aman untuk keluarga"},
	{title: `${pmenus} Kerang`, rowId: ".? kerangajaib", description: "Tanyakan pada ketua club"},
	{title: `${pmenus} Quotes`, rowId: ".? quotes", description: "Random Inspirasi"},
	{title: `${pmenus} Anime`, rowId: ".? anime", description: "Kamu wibu ya bang?"},
	{title: `${pmenus} Nsfw`, rowId: ".? nsfw", description: "Tch, dasar sagne"},
	{title: `${pmenus} Premium`, rowId: ".? premium", description: "Only premium Users"},
	{title: `${pmenus} Anonymous Chats`, rowId: ".? anonymous", description: "Bicara dengan orang tidak dikenal"},
	{title: `${pmenus} Al-Quran`, rowId: ".? nocategory", description: "Tobat yuk kak"},
	{title: `${pmenus} Internet`, rowId: ".? internet", description: "Cari sesuatu diBOT"},
	{title: `${pmenus} Downloaders`, rowId: ".? downloader", description: "Download sesuatu diBOT"},
	{title: `${pmenus} Stikers`, rowId: ".? stiker", description: "Buat Sticker diBOT"},
	{title: `${pmenus} Nulis`, rowId: ".? nulis", description: "Nulis kok males kak?"},
	{title: `${pmenus} Audio`, rowId: ".? audio", description: "Ubah Audio dengan Filter"},
	{title: `${pmenus} Group`, rowId: ".? admin", description: "Only Groups"},
	{title: `${pmenus} Database`, rowId: ".? database", description: "Simpan sesuatu diBOT"},
	{title: `${pmenus} Tools`, rowId: ".? tools", description: "Mungkin tools ini bisa membantu?"},
	{title: `${pmenus} Info`, rowId: ".? info", description: "Info info BOT"},
	{title: `${pmenus} Owner`, rowId: ".? owner", description: "Owner Only!"}
	]
  },
]

let usrs = db.data.users[m.sender]
let tek = `
╭─● *${ucapan()}*
┃● *Name:* ${conn.getName(m.sender)}
┃● *Limit:* ${usrs.limit}
┃● *Status:* ${usrs.premiumTime > 1 ? 'Premium': 'Free'} ${usrs.premiumTime > 1 ? `
┃● *Expired:*
${clockStringP(usrs.premiumTime - new Date())}` : ''}
╰─●
`
const listMessage = {
  text: tek,
  //footer: '📮 *Note:* Jika menemukan bug, error atau kesulitan dalam penggunaan silahkan laporkan/tanyakan kepada Owner',
  footer: titlebot,
  title: `${htki} *LIST MENU* ${htka}`,
  buttonText: `KLIK INI`,
  sections
}
  if (teks == '404') {
  	return conn.sendMessage(m.chat, listMessage)
    }
  	
 /**************************** TIME *********************/
 let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
    let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
    let wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
    let wktuwib = `${wibh}:${wibm}:${wibs}`
 
 let mode = global.opts['self'] ? 'Private' : 'Publik'
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let { age, exp, limit, level, role, registered, money} = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    let premium = global.db.data.users[m.sender].premiumTime
    let prems = `${premium > 0 ? 'Premium': 'Free'}`
    let platform = os.platform()
    
    //-----------TIME---------
    let ucpn = `${ucapan()}`
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    //---------------------
    
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
          }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%_p' + help)
                .replace(/%islimit/g, menu.limit ? llim : '')
                .replace(/%isPremium/g, menu.premium ? lprem : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: uptime, muptime,
      me: conn.getName(conn.user.jid),
      npmname: _package.name,
      npmdesc: _package.description,
      version: _package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
      tag, dash,m1,m2,m3,m4,cc, c1, c2, c3, c4,lprem,llim,
      ucpn,platform, wib, mode, _p, money, age, tag, name, prems, level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    
    //----------------- FAKE
    let ftoko = {
    key: {
    fromMe: false,
    participant: '0@s.whatsapp.net',
    remoteJid: 'status@broadcast',
  },
  message: {
  "productMessage": {
  "product": {
  "productImage":{
  "mimetype": "image/jpeg",
  "jpegThumbnail": fs.readFileSync('./thumbnail.jpg'),
    },
  "title": 'Hai Kak ' + conn.getName(m.sender),
  "description": wm, 
  "currencyCode": "US",
  "priceAmount1000": "100",
  "retailerId": namebot,
  "productImageCount": 1
        },
  "businessOwnerJid": `0@s.whatsapp.net`
  }
  }
  }
  let fgif = {
    key: {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'},
    message: { 
                  "videoMessage": { 
                  "title": wm,
                  "h": `Nekohime`,
                  'duration': '99999999', 
                  'gifPlayback': 'true', 
                  'caption': bottime,
                  'jpegThumbnail': thumb
                         }
                        }
                     }
  let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
  
    const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => './banner.png')
    
    //------------------ DOCUMENT
    let d1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
    let d2 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    let d3 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    let d4 = 'application/pdf'
    let d5 = 'text/rtf'
    let td = `${pickRandom([d1,d2,d3,d4,d5])}`
    
    //-------DOC TEMPLATE
    const message = {
            document: { url: thumb },
            jpegThumbnail: await (await fetch(thumb)).buffer(),
            fileName: 'WAKTU: ' + wktuwib,
            mimetype: d2,
            fileLength: fsizedoc,
            pageCount: fpagedoc,
            caption: text,
            footer: botdate + '\n\n' + wm ,
            templateButtons: [
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
            ]
        }
         //await conn.sendButton(m.chat, text, wm, 'https://scontent-sin6-2.cdninstagram.com/v/t50.16885-16/274860803_155936233479998_2528562067986984633_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjEyODAuaWd0di5iYXNlbGluZSIsInFlX2dyb3VwcyI6IltcImlnX3dlYl9kZWxpdmVyeV92dHNfb3RmXCJdIn0&_nc_ht=scontent-sin6-2.cdninstagram.com&_nc_cat=102&_nc_ohc=rs_nqbTjP-sAX9D12Rc&edm=ALQROFkBAAAA&vs=689988195335270_3320431000&_nc_vs=HBksFQAYJEdBTUxZaEFfMzgyNzBvMEFBTGt1NU03TlFSY2pidlZCQUFBRhUAAsgBABUAGCRHUDRkWUJEczN1Q3lhQ2dCQUs0RW9nSTlKdjRIYnZWQkFBQUYVAgLIAQAoABgAGwGIB3VzZV9vaWwBMRUAACamqeSopc7SPxUCKAJDMywXQCpEGJN0vGoYEmRhc2hfYmFzZWxpbmVfMV92MREAdewHAA%3D%3D&_nc_rid=2e3b4f8783&ccb=7-4&oe=62834044&oh=00_AT8GO8kigpIrRhanvRqhxI3OfaYuIT-sGeoe_VzfFujwCw&_nc_sid=30a2ef', [['Daftar', '.daftar']], contextInfo: { externalAdReply: {title: author, body: 'Jangan lupa Follow', sourceUrl: sig, thumbnail: fs.readFileSync('./oct.jpg') }}})
        //await conn.sendMessage(m.chat, message)
	//await conn.sendButton(m.chat, msgg, global.wm, null, [['Daftar', '/daftar']], m)}
        
    //------------------- BUTTON VID
    await conn.sendButton(m.chat, text, wm, 'https://telegra.ph/file/a46ab7fa39338b1f54d5a.mp4', [['Owner', '.oct']],ftoko, { gifPlayback: true, contextInfo: { externalAdReply: {title: author, body: 'Jangan lupa Follow', sourceUrl: sig, thumbnail: fs.readFileSync('./banner.png') }}})
    
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menu|help|\?)$/i

handler.register = true
handler.exp = 3

export default handler

//----------- FUNCTION -------

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, ' H ', m, ' M ', s, ' S '].map(v => v.toString().padStart(2, 0)).join('')
}
function clockStringP(ms) {
  let ye = isNaN(ms) ? '--' : Math.floor(ms / 31104000000) % 10
  let mo = isNaN(ms) ? '--' : Math.floor(ms / 2592000000) % 12
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000) % 30
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return ['┊ ', ye, ' *Years 🗓️*\n', '┊ ', mo, ' *Month 🌙*\n', '┊ ', d, ' *Days ☀️*\n', '┊ ', h, ' *Hours 🕐*\n', '┊ ', m, ' *Minute ⏰*\n', '┊ ', s, ' *Second ⏱️*'].map(v => v.toString().padStart(2, 0)).join('')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Selamat DiniHari ☀️"
  if (time >= 4) {
    res = "Good Morning"
  }
  if (time >= 10) {
    res = "Good Afternoon"
  }
  if (time >= 15) {
    res = "Good Afternoon"
  }
  if (time >= 18) {
    res = "Good Night"
  }
  return res
}
