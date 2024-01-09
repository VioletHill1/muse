// Drop Down
document.getElementById("btnMusic").addEventListener("click", toggleBTN);
document.getElementById("btnMore").addEventListener("click", toggleMore);

function toggleBTN() {
    const dropDownContent = document.getElementById("dropDownMusic");
    dropDownContent.classList.toggle("active");

    const icon = document.getElementById("icon");
    if (icon.className == "fa-solid fa-chevron-down downMenu") {
        icon.className = "fa-solid fa-chevron-up downMenu";
      } else {
        icon.className = "fa-solid fa-chevron-down downMenu";
    }
}

function toggleMore() {
    const dropDownContent = document.getElementById("dropDownMore");
    dropDownContent.classList.toggle("active");

    const icon = document.getElementById("icon2");
    if (icon.className == "fa-solid fa-chevron-down downMenu") {
        icon.className = "fa-solid fa-chevron-up downMenu";
      } else {
        icon.className = "fa-solid fa-chevron-down downMenu";
    }
}

// Top Nav Bar
document.getElementById("barHeader").addEventListener("click", toggleBar);
document.getElementById("closeBtn").addEventListener("click", toggleBar)

function toggleBar() {
    const bar = document.getElementById("sideBar");
    bar.classList.toggle("active");
}