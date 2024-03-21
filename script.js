// Smooth scrolling in script.js
var scrollStep = 5;
var scrolling = false;

function scrollSmoothly() {
    if (scrolling) return;
    scrolling = true;
    var startY = window.scrollY;
    var stopY = startY + scrollStep;

    var scrollInterval = setInterval(function() {
        window.scrollTo(0, stopY);
        stopY += scrollStep;

        if (stopY >= document.body.offsetHeight) {
            clearInterval(scrollInterval);
            scrolling = false;
        }
    }, 10);
}

window.addEventListener('scroll', function() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        scrollSmoothly();
    }
});
// Add this to script.js
window.addEventListener('DOMContentLoaded', (event) => {
    const loadingText = document.createElement('div');
    loadingText.textContent = 'Loading...';
    loadingText.style.position = 'fixed';
    loadingText.style.top = '50%';
    loadingText.style.left = '50%';
    loadingText.style.transform = 'translate(-50%, -50%)';
    loadingText.style.color = '#fff';
    loadingText.style.background = 'rgba(0,0,0,0.7)';
    loadingText.style.padding = '10px 20px';
    loadingText.style.borderRadius = '5px';
    loadingText.style.zIndex = '9999';
    document.body.appendChild(loadingText);
});