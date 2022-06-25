import fs from 'fs'
let handler=async(m,{conn,usedPrefix})=>{

//let
let yFN='『 Yusuf Expert 』'
let yPC=1
let yFL=1000000000
let yJdl='Tes'
let yWM='2022 © Yusuf'
let yBy='Created by Yusuf'
let yUrl='https://instagram.com/yusuf.expert/'
let yUrl2='https://wa.me/6283873115706/'
let yPdf='./media/wa.pdf'
let yLMMsg=`Hai ${conn.getName(m.sender)} 👋`
let name=m.pushName||conn.getName(m.sender)
let tag=`${m.sender.split('@')[0]}`
let yThumb='./thumbnail.jpg'
let yDT='application/vnd.openxmlformats-officedocument.wordprocessingml.document'
let yD='./media/CBY.docx'

//quoted
const yCon={key:{fromMe:false,
                 remoteJid:'status@broadcast',
                 participant:'0@s.whatsapp.net'},
                 message:{contactMessage:{displayName:name,
                                          vcard:`BEGIN:VCARD\nVERSION:3.0\nFN:${name}\nORG:User;\nTEL;type=CELL;type=VOICE;waid=${tag}:+${tag}\nEND:VCARD`}}}
const yDoc={key:{fromMe:false,
                 remoteJid:'status@broadcast',
                 participant:'0@s.whatsapp.net'},
                 message:{documentMessage:{document:{url:yD},
                                           mimetype:yDT,
                                           fileName:yJdl,
                                           fileLength:yFL,
                                           pageCount:yPC}}}

//const
const vcard='BEGIN:VCARD\n'
           +'VERSION:3.0\n'
           +'FN:Yusuf\n'
           +'ORG:Owner;\n'
           +'TEL;type=CELL;type=VOICE;waid=6283873115706:+62 838 7311 5706\n'
           +'END:VCARD'

const yMDoc={caption:yJdl,
             footer:yWM,
             document:{url:yD},
             mimetype:yDT,
             fileName:yFN,
             fileLength:yFL,
             pageCount:yPC,
             contextInfo:{externalAdReply:{showAdAttribution:true,
                                           headerType:4,
                                           mediaUrl:yUrl,
                                           mediaType:1,
                                           title:yWM,
                                           body:yBy,
                                           thumbnail:fs.readFileSync('./media/logo.jpg'),
                                           sourceUrl:yUrl2}},
                                           buttons:[{buttonId:'.',buttonText:{displayText:'Button'},type:1},
                                                    {buttonId:'.',buttonText:{displayText:'Button'},type:1}]}

//send
conn.sendMessage(m.chat,{react:{text:'💎',key:m.key}})

//m.reply('‎')
m.reply('```īm.yusuf.expert```')

conn.sendFile(m.chat,'./media/halo.mp3','halo.mp3',null,yDoc,true,{type:'audioMessage',ptt:true})

conn.sendMessage(m.chat,{contacts:{displayName:'Yusuf',contacts:[{vcard}]}},{quoted:yDoc,mentionedJid:[m]})

conn.sendMessage(m.chat,{text:yLMMsg,
                         footer:yWM,
                         title:`➦ ${yJdl}`,
                         buttonText:'Pilih Menu',
                         sections:[{title:'● IH WIBU! ●',
                                    rows:[{title:'● Waifu',rowId:'.waifu',description:'➥ Istri kok kartun'},
                                          {title:'● Loli',rowId:'.loli',description:'➥ Tch, dasar Pedofil'},
                                          {title:'● Neko',rowId:'.neko',description:'➥ Neko + poi = ?'}]},
                                   {title:'● MENU LAIN ●',
                                    rows:[{title:'● Donasi',rowId:'.donasi',description:'➥ Donasi banh'},
                                          {title:'● Owner',rowId:'.yowner',description:'➥ Owner BOT'}]}]},
                         {quoted:yCon,mentionedJid:[m]})

conn.sendMessage(m.chat,yMDoc,{quoted:yDoc,mentionedJid:[m]})

conn.sendMessage(m.chat,{caption:yJdl,
                         footer:wm,
                         document:{url:'./media/CBY.docx'},
                         mimetype:'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                         fileName:'『 Yusuf Expert 』',
                         fileLength:1000000000,
                         pageCount:1,
                         contextInfo:{externalAdReply:{showAdAttribution:true,
                                                       headerType:4,
                                                       mediaUrl:'instagram.com',
                                                       mediaType:2,
                                                       title:wm,
                                                       body:'Created by Yusuf',
                                                       thumbnail:fs.readFileSync('./media/banner.png'),
                                                       sourceUrl:'wa.me/6283873115706'}},
                                                       buttons:[{buttonId:'.',buttonText:{displayText:'Button'},type:1},
                                                                {buttonId:'.',buttonText:{displayText:'Button'},type:1}]},
                         {quoted:{key:{fromMe:false,
                                       remoteJid:'status@broadcast',
                                       participant:'0@s.whatsapp.net'},
                                       message:{documentMessage:{document:{url:'./media/CBY.docx'},
                                                                 mimetype:'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                                                                 fileName:yJdl,
                                                                 fileLength:1000000000,
                                                                 pageCount:1}}},
                          mentionedJid:[m]})
}
handler.help = ['ytemp']
handler.tags = ['y']
handler.command = ['ytemp']
export default handler