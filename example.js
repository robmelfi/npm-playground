const rmacronym = require('./');

rmacronym('Rob Mel', (err, resp) => {
    if (err) {
        console.log(err);
    }
    console.log(resp);
});