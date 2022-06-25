import fs from 'fs'
let handler=async(m,{conn,text,usedPrefix})=>{

let yJdl='Owner'
let teks = `╭─● *O W N E R*
┃● *Yusuf Expert*
┃➥ wa.me/6283873115706
┃➥ facebook.com/yusuf.oct
┃➥ instagram.com/yusuf.expert
╰─●
*Catatan*: _Jika ada yg error, gw males benerin_.`

//let tag = `${m.sender.replace(/@.+/, '')}`
let mentionedJid = [m.sender]
let name = m.pushName || conn.getName(m.sender)
let tag = `${m.sender.split('@')[0]}`
let url='```īm.yusuf.expert```'
let msg=`*@${tag}*\n_Loading...98%_\n${url}`
let arrayMenu=['k','s']
if (!arrayMenu.includes(text))text='404'

const yCard='BEGIN:VCARD\n'
           +'VERSION:3.0\n'
           +'FN:Yusuf\n'
           +'ORG:Owner;\n'
           +'TEL;type=CELL;type=VOICE;waid=6283873115706:+62 838 7311 5706\n'
           +'END:VCARD'

if(text=='k')
return conn.sendMessage(m.chat,{contacts:{displayName:'Yusuf',contacts:[{vcard:yCard}]}},
  {quoted:{key:{fromMe:false,
        remoteJid:'status@broadcast',
        participant:'0@s.whatsapp.net'},
        message:{contactMessage:{displayName:name,
        vcard:yCard}}},
  mentionedJid:[m]})


if(text=='s')
return conn.sendMessage(m.chat,{caption:`➦ *${yJdl}*`,footer:`${teks}\n\n${wm}`,
                        document:{url:'./media/CBY.docx'},
                        mimetype:'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                        fileName:'『 Yusuf Expert 』',
                        fileLength:1000000000,
                        pageCount:1,
                        contextInfo:{externalAdReply:{showAdAttribution:true,
                                     headerType:4,
                                     mediaUrl:'https://instagram.com/yusuf.expert',
                                     mediaType:2,
                                     title:wm,
                                     body:'Created by Yusuf',
                                     thumbnail:fs.readFileSync('./media/banner.png'),
                                     sourceUrl:'https://wa.me/6283873115706'}},
                                     buttons:[{buttonId:'.donasi',buttonText:{displayText:'💰 DONASI'},type:1},
                                              {buttonId:'.menu',buttonText:{displayText:'⋮☰ MENU'},type:1}]},
                        {quoted:{key:{fromMe:false,
                                      remoteJid:'status@broadcast',
                                      participant:'0@s.whatsapp.net'},
                                      message:{documentMessage:{document:{url:'./media/CBY.docx'},
                                               mimetype:'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                                               fileName:yJdl,
                                               fileLength:1000000000,
                                               pageCount:1}}},
                        mentionedJid:[m]})


if(text=='404')
return conn.sendMessage(m.chat,
{text:'Silahkan dipilih',
 footer:'~ ```īm.yusuf.expert```\n'+wm,
 title:`➦ ${yJdl}`,
 buttonText:'PILIH MENU',
 sections:[{title:'● MENU ●',
            rows:[{title:'● Kontak',rowId:'.owner k',description:'➥ Kontak Owner Ganteng'},
                  {title:'● Sosmed',rowId:'.owner s',description:'➥ Sosial Media Owner'}]},
           {title:'● MENU LAIN ●',
            rows:[{title:'● Donasi',rowId:'.donasi',description:'➥ Donasi seikhlasnya'}]}]},
{quoted:{key:{fromMe:false,
        remoteJid:'status@broadcast',
        participant:'0@s.whatsapp.net'},
        message:{contactMessage:{displayName:name,
        vcard:`BEGIN:VCARD\nVERSION:3.0\nFN:${name}\nORG:User;\nTEL;type=CELL;type=VOICE;waid=${tag}:+${tag}\nEND:VCARD`}}},
mentionedJid})


}
handler.help = ['owner', 'creator']
handler.tags = ['main', 'info']
handler.command = /^(owner|yowner|creator)/i
export default handler
