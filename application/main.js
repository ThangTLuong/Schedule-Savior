const { app, BrowserWindow } = require('electron');
const path = require('path');

const isDev = process.env.NODE_ENV !== 'development';
const isMac = process.platform === 'darwin';

function createMainWindow() {
  const mainWindow = new BrowserWindow({
    title:  'Schedule Savior',
    width: isDev ? 1000 : 800,
    height: 600,
  });

  if (isDev) {
    mainWindow.webContents.openDevTools();
  }
  mainWindow.setMinimumSize(1000, 600);
  mainWindow.loadFile(path.join(__dirname, 'index.html'));
}

app.whenReady().then(() => {
  createMainWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createMainWindow();
  });

});

app.on('window-all-closed', function () {
  if (!isMac) app.quit();
});