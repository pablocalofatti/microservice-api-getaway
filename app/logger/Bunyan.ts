const Bunyan = require('bunyan');

const loggerInfo = Bunyan.createLogger({
    name: "API gateway",
    level: "info",
    stream: process.stdout,
});

export default loggerInfo;