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

ScrollReveal().reveal('.presentation', {
    delay: 500,
    useDelay: 'onload',
    reset: true,
})

ScrollReveal().reveal('.work__grid', {
    delay: 500,
    useDelay: 'onload',
    reset: true,
}) 