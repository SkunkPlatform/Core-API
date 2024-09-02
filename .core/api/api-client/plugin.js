// Define an array to store information about plugins
const availablePlugins = [
    { name: "Core-Source", id: 1, enabled: true },
    { name: "API.js", id: 2, enabled: true }
];

// Function to log information about available plugins
function plugins() {
    availablePlugins.forEach(plugin => {
        console.log(`Plugin Name: ${plugin.name}\nID: ${plugin.id}\nEnabled: ${plugin.enabled}`);
    });
}

// Function to disable a plugin based on its name
function disablePluginFromName(name) {
    const plugin = availablePlugins.find(plugin => plugin.name === name);
    if (plugin) {
        plugin.enabled = false;
        console.log(`Plugin "${name}" disabled.`);
    } else {
        console.log(`Plugin "${name}" not found.`);
    }
}

// Function to enable a plugin based on its name
function enablePluginFromName(name) {
    const plugin = availablePlugins.find(plugin => plugin.name === name);
    if (plugin) {
        plugin.enabled = true;
        console.log(`Plugin "${name}" enabled.`);
    } else {
        console.log(`Plugin "${name}" not found.`);
    }
}

function executePlugins() {
    plugin1("run");
    plugin2("run");
}

function plugin1(execution) {
    const plugin = availablePlugins.find(plugin => plugin.name === "Core-Source");
    if (execution === "run" && plugin && plugin.enabled) {
        console.log("Executing Plugin 1 (Core-Source)...");
        setTimeout(() => {
            console.log("Core Source > You can use the helpCoreSource()");
            function helpCoreSource() {
                console.log("You can use of fortress(), sourceVersion()");
            }
        }, 2000);
    } else {
        console.log("Invalid execution command for Core Source or Core Source is disabled.");
    }
}

function plugin2(execution) {
    const plugin = availablePlugins.find(plugin => plugin.name === "API.js");
    if (execution === "run" && plugin && plugin.enabled) {
        console.log("Executing Plugin 2 (API.js)...");
        setTimeout(() => {
            console.log("API.js > You can use the helpAPI()");
        }, 2000);
    } else if (execution == "sunflower") {
        console.log("Generating a Sunflower...");

    } else {
        console.log("Invalid execution command for API.js or API.js is disabled.");
    }
}

function helpAPI() {
    console.log("You can use of js('l') or js('a') or js('api-check'), apiVersion()");
}

function js(type) {
    if (type === "l") {
        console.log("API.js Label > Hi, I'm API.js for your Tool of the Website");
    }
}
