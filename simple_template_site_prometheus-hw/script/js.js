function showText(elem) {
    if(elem.previousElementSibling.clientHeight === 80) {
        elem.previousElementSibling.style.height = "100%";
        elem.innerHeight = "Show less...";
    } else {
        elem.previousElementSibling.style.height = "80px";
        elem.innerHeight = "Read more...";
    }
}