const btnOpen = document.querySelector("#btnOpen");
const btnSave = document.querySelector("#btnSave");
const btnDelete = document.querySelector("#btnDelete");
const fileContent = document.querySelector("#textArea");

btnOpen.addEventListener("click", () => {
  ipc.openFile();
});

btnSave.addEventListener("click", () => {
  let title = titleArea.value;
  let content = textArea.value;
  ipc.saveFile(title, content);
});

btnDelete.addEventListener("click", () => {
  let title = titleArea.value;
  ipc.deleteFile(title);
});
