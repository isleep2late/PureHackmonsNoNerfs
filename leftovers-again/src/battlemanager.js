const Battle = require('./battle');
const Log = require('./log');

let BotClass;

class BattleManager {
  constructor(Bot, timeout = 0) {
    if (!Bot) {
      Log.error('BattleManager called with no bot! That is bad.');
    }
    BotClass = Bot;
    this.battles = {};
    this.timeout = timeout;
  }
  find(id) {
	  console.log(`=== BATTLEMANAGER FIND CALLED WITH ID: ${id} ===`);
  if (!this.battles[id]) {
    console.log(`Creating new battle ${id}`);
    const bot = BotClass.default ? new BotClass.default() : new BotClass();
    console.log(`Created bot instance:`, bot);
    console.log(`Bot has decide method:`, typeof bot.decide);
    this.battles[id] = new Battle(id, bot, this.timeout);
    console.log(`Battle created for ${id}`);
  }
  return this.battles[id];
}
}

module.exports = BattleManager;
