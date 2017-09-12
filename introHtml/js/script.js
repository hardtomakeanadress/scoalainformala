$("#getColleaguesButton").click(function() {
    $("#colleaguesContainer").removeAttr("hidden");
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
