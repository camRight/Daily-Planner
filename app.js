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
        }
})