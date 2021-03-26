let h3 = document.querySelector("h3");

if (h3) {
    let matched = h3.innerText.match(/^(音楽|効果音)/);

    if (matched) {
        chrome.runtime.sendMessage(`https://rmake.jp/player/game/${location.pathname.split("/").pop()}/published_item`, function (receive) {
            if (!receive) return;

            let audio = new Audio(`https://d2nlrppnj7be8d.cloudfront.net${receive}`);
            audio.loop = matched[1] === "音楽";
            audio.controls = true;
            audio.controlsList.add("nodownload");

            let published_item_area = document.querySelector("div.published_item_area");
            if (published_item_area) published_item_area.appendChild(audio);
        });
    }
}