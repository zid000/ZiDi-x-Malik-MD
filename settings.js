//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                    𝗭𝗶𝗗𝗶-𝗠𝗗  𝐁𝐎𝐓                                                 //
//                                                                                                      //
//                                         Ｖ：7.0                                                       //
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : ZiDi-MD
//  * @author : Malik Official
//  * @youtube : https://www.youtube.com/@ZiDi_Malikx012
//  * @description : ZiDi-MD ,A Multi-functional whatsapp user bot.
//*
//*
//base by Malik Official
//GitHub: @zid000
//WhatsApp: +923247116683
//want more free bot scripts? subscribe to my youtube channel: https://www.youtube.com/@ZiDi_Malikx012
//   * Created By Github: zid000.
//   * Credit To Malik Official
//   * © 2024 𝗭𝗶𝗗𝗶-𝗠𝗗-𝗩7.
// ⛥┌┤
// */

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {

SESSION_ID: process.env.SESSION_ID === undefined ? 'Manu-MD&ROUwHb5D#Y2BUknqUZlyNavw4nCQV9NrnPOXZstk62YY8NOHXPbI' : process.env.SESSION_ID,
PREFIX: process.env.PREFIX || 'null' ,
PORT: process.env.PORT === undefined ? "8000" : process.env.PORT,
SUDO: process.env.SUDO === undefined ? '923247116683' : process.env.SUDO,
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS === undefined ?"true" : process.env.AUTO_READ_STATUS,
MODE: process.env.MODE === undefined ?"public" : process.env.MODE,
AUTO_VOICE: process.env.AUTO_VOICE === undefined ? "false" : process.env.AUTO_VOICE,
ANTI_BAD: process.env.ANTI_BAD === undefined ? "false" : process.env.ANTI_BAD,
ANTI_LINK: process.env.ANTI_LINK === undefined ? "true" : process.env.ANTI_LINK,
ANTI_CALL: process.env.ANTI_CALL === undefined ? "true" : process.env.ANTI_CALL,    
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO,
ANTI_DELETE : process.env.ANTI_DELETE === undefined ? 'true' : process.env.ANTI_DELETE,
ANTI_BOT: process.env.ANTI_BOT === undefined ? "true" : process.env.ANTI_BOT,
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE === undefined ? "false" : process.env.ALWAYS_ONLINE,
READ_CMD: process.env.READ_CMD === undefined ? "true" : process.env.READ_CMD,
RECORDING: process.env.RECORDING === undefined ? "true" : process.env.RECORDING,
AI_CHAT: process.env.AI_CHAT === undefined ? "false" : process.env.AI_CHAT,
AUTO_REACT: process.env.AUTO_REACT === undefined ? "false" : process.env.AUTO_REACT,
AUTO_TYPING: process.env.AUTO_TYPING === undefined ? 'false' : process.env.AUTO_TYPING,
AUTO_BIO: process.env.AUTO_BIO === undefined ? 'true' : process.env.AUTO_BIO,
ANTI_STICKER: process.env.ANTI_STICKER === undefined ? 'false' : process.env.ANTI_STICKER,
ANTI_PHOTO: process.env.ANTI_PHOTO === undefined ? 'false' : process.env.ANTI_PHOTO,
MOROCCO_BLOCK: process.env.MOROCCO_BLOCK === undefined ? 'false' : process.env.MOROCCO_BLOCK,
POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgresql://manul:qbWhglRV24IXQqDJbKIbtWADaSRj0e19@dpg-cuokgraj1k6c739an3s0-a/manu_md_db' : process.env.POSTGRESQL_URL,
};
