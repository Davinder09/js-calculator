var $ = function (id) {
    return document.getElementById(id);
};

function sinClicked(){
    if(myform.display.value != ""){
           myform.display.value = Math.sin(myform.display.value);
       }
}


function cosClicked(){
    if(myform.display.value != ""){
     myform.display.value = Math.cos(myform.display.value);   
    }
}


function tanClicked(){
     if(myform.display.value != ""){
     myform.display.value = Math.tan(myform.display.value);
     }
}

function myClick(a){
    myform.display.value+=a;
    if(myform.display.value){
        let prevalue = myform.display.value;
        let secondLastDigit = prevalue.charAt(prevalue.length-2);
        let lastDigit = prevalue.charAt(prevalue.length-1);
        if(secondLastDigit == "+" || secondLastDigit == "-" || secondLastDigit == "*" || secondLastDigit == "/"){
          if(lastDigit == "+" || lastDigit == "-" || lastDigit == "*" || lastDigit == "/"){
                myform.display.value = prevalue.slice(0,-2).concat(lastDigit);
            }  
        }
    }
    
}

function eqlClicked(){
    myform.display.value = eval(myform.display.value);
}

function sqrClicked(){
    if(myform.display.value != ""){
     myform.display.value = Math.sqrt(myform.display.value);
    }
}

function piClicked(){
    if(myform.display.value == ""){
        myform.display.value = (Math.PI).toFixed(8);
       }
       else{
       myform.display.value = (myform.display.value * Math.PI).toFixed(8);
       }
}

function logClicked(){
    if(myform.display.value != ""){
    myform.display.value = Math.log(myform.display.value);
    }
}

function allClearClicked(){
    myform.display.value = "";
}

function delClicked(){
    let prevalue = myform.display.value;
    myform.display.value = prevalue.substr(0,prevalue.length - 1);

}

function perClicked(){
    if(myform.display.value != ""){
    myform.display.value = myform.display.value / 100;
    }

}


window.onload = function () {
    
    $("sinButton").onclick = sinClicked;
    $("cosButton").onclick = cosClicked;
    $("tanButton").onclick = tanClicked;
    $("sqrButton").onclick = sqrClicked;
    $("piButton").onclick  = piClicked;
    $("logButton").onclick = logClicked;
    $("eqlButton").onclick = eqlClicked;
    $("delButton").onclick = delClicked;
    $("acButton").onclick = allClearClicked;
    $("perButton").onclick = perClicked;
    
}
    