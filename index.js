const config = require('./config.json');
const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(config.telegramAuthorizationToken, { polling: true });
const driver = require('@thiagoelg/node-printer');
console.log(driver.getDefaultPrinterName());
const MY_MESSAGE = 1;
const { ThermalPrinter, PrinterTypes, CharacterSet } = require("node-thermal-printer");

const printer = new ThermalPrinter({
    type: PrinterTypes.EPSON,
    interface: 'printer:EPSON-TM-T20X',
    removeSpecialCharacters: false,
    characterSet: CharacterSet.PC860_PORTUGUESE,
    driver: driver
});

bot.onText(/\/todo (.+)/gm, async (msg, match) => {
    printer.drawLine();
    printer.invert(true);
    printer.alignCenter();
    printer.println(new Date().toLocaleString());
    printer.invert(false);
    printer.alignLeft();
    const todos = match[MY_MESSAGE].split(",")
    for (const todo of todos) {
        printer.println(`[ ] - ${todo.trim()}`);
    }
    printer.drawLine();
    printer.cut();
    const execute = await printer.execute();
    printer.clear();
    bot.sendMessage(msg.chat.id, "🖨️" + execute);
});

bot.onText(/\/print (.+)/gm, async (msg, match) => {
    printer.println(match[MY_MESSAGE].trim());
    printer.cut();
    const execute = await printer.execute();
    printer.clear();
    bot.sendMessage(msg.chat.id, "🖨️" + execute);
});

bot.onText(/\/label (.+)/gm, async (msg, match) => {
    const params = match[MY_MESSAGE].split(",")
    printer.alignCenter();
    printer.setTextSize(Number(params[0].trim()), Number(params[0].trim()));
    printer.print(params[1].trim());
    printer.cut();
    const execute = await printer.execute();
    printer.clear();
    bot.sendMessage(msg.chat.id, "🖨️" + execute);
});
