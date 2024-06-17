$(document).ready(function() {
    // Setter opp lys/mørk modus fra enhetsinnstillinger
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
        $("body").addClass("light-mode")
    }

    // Henter lengden av spillfilen fra https://github.com/tobiasmelbo/om_meg/raw/main/list.csv
    $.ajax({
        url: "https://raw.githubusercontent.com/tobiasmelbo/om_meg/main/list.csv",
        dataType: "text",
        success: function(data){
            incrementer($("#antall_spill").text(), "#antall_spill", data.split("\n").length)
            $("#antall_spill").text(data.split("\n").length)
        },
        error: function(){
            console.log("Feil ved henting av spilldata.")
        }
    })

    // Henter oppgaver løst fra leetcode
    $.ajax({
        url: "https://leetcode-stats-api.herokuapp.com/tobiasmelbo",
        dataType: "text",
        success: function(data){
            data = JSON.parse(data)
            /* 
            while (parseInt($("#leet_total").text()) < data["totalSolved"]) {
                $("#leet_total").text(parseInt($("#leet_total").text()) + 1)
            }
            */
            incrementer(parseInt($("#leet_total").text()),"#leet_total", data["totalSolved"])
            incrementer(parseInt($("#leet_easy").text()), "#leet_easy", data["easySolved"])
            incrementer(parseInt($("#leet_medium").text()), "#leet_medium", data["mediumSolved"])
            incrementer(parseInt($("#leet_hard").text()), "#leet_hard", data["hardSolved"])
        },
        error: function(){
            console.log("Feil ved henting av LeetCode-data.")
        }
    })
})

function incrementer(value, div_name, target_value, delay) {
    // Tar navnet til en div som holder et tall og en verdi. Verdien til div inkrementeres så helt til den når target_value med en liten delay.

    value++
    if (value < target_value) {
        $(div_name).text(value + 1)
        setTimeout(incrementer, 100*value/target_value, value, div_name, target_value)
    } else {
        console.log("Done")
    }
}

function toggle_theme() {
    $('body').toggleClass('light-mode')
}

$("#toggle-button").click(toggle_theme)