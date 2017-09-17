$( document ).ready(function() {
    $("#colleaguesContainer").hide();
    $("#submitForm").hide();
});

$("#getColleaguesButton").click(function() {
    $("#colleaguesContainer").toggle();

});

$("#makeFriendButton").click(function() {
    $("#colleaguesContainer").hide();
    $("#submitForm").toggle();
});

$("#makeFriendForm").submit(function( event ) {
    event.preventDefault();
    var formData = $(this).serializeArray();
    var abc;
    $.each(formData, function(i, field){
        $("#list").append(field.name + ":" + field.value + " ");
    });

});

// $(document).ready(function() {
//     $.ajax({
//         url: 'https://randomuser.me/api/',
//         dataType: 'json',
//         success: function(data) {
//             $.each(data, function (key, data) {
//                 // console.log(key)
//                 $.each(data, function (index, data) {
//                     // console.log( data.name)
//                     $("div").append("<p>" + data.name + "</p>");
//                 })
//             })
//         }
//     });
// });
