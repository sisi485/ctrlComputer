const { exec } = require ( 'child_process');

function  shutdown () {
    exec("shutdown /t 005", (err, stdout, stderr) => {

        if(err) {
            console.log("Shutdown error", err);
        }
    });
}

function sleep () {
    exec("rundll32.exe powrprof.dll,SetSuspendState 0,1,0", (err, stdout, stderr) => {

        if(err) {
            console.log("Shutdown error", err);
        }
    });
}

module.exports = {
    shutdown: shutdown,
    sleep: sleep
};
