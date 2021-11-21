function addbtn(n) {
   var num = document.getElementById('resultado').innerHTML
   document.getElementById('resultado').innerHTML = num + n;
}

function apagar(){
    document.getElementById('resultado').innerHTML = ''
}
function voltar(){
    let resul = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = resul.substring(0, resul.length -1)
}

function calc(){
    let resul = document.getElementById('resultado').innerHTML
    if (resul){
        document.getElementById('resultado').innerHTML = eval(resul)
    } else {
        document.getElementById('resultado').innerHTML = "por favor digite um valor"
    }
}

