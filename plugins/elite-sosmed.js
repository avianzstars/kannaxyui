import fs from 'fs'

let text = `╭─● *Owner*
┃● *Yusuf Expert*
┃➥ facebook.com/yusuf.oct
┃➥ instagram.com/yusuf.expert
╰─●`

let img = './banner.png'

conn.sendButton(m.chat, '*SOSMED*, text+'\n\n'+botdate+'\n\n'+wm, img, 
      [['Hello', 'hello'], ['Bye', 'bye']], m, {
contextInfo: { externalAdReply :{
                        description: stickauth,
                        title: namebot,
                        body: stickauth,
                        thumbnail: fs.readFileSync("./oct.jpg"),
                        sourceUrl: 'https://wa.me/6283873115706' }}})

handler.help = ['sosmed']
handler.tags = ['elite']
handler.command = ['sosmed']
export default handler
