function generateClient() {
    document.head.innerHTML = "";
    document.title = "Core-API: The Client of Tools";

    const box = document.createElement("div");
    const p1 = document.createElement("p");
    const h1 = document.createElement("h1");
    const btnDiscord = document.createElement("button");
    const btnResetWeb = document.createElement("button");

    p1.textContent = "Core-API v1.4.5-1.4.6";
    h1.textContent = "The Core-API v1.4.5 will be available until Core-API v1.4.6";
    btnDiscord.textContent = "Join Discord";
    btnResetWeb.textContent = "Reset Website";

    box.classList.add("client-box");
    p1.classList.add("client-paragraph");
    h1.classList.add("client-header");
    btnDiscord.classList.add("btn-discord");
    btnResetWeb.classList.add("btn-reset");

    box.appendChild(h1);
    box.appendChild(p1);
    box.appendChild(btnDiscord);
    box.appendChild(btnResetWeb);

    document.body.appendChild(box);

    btnDiscord.addEventListener("click", () => {
        alert("Joining Discord...");
        window.open("https://discord.gg/ZGvyafS6Vk", "_blank");
    });

    btnResetWeb.addEventListener("click", () => {
        location.reload();
    });
}

function coreapi_pre2() {
    console.log("SkunkPlatform > The Core-API v1.4.6, PRE-2 will be available Coming Soon!");
}

function coreapi_pre3() {
    console.log("SkunkPlatform > The Core-API v1.4.7, PRE-3 will be available Coming Soon but Too Long!");
}

function coreapi_pre4() {
    console.log("SkunkPlatform > The Core-API v1.4.8, PRE-4 will be available Coming Soon but Still Long!");
}

function coreapi_pre5() {
    console.log("SkunkPlatform > The Core-API v1.4.9, PRE-5 will be available Coming Soon but Very Long!");
}

function coreapi_pre6() {
    console.log("SkunkPlatform > The Core-API v1.4.95, PRE-6 will be available Coming Soon but Super Long!");
}

function coreapi_pre7() {
    console.log("SkunkPlatform > The Core-API v1.4.96, PRE-7 will be available Coming Soon but Huge Long!");
}

function coreapi_pre8() {
    console.log("SkunkPlatform > The Core-API v1.4.98, PRE-8 will be available Coming Soon but Long of XL!");
}

function coreapi_pre9() {
    console.log("SkunkPlatform > The Core-API v1.4.99, PRE-9 will be available Coming Soon but Very XL!");
}

function coreapi_pre10() {
    console.log("SkunkPlatform > The Core-API v1.5, PRE-10 will be available Coming Soon but Very Very XL!");
}

function coreapi_pre11() {
    console.log("SkunkPlatform > The Core-API v1.5.2, PRE-11 will be available Coming Soon but Super XL!");
}
