//* ELEMENT COUNTERS
let redSauce_Count = document.getElementById("redSauce-counter");
let greenSauce_Count = document.getElementById("greenSauce-counter");
let yellowSauce_Count = document.getElementById("yellowSauce-counter");
let burnSauce_Count = document.getElementById("burnSauce-counter");

//* ELEMENT ALL ADD & SUBTRACT BUTTONS
let allAdd_Btns = document.querySelectorAll(".btn-add");
let allSub_Btns = document.querySelectorAll(".btn-subtract");

//* ELEMENT INPUT
const inputInvestment = document.getElementById("investment");

//* ELEMENT MAIN BUTTONS
const calcular = document.getElementById("calcular");
const borrar = document.getElementById("borrar");

//* ELEMENT TOTAL VALUES
let total = document.getElementById("total");
let ganancia = document.getElementById("total-profit");

//* ELEMENT DOLLAR SIGN
const hideDollar = document.getElementById("dollar");


//* VARIABLES
//COUNTERS
let counterRed = 0;
let counterGreen = 0;
let counterYellow = 0;
let counterBurn = 0;
//PRICES
const sauce = 35;
//TOTALS
let totalSale = 0;
let totalGanancia = 0;

//* FUNCTIONS
function addProduct(e){
    const btn = e.target.id;
    if(btn === "redSauce-btn-add"){
        counterRed++; 
        redSauce_Count.textContent = counterRed;
        addTotal();
        // totalSale = totalSale + sauce;
        // total.textContent = totalSale;
    }else if(btn === "greenSauce-btn-add"){
        counterGreen++; 
        greenSauce_Count.textContent = counterGreen;
        addTotal();
    }else if(btn === "yellowSauce-btn-add"){
        counterYellow++; 
        yellowSauce_Count.textContent = counterYellow;
        addTotal();
    }else if(btn === "burnSauce-btn-add"){
        counterBurn++; 
        burnSauce_Count.textContent = counterBurn;
        addTotal();
    }
}

function subProduct(e){
    const btn = e.target.id;
    if(btn === "redSauce-btn-sub" && redSauce_Count.textContent != 0){
        counterRed--; 
        redSauce_Count.textContent = counterRed;
        if(total.textContent != 0){
            subTotal();
        }
        // if(total.textContent != 0){
        //     totalSale = totalSale - sauce;
        //     total.textContent = totalSale;
        // }
    }else if(btn === "greenSauce-btn-sub" && greenSauce_Count.textContent != 0){
        counterGreen--; 
        greenSauce_Count.textContent = counterGreen;
        if(total.textContent != 0){
            subTotal();
        }
    }else if(btn === "yellowSauce-btn-sub" && yellowSauce_Count.textContent != 0){
        counterYellow--; 
        yellowSauce_Count.textContent = counterYellow;
        if(total.textContent != 0){
            subTotal();
        }
    }else if(btn === "burnSauce-btn-sub" && burnSauce_Count.textContent != 0){
        counterBurn--; 
        burnSauce_Count.textContent = counterBurn;
        if(total.textContent != 0){
            subTotal();
        }
    }
}

function addTotal(){
    totalSale = totalSale + sauce;
    total.textContent = totalSale;
}

function subTotal(){
    totalSale = totalSale - sauce;
    total.textContent = totalSale;
}

function investTotal(){
    total.textContent = totalSale; 
    let value = parseInt(inputInvestment.value);
    let calInvest = totalSale - value;
    if(totalSale < value){
        hideDollar.classList.add("hide-dollar");
        ganancia.textContent = "Perdiste " + "$" + Math.abs(calInvest); 
    }else{
        ganancia.textContent = calInvest;  
    }
}

function borrarTodo(){
    counterRed = 0; 
    redSauce_Count.textContent = counterRed;
    counterGreen = 0; 
    greenSauce_Count.textContent = counterGreen;
    counterYellow = 0; 
    yellowSauce_Count.textContent = counterYellow;
    counterBurn = 0; 
    burnSauce_Count.textContent = counterBurn;
    totalSale = 0;
    total.textContent = totalSale;
    totalGanancia = 0
    let inversion = "";
    inputInvestment.value = inversion;
    ganancia.textContent = totalGanancia;
    hideDollar.classList.remove("hide-dollar");
}

//* EVENT LISTENERS
allAdd_Btns.forEach(allAdd => {
    allAdd.addEventListener("click", addProduct);
});

allSub_Btns.forEach(allSub => {
    allSub.addEventListener("click", subProduct);
});

borrar.addEventListener("click", borrarTodo);

calcular.addEventListener("click", investTotal);