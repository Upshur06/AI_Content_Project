console.log('working');

progressBar = document.querySelector('.progress-bar');


setTimeout(function(){
    // window.location.assign("/");

    var load = 0;
        
    if(load == 0){
        load = 1;
        var width = 5;
        var riseUp =  setInterval(()=>{
            if(width >= 98){
                clearInterval(riseUp);
                progressBar.style.width = "100%";
                progressBar.innerHTML = "100%";
                load = 0;
                window.location.assign("/");
            }else{
                width+=Math.floor(Math.random() * 12);
                progressBar.style.width = width + "%";
                progressBar.innerHTML = width + "%";
                console.log(progressBar.style.width = width + "%");
            }
        }, 200);
    } 
});