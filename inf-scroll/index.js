const scrollContainer = document.getElementsByClassName("scroll-body")[0];
const contentBody = document.getElementsByClassName("content-body")[0];
const elementHeight = 24 + 8;
const containerHeight = 240;
const maxElements = 24000;
const totalContainerHeight = Math.ceil(maxElements * elementHeight);
const countOfContainerElements = Math.ceil(containerHeight / elementHeight);
var timer;

//figure out container scroll height
function getScrollHeight() {
    return scrollContainer.scrollHeight;
}


//figure out visible range in the container
function getVisibleElements(scrollHeight) {
    console.log("callback callled", scrollHeight);
    contentBody.innerHTML = "";
    const numElements = Math.floor(scrollHeight / elementHeight);
    console.log(numElements);
    contentBody.style.paddingTop = `${scrollHeight}px`;
    for (let i = numElements; i < numElements + 2 * countOfContainerElements; i++) {
        const item = document.createElement("div");
        item.style.padding = "4px";
        item.innerText = i;
        contentBody.appendChild(item);
    }
    contentBody.style.paddingBottom = `${totalContainerHeight - scrollHeight}px`;
}

function debounce(timeout, cb) {
    if(timer)
    clearTimeout(timer);
    timer = setTimeout(cb, timeout);
}


//initialise dropdown elements
function fillElements() {
    //console.log("here");
    scrollContainer.addEventListener("scroll", (e) => {
        console.log(e.target.scrollTop, e.target.scrollHeight);
        debounce(20, () => getVisibleElements(e.target.scrollTop));
    });

    getVisibleElements(0);
}

fillElements();
