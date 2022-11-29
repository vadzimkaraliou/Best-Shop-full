const products = document.querySelector("#products");
const orders = document.querySelector("#orders");
const packagesOptions = document.querySelectorAll("#package option");
const package = document.querySelector("#package");
const accounting = document.querySelector("#accounting");
const terminal = document.querySelector("#terminal");

const div1 = document.querySelector("#div1");
const div2 = document.querySelector("#div2");
const div3 = document.querySelector("#div3");
const div4 = document.querySelector("#div4");
const div5 = document.querySelector("#div5");
const div6 = document.querySelector("#div6");

function validation(element) {
    if (element.value <= 0) {
        element.value = null;
    }
    if (element.value <= 0) {
        element.value = null;
    }
}

function totalCalc() {
    div6.lastElementChild.innerText = " $ " + ((products.value * 0.5) + (orders.value * 0.25) + packagePrice + accountingPrice + terminalPrice);
}

let packagePrice = 0;
let accountingPrice = 0;
let terminalPrice = 0;

products.addEventListener("input", function (event) {
    div1.classList.remove("d-none")
    div1.classList.add("calc-div");
        div1.children[1].innerText = products.value + " * $0.5";
        div1.children[2].innerText = "$" + (products.value * 0.5);
        div1.children[2].style.fontSize = "18px";
        validation(products);
        totalCalc();

    if (products.value.length === 0) {
        div1.classList.remove("calc-div")
        div1.classList.add("d-none");
    }

})

orders.addEventListener("input", function (event) {
    div2.classList.remove("d-none")
    div2.classList.add("calc-div");
    div2.children[1].innerText = orders.value + " * $0.25";
    div2.children[2].innerText = "$" + (orders.value * 0.25);
    div2.children[2].style.fontSize = "18px";
    validation(orders);
    totalCalc();

    if (orders.value.length === 0) {
        div2.classList.remove("calc-div")
        div2.classList.add("d-none");
    }
})

package.addEventListener("change", function (event) {
    packagesOptions.forEach((element) => {
        if (element.selected) {
            div3.classList.remove("d-none");
            div3.classList.add("calc-div");
            div3.children[1].innerText = element.dataset.id;

            if (element.dataset.id === "Choose") {
                div3.classList.add("d-none");
                div3.classList.remove("calc-div");
                packagePrice = 0;
                totalCalc();
            }

            else {
                div3.children[2].innerText = "$ " + element.dataset.price;
                div3.children[2].style.fontSize = "18px";
                packagePrice = Number(element.dataset.price);
                totalCalc();
            }
        }
    })
})

accounting.addEventListener('change', function () {
    if (this.checked) {
        div4.classList.remove("d-none")
        div4.classList.add("calc-div");
        div4.children[1].innerText = "$" + 35;
        div4.children[1].style.fontSize = "18px";
        accountingPrice = 35;
        totalCalc();

    } else if (!this.checked) {
        accountingPrice = 0;
        totalCalc();
        div4.classList.add("d-none")
        div4.classList.remove("calc-div");
    }
})

terminal.addEventListener('change', function () {
    if (this.checked) {
        div5.classList.remove("d-none")
        div5.classList.add("calc-div");
        div5.children[1].innerText = "$" + 5;
        div5.children[1].style.fontSize = "18px";
        terminalPrice = 5;
        totalCalc();

    } else if (!this.checked) {
        terminalPrice = 0;
        totalCalc();
        div5.classList.add("d-none")
        div5.classList.remove("calc-div");
    }
})



