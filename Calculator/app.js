let input = document.querySelector(".display");

function add(v) {
    input.value += v;
}

function clearAll() {
    input.value = "";
}

function calc() {
    try {
        input.value = eval(disp.value);
    } catch {
        input.value = "Error";
    }
}

document.querySelectorAll(".raqam, .belgi").forEach(btn => {
    if (btn.innerText !== "C")
        btn.onclick = () => add(btn.innerText);
});

document.getElementById("tayoq").onclick = clearAll;
document.getElementById("teeng").onclick = calc;
