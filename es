(function() {
    console.log("start");
    setTimeout(function(){window.location.reload()},150000)
    var stop1 = false;
    var stop = false;
    var stop2 = false;
    var i;
    var b;
    setInterval(function(){if(document.getElementById("swal2-title") != null){
       if(document.getElementById("swal2-title").innerHTML.includes("Claim Complete!") && stop == false && window.location.href != "https://es.btcnewz.com/user/faucet/19"){
             document.getElementsByClassName("fa fa-arrow-right")[0].click();
             stop = true;
         }
        if(document.getElementById("swal2-title").innerHTML.includes("Claim Complete!") && stop == false && window.location.href == "https://es.btcnewz.com/user/faucet/19"){
             window.location.href = "https://es.btcnewz.com/user/faucet/2"
             stop = true;
         }
        if(document.getElementById("swal2-title").innerHTML.includes("Failed to verify, Please Refresh") && stop == false){
             window.location.reload();
             stop = true;
         }
        if(document.getElementById("swal2-title").innerHTML.includes("please wait") && stop == false){
           if(window.location.href == "https://es.btcnewz.com/user/faucet/2"){
               window.location.href = "https://es.btcnewz.com/user/faucet/3";
               stop = true;
           }
           if(window.location.href == "https://es.btcnewz.com/user/faucet/3"){
               window.location.href = "https://es.btcnewz.com/user/faucet/4";
               stop = true;
           }
           if(window.location.href == "https://es.btcnewz.com/user/faucet/4"){
               window.location.href = "https://es.btcnewz.com/user/faucet/6";
               stop = true;
           }
           if(window.location.href == "https://es.btcnewz.com/user/faucet/6"){
               window.location.href = "https://es.btcnewz.com/user/faucet/7";
               stop = true;
           }
           if(window.location.href == "https://es.btcnewz.com/user/faucet/7"){
               window.location.href = "https://es.btcnewz.com/user/faucet/8";
               stop = true;
           }
           if(window.location.href == "https://es.btcnewz.com/user/faucet/8"){
               window.location.href = "https://es.btcnewz.com/user/faucet/11";
               stop = true;
           }
           if(window.location.href == "https://es.btcnewz.com/user/faucet/11"){
               window.location.href = "https://es.btcnewz.com/user/faucet/12";
               stop = true;
           }
           if(window.location.href == "https://es.btcnewz.com/user/faucet/12"){
               window.location.href = "https://es.btcnewz.com/user/faucet/13";
               stop = true;
           }
           if(window.location.href == "https://es.btcnewz.com/user/faucet/13"){
               window.location.href = "https://es.btcnewz.com/user/faucet/15";
               stop = true;
           }
           if(window.location.href == "https://es.btcnewz.com/user/faucet/15"){
               window.location.href = "https://es.btcnewz.com/user/faucet/16";
               stop = true;
           }
           if(window.location.href == "https://es.btcnewz.com/user/faucet/16"){
               window.location.href = "https://es.btcnewz.com/user/faucet/18";
               stop = true;
           }
           if(window.location.href == "https://es.btcnewz.com/user/faucet/18"){
               window.location.href = "https://es.btcnewz.com/user/faucet/19";
               stop = true;
           }
           if(window.location.href == "https://es.btcnewz.com/user/faucet/19"){
               window.location.href = "https://es.btcnewz.com/user/faucet/2";
               stop = true;
           }
        }
        if(document.getElementById("swal2-title").innerHTML.includes("SolveMedia Failed to verify, Please Refresh") && stop == false){
            window.location.reload();
            stop = true;
        }
        if(document.getElementById("swal2-title").innerHTML.includes("Recaptcha Failed to verify") && stop == false){ //tra ve ket qua ""
             window.location.reload();
             stop = true;
         }
        if(document.getElementById("swal2-title").innerHTML.includes("Recaptcha v3 Failed") && stop == false){
            window.location.reload();
            stop = true;
        }
    }},1000)
    setInterval(function(){if(document.readyState == "complete" || window.location.href.includes("faucet")){
        if(stop2 == false){
        for (i = 0; i < document.getElementsByTagName("button").length; i++){
                if(document.getElementsByTagName("button")[i].innerHTML.includes("Verify")){
                    b = i;
                    break;
                }
            }
        stop2 = true;
        console.log(b)
        }
       ;
        setTimeout(function(){document.getElementById("switchCaptcha").scrollIntoView(true)
                         window.scrollBy(0,-60)},1000)
        if(document.getElementsByClassName("g-recaptcha-response")[0].innerHTML.includes("03A") && stop1 == false){
            document.getElementsByTagName("button")[b].click();
            stop1 = true;
       }
        if(document.getElementById("solvemedia-block").style.display != "block" && document.getElementById("google-recaptcha").style.display == "block"){
                //document.getElementById("switchCaptcha").click();
           }
       // }
        if(document.getElementById("solvemedia-block").style.display == "block"){
        setTimeout(function(){document.getElementById("adcopy-puzzle-image").scrollIntoView(true)
                         window.scrollBy(0,-60)},1000)
        }
    }},1000)
    //setTimeout(function(){window.scrollBy(0,-50)},10000);
    if(window.location.href.includes("faucet")){
        setInterval(function(){
            if(document.getElementById("solvemedia-block").style.display != "block" && document.getElementById("google-recaptcha").style.display != "block"){
                document.getElementsByClassName("btn btn-link m-b-5 save")[0].click();
            }
        },3000)

        //setInterval(function(){if(document.getElementById("claim-box").style.display == "none"){
            //if(window.location.href == "https://es.btcnewz.com/user/faucet/19" && stop == false){
                //setTimeout(function(){window.location.href = "https://es.btcnewz.com/user/faucet/2"},3000);
                //stop = true;
            //}
        //}},5000)
    }
})();
