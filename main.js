var url = "https://poloniex.com/public?command=returnCurrencies";
var result;

async function init() {
    //  var promise = fetch(url);

    //   promise.then(data => {
    //     result = Object.keys(data).map(function (key) {
    //         return data[key];
    //     });
    // })
    // .catch(error => {

    //         console.log("Error! " + error);

    // });

    let response = await fetch(url);

    let data = await response.json();
    result = Object.keys(data).map(function (key) {
        return data[key];
    });

showCurrency();
}



function showCurrency() {

    $("#loaderId").show();
    $("#myBody").html("");
    dry();

    for (var i = 0; i < result.length; i++) {
        document.getElementById("myBody").innerHTML +=
            `
            <tr><td>${result[i].id}</td> 
                    <td>${result[i].name}</td>
                    <td>${result[i].humanType}</td> 
                    <td>${result[i].currencyType}</td> 
                    <td>${result[i].txFee}</td> 
                    <td>${result[i].minConf}</td> 
                    <td><button onclick='DeleteF(${i})' type="button" class="btn btn-dark">Delete</button></td>
                    `;
    }
    $("#loaderId").hide();

}init();





function SearchF() {
    $("#myBody").html("");
    dry();
    
    for (var i = 0; i < result.length; i++) {
        if (result[i].name.toLowerCase().includes($("#search").val().toLowerCase())) {
            var tmp = $("#search").val();
            document.getElementById("myBody").innerHTML +=
                `
            <tr><td>${result[i].id}</td> 
            <td>${result[i].name.replace(eval("/" + tmp + "/gi"), "<a name=" + tmp + " style='background:yellow;'>" + tmp + "</a>")}</td>
            <td>${result[i].humanType}</td> 
            <td>${result[i].currencyType}</td> 
            <td>${result[i].txFee}</td> 
            <td>${result[i].minConf}</td> 
            <td><button onclick='DeleteF(${i})' style='color:black;'>Delete</button></td></tr>
                `;
        }
    }
    $("#loaderId").hide();

}

function DeleteF(index) {
    result.splice(index, 1);
    showCurrency();
}


function dry(){
    document.getElementById("myBody").innerHTML +=
    `<thead>
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>humanType</th scope="col">
      <th>currencyType</th>
      <th>TxFee</th>
      <th>minConf</th>
      <th>Action</th>
    </tr>
  </thead>
    `;
}


