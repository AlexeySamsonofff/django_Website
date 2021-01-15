$(document).ready(function() {

    $('.plus').click(function(e){
        e.preventDefault();
        KeyID = getKeyID($(this).attr('id'));
        console.log('Plus clicked: ' + KeyID + ' Qty: ' + $('#qty_' + KeyID).val());
    });

    $('.minus').click(function(e){
        e.preventDefault();
        KeyID = getKeyID($(this).attr('id'));
        console.log('Minus clicked: ' + ' Qty: ' + $('#qty_' + KeyID).val());
    });

});

function getKeyID(str){
    var res = str.split('_');
    return res[1];
}

    // =============================================
	// Detection of Upload Image - Button
	// =============================================


