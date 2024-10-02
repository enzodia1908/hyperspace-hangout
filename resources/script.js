function toggleNav() {
    const sideNav = document.getElementById("sideNav");
    if (sideNav.style.width === "13rem") {
      sideNav.style.width = "0";
    } else {
      sideNav.style.width = "13rem";
    }
  }