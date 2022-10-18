const { app, BrowserWindow } = require("electorn");

const createWindow = () => {
    const window = new BrowserWindow({
        width:900
        , height:600
    });
    window.loadFile('index.html');
};

app.whenReady().then(() => {
    createWindow();
});