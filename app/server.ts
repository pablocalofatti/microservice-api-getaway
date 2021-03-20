import app from './app';
import loggerInfo from './logger/Bunyan';

app.listen((5000), () => {
    loggerInfo.info(`App listening on port ${5000}!`);
});