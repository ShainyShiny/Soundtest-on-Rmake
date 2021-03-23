let h3 = document.querySelector("div.col-md-10 h3");
let type;

if (h3 && (type = h3.innerText.match(/音楽|効果音/)[0])) {
    let col_md_6 = document.querySelector("div.col-md-6");
    if (col_md_6) {
        let id = col_md_6.innerText.match(/ID: ([0-9]+)/)[1];

        let audio = new Audio(`https://d2nlrppnj7be8d.cloudfront.net/materials/${("00000000" + id).slice(-8).match(/.{4}/g).join("/")}/material_${id}_1.mp3`);
        audio.loop = (type === "音楽");
        audio.controls = true;
        audio.controlsList.add("nodownload");

        let published_item_area = document.querySelector("div.published_item_area");
        if (published_item_area) {
            published_item_area.appendChild(audio);
        }
    }
}