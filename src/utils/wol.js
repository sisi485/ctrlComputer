const wol = require('node-wol');

function wakeup() {
    wol.wake('70:85:C2:01:53:E6', function(error) {
        if(error) {
            return;
        }
    });
}

module.exports = {
    wakeup: wakeup
};
