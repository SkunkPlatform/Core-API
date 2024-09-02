let balance = 0;
let work = false;
let isWork = false

async function vscodeRun() {
    //vscode-run-html
    console.log("Website Verification > You can verify on verify(name)");
    console.log("Core > Welcome to the Core-Studio\nIs a made for the control() to work");
    console.log("Core > The Core API requires Node.js to use this");
}

async function verify(webname) {
    if (document.title === webname) {
        console.log("Website Verification > Your website is verified, but you can control the website from control('help')");
    }
};

async function control(type, value1, value2) {
    if (type === "help") {
        console.log("Help > Controls a website for using an types: reset, addelement (value1:elementtype, value2:{id:'',name:'',classname:'',class:''}), support, open-core, search-website, ping");
    } else if (type === "reset") {
        console.log("Controller > Reloading website...");
        window.location.reload();
    } else if (type === "addelement") {
        console.log("Controller > Creating element...");
        var newElement = document.createElement(value1);

        if (value2.id) newElement.id = value2.id;
        if (value2.name) newElement.name = value2.name;
        if (value2.classname) newElement.className = value2.classname;
        if (value2.class) newElement.classList.add(value2.class);

        document.body.appendChild(newElement);
        console.log("Controller > Element added to the page.");
    } else if (type === "support") {
        console.log("Controller Support > Controller made to control a website and works to website functionally");
    } else if (type === "open-core") {
        document.body.innerHTML = `
<style>
    body {
        background-color: #444;
        color: white;
    };

    a {
        color: white;
    }

    div {
        background-color: #555;
        color: white;
    }

    button {
        background-color: #222;
        color: white;
        display: flex;
    }
</style>

<a href="https://www.tiktok.com/@skunk.platform" target="_blank">SkunkPlatform TikTok</a>
<a href="https://www.youtube.com/channel/UCoubQ4ccU3l3Wcr-Vrd8RvQ" target="_blank">SkunkPlatform YouTube</a>
<button id="reloadweb">Reload Website</button>

<script>
    document.getElementById("reloadweb").addEventListener("click",function(){
        window.location.reload()
    });
</script>
        `;
        document.head.innerHTML = `
<title>Core-Studio</title>
<link rel="shortcut icon" href="icon.png">
        `
    } else if (type === "search-website") {
        console.log("Controller > Searching Website...");
        if (value1 === undefined && value2 === undefined) {
            console.log(`Controller Search Website > Usage: control("search-website", "_blank", "https://www.example.com") or Incomplete of Search Website`);
        }
        if (!value1 === undefined && value2 === undefined) {
            pcausa(value1, value2);
        }
    } else if (type === "lol") {
        console.log("Controller > stupid saying lol xd");
    } else if (type === "ping") {
        console.log("Controller > Pong");
    } else if (type === "need-more") {
        console.log("Controller > What's need, join discord server in: https://discord.gg/Wh2qet4e9D");
        setTimeout(() => {
            work = true;
        }, 30000);
    } else if (type === "work") {
        if (isWork !== true) {
            console.log("Controller > You have returned to work, you can use control('claim-work')");
            isWork = true
            setTimeout(() => {
                work = true;
            }, 60000);
        } else {
            console.log("Controller > You have been already working, wait in minutes");
        }
    } else if (type === "claim-work") {
        if (work === true) {
            console.log("Controller > You got 30 Balance, view your balance from control('balance')");
            balance += 30;
            isWork = false
        } else {
            console.log("Controller > You are not in your work or you still working or wait in 1 Minutes");
        }
    } else if (type === "balance") {
        console.log("Your balance is " + balance);
    } else if (type === "info-shop") {
        if (value1 === "worker-rank") {
            console.log("Cost: 50");
            console.log("Worker Rank is a default");
        } else if (value1 === "gold-rank") {
            console.log("Cost: 100");
            console.log("Gold Rank is a Golden Rank for Purchase");
        } else if (value1 === "diamond-rank") {
            console.log("Cost: 500");
            console.log("Diamond Rank is a Diamond Rank for Purchase and Expensive");
        }
    } else if (type === "buy") {
        if (value1 === "worker-rank") {
            if (balanace > 29.999) {
                console.log("You have got Worker Rank");
                balance -= 30;
            } else {
                console.log("You do not have enough of balances");
            }
        } else if (value1 === "gold-rank") {
                if (balanace > 99.999) {
                console.log("You have got Gold Rank");
                balance -= 100;
            } else {
                console.log("You do not have enough of balances");
            }
        } else if (value1 === "diamond-rank") {
            if (balanace > 499.999) {
            console.log("You have got Diamond Rank");
            balance -= 500;
        } else {
            console.log("You do not have enough of balances");
        }
    }
    } else if (type === "") {
        console.log("Controller > This control type is empty. Help in control('help');");
    }
};

async function helpSkunkPlatform() {
    console.log("Help's (Owner) Skunk Platform > Use an Control to help this: control('help')");
};

async function infoCoreAPI() {
    console.log("Core-APi > Core-API is a API made for an Core Studios from the Tools by sourcing the Website");
};

async function editElementId(id, newId) {
    try {
        let element = document.getElementById(id);

        element.id = newId;

    } catch (error) {
        console.error('Error editing element:', error);
    }
}

async function editElementClassName(id, className) {
    try {
        let element = document.getElementById(id);

        element.className = className;

    } catch (error) {
        console.error('Error editing element:', error);
    }
}

async function editElementNameTag(id, tagName) {
    try {
        let element = document.getElementById(id);

        element.tagName = tagName;

    } catch (error) {
        console.error('Error editing element:', error);
    }
}

console.log("The Core-API has made for an Tools by SkunkPlatform & Emoji Cat Yellow");
console.log("Core-API Requires the Node.js for core.js of Core-API");
console.log("SkunkPlatform: I'm a job the sourcer in made a Core Studios");
console.log("-");
console.log("<- Top Functions ->");
console.log("control(type, value1, value2)");
console.log("vscodeRun()");
console.log("verify(webname)");
console.log("helpSkunkPlatform()");
console.log("infoCoreAPI()");
console.log("editElementId()");
console.log("editElementClassName()");
console.log("editElementNameTag()");
console.log("-");
console.log("<- Discord Members ->");
console.log("Emoji Cat Yellow (Owner)");
console.log("Skunk Platform (Owner)");
console.log("PStudio");
console.log("-");
console.log("©2024 Core Studios v1.4.5");
console.log("Version: v1.4.5");
console.log("Core-API Created by Skunk Platform");
console.log("Core-API ID: asgyasg8asf7asg7as78f8767as9a786876asg87as786asf876saf9d87a6s5g87as8097fa9s758a9s78sg71241782598216gads789f69a68as40asg75as98g64as05");
