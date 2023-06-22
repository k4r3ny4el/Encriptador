const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");


// crear una matriz, donde se van a encotrar todos las llaves, arreglo de areglo
/* La letra "e" es convertida para "enter"
La letra "o" es convertida para "ober"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "u" es convertida para "ufat"
arreglos multidiciplinales */



function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
   textArea.value= "";
   mensaje.style.backgroundImage= "none";
    
}


function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["o", "ober"], ["i", "imes"], ["a", "ai"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();


    for(let i = 0; i < matrizCodigo.length; i++){

        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }

    }
    return stringEncriptada;
}


function btnDesencriptar() {
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado;
    textArea.value = "";
    
}



function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["o", "ober"], ["i", "imes"], ["a", "ai"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){

        if(stringDesencriptada.includes(matrizCodigo[i][0])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);   
        }
    }

    return stringDesencriptada;

}



function copiar(){

    var contenido = document.querySelector(".mensaje");
    contenido.select();
    document.execCommand("copy");
    contenido.value = "";
    

}