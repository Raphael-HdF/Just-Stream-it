var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    // document.getElementsByClassName("progress")[0].style.top = "56px";
  } else {
    document.getElementById("navbar").style.top = "-100px";
    // document.getElementsByClassName("progress")[0].style.top = "0px";
  }
  prevScrollpos = currentScrollPos;
}
