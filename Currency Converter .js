function convertCurr() {
    var amountUser=parseFloat(document.querySelectorAll(".val")[0].value);
    var CurrencyVAl= parseFloat(document.querySelectorAll(".curr1")[0].value)
    var secoundCurrValue= parseFloat(document.querySelectorAll(".curr2")[0].value)
    var convert= {
    1: 0.85,    
    2: 1, 
    3: 0.72,
    4: 0.0064,
    5: 0.0015,
    6: 0.0095,
    7: 0.29,
    8: 0.25,
    9: 0.034,
    10: 0.00070  
    }

var changeAmmount=amountUser*(convert[CurrencyVAl] /convert[secoundCurrValue] )
document.getElementById("result").value=changeAmmount.toFixed(2)
}



function addCurrency() {
    
    var newCurrency = document.getElementById("NewCurr").value
    var valueOfNewCurr = document.getElementById("valueOfNewCurr").value
    valueOfNewCurr = 'valueOfNewCurr'
    document.getElementsByTagName('select').append(`<option value="10">${newCurrency}</option>`)

}