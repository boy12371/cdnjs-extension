(function() {

    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
        if (request.method == "info") {
            chrome.storage.sync.get({
                qiniu: '',
                noPreffix: false
            }, function(res) {
                sendResponse(res);
            });
        }
        return true;
    });

})();
