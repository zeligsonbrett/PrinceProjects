function expand() {
  const topNav = document.getElementById("top-nav");
  if (topNav.className.includes("expand")) {
    topNav.classList.remove("expand");
  } else {
    topNav.classList.add("expand");
    const myTimeout = setTimeout(removeMenu, 3000);
  }

  function removeMenu() {
    topNav.classList.remove("expand");
  }
}





 

