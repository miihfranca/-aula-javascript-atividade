function validar(){
    var user = formuser.user.value
    var pass = formuser.pass.value
    if(user == ""){
        alert("Usuário e/ou Senha estão inválidos.")
        formuser.user.focus();
        return false
    } else if (pass == ""){
     alert("Usuário e/ou Senha estão inválidos.")
        formuser.pass.focus();
        return false
    } else {
        alert("Você será direcionado para nossa página principal.")
        return true
    }
 }