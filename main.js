var url = "https://poloniex.com/public?command=returnCurrencies";

class Currency{
    name;
    humanType;
    currencyType;
    txFee;
    minConf;
    constructor(_name, _humanType, _currencyType, _txFee, _minConf)
    {
        this.name = _name;
        this.humanType = _humanType;
        this.currencyType = _currencyType;
        this.txFee = _txFee;
        this.minConf = _minConf;
    }
}




var result = [];
async function showCurrency(){

    let response = await fetch(url);
    let data = await response.json();
     result = Object.keys(data).map(function(key) {
     return data[key];
    });



        for(var i = 0; i < 15; i++)
    {
        result.push(document.getElementById("myBody").innerHTML +=
        `<tr><td>${result[i].id}</td> 
        <td>${result[i].name}</td>
         <td>${result[i].humanType}</td> 
         <td>${result[i].currencyType}</td> 
         <td>${result[i].txFee}</td> 
         <td>${result[i].minConf}</td> 
         <td><button onclick='delCurrency(${i})'>Delete</button></td>
         `);
    }   

    
}

showCurrency();


function delCurrency(currencyID){
    result.splice(currencyID, 1); 
}