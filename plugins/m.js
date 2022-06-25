import { promises } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'
import os from 'os'
import fs from 'fs'
import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {

const test = conn.sendMessage(m.chat, { text: 'Tes', mentions: [m.sender] })

const reactionMessage = {
    react: {
        text: "😎",
        key: test.key
    }
}

await conn.sendMessage(m.chat, reactionMessage)


}

handler.help = ['m']
handler.tags = ['elite']
handler.command = ['m']
export default handler