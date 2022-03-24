var content = document.getElementsByTagName('body')[0];
var darkMode = document.getElementById('dark-change');
var logoMain = document.querySelector("#logo-main");
var logoSignIn = document.querySelector("#icon-sign");

darkMode.addEventListener('click', function(){
    darkMode.classList.toggle('active');
    content.classList.toggle('dark');
    if (logoMain.src.includes("light")) {
        logoMain.src = "/images/apple-music-logo-dark.png";
        logoSignIn.src = "/images/sign-in-light.png";
    } else {
        logoMain.src = "/images/apple-music-logo-light.png";
        logoSignIn.src = "/images/sign-in-dark.png";
      }
}) 