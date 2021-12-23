const { app, BrowserWindow } = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");

let mainWindow;

app.on("ready", () => {
    mainWindow = new BrowserWindow({
        resizable: true,
        width: 1000,
        minWidth: 800,
        height: 600,
        minHeight: 550,
        autoHideMenuBar: false,
        icon: __dirname + './favicone.ico'
    });

    mainWindow.loadURL(
        isDev
            ? "http://localhost:3000"
            : `file://${path.join(__dirname, '../build/index.html')}`
    );
});