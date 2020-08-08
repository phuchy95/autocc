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
            document.getElementsByClassName("btn btn-success btn-lg get-link")[0].click();
            stop3 = true;
        }}catch(e){}
        try{if(window.location.href == "https://all4yourlife.tech/the-tax-collector/" && stop1 == false){
            window.location.href = "https://iir.ai/hkTP9O9"
            stop1 = true;
        }}catch(e){}
        try{if(window.location.href == "http://all4yourlife.tech/" && stop4 == false){
            window.location.href = "https://all4yourlife.tech/the-tax-collector/"
            stop4 = true;
        }}catch(e){}
    },5000)
})();
