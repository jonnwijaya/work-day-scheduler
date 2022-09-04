var today = moment().format("dddd, MMMM Do");

$("#currentDay").text(today);

function editText(event) {
    event.preventDefault();

    var text = $('input[name="text-input"]').val();


}