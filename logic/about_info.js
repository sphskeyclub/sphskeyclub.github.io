var element = document.getElementById("officerAboutContainer");

let showPosition = "";

element.onclick = function() {
    document.getElementById("officerAboutContainer").style.display = "none";
    document.getElementById("officerAboutInfoContainer").style.display = "none";

    document.getElementById(`info${showPosition}`).style.display = "none";
    showPosition = "";
}

//
//
//

function getInfo(getPosition) {
    document.getElementById("officerAboutContainer").style.display = "block";
    document.getElementById("officerAboutInfoContainer").style.display = "block";

    showPosition = getPosition;
    document.getElementById(`info${showPosition}`).style.display = "block";
}
