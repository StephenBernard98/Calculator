let getInput = document.getElementById("input");

let calculate = (num) => {
    getInput.value += num
}

let calc = () => {
    try {
        getInput.value = eval(getInput.value)
    } catch (error) {
        getInput.value = "Error"
    }
}

let clr = () => {
    getInput.value = "";
}

let del = () => {
    getInput.value = getInput.value.slice(0, -1)
}