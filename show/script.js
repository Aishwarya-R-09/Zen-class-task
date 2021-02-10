

let list = document.getElementById("list");
async function search_shows(){
    try{
        list.innerHTML="";
        let key = document.getElementById("key").value;
        let response = await fetch("https://api.tvmaze.com/search/shows?q="+key);
        let data = await response.json();
        for(let i=0; i<data.length;i++){
            console.log(data[i]);
            let row = document.createElement("div");
            row.className="row";
            row.style="margin-bottom:20px"
            let name = document.createElement("h5");
            name.className = "col-12 bg-info  p-2";
            name.innerHTML= data[i].show.name;
            
            let img = document.createElement("img");
            img.className="col-sm-3 col-12";
            if(data[i].show.image){
                img.src = data[i].show.image.medium;
            }
            else{
                img.alt="";
            }

            let details = document.createElement("div");
            details.className="col-sm-9 col-12 p-2";
            let schedule = document.createElement("p");
            schedule.innerHTML = "Schedule : ".bold()+data[i].show.schedule.days+"   Time : ".bold() +data[i].show.schedule.time;
            let genres = document.createElement("p");
            genres.innerHTML = "Genres : ".bold()+data[i].show.genres;
            let network = document.createElement("p");
            network.innerHTML = "Network : ".bold()+(data[i].show.network != null ? data[i].show.network.name+" - "+data[i].show.network.country.name:"Nil");
            let premiered = document.createElement("p");
            premiered.innerHTML="Premiered on : ".bold()+data[i].show.premiered;
            details.append(schedule,genres,network,premiered);

            row.append(name);
            row.append(img);
            row.append(details);
            list.append(row);
        }
        
    }
    catch(err){
        console.log(err);
    }
}

