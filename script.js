window.addEventListener ("load", function () {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then( function(json) {
            let count = 0;
            json.sort(function(a,b){ return a.hoursInSpace - b.hoursInSpace;}).reverse();
            const div = document.getElementById('container');
            for (let i=0; i<json.length; i++){ 
                let active = "";
                if(json[i].active === true) {
                   active = `<li style = "color:green">Active: ${json[i].active}</li>`;
                } else {
                    active = `<li>Active: ${json[i].active}</li>`;
                }
                div.innerHTML += `
                    <div class="astronaut">
                        <div class="bio">
                         <h3>${json[i].firstName} ${json[i].lastName}</h3>
                                <ul>
                                    <li>Hours in space: ${json[i].hoursInSpace}</li>
                                    ${active}
                                    <li>Skills: ${json[i].skills}</li>
                                </ul>
                         </div>
                        <img class="avatar" src=${json[i].picture}>
                    </div>
                     `
                     count += 1;
            }
          div.innerHTML += `<h2>Total Astronauts: ${count}</h2>`  
        });
    }); 
});