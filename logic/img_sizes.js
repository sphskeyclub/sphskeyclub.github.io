function updateImageSizes() {
    document.querySelectorAll("img").forEach(img => {
        const parent = img.parentElement.getBoundingClientRect();
        img.sizes = `${Math.ceil(parent.width)}px`;

        // Force browser to re-evaluate `srcset`
        img.src = img.src;
    });
}

window.addEventListener("load", updateImageSizes);
window.addEventListener("resize", updateImageSizes);
window.addEventListener("orientationchange", updateImageSizes);