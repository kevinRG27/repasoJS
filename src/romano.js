const input = document.querySelector("#input_rom")
input_rom.addEventListener("change",mostrarRpta)

function mostrarRpta(){
    const result = romanize()
    console.log(result)
    const resultado = document.querySelector("#resultado")
    resultado.innerHTML = result
}

function romanize () {
    const num = input_rom.value
    input_rom.value = ""
    if (!+num)
        return false;
    var digits = String(+num).split(""),
        key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
               "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
               "","I","II","III","IV","V","VI","VII","VIII","IX"],
        roman = "",
        i = 3;
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
}


