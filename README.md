# epson-tm-t20x-telegram-bot
An very simple Node.js project that seamlessly connects a Node Telegram bot with an Epson thermal printer (TM-T20X). With just a few lines of code, you can effortlessly send messages from your Telegram chats directly to the printer, creating a streamlined printing experience. Whether it's order confirmations, receipts, or personalized notes, ThermalBot empowers you to effortlessly bridge the gap between digital communication and tangible prints. Impress your users and elevate your Telegram bot's functionality with this elegant solution.

# Initial steps


# Installation
```bash
git clone https://github.com/thiagosanches/epson-tm-t20x-telegram-bot.git
cd epson-tm-t20x-telegram-bot/
npm i

sudo cp epson-thermal.service /etc/systemd/system
sudo systemctl enable --now epson-thermal.service
sudo systemctl status epson-thermal.service # you should see the service running.
sudo systemctl restart epson-thermal.service # every time you change your index.js you must restart the service to apply the changes.
```

# Usage
```bash
# Make a grocery list store 
curl http://localhost:3000/todo -X POST --data '{"message": "Frutas, Legumes, Carnes, Pães, Leite, Ovos, Arroz, Feijão, Macarrão, Óleo, Açúcar, Sal, Café, Sabão, Papel higiênico"'} \
-H "Content-Type: application/json"

# Print any ordinary message
curl http://localhost:3000/print -X POST --data '{"message": "Hello World!"'} \
-H "Content-Type: application/json"

# TODO
curl http://localhost:3000/picture -X POST --data '{"message": "Hello World!"'} \
-H "Content-Type: application/json"
```