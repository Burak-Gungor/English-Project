function typeWriter(txt, speed, targetElementId) {
  let i = 0;
  let targetElement = document.getElementById(targetElementId);
  let intervalId = setInterval(() => {
    if (i < txt.length) {
      targetElement.innerHTML += txt.charAt(i);
      i++;
    } else {
      clearInterval(intervalId);
    }
  }, speed);
}

function browserIdentifier() {
  const element = document.getElementById("_browser_identifier_text");
  // Get the user agent string
  var userAgent = navigator.userAgent;
  var toAppend = "";
  // Define a variable to hold the detected browser
  var detectedBrowser;

  // Use a switch case statement to check the user agent string
  switch (true) {
    case userAgent.indexOf("MSIE") !== -1 ||
      userAgent.indexOf("Trident/") !== -1:
      detectedBrowser = "Internet Explorer";
      break;
    case userAgent.indexOf("Chrome") !== -1:
      detectedBrowser = "Google Chrome";
      toAppend = " you can switch to <em>firefox</em>";
      break;
    case userAgent.indexOf("Firefox") !== -1:
      detectedBrowser = "Mozilla Firefox";
      toAppend = " you can switch to <em> Chrome </em> or <em>Safari</em>";
      break;
    case userAgent.indexOf("Safari") !== -1:
      detectedBrowser = "Apple Safari";
      break;
    case userAgent.indexOf("Opera") !== -1 || userAgent.indexOf("OPR/") !== -1:
      detectedBrowser = "Opera";
      break;
    default:
      detectedBrowser = "Unknown";
  }

  // Log the detected browser to the console
  console.log("Detected browser: " + detectedBrowser);

  element.innerHTML += " " + detectedBrowser + "<br>" + toAppend;
}

window.addEventListener("load", function () {
  typeWriter("Burak Güngör", 50, "_title");
  typeWriter("English Project Homework", 100, "_subtitle");

  browserIdentifier();

  let element = document.getElementsByClassName("browser_identifier")[0];
  let count = false;
  window.onscroll = function (e) {
    if (window.scrollY > 100 && !count) {
      element.style.display = "block";
      element.style.animation = "reveal_bottom 1s";
      count = true;
    }
  };

  document
    .getElementById("_close_identifier")
    .addEventListener("click", function () {
      element.style.display = "none";
    });

  addEventListener("click", function (e) {});
  
  
});
