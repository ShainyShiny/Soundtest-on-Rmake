chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    fetch(request).then(function (response) {
        return response.json();
    }).then(function (json) {
        sendResponse(json.url);
    }).catch(function (error) {
        sendResponse(false);
    });

    return true;
});
