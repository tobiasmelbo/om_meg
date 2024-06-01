$(document).ready(function() {
    /*Setter opp lys/mørk modus fra enhetsinnstillinger*/
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
        $("body").addClass("light-mode")
    }
})

function toggle_theme() {
    $('body').toggleClass('light-mode')
}

$("#toggle-button").click(toggle_theme)