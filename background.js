chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    fetch(`https://rmake.jp/player/game/${request}/published_item`).then(function (response) {
        return response.json();
    }).then(function (json) {
        sendResponse(json.url);
    });

    return true;
});
