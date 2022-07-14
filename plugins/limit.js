let handler = async (m, { conn, text, usedPrefix, command }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let ke1 = global.db.data.users[who].limit
    let ke2 = global.db.data.users[who].exp
    let ke3 = global.db.data.users[who].money
    
    conn.sendButton(m.chat, `Sisa Limit
•·–––––––––––––––––––––––––·•
❑ 🏦 Bank *${user.name}*
❑ ⭐ Role : *${user.role}*\n\n
❑ *${ke2}* Exp ✨
❑ *${ke1}* Limit 📊
❑ *${ke3}* Money 💵`
•·–––––––––––––––––––––––––·•

Thanks`, author, null, [
        ['Beli', '.buy'],
        ['Menu', `${usedPrefix}menu`]
    ], m, {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: wm,jpegThumbnail: Buffer.alloc(0)}}}})
}
handler.help = ['limit [@user]']
handler.tags = ['xp']
handler.command = /^(limit)$/i
export default handler
