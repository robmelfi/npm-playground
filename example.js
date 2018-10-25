const acronym = require('./');

acronym('Rob Mel', (err, resp) => {
    if (err) {
        console.log(err);
    }
    console.log(resp);
});