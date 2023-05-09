window.onload = function () {
  // make top-nav external links target="_blank"
  var external = document.querySelectorAll('[target="_self"][to*="https://"]');

  external.forEach(function (el) {
    el.href = el.getAttribute("to");
    el.target = "_blank";
  });

  // clear console of readme marketing
  console.clear();
};
