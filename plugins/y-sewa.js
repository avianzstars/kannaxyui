import { promises } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'
import os from 'os'
import fs from 'fs'
import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let tags
let teks = `${args[0]}`.toLowerCase()
let arrayMenu = ['all']
if (!arrayMenu.includes(teks)) teks = '404'
if (teks == 'elite') tags = {
    'elite': 'Elite'
  }

const sections = [
    {
	title: "● Sewa ●",
	rows: [
	    {title: "🏷 ● Hemat", rowId: ".order *Sewa Paket*: Hemat", description: "➥ Rp. 3.500 (1 Minggu)"},
	    {title: "🏷 ● Normal", rowId: ".order Sewa Paket*: Normal", description: "➥ Rp. 15.000 (1 Bulan)"},
	]},
    {
	title: "● Premium ●",
	rows: [
	    {title: "💎 ● Hemat", rowId: ".order *Premium Paket: Hemat", description: "➥ Rp. 3.500 (1 Minggu)"},
	    {title: "💎 ● Normal", rowId: ".order *Premium Paket: Normal", description: "➥ Rp. 15.000 (1 Bulan)"}
	]},
]

let pdf = './media/wa.pdf'
let name = m.pushName || conn.getName(m.sender)
let ydoc = {
    key: {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'},
    message: { 
    "documentMessage": {
    'document':{'url':pdf},
    'mimetype':'application/pdf',
    'fileName':'Sewa/Premium',
    'fileLength':1000000000,
    'pageCount':1
}}}

let text = `➦ Sewa/Premium`

const listMessage = {
  text:`
╭─● *S E W A*
┃● *Hemat*
┃➥ Rp. 3.500 (1 Minggu)
┃● *Normal*
┃➥ Rp. 15.000 (1 Bulan)
╰─●

╭─● *P R E M I U M*
┃● *Hemat*
┃➥ Rp. 3.500 (1 Minggu)
┃● *Normal*
┃➥ Rp. 15.000 (1 Bulan)
╰─●
`,
  footer: wm,
  title: text,
  buttonText: 'Pilih Menu',
  sections
}

const reactionMessage = {
    react: {
        text: "😎",
        key: m.key
    }
}

conn.sendMessage(m.chat, reactionMessage)
conn.sendMessage(m.chat, listMessage,{'quoted':ydoc,'mentionedJid':[m]})

}

handler.help = ['ysewa']
handler.tags = ['y']
handler.command = ['ysewa']
export default handler