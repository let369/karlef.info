const progress_bar_container = document.getElementsByClassName("progress-container")[0];
const sticky = progress_bar_container.offsetTop;
window.onscroll = function() {calculateProgress()};

function calculateProgress() {
  const progress_bar = document.getElementById("myBar");

  if (window.pageYOffset >= sticky) {
    progress_bar_container.classList.add("sticky")
  } else {
    progress_bar_container.classList.remove("sticky");
  }

  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  progress_bar.style.width = scrolled + "%";
}