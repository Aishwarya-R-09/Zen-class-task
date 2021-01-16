//Get all the countries from Asia continent /"region" using Filter function

var request =new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function(){
    var data=JSON.parse(this.response);
    
    const arr=data.filter((element)=>{
        return element.region=='Asia';
    });
    for(let value of arr){
        console.log(value.name);
    }
    
}

//Get all the countries with population of less than 2 lacs using Filter function

var request =new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function(){
    var data=JSON.parse(this.response);
    
    
    const arr=data.filter((element)=>{
        return element.population<200000;
    });
    console.log(arr);
    
}


//Print the following details name,capital,flag using forEach function 


var request =new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function(){
    var data=JSON.parse(this.response);
    console.log(data.length);
    data.forEach(element => {
        console.log (element.name,element.capital,element.flag);
    });   
}

//Print the total population of countries using reduce function


var request =new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function(){
    var data=JSON.parse(this.response);
    const sum=data.reduce((a,currentval)=>{
        return a+currentval.population;
    },0);
    console.log(sum);
}

//Print the countries which uses US Dollars as currency


var request =new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function(){
    var data=JSON.parse(this.response);
    console.log(data.length);
    const arr=data.filter((element)=>{
        for(let i of element.currencies){
            if(i.code="USD"){
                return true;
            }
        }
        return false;
    });
    for(let value of arr){
        console.log(value.name);
    }
    
    
}