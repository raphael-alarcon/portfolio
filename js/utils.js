// Progress bar
window.onscroll = function() {scrollBar()};

function scrollBar() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("progressbar__content").style.width = scrolled + "%";
    if (scrolled >= 99)document.getElementById("progressbar__content").style.width = "101%";
} 

// Copy Email
function copyEmail() {
  
     // Copy the text inside the text field
    navigator.clipboard.writeText("raph.alarcon1@gmail.com");
  
    // Alert the copied text
    alert("Copied the email: raph.alarcon1@gmail.com");
}


// Change language
function switchLang(lang)
{
    $("[data-" + lang + "]").text(function(i, e) {
        return $(this).data(lang);
    });
}

switchLang("fr");

$(".switchlang").click(function() {
    loading();
    var lang = $(this).data("lang") == "fr" ? "en" : "fr";
    $(this).data("lang", lang);
    $(".switchlang img").attr("src", flags[lang]);
    $("#resume-download").attr("href", "resources/documents/CV_ALARCON_Raphael_" + lang.toUpperCase() + ".pdf");
    switchLang(lang);
});

var flags = {
    "en": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Great_Britain_%281707%E2%80%931800%29.svg/800px-Flag_of_Great_Britain_%281707%E2%80%931800%29.svg.png",
    "fr": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Flag_of_France_%28lighter_variant%29.svg/250px-Flag_of_France_%28lighter_variant%29.svg.png"
}



// Loader
let i = 0;
var myInterval;

window.addEventListener("DOMContentLoaded", (event) => {
    loading();
});

function loading() {
    console.log("Loading...");
    i = 0;
    $(".loader").css("display", "flex");
    $(".loader").css("opacity", "1");
    $(".loader-base div").css("width",0);
    myInterval = setInterval( () => {
      moveLoading();
    }, 5);
}

function moveLoading() {
  $(".loader-base div").css("width", i++ + "%");
  if (i == 101) {
    clearInterval(myInterval);
    $(".loader").css("opacity", "0");
    setTimeout(() => {
        $(".loader").css("display", "none");
    }, 500);
  }
}