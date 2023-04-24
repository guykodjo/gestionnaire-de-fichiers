const path = require("path");
const { ipcRenderer, contextBridge } = require("electron");
const fs = require("fs");

contextBridge.exposeInMainWorld("ipc", {
  openFile: () => {
    ipcRenderer.send("openFile");
  },

  saveFile: (fileName, content) => {
    ipcRenderer.send("saveFile");
    let filePath = path.join(__dirname, "tmp", fileName + ".txt");

    fs.writeFile(filePath, content, (err) => {
      if (err) console.log(err);
    });
  },

  deleteFile: (fileName) => {
    let filePath = path.join(__dirname, "tmp", fileName + ".txt");
    fs.unlink(filePath, (err) => {
      if (err) console.log(err);
    });
    ipcRenderer.send("deleteFile");
  },
});
