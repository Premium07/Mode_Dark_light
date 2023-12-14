// changing body background color

// let modeBtn = document.querySelector("#mode");
// let currMode = "light";

// modeBtn.addEventListener("click", () =>{
//     if(currMode === "light") {
//         currMode = "dark";
//         document.querySelector("body").style.backgroundColor = "black";
//     }else{
//         currMode = "light";
//         document.querySelector("body").style.backgroundColor = "white";
//     }

//     console.log(currMode);

// });

// by using classList dark and light

let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light";

modeBtn.addEventListener("click", () =>{
    if(currMode === "light") {
        currMode = "dark";
        modeBtn.style.color = "black";
        modeBtn.style.border = "none";
        modeBtn.style.backgroundColor = "white";
        body.classList.add("dark");
        body.classList.remove("light");
    }else{
        currMode = "light";
        modeBtn.style.backgroundColor = "black"
        modeBtn.style.color = "white";
        modeBtn.style.border = "none";
        body.classList.add("light");
        body.classList.remove("dark");
    }

    console.log(currMode);

});
