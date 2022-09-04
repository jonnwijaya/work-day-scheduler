var today = moment().format("dddd, MMMM Do");

$("#currentDay").text(today);

$(document).ready(function () {

    $('.saveBtn').on('click', function () {
        var desc = $(this).siblings('.description').val();
        var hour = $(this).parent().attr('id');

        localStorage.setItem(hour, desc);
    });

    function timeOfDay() {
        var currentTime = moment().hours();

        $('.time-block').each(function () {
            var timeBlockTime = parseInt($(this).attr('id').split('-')[1]);

            if (timeBlockTime < currentTime) {
                $(this).addClass('past');
            } else if (timeBlockTime === currentTime) {
                $(this).removeClass('past');
                $(this).addClass('present');
            } else {
                $(this).removeClass('past');
                $(this).removeClass('present');
                $(this).addClass('future');
            }
        });
    }

    timeOfDay();

    $('#9 .description').val(localStorage.getItem('9'));
    $('#10 .description').val(localStorage.getItem('10'));
    $('#11 .description').val(localStorage.getItem('11'));
    $('#12 .description').val(localStorage.getItem('12'));
    $('#13 .description').val(localStorage.getItem('13'));
    $('#14 .description').val(localStorage.getItem('14'));
    $('#15 .description').val(localStorage.getItem('15'));
    $('#16 .description').val(localStorage.getItem('16'));
    $('#17 .description').val(localStorage.getItem('17'));
});