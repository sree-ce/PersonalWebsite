


function validate(){
    var name =document.getElementById('name').value
    var letters = /^[A-Za-z]+$/;
if(name==''){
    document.getElementById('name2').innerHTML='enter valide name'
}
else if (name.match(letters)){
alert('dkfkd')
return true
}
else{
    document.getElementById('name2').innerHTML='enter valide name 2'
}
console.log(name)
}