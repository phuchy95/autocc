var stop1 = false;
var stop2 = false;
var stop3 = false;
var stop4 = false;
var stop5 = false;
var stop6 = false;
var stop7 = false;
var stop8 = false;
(function() {
    setInterval(function(){
        try{if(document.getElementsByClassName("g-recaptcha-response")[0].innerHTML.includes("03A") && stop2 == false){
            document.getElementsByClassName("btn btn-primary btn-captcha")[0].click();
            stop2 = true;
        }}catch(e){}
        try{if(document.getElementsByClassName("btn btn-success btn-lg get-link")[0].innerHTML == "Get Link" && stop3 == false){
            setTimeout(function(){document.getElementsByClassName("btn btn-success btn-lg get-link")[0].click();},7000)
            stop3 = true;
        }}catch(e){}
        try{if(window.location.href == "https://all4yourlife.tech/birds-of-prey-and-the-fantabulous-emancipation-of-one-harley-quinn/" && stop1 == false){
            window.location.href = "https://shrinkme.io/11Kc"
            stop1 = true;
        }}catch(e){}
    },5000)
})();
