// TODO: add code here



function init () {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json) {
            let container = document.getElementById("container");
            container.innerHTML += `<h2>Total number of Astronauts: ${json.length}`;
            json.sort(function(a,b) {return b.hoursInSpace - a.hoursInSpace});
            for(let i = 0; i< json.length; i++) {
                // let skillList = "";
                // for(skill in json[i].skills) {
                //     skillList +=
                // }
                let activeClass = json[i].active?"active":"notActive";
                container.innerHTML += `
                    <div class="astronaut">
                        <div class="bio">
                        <h3>${json[i].firstName} ${json[i].lastName}</h3>
                        <ul>
                            <li>Hours in space: ${json[i].hoursInSpace}</li>
                            <li> <span class=${activeClass}>Active: ${json[i].active}</span></li>
                            <li>Skills: ${json[i].skills}</li>
                        </ul>
                        </div>
                        <img class="avatar" src=${json[i].picture}>
                    </div>
                `;
            }
        });
    });
}


window.onload = init();