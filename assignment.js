let savingsCurrent = document.getElementById("savingsCurrent");
let submitForm = document.getElementById("submitForm");
let pointCounter = document.getElementById("pointCounter");
let depositDate = document.getElementById("depositDate");
let creditHistory = document.getElementById("creditHistory");
let loanRepaymentPeriod = document.getElementById("loanRepaymentPeriod");
let loanCollectionDate = document.getElementById("loanCollectionDate");
let loanPoints = 0;
let inputAdd = document.getElementById("inputAdd");
let inputWithdraw = document.getElementById("inputWithdraw");
let currentBalance = document.getElementById("currentBalance");
let btnAdd = document.getElementById("btnAdd");
let btnWithdraw = document.getElementById("btnWithdraw");
let loanAdd = document.getElementById("loanAdd");
let loanRemove = document.getElementById("loanRemove");
let loanBalance = document.getElementById("loanBalance");
let loanBtnAdd = document.getElementById("loanBtnAdd");
let loanBtnRemove = document.getElementById("loanBtnRemove");
let removePoints = document.getElementById("removePoints");

loanBtnAdd.addEventListener("click", function () {
    if (loanAdd.value == "" || loanAdd.value == null) {
        alert("Value is Required");
    } else {
        let myBal = parseInt(loanBalance.innerText);
        let addBal = parseInt(loanAdd.value);
        loanBalance.innerText = myBal + addBal;
        loanAdd.value = ""
    }
})

loanBtnRemove.addEventListener("click", function () {
    if (loanRemove.value == "" || loanRemove.value == null) {
        alert("Value is Required");
    } else {
        let availableBalance = parseInt(loanBalance.innerText);
        let withdrawAmount = parseInt(loanRemove.value);
        if (withdrawAmount > availableBalance) {
            alert("Insufficient Funds!");
            loanRemove.value = "";
        } else {
            loanBalance.innerText = availableBalance - withdrawAmount;
            loanRemove.value = "";
        }
    }
})


btnAdd.addEventListener("click", function () {
    if (inputAdd.value == "" || inputAdd.value == null) {
        alert("Value is Required");
    } else {
        let myBal = parseInt(currentBalance.innerText);
        let addBal = parseInt(inputAdd.value);
        currentBalance.innerText = myBal + addBal;
        inputAdd.value = ""
    }
})

btnWithdraw.addEventListener("click", function () {
    if (inputWithdraw.value == "" || inputWithdraw.value == null) {
        alert("Value is Required");
        inputWithdraw.value = "";
    } else {
        let availableBalance = parseInt(currentBalance.innerText);
        let withdrawAmount = parseInt(inputWithdraw.value);
        if (withdrawAmount > availableBalance) {
            alert("Insufficient Funds!");
        } else {
            currentBalance.innerText = availableBalance - withdrawAmount;
            inputWithdraw.value = "";
        }
    }
})


submitForm.addEventListener("click", function () {
    if (loanBalance.innerText >= currentBalance.innerText) {
        loanPoints -= 10;
    } if (loanBalance.innerText < currentBalance.innerText) {
        loanPoints += 10;
    }
    if (savingsCurrent.value == "savings") {
        loanPoints += 5;
    }
    if (savingsCurrent.value == "current") {
        loanPoints += 10;
    }
    if (depositDate.value == "within1") {
        loanPoints += 5;
    }
    if (creditHistory.value == "within6") {
        loanPoints += 10;
    }
    if (loanCollectionDate.value == "over6") {
        loanPoints += 10;
    }
    if (loanRepaymentPeriod.value == "within6") {
        loanPoints += 5;
    }
    if (savingsCurrent.value == "" || depositDate.value == "" || creditHistory.value == "" || loanCollectionDate.value == "" || loanRepaymentPeriod.value == "" || savingsCurrent.value == null || depositDate.value == null || creditHistory.value == null || loanCollectionDate.value == null || loanRepaymentPeriod.value == null) {
        alert("Please make sure you fill the form below!")
        loanPoints = 0;
    }
    if (loanPoints > 50) {
        loanPoints = 0;
    }
    if (loanPoints < -10) {
        loanPoints = 0;
    }
    if (loanPoints > 30) {
        alert(`You have been awarded a loan amount of ₦${loanBalance.innerText}`)
    } else {
        alert(`Sorry, you are not elligable to take a loan of ₦${loanBalance.innerText}`)
    }
    pointCounter.innerHTML = `Loan points: ${loanPoints}`;
})

removePoints.addEventListener("click", function () {
    pointCounter.innerHTML = `Loan points: 0`;
    loanPoints = 0;
})