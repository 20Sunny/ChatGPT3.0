let docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "Come Back :("
})
window.addEventListener("focus", () => {
    document.title = docTitle
})

const cursor = document.querySelector(".cursor");
var timeout;

//follow cursor on mousemove
document.addEventListener("mousemove", (e) => {
    let x = e.pageX;
    let y = e.pageY;

    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
    cursor.style.display = "block";

    //cursor effects when mouse stopped
    function mouseStopped() {
        cursor.style.display = "none";
    }
    clearTimeout(timeout);
    timeout = setTimeout(mouseStopped, 10000);
});

//cursor effects when mouseout
document.addEventListener("mouseout", () => {
    cursor.style.display = "none";
});

window.ononline = function() {
    alert("! ! !  YOU BACK TO ONLINE  ! ! !", "YOU ARE CONNECTED TO INTERNET ", "success");
    document.getElementById('amca').hidden = false;
    return false;
}

window.onoffline = function() {
    alert(" ! ! !  YOU ARE NOT CONNECTED TO THE INTERNET  ! ! ! ");
    document.getElementById('amca').hidden = true;
    return false;
}

document.addEventListener("keydown", function(e) {
    if (e.key === "s" && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        alert("Taking screenshots is not allowed on this website!");
    }
});

var icon = document.getElementById("lml");
icon.onclick = function() {
    document.body.classList.toggle("dark-theme");
}