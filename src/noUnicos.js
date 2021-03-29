const input = document.querySelector("#input_uni")
input_uni.addEventListener("change",mostrarRpta)

function mostrarRpta(){
    const result = noUnicos()
    console.log(result)
    const resultado = document.querySelector("#resultado")
    resultado.innerHTML = result
}

function noUnicos(){
    let string = input_uni.value
    input_uni.value = ""
    const nuevoVector = [];
    const vector = string.split(",")
    console.log(vector)
     for(let j=0; j<vector.length;j++){
        if(numeroVeces(vector,vector[j]) > 1){
            nuevoVector.push(vector[j])
        }
    }
    return nuevoVector;
}

function numeroVeces(vector,numero){
    let apariciones = 0;
    for(let i=0; i<vector.length; i++){
        if(vector[i] === numero){
            apariciones ++;
        }
    }
    return apariciones;
}
