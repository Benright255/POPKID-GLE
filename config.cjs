const fs = require("fs");
require("dotenv").config();

const config = {
  // 🧠 Session & Identity
  SESSION_ID: process.env.SESSION_ID || "Popkidmd$MLJjtNih",
  PREFIX: process.env.PREFIX || '.',
  BOT_NAME: process.env.BOT_NAME || "𝐁𝐄𝐍𝐑𝐈𝐆𝐇𝐓-𝐗𝐌𝐃",
  BOT: process.env.BOT || "hello 👋",
  NEW_CMD: process.env.NEW_CMD || "ᴀᴅᴅᴠᴀʀ\n│ sᴜᴅᴏ\n| popkid",
  CAPTION: process.env.CAPTION || "ᴘᴏᴡᴇʀᴇᴅ by popkid",

  // 🤖 GPT/AI API KEYS
  GPT_API_KEY: process.env.GPT_API_KEY || "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", // Groq key
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyCUPaxfIdZawsKZKqCqJcC-GWiQPCXKTDc",

  // 🔧 Auto features
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN === 'true',
  AUTO_BIO: process.env.AUTO_BIO === 'true',
  AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT === 'true',
  AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS === 'true',
  AUTO_STICKER: process.env.AUTO_STICKER === 'true',
  AUTO_READ: process.env.AUTO_READ === 'true',
  AUTO_TYPING: process.env.AUTO_TYPING === 'true',
  AUTO_RECORDING: process.env.AUTO_RECORDING === 'true',
  AUTO_REACT: process.env.AUTO_REACT === 'true',
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE === 'true',
  AUTO_BLOCK: process.env.AUTO_BLOCK !== 'false', // true by default

  // 📦 Extra Features
  ANTI_LEFT: process.env.ANTI_LEFT === 'true',
  ANTILINK: process.env.ANTILINK === 'true',
  ANTI_DELETE: process.env.ANTI_DELETE === 'true',
  CHAT_BOT: process.env.CHAT_BOT === 'true',
  CHAT_BOT_MODE: process.env.CHAT_BOT_MODE || "public",
  LYDEA: process.env.LYDEA === 'true',
  REJECT_CALL: process.env.REJECT_CALL === 'true',
  NOT_ALLOW: process.env.NOT_ALLOW !== 'false',
  BLOCK_UNKNOWN: process.env.BLOCK_UNKNOWN === 'true',

  // 🛠 Other
  MODE: process.env.MODE || "public",
  DELETED_MESSAGES_CHAT_ID: process.env.DELETED_MESSAGES_CHAT_ID || "254111385747@s.whatsapp.net",

  // 👑 Owner & Permissions
  OWNER_NAME: process.env.OWNER_NAME || "BENRIGHT INNOVATE",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "25511384026",
  SUDO_NUMBER: process.env.SUDO_NUMBER || "255711385026",

  // 💚 Auto react emoji
  AUTOLIKE_EMOJI: process.env.AUTOLIKE_EMOJI || '💚',
  STATUS_READ_MSG: process.env.STATUS_READ_MSG || 'Status Viewed by 𝐁𝐄𝐍𝐑𝐈𝐆𝐇𝐓-𝐗𝐌𝐃',
  WELCOME: process.env.WELCOME === 'true',
};

module.exports = config;
