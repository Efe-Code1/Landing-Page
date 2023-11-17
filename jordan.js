// alert("You're about to enter Efe's Landing page");

const pfts = document.querySelectorAll(".portfolio-item-wrapper")
pfts.forEach(pft => {
    pft.addEventListener("mouseover", () => {
        console.log(pft.childNodes);
    })
})