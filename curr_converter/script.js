let code1 = document.getElementById("code1");
let code2 = document.getElementById("code2");
let currency1 = document.getElementById("currency1");
let currency2 = document.getElementById("currency2");
let input1 = document.getElementById("input1");

let extras = document.getElementById("extra");
let table = document.createElement("table");
let h4 = document.createElement("h4");
h4.style = "margin-top: 25px";
table.className="table";
table.style="margin-top:25px"

async function getRate(code1 = this.code1.value,code2 = this.code2.value){
    table.innerHTML="";
    let response = await fetch("https://api.exchangeratesapi.io/latest?base="+code1);
    let data = await response.json();
    console.log(Object.keys(data.rates)[1]);
    input2.value = data.rates[code2]*parseInt((input1.value!=""? input1.value : 0));
    h4.innerHTML = input1.value+" "+code1+" is equivalent to...";
    for(let i=0; i<5; i++){
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        td1.innerHTML = Object.keys(data.rates)[i].bold();
        td2.innerHTML = input1.value * parseFloat(Object.values(data.rates)[i]);
        tr.append(td1,td2);
        table.append(tr);
    }
    extras.append(h4,table);
}

function changeCode(event,code){
    document.getElementById(code).value = event.target.value;
    getRate();
}

function interchange(){
    let temp = code1.value;
    code1.value = code2.value;
    code2.value = temp;
    temp = currency1.value;
    currency1.value = currency2.value;
    currency2.value = temp;
    input2.interHTML="";
    getRate();
}
