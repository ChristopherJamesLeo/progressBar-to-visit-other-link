console.log("hello world")
var progressBar = document.querySelector(".progress-bar");
var searchUrl = "https://facebook.com";
let loadBtn = document.querySelector(".clickMe");
let stopLoadBtn = document.querySelector(".progressStopBtn")


loadBtn.addEventListener('click',e=()=>{
    indicator = 1;
    loadBtn.style.display = "none";
    stopLoadBtn.style.display = "inline";
    var indiInc = setInterval(progressInc , 50);
    function progressInc(){
        if(indicator >= 100){
            clearInterval(indiInc);
            indicator = 0;
            window.location.href = searchUrl;
        }else {
            indicator++;
            progressBar.style.width = `${indicator}%`;
            progressBar.setAttribute("data-inc" ,`${indicator}%`);
        }
    } 
    stopLoadBtn.addEventListener("click",e=()=>{
        clearInterval(indiInc);
        stopLoadBtn.style.display = "none";
        loadBtn.style.display = "inline";
    })
})

