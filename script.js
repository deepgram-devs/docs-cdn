(function () {
  var external = document.querySelectorAll('[target="_self"][to*="https://"]');

  external.forEach(function (el) {
    el.href = el.getAttribute("to");
    el.target = "_blank";
  });
})();
