export async function deleteUpdate(message) {
    try {
        const { fromMe, id, participant } = message
        if (fromMe)
            return
        let msg = this.serializeM(this.loadMessage(id))
        if (!msg)
            return
        let chat = global.db.data.chats[msg.chat] || {}
        if (chat.delete)
            return
        await this.reply('6283830393361@s.whatsapp.net', `Tch, Terdeteksi @${participant.split`@`[0]} telah menghapus pesan`.trim(), msg, {
            mentions: [participant]
        })
        this.copyNForward('6283830393361@s.whatsapp.net', msg).catch(e => console.log(e, msg))
    } catch (e) {
        console.error(e)
    }
}