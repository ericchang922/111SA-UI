var i = 0;

var status123 = false;

var myinterval;

function loop() {
    if (!status123) {
       myinterval =  setInterval(changeColor, 1000); 
       status123 = true;
    } else {
        clearInterval(myinterval);
        status123 = false;
    }
    
}

function changeColor() {

    // const traffic_status = ["red", "yellow", "green"];

    // var mock_trafficlight_1 = {
    //     "red_light": "red",
    //     "yellow_light": "yellow",
    //     "green_light": "green",
    // };

    // var mock_trafficlight_2 = {
    //     "red_light": "red",
    //     "yellow_light": "yellow",
    //     "green_light": "green",
    // }

    console.log(i)

    var redlight_vr = document.querySelectorAll("div.red-light-vr");
    var yellowlight_vr = document.querySelectorAll("div.yellow-light-vr");
    var greenlight_vr = document.querySelectorAll("div.green-light-vr");

    console.log(redlight_vr)

    var redlight_hr = document.querySelectorAll("div.red-light-hr");
    var yellowlight_hr = document.querySelectorAll("div.yellow-light-hr");
    var greenlight_hr = document.querySelectorAll("div.green-light-hr");


    if ( i == 0 ) {
        redlight_vr.forEach(i => i.style.backgroundColor = "red");
        yellowlight_vr.forEach(i => i.style.backgroundColor = "darkgoldenrod");
        greenlight_vr.forEach(i => i.style.backgroundColor = "darkgreen");

        yellowlight_hr.forEach(i => i.style.backgroundColor = "darkgoldenrod");
        redlight_hr.forEach(i => i.style.backgroundColor = "darkred");
        greenlight_hr.forEach(i => i.style.backgroundColor = "greenyellow");

        i++;
    } else if ( i == 1 ) {
        redlight_vr.forEach(i => i.style.backgroundColor = "darkred");
        yellowlight_vr.forEach(i => i.style.backgroundColor = "yellow");
        greenlight_vr.forEach(i => i.style.backgroundColor = "darkgreen");

        yellowlight_hr.forEach(i => i.style.backgroundColor = "yellow");
        redlight_hr.forEach(i => i.style.backgroundColor = "darkred");
        greenlight_hr.forEach(i => i.style.backgroundColor = "darkgreen");

        i++;
    } else if ( i == 2 ) {
        redlight_vr.forEach(i => i.style.backgroundColor = "darkred");
        yellowlight_vr.forEach(i => i.style.backgroundColor = "darkgoldenrod");
        greenlight_vr.forEach(i => i.style.backgroundColor = "greenyellow");

        yellowlight_hr.forEach(i => i.style.backgroundColor = "darkgoldenrod");
        redlight_hr.forEach(i => i.style.backgroundColor = "red");
        greenlight_hr.forEach(i => i.style.backgroundColor = "darkgreen");

        i=0;
    }
    
}