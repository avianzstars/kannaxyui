import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
let oct = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
    
let text = `╭─● *Instagram*
┃● *Yusuf Oct*
┃➥ instagram.com/yusuf.oct
╰─●`
    
await conn.sendButton(m.chat, text, botdate + '\n\n' + wm, 'https://scontent-sin6-2.cdninstagram.com/v/t50.16885-16/274860803_155936233479998_2528562067986984633_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjEyODAuaWd0di5iYXNlbGluZSIsInFlX2dyb3VwcyI6IltcImlnX3dlYl9kZWxpdmVyeV92dHNfb3RmXCJdIn0&_nc_ht=scontent-sin6-2.cdninstagram.com&_nc_cat=102&_nc_ohc=rs_nqbTjP-sAX9D12Rc&edm=ALQROFkBAAAA&vs=689988195335270_3320431000&_nc_vs=HBksFQAYJEdBTUxZaEFfMzgyNzBvMEFBTGt1NU03TlFSY2pidlZCQUFBRhUAAsgBABUAGCRHUDRkWUJEczN1Q3lhQ2dCQUs0RW9nSTlKdjRIYnZWQkFBQUYVAgLIAQAoABgAGwGIB3VzZV9vaWwBMRUAACamqeSopc7SPxUCKAJDMywXQCpEGJN0vGoYEmRhc2hfYmFzZWxpbmVfMV92MREAdewHAA%3D%3D&_nc_rid=2e3b4f8783&ccb=7-4&oe=62834044&oh=00_AT8GO8kigpIrRhanvRqhxI3OfaYuIT-sGeoe_VzfFujwCw&_nc_sid=30a2ef', [['Follow', '.oct']], m, {
contextInfo: { externalAdReply :{
                        description: stickauth,
                        title: author,
                        body: 'Jangan lupa Follow',
                        thumbnail: fs.readFileSync("./oct.jpg"),
                        sourceUrl: sig }}})}

let m1 = global.dmenut
let m2 = global.dmenub
let m3 = global.dmenub2
let m4 = global.dmenuf

handler.help = ['oct']
handler.tags = ['elite']
handler.command = ['oct']
export default handler
