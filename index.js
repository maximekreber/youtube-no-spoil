const interval = setInterval(() => {
    if (document.getElementById("teaser-text")) {
        document.getElementById("teaser-text").remove();
        if(!document.getElementById("teaser-text")) {
            clearInterval(interval);
        }
    }
}, 50);
