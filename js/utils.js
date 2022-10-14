// Show/Hide resume
function showResume() {
    var x = document.getElementById("resume-pdf");
    if (x.style.display === "none") {
        x.style.display = "inline";
    } else {
        x.style.display = "none";
    }
    scrollBar();
}



// Progress bar
window.onscroll = function() {scrollBar()};

function scrollBar() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("progressbar__content").style.width = scrolled + "%";
    if (scrolled >= 99)document.getElementById("progressbar__content").style.width = "101%";
} 




// Dark mode
const options = {
    time: '0.5s', // default: '0.3s'
    backgroundColor: '#00000',  // default: '#fff'
    buttonColorDark: '#252422',  // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    label: '🌓', // default: ''
    autoMatchOsTheme: true // default: true
}

function addDarkmodeWidget() {
    new Darkmode(options).showWidget();
}

window.addEventListener('load', addDarkmodeWidget);


// ScrollReveal
ScrollReveal().reveal('.presentation', {
    delay: 500,
    useDelay: 'onload',
    reset: true,
});


// Copy Email
function copyEmail() {
  
     // Copy the text inside the text field
    navigator.clipboard.writeText("raph.alarcon1@gmail.com");
  
    // Alert the copied text
    alert("Copied the email: raph.alarcon1@gmail.com");
}



// Change language
var flags = {
    "en": "🇬🇧",
    "fr": "🇫🇷"
}


function switchLang(lang)
{
    $("[data-" + lang + "]").text(function(i, e) {
        return $(this).data(lang);
    });
}

switchLang("en");

$(".switchlang").click(function() {
    // change the button caption here, eg a flag
    // UX opinion of whether it should be what it is 
    // or what it will become
    // ie "de" click to make it "de"
    // or "de" it's currently "de", click to change it
    
    // switch to other language based on language on the button
    var lang = $(this).data("lang") == "fr" ? "en" : "fr";
    $(this).data("lang", lang);
    $(this).text(flags[lang]);
    switchLang(lang)
});