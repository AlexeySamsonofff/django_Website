    // =============================================
	// Detection of Newsletter Subscribe - Button
	//
	// =============================================
    $('#btnSubscribe').click(function(e){
        e.preventDefault();

        console.log($("#txtSubscribe").val());
        if ($("#txtSubscribe").val() == '') {
            showNotification(e, "Email Incorrect", "Please enter your email address!", "warning", "btn-error", "OK");
        }else{
            data = {
                'email': $('#txtSubscribe').val(),
                'action': 'POST'
            }

            $.ajax({
                url: '/subscribe/',
                type: 'POST',
                data: data,
                dataType: 'json',
                success: function(data){
                    showNotification(e, data.title, data.msg, data.status, "btn-"+data.status, "OK");
                    $('#txtSubscribe').val('');
                },
                error : function(xhr,errmsg,err) {
                    console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
                }
            });
        }
    });