$(document).ready(function(){
$('.btn').click(function()
{
    $('.text').text('loading...');
    $.ajax({
        type:"GET",
        url:"https://api.meetup.com/2/cities",
        success: function(data){
           $('.text').html('');
           for(var i = 0; i < data.results.length; i++)
           {
               var place = data.results[i].city + ", " + 
               data.results[i].state
               $('.text').append('<p>' + place + '</p>');
           }
            // $('.text').text(JSON.stringify(data));
        },
        dataType:'jsonp',
    });

});
});