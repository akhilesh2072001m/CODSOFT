

const buttons = ["%", "x²", "C", "X", 7, 8, 9, "/", 4, 5, 6, "*", 1, 2, 3, "-", ".", 0, "+", "="];

const button = buttons.map((key) => {

    return `<button value=${key} class="btn-style">${key}</button>`
}).join('')

document.querySelector(".btn").innerHTML = button;


const display = document.getElementById('display')

function buttonHandlar(e) {

    let val = e.target.value;

    if (val === '=') {
        try {
            display.value = eval(display.value);
        } catch {
            display.value = "Error";
        }
    }
    else if (val === 'X') {
        display.value = display.value.slice(0, -1);
    }
    else if (val === 'C') {
        display.value = "";
    } else if (val === '%') {
        display.value = parseFloat(display.value) / 100;
    } else if (val === 'x²') {
        display.value *= display.value;
    }

    else {

        display.value += val;
    }
}

document.querySelectorAll(".btn-style").forEach((event) => {
    event.addEventListener('click', buttonHandlar)

})