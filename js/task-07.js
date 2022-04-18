const fontSizeControl = document.querySelector("#font-size-control");
const outputTextSize = document.querySelector("#text");

fontSizeControl.addEventListener("input", () => {
    outputTextSize.style.fontSize = `${fontSizeControl.value}.px`;
});