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

function presentMatcher(verdict,type) {
    var present;

    if (verdict === "good" &&
           type === "girl") {
        present = "dool";
    }
    else if (verdict === "good" &&
                type === "boy"  ){
        present = "car";
    }
    else if (verdict === "good" &&
                type === "adult") {
        present = "book";
    }
    else if (verdict === "naughty" &&
                type === "adult") {
        present = "boring socks";
    }

    else {
        present = "stick";
    }
    return present;
}

function printTheList(name, type, verdict, present) {
    console.log(name + " | " + type + " | " + verdict + " | " + present);  
}

function peopleParser() {
    for (var i=0;i<peoples.length;i++) {
        printTheList(
            peoples[i].name,
            peoples[i].type, 
            peoples[i].verdict,
            presentMatcher(peoples[i].verdict, peoples[i].type)
        );
    }
}

// function printTheAnswer() {
//     console.log();
// }