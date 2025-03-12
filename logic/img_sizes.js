function updateImageSizes() {
    document.querySelectorAll("img").forEach(img => {
        let displayedWidth = img.offsetWidth || img.clientWidth || img.naturalWidth;  
        img.sizes = `${Math.ceil(displayedWidth)}px`;

        // Force browser to re-evaluate `srcset`
        img.src = img.src;
    });
}

window.addEventListener("load", updateImageSizes);
window.addEventListener("resize", updateImageSizes);
window.addEventListener("orientationchange", updateImageSizes);