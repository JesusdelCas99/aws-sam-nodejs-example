const moment = require('moment'); 

exports.handler = async (event) => {
    const currentTime = moment().format('YYYY-MM-DD HH:mm:ss');
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: `Hello, World! The current time is ${currentTime}.`,
        }),
    };
};
