    // =============================================
	// Detection of Upload Image - Button
	//
	// =============================================
    $('#btnUpload').click(function(e){
        e.preventDefault();
        var file = $("#file").val();
        if (file == '') {
            showNotification(e, "File Error", "Please choose a file to upload!", "warning", "btn-error", "OK");
        }else{
            var ext = file.split(".");
            if ((ext[1] == "jpg") || (ext[1] == "jpeg") || (ext[1] == "tif") || (ext[1] == "png") || (ext[1] == "gif") || (ext[1] == "JPG")) {
                var file_data = $('#file').prop('files')[0];
                var form_data = new FormData();
                form_data.append('file', file_data);
                $.ajax({
                    url: '/fileUpload/',
                    type: 'post',
                    data: form_data,
                    dataType: 'json',
                    cache: false,
                    processData: false,
                    contentType: false,
                    success: function(data){
                        // Open the 2nd Accordian - Image Preview
                        openNextAccordion();
                        var canvasWidth = getMaxPrintSize(data.imgWidth, data.imgHeight, "w");
                	    var canvasHeight = getMaxPrintSize(data.imgWidth, data.imgHeight, "h");
                        $("#ImagePreview").html('<img src="' + data.imgPath +  '" width="50%" />');
                        $("#ImageDetails").html(
                            '<div class="divider notopmargin"><i class="icon-circle"></i></div>' +
                            '<div class="col_full"><strong>File Name:</strong><br />' + data.imgName +
                		    '<br /><br /><strong>Width:</strong><br />' + data.imgWidth + 'px' +
                		    '<br /><br /><strong>Height:</strong><br />' + data.imgHeight + 'px' +
                            '<br /><br /><strong>Max Canvas Size:</strong><br />' + canvasWidth + '" x ' + canvasHeight + '"</strong></div>' +
                		    '<div class="divider notopmargin"><i class="icon-circle"></i></div>');
                		$('#btnStep2').show();
                        $('#txtImgName').val(data.imgName);
                        $('#txtImgW').val(data.imgWidth);
                        $('#txtImgH').val(data.imgHeight);
                        $('#txtInchW').val(canvasWidth);
                        $('#txtInchH').val(canvasHeight);
                    },
                    xhr: function() {
                        var xhr = new window.XMLHttpRequest();
                        xhr.upload.addEventListener("progress", function (evt) {
                            if (evt.lengthComputable) {
                                var percentComplete = evt.loaded / evt.total;
                                percentComplete = parseInt(percentComplete * 100);
                                $('.myprogress').text(percentComplete + '%');
                                $('.myprogress').css('width', percentComplete + '%');
                            }
                        }, false);
                        return xhr;
               	    }
                });
            }else{
                showNotification(e, "File Error", "You can only upload images! " + ext, "warning", "btn-error", "OK");
            }
        }
    });
    $('#btnStep2').click(function(e){
       e.preventDefault();
        imgName = $('#txtImgName').val();
        imgName = imgName.substring(0, imgName.length-4);
        canvasWidth = $('#txtInchW').val();
        canvasHeight = $('#txtInchH').val();
        window.location.href = '../image_size/' + imgName + '/' + canvasWidth + '/' + canvasHeight ;
    });

    // =============================================
	// Part of step one ordering process opens the
	// 2nd Accordian and display the image upload
	// =============================================
    function openNextAccordion(){
        $('#accStepOne').toggleClass('#accStepOne').next().stop().slideUp("normal", function(){
            if( ( $('#accStepOne').hasClass('device-sm') || $('#accStepOne').hasClass('device-xs') ) && element.hasClass('scroll-on-open') ) {
                $('html,body').stop(true).animate({
                    'scrollTop': clickTarget.offset().top - ( SEMICOLON.initialize.topScrollOffset() - 40 )
                }, 800, 'easeOutQuad' );
            }
        });
        $('#accStepTwo').toggleClass('#accStepTwo').next().stop().slideDown("normal", function(){
            if( ( $('#accStepTwo').hasClass('device-sm') || $('#accStepTwo').hasClass('device-xs') ) && element.hasClass('scroll-on-open') ) {
                $('html,body').stop(true).animate({
                    'scrollTop': clickTarget.offset().top - ( SEMICOLON.initialize.topScrollOffset() - 40 )
                }, 800, 'easeOutQuad' );
            }
        });
    }

    // =============================================
	// Get Maximum file size for Canvas Size
	// =============================================
    function getMaxPrintSize(imgWidth, imgHeight, flag){
    	var dpi = 72,
    		frameW = imgWidth / dpi,
    		frameH = imgHeight / dpi;

    	frameW = parseInt(frameW);
    	frameH = parseInt(frameH);

    	frameW = Math.round(frameW);
    	frameH = Math.round(frameH);

    	frameW -= 3;
    	frameH -= 3;

    	if(frameW%2 != 0) frameW--;
    	if(frameH%2 != 0) frameH--;
    	if(frameW < 8) frameW = 8;
    	if(frameH < 8) frameH = 8;

    	if(frameW > 60 && frameW < 72) frameW = 60;
    	if(frameW > 72) frameW = 72;

    	if(frameH > 60 && frameH < 72) frameH = 60;
    	if(frameH > 72) frameH = 72;

    	if(frameW > 56 && frameH > 56) {
    		if(frameW >= frameH ) {
    		    frameH = 56;
    		}
    		else {
    		    frameW = 56;
    		}
    	}

    	if (flag == "w"){
    	    return frameW;
    	}else {
    	    return frameH;
    	}
    }