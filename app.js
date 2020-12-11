$(document).ready(function () {
    const currentTime = moment().format('MMMM Do YYYY, h:mm a');
    $("#day-today").text(currentTime)
    const hours = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];


    
    hours.forEach(time => {
        const checkTime = window.localStorage.getItem(time);
        const currentHour = moment().hour()
        const timeVal = "#" + time

        if (currentTime > time) {
            $(timeVal).addClass("bg-danger text-white")
            $(timeVal).attr("disabled", true)
            $(timeVal).css("text-decoration", "line-through")
        } else if (currentHour === time) {
            $(timeVal).addClass("bg-secondary text-white")
            $(timeVal).css({ "font-size": "25px", "font-family": "Roboto" });
        } else {
            $(timeVal).addClass("bg-success text-white")
        }

        var pastTime = document.getElementById("time");
        if (pastTime <= currentHour) {
            pastTime.addClass("bg-danger")
        }


        if (checkTime === null) {
            window.localStorage.setItem(time, "")
        } else if (checkTime.length > 0) {
            $(timeVal).attr("value", window.localStorage.getItem(time))
        })

    $("form").on("submit", function (e) {
        e.preventDefault();
        const time = (e.target.querySelector("input").getAttribute("id"))

        const textInput = (e.target.querySelector("input").value)

        window.localStorage.setItem(time, textInput)
        location.reload();
    })
        
    })