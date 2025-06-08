var url = 'https://mylogger.io/log';

function log(message) {
    // Send an HTTP request
    console.log(message);
    console.log('Logging to', url);
} 

module.exports.log = log;
