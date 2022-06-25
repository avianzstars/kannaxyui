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
	title: "IH WIBU!",
	rows: [
	    {title: "● Waifu", rowId: ".waifu", description: "➥ Istri kok kartun"},
	    {title: "● Loli", rowId: ".loli", description: "➥ Tch, dasar Pedofil"},
	    {title: "● Neko", rowId: ".neko", description: "➥ Neko + poi = ?"}
	]
    },
    {
	title: "MENU LAIN",
	rows: [
	    {title: "● Donasi", rowId: ".donasi", description: "➥ Donasi banh"},
	    {title: "● Owner", rowId: ".oct2", description: "➥ Owner BOT"}
	]
    },
]

let name = m.pushName || conn.getName(m.sender)
let ykon = {
    key: {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'},
    message: { contactMessage: {
        displayName: wm,
        vcard: `BEGIN:VCARD\nVERSION:3.0\nFN:Yusuf\nORG:Owner;\nTEL;type=CELL;type=VOICE;waid=6283873115706:+62 838 7311 5706\nEND:VCARD`}}}

const listMessage = {
  text: `
${conn.getName(m.sender)} Silahkan dipilih
  `,
  footer: wm,
  title: '➦ MENU ANIME',
  buttonText: 'Pilih Menu',
  sections
}

conn.sendMessage(m.chat, listMessage,{'quoted':ykon,'mentionedJid':[m]})

const ybut = [
  {buttonId: '.donasi', buttonText: {displayText: '$ Donasi'}, type: 1},
  {buttonId: '.menu', buttonText: {displayText: '⋮☰ Menu'}, type: 1}
]

const reactionMessage = {
    react: {
        text: "😎",
        key: m.key
    }
}

await conn.sendMessage(m.chat, reactionMessage)


}

handler.help = ['menu2']
handler.tags = ['elite']
handler.command = ['menu2']
export default handler