
    // =============================================
    //Detects change in Width Dropdown
    // =============================================
	$('#cmbWidthOrder').change(function(e){
	    updateDropDown($('#cmbWidthOrder').val(), $('#cmbHeightOrder').val(), true);
	    console.log($("#cmbWrap option:selected").val());
	    CalculateScale($('#cmbWidthOrder').val(), $('#cmbHeightOrder').val(), $("#filename").val(), $("#cmbWrap option:selected").val());
	});

    // =============================================
    //Detects change in Height Dropdown
    // =============================================
	$('#cmbHeightOrder').change(function(){
	    updateDropDown($('#cmbWidthOrder').val(), $('#cmbHeightOrder').val(), true);
	    CalculateScale($('#cmbWidthOrder').val(), $('#cmbHeightOrder').val(), $("#filename").val(), $("#cmbWrap option:selected").val());
	});

    function CalculateScale(w, h, file, color = false){
        console.log('w:', w);
        console.log('h:', h);
        console.log('color', color);

        var Pixel = 96;
        var ScaleW = (w * Pixel)/2;
        var ScaleH = (h * Pixel)/2;

        console.log("ScaleW:", ScaleW);
        console.log("ScaleH:", ScaleH);
        // If Square Canvas and below 400 reset size
        if (ScaleW == ScaleH){
            if (ScaleW = 400) {
                ScaleH = 400;
                ScaleW = 400;
            }
        }
        var maxScale = ScaleW > ScaleH ? ScaleW : ScaleH;
        //Check if Landscape
        if(ScaleW > 1960){
            ScaleW = ScaleW / 4;
            ScaleH = ScaleH / 4;
        }else if(ScaleW > 1440){
            ScaleW = ScaleW / 3;
            ScaleH = ScaleH / 3;
        }else if(ScaleW > 720) {
            ScaleW = ScaleW / 2;
            ScaleH = ScaleH / 2;
        }

        UpdateCanvas(ScaleW, ScaleH, file, color);
    }

    // =============================================
	// Change from Inch to CM - Vise Versa
	// Detects if CM or Inch Radio button has been clicked in the HTML page
	// =============================================
    $('#cmbWrap').change(function(e){
        var cmbWrap = $("#cmbWrap option:selected").val();
        if (cmbWrap == "Colour"){
            $('#txtColorPicker').show();

			(".startEmpty").spectrum({
				allowEmpty: true
			});
        }else{
            $('#txtColorPicker').hide();
            if(cmbWrap == 'Mirror'){
                CalculateScale($("#cmbWidthOrder option:selected").val(), $("#cmbHeightOrder option:selected").val(), $("#filename").val(), cmbWrap);
            } else {
                CalculateScale($("#cmbWidthOrder option:selected").val(), $("#cmbHeightOrder option:selected").val(), $("#filename").val(), false);
            }
        }
    });

    $("#colorPicker").change(function() {
        CalculateScale($("#cmbWidthOrder option:selected").val(), $("#cmbHeightOrder option:selected").val(), $("#filename").val(), $("#colorPicker").val());
    });

    // =============================================
	// Change from Inch to CM - Vise Versa
	// Detects if CM or Inch Radio button has been clicked in the HTML page
	// =============================================
	function UpdateCanvas(width, height, file, color = false){
	    var image = document.getElementById("myImage");

	    var canvas = document.getElementById("myCanvas");
	    canvas.width = width;
	    canvas.height = height;
        var ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, width, height);
        console.log(width);
        console.log(height);
        var scale = width > height ? height/width : width/height;

        if(!color){
            ctx.drawImage(image, 40 * scale, 40 * scale, width-(80*scale), height-(80*scale));
        }else {
            if(color == 'Mirror'){
                ctx.save();
                ctx.translate(width, 0);
                ctx.scale(-1,1);
                ctx.drawImage(image, 0,0,80*scale,height, width-(80*scale), 80*scale, 40*scale, height-(40*scale));
                ctx.drawImage(image, width-(40*scale),0,80*scale,height, 40*scale, 80*scale, 40*scale, height-(40*scale));


                ctx.restore();
                ctx.save();


                ctx.translate(0, height);
                ctx.scale(1,-1);
                ctx.drawImage(image, 0, 0, width, 40*scale, 80*scale, height-(80*scale), width-(160*scale), 40*scale);
                ctx.drawImage(image,0, height-(180*scale), width, 40*scale,80*scale, 40*scale,width-(160*scale), 40*scale);

                ctx.restore();
                ctx.drawImage(image, 80*scale,80*scale, width-(160*scale), height-(160*scale));
            } else {
                ctx.beginPath();
                ctx.rect(80*scale, 40*scale, width-(160*scale), 40*scale);    // x, y, width, height - Top left to right
                ctx.rect(width-(80*scale), 80*scale, 40*scale, height-(160*scale));   // x, y, width, height - Right top to Bottom
                ctx.rect(80*scale, height-(80*scale), width-(160*scale), 40*scale);   // x, y, width, height - Bottom left to Right
                ctx.rect(40*scale, 80*scale, 40*scale, height-(160*scale));    // x, y, width, height - Left top to Bottom
                ctx.fillStyle = color;
                ctx.fill();
                ctx.drawImage(image, 80 * scale, 80*scale,width-(160*scale),height-(160*scale));
            }
        }

        // Canvas Wrap lines - dotted blue lines showing canvas side wraps
        // top line left to right
        ctx.beginPath();
        ctx.strokeStyle = "#0886cc";
        ctx.setLineDash([5, 5]);
        ctx.moveTo(0, 80*scale);
        ctx.lineTo(width, 80*scale);
        ctx.stroke();

        // Bottom line left to right
        ctx.beginPath();
        ctx.setLineDash([5, 5]);
        ctx.moveTo(0, height - (80*scale));
        ctx.lineTo(width, height - (80*scale));
        ctx.stroke();

        // Left line top to bottom
        ctx.beginPath();
        ctx.setLineDash([5, 5]);
        ctx.moveTo(80*scale, 0);
        ctx.lineTo(80*scale, height);
        ctx.stroke();

        // Right line top to bottom
        ctx.beginPath();
        ctx.setLineDash([5, 5]);
        ctx.moveTo(width - (80*scale), 0);
        ctx.lineTo(width - (80*scale), height);
        ctx.stroke();

        // Clear the 4 edges with white rectangle
        ctx.rect(0,0,80*scale,80*scale);                                    // Top Left Rect
        ctx.rect(width-(80*scale),height-(80*scale), 80*scale, 80*scale);   // Top Right Rect
        ctx.rect(0,height-(80*scale), 80*scale, 80*scale);                  // Bottom Left Rect
        ctx.rect(width-(80*scale), 0, 80*scale, 80*scale);                  // Bottom Right Rect
        ctx.fillStyle = "white";
        ctx.fill();

	}