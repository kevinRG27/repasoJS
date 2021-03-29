const input = document.querySelector("#input_bi")
input_bi.addEventListener("change",mostrarRpta)

function mostrarRpta(){
    const result = bisiesto()
    console.log(result)
    const resultado = document.querySelector("#resultado")
    resultado.innerHTML = result
}

function bisiesto(){
    let esBisiesto = false;
    const año = input_bi.value;
    input_bi.value = ""
    if((año%4 === 0 && año%100 !== 0) || (año%400 ===0)){
        esBisiesto = true;
    }

    input_bi.value="";
    console.log(esBisiesto)
    return esBisiesto?"El año ingresado es bisiesto":"El año ingresado no es bisiesto";
}