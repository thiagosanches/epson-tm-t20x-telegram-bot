# epson-tm-t20x-telegram-bot
An very simple Node.js project that seamlessly connects a Node Telegram bot with an Epson thermal printer (TM-T20X). With just a few lines of code, you can effortlessly send messages from your Telegram chats directly to the printer, creating a streamlined printing experience. Whether it's order confirmations, receipts, or personalized notes, ThermalBot empowers you to effortlessly bridge the gap between digital communication and tangible prints. Impress your users and elevate your Telegram bot's functionality with this elegant solution.

### Initial steps

I'm using Pop_OS 22.04 distribution, so you should be able to reproduce the same steps on Ubuntu as well.

- Plug the printer on your USB port (on your desktop/notebook).
- Install the cups server.
- Download the driver [here](https://www.epson-biz.com/modules/pos/index.php?page=single_soft&cid=5012).
- Extract the file.
- Execute the file `install.sh`.
- Choose the distribution according to what you have (I have chosen the `8` option (Ubuntu)).
- Run the printer (the navite application from your distribution).
- Click on add new printer.
- Choose the detected printer (it should be the first one on the list).
- Choose the driver as 'Epson' click on forward.
- Choose the model as 'TM BA Thermal' click on forward and apply.
- You should be able to print a test page.

### Installation
```bash
git clone https://github.com/thiagosanches/epson-tm-t20x-telegram-bot.git
cd epson-tm-t20x-telegram-bot/
npm i

sudo cp epson-thermal.service /etc/systemd/system
sudo systemctl enable --now epson-thermal.service
sudo systemctl status epson-thermal.service # you should see the service running.
sudo systemctl restart epson-thermal.service # every time you change your index.js you must restart the service to apply the changes.
```

### Configuration
Create the following `config.json` file:

```json
{
    "telegramAuthorizationToken": "0000000000:AAHZXYZ",
    "me": 123456789
}
```

- Where `me` you should put your `chat_id` from Telegram.
- Where `telegramAuthorizationToken` you should replace by your bot_token provided by BotFather.

### Example
