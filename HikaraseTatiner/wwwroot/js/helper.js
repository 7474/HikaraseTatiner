function downloadFile(filename, contentType, bytes) {
    const blob = new Blob([bytes], { type: contentType });
    const link = document.createElement("a");
    link.download = filename;
    link.href = URL.createObjectURL(blob);
    link.click();
    URL.revokeObjectURL(link.href);
}