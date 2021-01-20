let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠═〘 INFO BOT 〙 ═
╠➥ Dibuat dengan bahasa javascript via NodeJs
╠➥ Rec: Tersakiti Gans
╠➥ Script: @mhmdfjralfarizi_
║
╠➥ Github: https://github.com/Tersakiti404-cyber/FajarBOTV5.0
╠➥ Instagram: @mhmdfjralfarizi_
╠➥ YouTube: Tersakiti Gans
║
╠═〘 Thanks To 〙 ═
╠➥ Nurotomo
╠➥ MfarelS
╠➥ ST4RZ
╠➥ Dan kawan yang lain :)
║
╠═〘 DONASI 〙 ═
╠➥ Dana: 0813-3378-2061
╠➥ Tsel: 0813-3378-2061
╠➥ Pulsa: 0813-3378-2061
║
║>Request? Wa.me/0813-3378-2061
║
╠═〘 NfQ BOT 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['about']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

