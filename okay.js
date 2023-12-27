function dropdownMenu() {
    const yes = document.getElementById("dropdownClick");
    if (yes.className === "topnav") {
        yes.className += " responsive";
        // change topnav to topnav.responsive
    } else {
       yes.className = "topnav"; 
    }
}
