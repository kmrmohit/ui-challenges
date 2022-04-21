const radius = 20, cx = 0, cy = 0, width = 4;
let runCount = 0;

// const spin = setInterval(() => {
//     const bar = document.createElement("div");
//     bar.style.width = `${width}px`;
//     bar.style.height = `${radius}px`;
//     bar.style.transform = `rotate(${3.6*runCount}deg)`;
//     bar.style.backgroundColor = "blue";
//     bar.className = "circle";
//     document.getElementsByClassName("container")[0].appendChild(bar);
//     const barD = document.createElement("div");
//     barD.style.width = `${width}px`;
//     barD.style.height = `${0.5*radius}px`;
//     barD.style.transform = `rotate(${3.6*runCount}deg)`;
//     barD.style.backgroundColor = "white";
//     barD.className = "circle";
//     document.getElementsByClassName("container")[0].appendChild(barD);
    
//     runCount = (runCount + 1)%100;
//     if(runCount === 0) {
//         document.querySelectorAll(".circle").forEach(ele => ele.remove())
//     }

// }, 10);