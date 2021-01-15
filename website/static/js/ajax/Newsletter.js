
$('#btnTest').on('click', function(event){
    event.preventDefault();

    data = '&action=Test'

    $.ajax({
        url: '/newsletter/',
        type: 'GET',
        data: data,
        dataType: 'json',
        success: function(data){

        }
    });
});