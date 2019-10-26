var $ = function (id) {
    return document.getElementById(id);
};

function sinClicked(){
    myform.display.value = Math.sin(myform.display.value);
}


function cosClicked(){
     myform.display.value = Math.cos(myform.display.value);
}


function tanClicked(){
     myform.display.value = Math.tan(myform.display.value);
}

function myClick(a){
    myform.display.value+=a;
    
}

function eqlClicked(){
    myform.display.value = eval(myform.display.value);
}

function sqrClicked(){
     myform.display.value = Math.sqrt(myform.display.value);
}

function piClicked(){
     myform.display.value = Math.PI(myform.display.value);
}

function logClicked(){
    myform.display.value = Math.log(myform.display.value);
}

function allClearClicked(){
    myform.display.value = "";
}

function delClicked(){
    let prevalue = myform.display.value;
    myform.display.value = prevalue.substr(0,prevalue.length - 1);

}

function perClicked(){
    myform.display.value = Math.floor(myform.display.value);

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
}
    