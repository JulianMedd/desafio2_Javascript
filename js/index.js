
/*bucle tabla de multiplicar*/

var num = prompt("ingrese un numero");

for(var i=0; i<=10; i++){
    console.log(num * i);
}

/*funcion para determinar numero primo*/

function saberNumPrimo(num){
    if(num == 0 || num == 1 || num == 4) return false
    for(var i=2; i < (num / 2); i++){
        if( num % i == 0) return false;
    }
    return true;
}

/* los primeros 100 primos */

function losPrimerosNumPrimosHasta100(){
    for(let i=0; i <= 100; i++){
        if(saberNumPrimo(i))
            console.log(i);
    }
}

/*funcion para mostrar los primos entre*/

function numerosPrimosEntre(desde,hasta){
    for(desde; desde <= hasta; desde++){
        if(saberNumPrimo(desde))
            console.log(desde);
    }
}

/* los 100 numeros primos desde un numero dado */

function numPrimosDesde(numInicial){
    numLimite = numInicial + 100;
    for(numInicial; numInicial <= numLimite; numInicial++){
        if(saberNumPrimo(numInicial)){
            console.log(numInicial);
        }
    }
}

/* los primeros 100 numeros primos */

function losPrimeros100NumPrimos(){
    let contadorPrimos = 0;
    let numero = 0;
    while(contadorPrimos <= 100){
        numero++;
        if(saberNumPrimo(numero)){
            console.log(numero);
            contadorPrimos++;
        }  
    }
}

/*funcion promedio*/

function suma(num1,num2){
    return num1 + num2;
}

function promedioEntreDosNumeros(total){
    return total / 2;
}

function mostrarPromedio(numero1,numero2){
    total = suma(numero1, numero2);
    promedio = promedioEntreDosNumeros(total);
    alert(promedio);
}

losPrimeros100NumPrimos();