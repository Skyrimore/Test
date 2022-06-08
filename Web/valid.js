+function myfunction(){
    var x =document.getElementById("pin");
	var y =document.getElementById("first")
	var z =doctument.getElementById("last")
    if(x.type === "password"){
        x.type = "text";
    }
    else{
        x.type = "password";
    }
	if(y.type === "text"){
        y.type = "text";
    }
    else{
        y.type = "text";
    }
	if(z.type === "text"){
        z.type = "text";
    }
    else{
        z.type = "text";
    }
}

function validate(){
    var pin = document.getElementById("pin");
    var length = document.getElementById("length");
	var first = document.getElementById("first");
	var last = document.getElementById("last");

    if(pin.value === "00000" && first.value === "Layne" && last.value === "Berry"){
        alert("Login Succesfull");
        window.location.replace("Passphrast.html");
        return false;
    }
    else{
        alert("Login Failed");
    }
}



function lpage(){
    window.location.replace("Landingpage.html")
}