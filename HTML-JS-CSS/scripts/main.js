const groupList = ["Webpage-Design", "Game-Design", "High-Performance-Computing"] 
let items = [];
let gridList = [];


function objectToArray(arr) {
    for(let i = 0; i < arr.length; i++) {
        let group = arr[i];
        let newObject = {};
        newObject = {
            name: group,
            siteLink: `/pages/${group}/`,
            imgurl: `images/${group}.png`
            //imgurl: `/images/${group}`
        }
        items.push(newObject);
    }
    return items;
}

function createBlocks(arr) {
        // create container
    const iDiv = document.createElement("div");
    iDiv.className = "container";
    document.getElementsByTagName("main")[0].appendChild(iDiv);

    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
            // create div
        const innerDiv = document.createElement("div");
        innerDiv.className = "block";
        innerDiv.id = `id-${i}`;
        gridList.push(innerDiv.id);
        iDiv.appendChild(innerDiv);

            // create link
        const a = document.createElement('a');
        a.href = `/site/${item.name}`;
        a.target = "_blank";                     // opens page to new tab
        innerDiv.appendChild(a);

            // create image
        const img = document.createElement("img");
        img.className = "grp";
        img.src = item.imgurl;
        img.alt = item.name;
        a.appendChild(img);
    }
}

function runAll() {
    objectToArray(groupList);
    createBlocks(items);
}

runAll();
