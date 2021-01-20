let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Telkomsel [+62 813-3378-2061]
│ • Dana: [+62 813-3378-2061]
│ • Pulsa: [+62 813-3378-2061]
│ 「 Chat OWNER 」
│ > Ingin donasi? Wa.me/6281333782061
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
