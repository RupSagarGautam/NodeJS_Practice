var url = 'https://mylogger.io/log';

function log(msg) {
    // Send an HTTP request
    console.log(msg);
    console.log('Logging to', url);
} 

module.exports.log = log;
