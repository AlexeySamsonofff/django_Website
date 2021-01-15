function showNotification(e, title, msg, type, cls, txt) {
    e.preventDefault();
    swal({
            title: title,
            text: msg,
            type: type,
            cancelButtonClass: "btn-default",
            confirmButtonClass: cls,
            confirmButtonText: txt,
            closeOnConfirm: false

    });
}

//showNotification(e, "Congratulations", "You will be redirected in 5 seconds", "warning", "btn-success", "OK");