let apiKey = "7781526e55fef846df027a81849136deaba9c281";

let baseURL = `https://calendarific.com/api/v2/holidays`;
let queryString  = `?api_key=${apiKey}&country=MY&year=2019`

let url = baseURL + queryString;




function waitForData(loading){
    return loading.json();
}

function displayData(data){
  let response = data.response.holidays;
     response.forEach(function(calendar){
      let date = calendar.date.datetime;
      let fulldate = `${date.year}-${date.month}-${date.day}`;

      let name = calendar.name;
      let description = calendar.description;
     
      let li = document.createElement("li");
 li.innerHTML =  `${fulldate} - ${name} - ${description}`;
  
 
      let ul = document.querySelector("ul");
  ul.appendChild(li);
 
  });
  
}
 
fetch(url, {method: "GET"}).then(waitForData).then(displayData);


