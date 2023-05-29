const { Telegraf } = require("telegraf");
require('dotenv').config();
const bot = new Telegraf(process.env.BOT_TOKEN)
// console.log(bot)
try{
bot.start((ctx) => ctx.reply("Welcome to Victor World"));
bot.command("frontend", (ctx) => ctx.reply("HTML,CSS,JS,React javascript"));
bot.command("backend", (ctx) => ctx.reply("Node JS,Express Js,MySql,MongoDbB"));

bot.help((ctx) => ctx.reply("Send me a sticker"));
bot.launch();

}
catch {
    console.log("error")
}