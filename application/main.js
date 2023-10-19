const { app, BrowserWindow, ipcMain } = require('electron');
const { spawn } = require('child_process');
const path = require('path');

const isMac = process.platform === 'darwin';
const width = 1000;
const height = 600;

function createMainWindow() {
  const mainWindow = new BrowserWindow({
    title:  'Schedule Savior',
    width: width,
    height: height,
    // frame: false,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  mainWindow.setMinimumSize(width, height);
  mainWindow.loadFile(path.join(__dirname, 'index.html'));
}

app.whenReady().then(() => {
  createMainWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createMainWindow();
  });

  ipcMain.on('data-to-backend', (event, data) => {
    const script = path.join(app.getAppPath(), 'backend', 'app.py');
    const process = spawn('python', [script]);

    process.stdin.write(JSON.stringify(data));
    process.stdin.end();

    process.stdout.on('data', (output) => {
      console.log(output.toString());
    });

    process.on('error', (error) => {
      console.log(error);
    });
  });
});

app.on('window-all-closed', function () {
  if (!isMac) app.quit();
});