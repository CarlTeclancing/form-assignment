const fname = document.getElementById('fname');
const sname = document.getElementById('sname');
const email = document.getElementById('email');
const pass = document.getElementById('password');
const pass2 = document.getElementById('password2');

let btn = document.getElementById('btn');



btn.addEventListener("click", function(){
    //checkName();
    checkPass();
});

function checkName(){
    const fn = fname.value.length;
    const sn = sname.value.length;
    if((fn < 3) || (sn < 3)){
        alert("name should not be less than 3");
    }
    else if((fn > 3) || (sn > 3)){
        fname.value = "";
        sname.value = "";
    
    }
    else{
        alert("name can not be empty")
    }

}

function checkPass(){
    const p1 = pass.value;
    const p2 = pass2.value;
    if((p1 == "") || (p2 == "")){
        alert("password can not be empty")
        pass  = "";
        pass2 = "";
    }else if(p1 == p2){
        alert("pasword sucesfully")
    }
    else{
        alert("passwords do not match")
    }
}