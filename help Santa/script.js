var peoples = [
    {
        name: "Ana",
        type: "girl",
        verdict:"good"
    },
    {
        name: "Dan",
        type: "boy",
        verdict:"naughty"
    },
    {
        name: "Carmen",
        type: "adult",
        verdict:"good"
    },
    {
        name: "Eugene",
        type: "adult",
        verdict:"naughty"
    },
    {
        name: "Brady",
        type: "boy",
        verdict:"good"
    },
    {
        name: "Petra",
        type: "girl",
        verdict:"naughty"
    }
];

function presentMatcher() {
  for (var i=0;i<peoples.length;i++) {
    if (peoples[i].verdict === "good") {
        if (peoples[i].type === "adult") {
            console.log(peoples[i].name + " | " + peoples[i].verdict + " | " + "book");    
        }
        else if (peoples[i].type === "boy") {
            console.log(peoples[i].name + " | " + peoples[i].verdict + " | " + "car");
        }
        else 
            console.log(peoples[i].name + " | " + peoples[i].verdict + " | " + "doll");
    }
    else {
        if (peoples[i].type === "adult") {
            console.log(peoples[i].name + " | " + peoples[i].verdict + " | " + "boring socks");    
        }
        else if (peoples[i].type === "boy") {
            console.log(peoples[i].name + " | " + peoples[i].verdict + " | " + "stick");
        }
        else
            console.log(peoples[i].name + " | " + peoples[i].verdict + " | " + "stick");
    }
  }
}