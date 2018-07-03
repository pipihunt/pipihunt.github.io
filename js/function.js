function myTravel() {
    var t = document.getElementById("travel");
    var m = document.getElementById("movement");
    var c = document.getElementById("capture");
    
    if (t.style.display == "none") {
        t.style.display = "block";
        m.style.display = "none";
        c.style.display = "none";
    } else {
        t.style.display = "none";
    }
} 

function myMovement() {
    var t = document.getElementById("travel");
    var m = document.getElementById("movement");
    var c = document.getElementById("capture");

    if (m.style.display == "none") {
        m.style.display = "block";
        t.style.display = "none";
        c.style.display = "none";
    } else {
        m.style.display = "none";
    }
}

function myCapture() {
    var t = document.getElementById("travel");
    var m = document.getElementById("movement");
    var c = document.getElementById("capture");

    if (c.style.display == "none") {
        c.style.display = "block";
        m.style.display = "none";
        t.style.display = "none";
    } else {
        c.style.display = "none";
    }
}




function myTraveldes() {
    var td = document.getElementById("travelDes");
    var md = document.getElementById("movementDes");
    var cd = document.getElementById("captureDes");
    
    if (td.style.display == "none") {
        td.style.display = "block";
        md.style.display = "none";
        cd.style.display = "none";
    } else {
        td.style.display = "none";
    }
} 

function myMovementdes() {
    var td = document.getElementById("travelDes");
    var md = document.getElementById("movementDes");
    var cd = document.getElementById("captureDes");

    if (md.style.display == "none") {
        md.style.display = "block";
        td.style.display = "none";
        cd.style.display = "none";
    } else {
        md.style.display = "none";
    }
}

function myCapturedes() {
    var td = document.getElementById("travelDes");
    var md = document.getElementById("movementDes");
    var cd = document.getElementById("captureDes");

    if (cd.style.display == "none") {
        cd.style.display = "block";
        md.style.display = "none";
        td.style.display = "none";
    } else {
        cd.style.display = "none";
    }
}


