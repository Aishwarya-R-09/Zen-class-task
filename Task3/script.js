//1.Creating a request variable
var request =new XMLHttpRequest();

//2.Create a connection
request.open('GET','https://restcountries.eu/rest/v2/all',true);

//3.Send the connection
request.send();

//4.Load the data
request.onload=function(){
    var data=JSON.parse(this.response);
    console.log(data.length);
    //for loop for traversing the list and printing the country names
    for(var i=0;i<data.length;i++){
        console.log(data[i].flag);
    }
}