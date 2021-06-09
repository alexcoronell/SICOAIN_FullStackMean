const helpers = {};

helpers.randomDocName = () => {
    const possible = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let randomDocName = "Evidence-";
    for (let i = 0; i < 12; i++) {
        randomDocName += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return randomDocName;
}

module.exports = helpers;
