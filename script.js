const fname = document.getElementById('fname').value;
const sname = document.getElementById('sname').value;
const email = document.getElementById('email').value;
const pass = document.getElementById('password').value;
const pass2 = document.getElementById('password2').value;

let btn = document.getElementById('btn');



btn.addEventListener("click", function(){
    checkName();
    checkPass;
});

function checkName(){
    const fn = fname.length;
    const sn = sname.length;
    if(fn < 3 || sn < 3){
        alert("name should not be less than 3");
    }
    else if(fname.length > 3 || sname.length > 3){
        fname.value = "";
        sname.value = "";
    
    }
    else{
        alert("name can not be empty")
    }

}

function checkPass(){
    if(pass === pass2){
        alert("okay pass")
        pass  = "";
        pass2 = "";
    }else{
        alert("passwords do not match")
    }
}