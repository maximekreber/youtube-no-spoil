const interval = setInterval(() => {
    if (document.getElementById("teaser-text")) {
        clearInterval(interval);
        document.getElementById("teaser-text").remove();
    }
}, 50);
