import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
let oct = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
    
let text = `╭─● *Instagram*
┃● *Yusuf Oct*
┃➥ instagram.com/yusuf.oct
╰─●`

const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => './oct.jpg')
await conn.sendHydrated(m.chat, text, author, pp, global.sig, 'Github', null, null, [
      ['Donate', '/donasi'],
      ['Speed', '/ping'],
      ['Owner', '/owner']
    ], contextInfo: { externalAdReply: {title: author, body: 'Jangan lupa Follow', sourceUrl: sig, thumbnail: fs.readFileSync('./oct.jpg') }}
})
}

let m1 = global.dmenut
let m2 = global.dmenub
let m3 = global.dmenub2
let m4 = global.dmenuf

handler.help = ['oct']
handler.tags = ['elite']
handler.command = ['oct']
export default handler
