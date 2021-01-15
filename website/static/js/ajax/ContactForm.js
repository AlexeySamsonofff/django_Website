$('#frmContact').on('submit', function(event){
    event.preventDefault();
    console.log("Contact Form Submitted");

    $.ajax({
		    url: '/PostContact/',
		    type: 'POST',
		    data: { 'frmContact': $('#frmContact').val(),
		            'csrfmiddlewaretoken': "{{ csrf_token }}"
		          },
		    dataType: 'json',
		    success: function(data){
                console.log (data.data);
            }
        });
});