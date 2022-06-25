let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `*[ ! ] Pesan salah*\nContoh: ${usedPrefix + command} Ownernya ganteng`
    if (text.length < 1) throw `Laporan terlalu pendek, minimal 10 karakter!`
    if (text.length > 1000) throw `Laporan terlalu panjang, maksimal 1000 karakter!`
    let teks = `*➦ @${m.sender.split`@`[0]}*\n*Pesan*: ${text}`
    conn.reply('6283873115706@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks,m,{contextInfo:{mentionedJid:[m.sender]}})
    m.reply(`_Pesan terkirim ke Owner BOT_`)
}
handler.command = /^(yord)$/i
export default handler