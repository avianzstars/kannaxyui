import fetch from 'node-fetch'

conn.sendButton(m.chat, 'Hello world!', '@BochilGaming', null, [
      ['Oct', '.oct'], ['Bye', 'bye']
])

handler.help = ['oct']
handler.tags = ['oct']
handler.command = /^(oct)$/i

export default handler
