var consoleElem = document.getElementById("console");

function genTimestamp() {
    let date_ob = new Date();
    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    let hours = date_ob.getHours();
    let minutes = date_ob.getMinutes();
    let seconds = date_ob.getSeconds();
    let tsmpout = `[${year}/${month}/${date} ${hours}:${minutes}:${seconds}]\t`;
    return tsmpout;
}

function wlograw(text) {
    consoleElem.value += text;
    consoleElem.scrollTop = consoleElem.scrollHeight; // scroll
}
function wlog(text) {
    wlograw(genTimestamp() + text);
}
function wlogln(text) {
    wlog(text + '\n')
}