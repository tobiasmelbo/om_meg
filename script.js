$(document).ready(function() {
    /* Setter opp lys/mørk modus fra enhetsinnstillinger */
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
        $("body").addClass("light-mode")
    }

    /* Henter lengden av spillfilen fra https://github.com/tobiasmelbo/om_meg/raw/main/list.csv */
    $.ajax({
        url: "https://raw.githubusercontent.com/tobiasmelbo/om_meg/main/list.csv",
        dataType: "text",
        success: function(data){
            $("#antall_spill").text(data.split("\n").length)
        },
        error: function(){
            console.log("Feil ved henting av spilldata.")
        }
    })
})

function toggle_theme() {
    $('body').toggleClass('light-mode')
}

$("#toggle-button").click(toggle_theme)