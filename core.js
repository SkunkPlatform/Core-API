const api = require("./.core/api/api");
const apiLocal = require("./.core/api/api.local");
const sp = require("./.core/api/skunkplatform");
const http = require('http');
const clients = require("./clients.json");

const coreapi = {};

coreapi.run = function() {
    vscodeRun();
};

coreapi.pcall = function(call) {
    console.log("pcall running");
    if (call.id === 1 || call.name === "core-api" || call.version === "1.4") {
        console.log("Running the Core-API...");
        // Start an HTTP server
        const server = http.createServer((req, res) => {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Hello from Core-API!\n');
        });

        // Listen on port 5500
        server.listen(5500, 'localhost', () => {
            console.log('Server running at http://localhost:5500/');
        });
    } else {
        console.log("Could not run or Invalid the pcall in 'call' option");
    }
};

coreapi.skunkplatformhelp = function() {
    console.log("SkunkPlatform's Core-API (Owner) > You can join in the discord: https://discord.gg/Wh2qet4e9D");
};

coreapi.emojicatyellowyourname = function() {
    console.log("Emoji Cat Yellow's Core-API (Creator) > My name is Cat Process!\nIf you need help go to the Discord Server.");
};

coreapi.version = function() {
    console.log("Core Corporation > Core-API V1.4 made for an Core API by SkunkPlatform");
};

coreapi.emojicatyellow = function() {
    console.log("Emoji Cat Yellow's Core-API (Creator) > Hello, how can I help you?");
};

coreapi.support = function() {
    console.log("Support > The Support is available on Discord Server: https://discord.gg/Wh2qet4e9D");
};

// Send to the Console
console.log("in this website from require() does not work in HTML. You can only use the <script>");

// Do not touch this Discord Webhook, Only sends from a #moderator-only.
const corehookURL = clients.clients.find(client => client.id === 1).url;

const sendDiscordMessage = (url, message) => {
    const https = require('https');
    const data = JSON.stringify({
        content: message
    });

    const options = {
        hostname: 'discord.com',
        path: url.split('https://discord.com')[1],
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': data.length
        }
    };

    const req = https.request(options, (res) => {
        let response = '';
        res.on('data', (d) => {
            response += d;
        });
        res.on('end', () => {
            console.log(`Message sent: ${response}`);
        });
    });

    req.on('error', (e) => {
        console.error(e);
    });

    req.write(data);
    req.end();
};

async function cp(name, enabled) {
    console.log("the Core Plugins is Executing...");
    if (name === "newplugin") {
        console.log("cp('newplugin', enabled) <- name: 'newplugin', enabled: true/false");
        if (enabled) {
            console.log("This Plugin is Active");
        } else {
            console.log("This Plugin is Deactive");
        }
    }
}

async function coreplugins(name, enabled) {
    console.log("the Core Plugins is Executing...");
    if (name === "newplugin") {
        console.log("coreplugins('newplugin', enabled) <- name: 'newplugin', enabled: true/false");
        if (enabled) {
            const {} = require("./plugins/newplugin");
            console.log("This Plugin is Active");
        } else {
            console.log("This Plugin is Deactive");
        }
    }
}