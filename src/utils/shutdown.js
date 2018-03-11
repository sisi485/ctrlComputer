const { exec } = require ( 'child_process');

function  shutdown () {
    exec("shutdown /t 005", (err, stdout, stderr) => {

        if(err) {
            console.log("shutdown error", err);
        }

        if (stderr) {
            console.error(stderr);
        }
    });
}

function sleep () {
    exec("rundll32.exe powrprof.dll,SetSuspendState 0,1,0", (err, stdout, stderr) => {

        if(err) {
            console.log("sleep error", err);
        }

        if (stderr) {
            console.error(stderr);
        }
    });
}

module.exports = {
    shutdown: shutdown,
    sleep: sleep
};
