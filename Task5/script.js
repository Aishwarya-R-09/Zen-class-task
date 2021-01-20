//1.Creating a request variable
var request =new XMLHttpRequest();

//2.Create a connection
request.open('GET','https://restcountries.eu/rest/v2/all',true);

//3.Send the connection
request.send();

//4.Load the data
request.onload=function(){
    var countrydata=JSON.parse(this.response);
    
    try{
        for(let ele of countrydata){
           var lat=ele.latlng[0];
           var long=ele.latlng[1];
           
           weather_data(lat,long);
        
        }
    }
    catch(error){
         alert('Name '+error.name);
        
    }
    
}
var weather_data=function(lat,long){
    var request =new XMLHttpRequest();
    var latstr=lat.toString();
    var longstr=long.toString();
    var url= 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=6e3ca17dfc1a54cdf72ea33019dbdf71';
    request.open('GET',url,true);
    request.send();
    request.onload=function(){
        var weatherData=JSON.parse(this.response);
        console.log('Temperature '+weatherData.main.temp);
        
    }
    
} 
