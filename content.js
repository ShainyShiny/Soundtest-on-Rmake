chrome.runtime.sendMessage(location.pathname.split("/").pop(), function (receive) {
    if (!receive) return;

    let audio = new Audio(`https://d2nlrppnj7be8d.cloudfront.net${receive}`);
    audio.controls = true;
    audio.controlsList.add("nodownload");

    let published_item_area = document.querySelector("div.published_item_area");
    if (published_item_area) published_item_area.appendChild(audio);
});