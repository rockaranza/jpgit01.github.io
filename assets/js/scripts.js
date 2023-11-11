document.addEventListener("DOMContentLoaded", function () {

  var progressBar = document.querySelectorAll(".progress-bar");
  const time = 1000;

  function calculateTime(time, dataCount) {
    return time / dataCount;
  }

  progressBar.forEach(function (i) {
    let count = 0;
    let label = i.children[0];
    let line = i.children[1];

    let dataCount = label.getAttribute("data-count");
    let lineCount = line.children[0];

    let value = line.style.width.substr(0, line.style.width.length - 2) / 150;
    let runTime = calculateTime(time, dataCount);

    let animationLineCount = setInterval(function () {

      if (count < dataCount) {
        count++;
        label.innerHTML = count + "%";
        lineCount.style.width = count * value + "px";
      }

    }, runTime)

    console.log(value);
  });
});
