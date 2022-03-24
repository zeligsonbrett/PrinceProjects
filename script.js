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

$(document).scroll(function() {

  myID = document.getElementById("button");

  var myScrollFunc = function () {
      var y = window.scrollY;
      if (y >= 100) {
          myID.className = "button show"
      } else {
          myID.className = "button hide"
      }
  };




 

