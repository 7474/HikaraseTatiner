function drawPixels(canvasElement, imageBytes) {
    const canvasContext = canvasElement.getContext("2d");
    const canvasImageData = canvasContext.createImageData(canvasElement.width, canvasElement.height);
    canvasImageData.data.set(imageBytes);
    canvasContext.putImageData(canvasImageData, 0, 0);
}

function resizeCanvas(canvasElement, width, height) {
    canvasElement.width = width;
    canvasElement.height = height;
}