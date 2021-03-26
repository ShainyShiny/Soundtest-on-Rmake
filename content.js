let legend = document.querySelector("legend");

if (legend) {
    let matched = legend.innerText.match(/^(音楽|効果音)/);

    if (matched) {
        chrome.runtime.sendMessage(`https://rmake.jp/create/materials/${location.pathname.split("/").pop()}.json`, function (receive) {
            if (!receive) return;

            let audio = new Audio(`https://d2nlrppnj7be8d.cloudfront.net${receive}`);
            audio.loop = matched[1] === "音楽";
            audio.controls = true;
            audio.controlsList.add("nodownload");

            let col_md_9 = document.querySelector("div.col-md-9");
            if (col_md_9) col_md_9.appendChild(audio);
        });
    }
}