import { promises } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'
import os from 'os'
import fs from 'fs'
import fetch from 'node-fetch'
let handler=async(m)=>{

 let mode = global.opts['self'] ? 'Private' : 'Publik'
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let { age, exp, limit, level, role, registered, money} = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    //let name = await conn.getName(m.sender)
    let premium = global.db.data.users[m.sender].premiumTime
    let prems = `${premium > 0 ? 'Premium': 'Free'}`
    let platform = os.platform()

let name=`${m.pushName||conn.getName(m.sender)}`
let yJdl='Anime'
let yLMMsg=`Silahkan dipilih ${name}
%limit`

conn.sendMessage(m.chat,{text:yLMMsg,
                         footer:wm,
                         title:`➦ ${yJdl}`,
                         buttonText:'Pilih Menu',
                         sections:[{title:'● IH WIBU! ●',
                                    rows:[{title:'● Waifu',rowId:'.waifu',description:'➥ Istri kok kartun'},
                                          {title:'● Loli',rowId:'.loli',description:'➥ Tch, dasar Pedofil'},
                                          {title:'● Neko',rowId:'.neko',description:'➥ Neko + poi = ?'}]},
                                   {title:'● MENU LAIN ●',
                                    rows:[{title:'💰 ● Donasi',rowId:'.donasi',description:'➥ Donasi kak, biar BOT nya on terus'},
                                          {title:'👑 ● Owner',rowId:'.yowner',description:'➥ Owner Ganteng'}]}]},
                         {quoted:{key:{fromMe:false,
                                       remoteJid:'status@broadcast',
                                       participant:'0@s.whatsapp.net'},
                                       message:{documentMessage:{fileName:'Menu anime',
                                                                 mimetype:'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                                                                 pageCount:3}}},
                         mentionedJid:[m]})

}
handler.help = ['anime']
handler.tags = ['y']
handler.command=['anime']
export default handler