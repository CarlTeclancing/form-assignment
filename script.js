const fname = document.getElementById('fname').value;
const sname = document.getElementById('sname').value;
const email = document.getElementById('email').value;
const pass = document.getElementById('password').value;
const pass2 = document.getElementById('password2').value;

let btn = document.getElementById('btn');


function checkName(){

    if(fname.length < 3 || sname.length < 3){
        alert("name should not be less than 3");
    }
    else{
        fname.value = "";
    
    }

}

function checkPass(){
    if(pass == pass2){
        pass  = "";
        pass2 = "";
    }else{
        alert("passwords do not match")
    }
}
btn.addEventListener("click", function(){
    checkName();
    checkPass();
})