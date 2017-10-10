document.addEventListener("DOMContentLoaded", onHtmlLoad);

document.addEventListener('click', function(e) {

        var container = document.getElementById("container");
        container.removeChild(container.childNodes[0]);

}, false);

const users = [
    {
    name: {
        firstName:'Ana',
        lastName:'Pop'
    },
    age:25,
    cnp:'12345',
    address:{
        street:'Muzicii',
        number:123
    },
    parents:[{
        name:'Clementina Pop',
        age:50
    },
    {
        name:'George Pop',
        age:50
    }]
    },
    {
    name:{
        firstName:'Cristina',
        lastName:'Dumitru'    
    },
    age:15,
    cnp:'12345',
    address:{
        street:'Dontah',
        number:123
    },
    parents:[{
        name:'Ana Dumitru',
        age:40
    },
    {
        name:'Ion Dumitru',
        age:45
    }]
}];

function onHtmlLoad() {
    
    var tilesNumber = 3;
    for (var i = 0; i < tilesNumber; i++) {
        makeTile(0);
    }

    makeTile(1);
    
}

function makeTile(userNumber) {
    var app = document.getElementById("container");
    var newTile = document.createElement("div");
    
    //set class for css
    newTile.className = "tile";
    //Name
    newTile.innerHTML = "<p>" + "Name: " + users[userNumber].name.firstName + " " + users[userNumber].name.lastName + "</p>";
    //Age
    newTile.innerHTML += "<p>" + "Age: " + users[userNumber].age + "</p>";
    //CNP
    newTile.innerHTML += "<p>" + "CNP: " + users[userNumber].cnp + "</p>";
    //Address
    newTile.innerHTML += "<p>" + "Address: " + users[userNumber].address.number + " " + users[userNumber].address.street + "</p>";
    //Parents 
    newTile.innerHTML += "<p>" + "Parents: " + "</p>";
    //Parents [0]
    newTile.innerHTML += "<p>" + "&nbsp &nbsp &nbsp" + users[userNumber].parents[0].name + " " + users[userNumber].parents[0].age + "</p>";
    //Parents [1]
    newTile.innerHTML += "<p>" + "&nbsp &nbsp &nbsp" + users[userNumber].parents[1].name + " " + users[userNumber].parents[1].age + "</p>";

    app.appendChild(newTile);
}

function removeTile(){
    var app = document.getElementById("app");
    app.removeChild(app.childNodes[0]);
}



