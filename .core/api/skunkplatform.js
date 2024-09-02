function skunkplatformtiktok() {
    console.log("Core-API Website > Openning...");
    window.open("https://www.tiktok.com/@skunk.platform", "_blank");
}

function tutorial() {
    console.log("Core-API Tutorial > Openning YouTube in Video...");
    window.open("https://www.youtube.com/watch?v=3-2Pj5hxwrw", "_blank");
}

function getCode() {
    timeout()
}

const data = {
    title: "Core-API",
    message: [
        ["Getting the Code..."],
        ['Wait for will be show it'],
        ['Code Source:'],
        ['control("help");'],
        ["// Don't make to the require() will not be work on your website."]
    ]
};

function timeout() {
    let delay = 200; 
    data.message.forEach((message, index) => {
        setTimeout(() => {
            console.log(data.title + " " + message);
        }, delay);
        delay += 100 * (index + 1);
    });
}

function skunkplatform() {
    console.log("SkunkPlatform > do you need that?");
}