// Progress bar
window.onscroll = function() {scrollBar()};

function scrollBar() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("progressbar__content").style.width = scrolled + "%";
    if (scrolled >= 99)document.getElementById("progressbar__content").style.width = "101%";
} 

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
    $(".switchlang img").attr("src", flags[lang]);
    switchLang(lang)
});

var flags = {
    "en": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Great_Britain_%281707%E2%80%931800%29.svg/800px-Flag_of_Great_Britain_%281707%E2%80%931800%29.svg.png",
    "fr": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Flag_of_France_%28lighter_variant%29.svg/250px-Flag_of_France_%28lighter_variant%29.svg.png"
}
