
const HttpRequest = new XMLHttpRequest();

function init() {
    console.log("Init Func");



    wlograw("                         __ __________ __    _    ______________\n");
    wlograw("                       _/_//_/ ____/ //_/   | |  / / ____/ ____/\n");
    wlograw("                     _/_//_// /_  / ,<      | | / / /   / __/   \n");
    wlograw("                   _/_//_/ / __/ / /| |     | |/ / /___/ /___   \n");
    wlograw("                  /_//_/  /_/   /_/ |_|     |___/\\____/_____/   \n");
    wlograw("\n\n\n");

    wlogln("Init");



}
var getInput = {
    token: function() {
        return document.getElementById("input-token").value;
    },
    channel: function() {
        return document.getElementById("input-channel").value;
    },
    animationId: function() {
        return document.getElementById("input-animation-id").value;
    },
    animationType: function() {
        return document.getElementById("input-animation-type").value;
    },
    emojiId: function() {
        return document.getElementById("input-emoji-id").value;
    },
    enojiName: function() {
        return document.getElementById("input-emoji-name").value;
    }
}

function request(url, method, body) {
    HttpRequest.open(method, url);
    HttpRequest.setRequestHeader('Content-type', 'application/json');
    // request.setRequestHeader(
    //     'user-agent', 
    //     'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/1.0.1018 Chrome/91.0.4472.164 Electron/13.6.6 Safari/537.36'
    // );
    HttpRequest.setRequestHeader('authorization', `${getInput.token()}`); // Set auth header
    HttpRequest.send(body ? JSON.stringify(body) : '');

// fetch(url,{
//     method: method,
//     headers:{
//         'Content-Type' :'application/json',
//         'user-agent'   : 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/1.0.1018 Chrome/91.0.4472.164 Electron/13.6.6 Safari/537.36',
//         'authorization': `${token}`,
//     },
//     body
// }).then(res => {
//     console.log(res);
// }).catch(error => {
//     console.error(error);
// })

    // fetch(url,{
//     method: method,
//     headers:{
//         'authorization': `${token}`,
//         // 'Content-Type':'application/json'
//     },
//     body: {}
// }).then(res => res.json())
// .then(res => {
        

// fetch(`https://discord.com/api/v9/channels/${gdmCache[payloadItteration-1]}`,{
//     method: 'PATCH',
//     headers:{
//         'authorization': `${token}`,
//         'Content-Type':'application/json'
//     },
//     body: {"name": `${imgVal}`}
// }).then(res => {
//     console.log(res);
// }).catch(error => {
//     console.error(error);
// })
}

// animation_id: 20
// animation_type: 0
// emoji_id: null
// emoji_name: "💀"

function vcEffectRaw( // Raw constructor
    channelId,
    animationId,
    animationType,
    emojiId,
    emojiName
) {
    wlogln(`VcEffectRaw ⬇ => ${channelId}`);
    wlogln(`anim-ID   : ${animationId}`);
    wlogln(`anim-Type : ${animationType}`);
    wlogln(`emoji-ID  : ${emojiId}`);
    wlogln(`emoji-Name: ${emojiName}`);

    request(
        `https://discord.com/api/v9/channels/${channelId}/voice-channel-effects`,
        'POST',
        {
            animation_id: animationId,
            animation_type: animationType,
            emoji_id: emojiId == '' ? null : emojiId, // if blank be null value
            emoji_name: emojiName,
        }
    );
}
function vcEffect( // Just specify body
    animationId,
    animationType,
    emojiId,
    emojiName
) {
    vcEffectRaw(
        getInput.channel(),
        animationId,
        animationType,
        emojiId,
        emojiName
    );
}


function vcEffectInput() { // Specify from html form
    vcEffect(
        getInput.animationId(),
        getInput.animationType(),
        getInput.emojiId(),
        getInput.enojiName()
    );
}


