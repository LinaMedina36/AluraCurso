//variables
let numeroSecreto = Math.floor(Math.random()*100+1);
console.log(numeroSecreto);
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = "vez";
let maximoIntentos = 3;
while (numeroUsuario!=numeroSecreto){
    numeroUsuario = parseInt(prompt("Digite un numero entero entre 1 y 100")); //recibe lo que digite el usario, crea como un espacio para poder escribir
    console.log(typeof(numeroUsuario));
    /*
    Bloque de codigo donde se compara los numeros
   */ 

    if (numeroSecreto == numeroUsuario){
        //la condicion es verdadera
        alert(`acertaste, el numero era: ${numeroSecreto}. Lo adivinaste en ${intentos} ${intentos==1?"vez" : "veces"}`);
    } else {
        if (numeroUsuario  < numeroSecreto){
            alert("numero incorrecto, el numero secreto es mayor");
        }else{
            alert("numero incorrecto, el numero secreto es menor");
        }
        //el contador se incrementa cuando no acerta el numero  
        intentos=intentos+1;
        //palabraVeces="veces";
        if (intentos>maximoIntentos){
            alert(`Llegaste al numero ${maximoIntentos} de intentos`);
            break;
        }
    } 
}

