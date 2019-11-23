(function() {
    var stop = false;
    setInterval(function(){if(document.getElementById("swal2-title") != null){
       if(document.getElementById("swal2-title").innerHTML.includes("Claim Complete!") && stop == false && window.location.href != "https://es.btcnewz.com/user/faucet/19"){
             document.getElementsByClassName("fa fa-arrow-right")[0].click();
             stop = true;
         }
        if(document.getElementById("swal2-title").innerHTML.includes("Claim Complete!") && stop == false && window.location.href == "https://es.btcnewz.com/user/faucet/19"){
             window.location.href = "https://es.btcnewz.com/user/faucet/2"
             stop = true;
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
        setTimeout(function(){document.getElementById("adcopy-puzzle-image").scrollIntoView(true)
                         window.scrollBy(0,-60)},1000);
    }},1000)
    //setTimeout(function(){window.scrollBy(0,-50)},10000);
	setInterval(function () {
            window.alert = function () {}
        },1000)
    if(window.location.href.includes("exchange")){
        //setTimeout(function(){document.getElementsByClassName("form-control")[5].option[2].selected},5000);
        //document.getElementsByClassName("btn btn-sm btn-info pull-right m-r-5")[0].click();
        //document.getElementById("password").value ="hy814551";
        //document.getElementsByClassName("btn btn-sm btn-success pull-right m-r-5")[0].click();
       }
    if(window.location.href.includes("faucet") || document.readyState == "complete"){
        document.getElementsByClassName("btn btn-link m-b-5 save")[0].click();
        document.getElementById("switchCaptcha").click();
        setInterval(function(){if(document.getElementsByClassName("g-recaptcha-response")[0].innerHTML.includes("03A")){
            document.getElementsByClassName("btn btn-primary aa64ba73b28f313b109237a8af8c2fd8a")[0].click();
        }},5000)
        setTimeout(function(){window.location.reload()},90000)

        //setInterval(function(){if(document.getElementById("claim-box").style.display == "none"){
            //if(window.location.href == "https://es.btcnewz.com/user/faucet/19" && stop == false){
                //setTimeout(function(){window.location.href = "https://es.btcnewz.com/user/faucet/2"},3000);
                //stop = true;
            //}
        //}},5000)
    }
})();
