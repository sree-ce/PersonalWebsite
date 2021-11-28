function validate(){
document.getElementById("name").value;
var letters = /^[A-Za-z]+$/;
    if(name==""){
        document.getElementById("name").innerHTML="Enter a valid name"
    }
    else if(name.match(letters)){
        document.getElementById("name").innerHTML="Enter a valid proper name"
        return true
    }else{
        document.getElementById(name).innerHTML="Enter valid name"
    }

}