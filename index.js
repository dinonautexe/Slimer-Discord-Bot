const express = require('express')
const app = express();
const port = 3000

app.get('/', (req, res) => res.send('Hey Bud!'))

app.listen(port, () =>
console.log(`Your app is listening at http://localhost:${port}`)
);

const discord = require('discord.js')
const client = new discord.Client();

require('dotenv').config();
const token = process.env.TOKEN
const ldbtoken = process.env.LDBTOKEN

const ldb = require('list-discordbot');
const LDB = new ldb (ldbtoken, client);

const Dlang = require('discordbot-script');

const discordScript = require('discordbot-script');

const bot = new discordScript({
  token: token,
  prefix: ["s."]
});

bot.MessageEvent();

bot.Variables({
  version: "0.3",
  update: "Added Fun And Economy Commands",
  plorts: "0"
});

bot.Status(
  {
    0: {
      description: "$serverCount servers",
      type: "WATCHING"
    },
    
    1: {
      description: "New Slimer In Progress",
      type: "PLAYING"
    }
  },
  12000
);

const fs = require("fs");

const folders = fs.readdirSync("./commands/");

for (const files of folders) {
  const folder = fs.readdirSync(`./commands/${files}/`).filter(file => file.endsWith(".js"));

  for (const commands of folder) {
    const command = require(`./commands/${files}/${commands}`);
    bot.Command({
      name: command.name,
      code: command.code
    });
  }
}