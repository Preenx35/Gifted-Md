/*Gifted Tech*/


const bot = require(__dirname + '/lib/giftech');
const { VERSION } = require(__dirname + '/config');

const start = async () => {
    Debug.info(`Gifted ${VERSION}`);
    try {
        await bot.init();
        bot.logger.info('⏳ sᴛᴀʀᴛɪɴɢ ɢɪғᴛᴇᴅ');
        await bot.DATABASE.sync();
        await bot.connect();
    } catch (error) {
        Debug.error(error);
        start();
    }
};
start();

//GIFTEDTECH




