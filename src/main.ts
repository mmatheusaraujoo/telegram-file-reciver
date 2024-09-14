import { Telegraf } from 'telegraf';
import { message } from 'telegraf/filters';
import { environments } from './config';

const bot = new Telegraf(environments.botToken);

bot.launch();

bot.on(message('document'), (ctx) => {
  const file = ctx.message?.document;
  ctx.reply('file');
  console.log(file);
});

bot.on(message('text'), (ctx) => {
  const message = ctx.message;
  ctx.reply('text');
  console.log(message);
});
