+function myfunction(){
    var x =document.getElementById("phrase");
	
    if(x.type === "password"){
        x.type = "text";
    }
    else{
        x.type = "password";
    }
}

function validate(){
    var phrase = document.getElementById("phrase");
    var length = document.getElementById("length");
	
    if(phrase.value === "Bad Feeling About This"){
        window.location.replace("sddefault.jpg");
        return false;
    }
    else{
        alert("Login Failed");
    }
}



function lpage(){
    window.location.replace("Landingpage.html")
}