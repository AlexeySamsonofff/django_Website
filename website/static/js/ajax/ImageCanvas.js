

$('#cmbWidthOrder').change(function (e) {
    updateDropDown($('#cmbWidthOrder').val(), $('#cmbHeightOrder').val(), true);
    CalculateScale($('#cmbWidthOrder').val(), $('#cmbHeightOrder').val(), $("#filename").val(), $("#cmbWrap option:selected").val());
    $('#canvasWidth').val($('#cmbWidthOrder').val());
    $("input[name*='canvasWidth']").val($('#cmbWidthOrder').val());
    status=0;
});

// =============================================
//Detects change in Height Dropdown
// =============================================
$('#cmbHeightOrder').change(function () {
    updateDropDown($('#cmbWidthOrder').val(), $('#cmbHeightOrder').val(), true);
    CalculateScale($('#cmbWidthOrder').val(), $('#cmbHeightOrder').val(), $("#filename").val(), $("#cmbWrap option:selected").val());
    $('#canvasHeight').val($('#cmbHeightOrder').val());
    $("input[name*='canvasHeight']").val($('#cmbHeightOrder').val());
    status=0;
});

// =============================================
// Change from Inch to CM - Vise Versa
// Detects if CM or Inch Radio button has been clicked in the HTML page
// =============================================

$('#cmbWrap').change(function (e) {
    var cmbWrap = $("#cmbWrap option:selected").val();
    if (cmbWrap == "Colour") {
        $('#txtColorPicker').show();

        $(".startEmpty").spectrum({
            allowEmpty: true
        });
    } else {
        $('#txtColorPicker').hide();
        if (cmbWrap == 'Mirror') {
            CalculateScale($("#cmbWidthOrder option:selected").val(), $("#cmbHeightOrder option:selected").val(), $("#filename").val(), cmbWrap);
            $('#canvasWrap').val("Mirror");
            $("input[name*='canvasWrap']").val("Mirror");
            status = 0;
        } else {
            CalculateScale($("#cmbWidthOrder option:selected").val(), $("#cmbHeightOrder option:selected").val(), $("#filename").val(), false);
            $('#canvasWrap').val("Photo");
            $("input[name*='canvasWrap']").val("Photo");
            status = 0;
        }
    }
});

$("#colorPicker").change(function () {
    status = 0;
    $('#canvasWrap').val("Colour: " + $("#colorPicker").val());
    $("input[name*='canvasWrap']").val("Colour: " + $("#colorPicker").val());
    CalculateScale($("#cmbWidthOrder option:selected").val(), $("#cmbHeightOrder option:selected").val(), $("#filename").val(), $("#colorPicker").val());
});

$('#cmbColor').change(function (e) {
    status = 0;
    console.log('Color: ' + $('#cmbColor').val());
    CalculateScale($("#cmbWidthOrder option:selected").val(), $("#cmbHeightOrder option:selected").val(), $("#filename").val(), $("#colorPicker").val(), $('#cmbColor').val());
});

// =============================================
// Change from Inch to CM - Vise Versa
// Detects if CM or Inch Radio button has been clicked in the HTML page
// =============================================

function CalculateScale(w, h, file, color = false, filter = 'Original') {

    w = parseInt(w, 10);
    h = parseInt(h, 10);
    var ScaleW = 0, ScaleH = 0;
    if (w == h) {
        ScaleW = 720;
        ScaleH = 720;
    } else if (w > h) {
        ScaleW = 720;
        ScaleH = 720 * h / w;
    } else if (w > h) {
        ScaleH = 720;
        ScaleW = 720 * w / h;
    }
    UpdateCanvas(ScaleW, ScaleH, file, color, filter);
}
let nm = 1;
let posx = -1;
let posy = -1;
var k = 0;
mouseactive = false;
positionImageX = 0;
positionImageY = 0;
image = new Image();

image.src = $("#myImage").attr("src");

image_width = image.naturalWidth;
image_height = image.naturalHeight;
canvas = document.getElementById("myCanvas");
var scaleX=1;
var scaleY=1;
var flip_width=0
var ctx = canvas.getContext("2d");
function UpdateCanvas(width, height, file, color = false, filter = 'Original') {
    // alert("adsf");
    // alert(height+"asdf"+file+"asdf"+color+"");
    
    canvas.width = width;
    canvas.height = height;
    
    ctx.clearRect(0, 0, width, height);
    var scale = width > height ? height / width : width / height;   
    depth = 80 * scale;
    var diviX = width-2*depth;
    var diviY = height-2*depth;

    if (!color) {
        // ctx.clearRect(0, 0, width, height);
        ctx.translate(flip_width/2, 0);
        ctx.scale(scaleX, scaleY);
        ctx.translate(-flip_width/2, 0);
        ctx.drawImage(image, positionImageX, positionImageY, image_width/nm, image_height/nm,0,0,canvas.width,canvas.height);
        ctx.restore();
        ctx.save();
        // edgeRect();
    } else {
        if (color == 'Mirror') {
            ctx.save();
            ctx.clearRect(0, 0, width, height);
            ctx.translate(flip_width/2, 0);
            ctx.scale(scaleX, scaleY);
            ctx.translate(-flip_width/2, 0);
            ctx.translate(depth, depth);
            ctx.drawImage(image,positionImageX,positionImageY,image_width/nm,image_height/nm, 0, 0,diviX,diviY);
            

            ctx.scale(-1, 1);
            ctx.drawImage(image,positionImageX,positionImageY,image_width/nm,image_height/nm, 0, 0,diviX,diviY);
            ctx.restore();
            ctx.save();
            
            ctx.translate(depth+diviX+diviX, depth);
            ctx.scale(-1, 1);           
            ctx.drawImage(image,positionImageX,positionImageY,image_width/nm,image_height/nm, 0, 0,diviX,diviY);
            ctx.restore();
            ctx.save();
           
            ctx.translate(depth, depth);
            ctx.scale(1, -1);           
            ctx.drawImage(image,positionImageX,positionImageY,image_width/nm,image_height/nm, 0, 0,diviX,diviY);
            ctx.restore();
            ctx.save();
            
            ctx.translate(depth, depth+diviY+diviY);
            ctx.scale(1, -1);           
            ctx.drawImage(image,positionImageX,positionImageY,image_width/nm,image_height/nm, 0, 0,diviX,diviY);
            ctx.restore();
            ctx.save();

            

            // ctx.fillStyle = "rgba(255, 255, 255, 0.6)";         // Top Rect...
            // ctx.fillRect(depth, 0, canvas.width - 2 * depth, depth);

            // ctx.fillStyle = "rgba(255, 255, 255, 0.6)";         // Right Rect...
            // ctx.fillRect(canvas.width - depth, depth, depth, canvas.height - 2 * depth);

            // ctx.fillStyle = "rgba(255, 255, 255, 0.6)";         // Bottom Rect...
            // ctx.fillRect(depth, canvas.height - depth, canvas.width - 2 * depth, depth);
            // edgeRect();
        } 
        else {
            ctx.translate(flip_width/2, 0);
            ctx.scale(scaleX, scaleY);
            ctx.translate(-flip_width/2, 0);
            ctx.drawImage(image, positionImageX, positionImageY, image_width/nm, image_height/nm,0,0,width,height);
            // Left Rect...
            ctx.fillStyle = color;
            ctx.fillRect(0, depth, depth, height - 2 * depth);        
            // Top Rect...
            ctx.fillRect(depth, 0, width - 2 * depth, depth);
            // Right Rect...
            ctx.fillRect(width - depth, depth, depth, height - 2 * depth);
            // Bottom Rect...
            ctx.fillRect(depth, height - depth, width - 2 * depth, depth);
            
            
        }
    }
    

    if (filter == 'Sepia') {
        // set Sepia colours
        var r = [0, 0, 0, 1, 1, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 7, 7, 7, 7, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 11, 11, 12, 12, 12, 12, 13, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 17, 18, 19, 19, 20, 21, 22, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 39, 40, 41, 42, 44, 45, 47, 48, 49, 52, 54, 55, 57, 59, 60, 62, 65, 67, 69, 70, 72, 74, 77, 79, 81, 83, 86, 88, 90, 92, 94, 97, 99, 101, 103, 107, 109, 111, 112, 116, 118, 120, 124, 126, 127, 129, 133, 135, 136, 140, 142, 143, 145, 149, 150, 152, 155, 157, 159, 162, 163, 165, 167, 170, 171, 173, 176, 177, 178, 180, 183, 184, 185, 188, 189, 190, 192, 194, 195, 196, 198, 200, 201, 202, 203, 204, 206, 207, 208, 209, 211, 212, 213, 214, 215, 216, 218, 219, 219, 220, 221, 222, 223, 224, 225, 226, 227, 227, 228, 229, 229, 230, 231, 232, 232, 233, 234, 234, 235, 236, 236, 237, 238, 238, 239, 239, 240, 241, 241, 242, 242, 243, 244, 244, 245, 245, 245, 246, 247, 247, 248, 248, 249, 249, 249, 250, 251, 251, 252, 252, 252, 253, 254, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            g = [0, 0, 1, 2, 2, 3, 5, 5, 6, 7, 8, 8, 10, 11, 11, 12, 13, 15, 15, 16, 17, 18, 18, 19, 21, 22, 22, 23, 24, 26, 26, 27, 28, 29, 31, 31, 32, 33, 34, 35, 35, 37, 38, 39, 40, 41, 43, 44, 44, 45, 46, 47, 48, 50, 51, 52, 53, 54, 56, 57, 58, 59, 60, 61, 63, 64, 65, 66, 67, 68, 69, 71, 72, 73, 74, 75, 76, 77, 79, 80, 81, 83, 84, 85, 86, 88, 89, 90, 92, 93, 94, 95, 96, 97, 100, 101, 102, 103, 105, 106, 107, 108, 109, 111, 113, 114, 115, 117, 118, 119, 120, 122, 123, 124, 126, 127, 128, 129, 131, 132, 133, 135, 136, 137, 138, 140, 141, 142, 144, 145, 146, 148, 149, 150, 151, 153, 154, 155, 157, 158, 159, 160, 162, 163, 164, 166, 167, 168, 169, 171, 172, 173, 174, 175, 176, 177, 178, 179, 181, 182, 183, 184, 186, 186, 187, 188, 189, 190, 192, 193, 194, 195, 195, 196, 197, 199, 200, 201, 202, 202, 203, 204, 205, 206, 207, 208, 208, 209, 210, 211, 212, 213, 214, 214, 215, 216, 217, 218, 219, 219, 220, 221, 222, 223, 223, 224, 225, 226, 226, 227, 228, 228, 229, 230, 231, 232, 232, 232, 233, 234, 235, 235, 236, 236, 237, 238, 238, 239, 239, 240, 240, 241, 242, 242, 242, 243, 244, 245, 245, 246, 246, 247, 247, 248, 249, 249, 249, 250, 251, 251, 252, 252, 252, 253, 254, 255],
            b = [53, 53, 53, 54, 54, 54, 55, 55, 55, 56, 57, 57, 57, 58, 58, 58, 59, 59, 59, 60, 61, 61, 61, 62, 62, 63, 63, 63, 64, 65, 65, 65, 66, 66, 67, 67, 67, 68, 69, 69, 69, 70, 70, 71, 71, 72, 73, 73, 73, 74, 74, 75, 75, 76, 77, 77, 78, 78, 79, 79, 80, 81, 81, 82, 82, 83, 83, 84, 85, 85, 86, 86, 87, 87, 88, 89, 89, 90, 90, 91, 91, 93, 93, 94, 94, 95, 95, 96, 97, 98, 98, 99, 99, 100, 101, 102, 102, 103, 104, 105, 105, 106, 106, 107, 108, 109, 109, 110, 111, 111, 112, 113, 114, 114, 115, 116, 117, 117, 118, 119, 119, 121, 121, 122, 122, 123, 124, 125, 126, 126, 127, 128, 129, 129, 130, 131, 132, 132, 133, 134, 134, 135, 136, 137, 137, 138, 139, 140, 140, 141, 142, 142, 143, 144, 145, 145, 146, 146, 148, 148, 149, 149, 150, 151, 152, 152, 153, 153, 154, 155, 156, 156, 157, 157, 158, 159, 160, 160, 161, 161, 162, 162, 163, 164, 164, 165, 165, 166, 166, 167, 168, 168, 169, 169, 170, 170, 171, 172, 172, 173, 173, 174, 174, 175, 176, 176, 177, 177, 177, 178, 178, 179, 180, 180, 181, 181, 181, 182, 182, 183, 184, 184, 184, 185, 185, 186, 186, 186, 187, 188, 188, 188, 189, 189, 189, 190, 190, 191, 191, 192, 192, 193, 193, 193, 194, 194, 194, 195, 196, 196, 196, 197, 197, 197, 198, 199];

        // noise value
        var noise = 20;

        // get current image data
        var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

        for (var i = 0; i < imageData.data.length; i += 4) {

            // change image colors
            imageData.data[i] = r[imageData.data[i]];
            imageData.data[i + 1] = g[imageData.data[i + 1]];
            imageData.data[i + 2] = b[imageData.data[i + 2]];

            // apply noise
            if (noise > 0) {
                var noise = Math.round(noise - Math.random() * noise);

                for (var j = 0; j < 3; j++) {
                    var iPN = noise + imageData.data[i + j];
                    imageData.data[i + j] = (iPN > 255) ? 255 : iPN;
                }
            }
        }
        // put image data back to context
        ctx.putImageData(imageData, 0, 0);

    } else if (filter == 'Black and White') {
        const imgD = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const d = imgD.data;
        var v, i = 0;
        while (i < d.length) {
            v = (d[i++] + d[i++] + d[i]) < (200 * 3) ? 0 : 255;
            i -= 2;
            d[i++] = d[i++] = d[i++] = v;
            i++;
        }
        ctx.putImageData(imgD, 0, 0);
    }
    recta(depth, width, height, scale);
}

function edgeRect(){
    ctx.restore();
    ctx.save();
    ctx.fillStyle = "rgba(255, 255, 255, 0.6)";         // Left Rect...
    ctx.fillRect(0, depth, depth, canvas.height - 2 * depth);

    ctx.fillStyle = "rgba(255, 255, 255, 0.6)";         // Top Rect...
    ctx.fillRect(depth, 0, canvas.width - 2 * depth, depth);

    ctx.fillStyle = "rgba(255, 255, 255, 0.6)";         // Right Rect...
    ctx.fillRect(canvas.width - depth, depth, depth, canvas.height - 2 * depth);

    ctx.fillStyle = "rgba(255, 255, 255, 0.6)";         // Bottom Rect...
    ctx.fillRect(depth, canvas.height - depth, canvas.width - 2 * depth, depth);
}
function recta(depth, width, height, scale){
    // Canvas Wrap lines - dotted blue lines showing canvas side wraps
    // top line left to right
    ctx.beginPath();
    ctx.strokeStyle = "#0886cc";
    ctx.setLineDash([5, 5]);
    ctx.moveTo(0, depth);
    ctx.lineTo(width, depth);
    ctx.stroke();
    // Bottom line left to right
    ctx.beginPath();
    ctx.setLineDash([5, 5]);
    ctx.moveTo(0, height - (80 * scale));
    ctx.lineTo(width, height - (80 * scale));
    ctx.stroke();
    // Left line top to bottom
    ctx.beginPath();
    ctx.setLineDash([5, 5]);
    ctx.moveTo(80 * scale, 0);
    ctx.lineTo(80 * scale, height);
    ctx.stroke();
    // Right line top to bottom
    ctx.beginPath();
    ctx.setLineDash([5, 5]);
    ctx.moveTo(width - (80 * scale), 0);
    ctx.lineTo(width - (80 * scale), height);
    ctx.stroke();
    // Clear the 4 edges with white rectangle
    ctx.rect(0, 0, 80 * scale, 80 * scale);                                    // Top Left Rect
    ctx.rect(width - (80 * scale), height - (80 * scale), 80 * scale, 80 * scale);   // Top Right Rect
    ctx.rect(0, height - (80 * scale), 80 * scale, 80 * scale);                  // Bottom Left Rect
    ctx.rect(width - (80 * scale), 0, 80 * scale, 80 * scale);                  // Bottom Right Rect
    ctx.fillStyle = "white";
    ctx.fill();
    // ctx.drawImage(image, 0, 0, width, height);
    ctx.fillStyle = "rgba(255, 255, 255, 0.6)";         // Left Rect...
    ctx.fillRect(0, depth, depth, height - 2 * depth);
    ctx.fillStyle = "rgba(255, 255, 255, 0.6)";         // Top Rect...
    ctx.fillRect(depth, 0, width - 2 * depth, depth);
    ctx.fillStyle = "rgba(255, 255, 255, 0.6)";         // Right Rect...
    ctx.fillRect(width - depth, depth, depth, height - 2 * depth);
    ctx.fillStyle = "rgba(255, 255, 255, 0.6)";         // Bottom Rect...
    ctx.fillRect(depth, height - depth, width - 2 * depth, depth);
}

function minValue(x, y) {
    return x > y ? y : x;
}
function maxValue(x, y) {
    return x > y ? x : y;
}


// 
//

var status;

$('#imgrotateL').click(function () {
    $.ajax({
        url: '/rotateL/',
        method: 'post',
        data: true,
        dataType: 'text',
        success: function (data) {
            gkhead.src = data;
            drawRotated(-90);
            status=1;
        },

    });
});
$('#imgrotateR').click(function () {
    $.ajax({
        url: '/rotateR/',
        method: 'post',
        data: true,
        dataType: 'text',
        success: function (data) {
            gkhead.src=data;
            drawRotated(90);
            status = 1;
       },

    });
})
$('#imgflip').click(function () {

    $.ajax({
        url: '/flip/',
        method: 'post',
        data: true,
        dataType: 'text',
        success: function (data) {
            // ctx.translate(canvas.width/2, canvas.height/2);
            // ctx.scale(scaleX,scaleY);
            // ctx.translate(-canvas.width/2, -canvas.height/2); 
            k++;
            if(k%2==1){
                scaleX =-1;
                scaleY = 1;
                flip_width = canvas.width;

            }
            else{
                scaleX =1;
                scaleY = 1;
                flip_width = 0;
            }
            if($("#cmbWrap option:selected").val()=="Mirror")
                CalculateScale($('#cmbWidthOrder').val(), $('#cmbHeightOrder').val(), $("#filename").val(),'Mirror', $("#cmbColor option:selected").val());
            if($("#cmbWrap option:selected").val()=="Photo")
                CalculateScale($('#cmbWidthOrder').val(), $('#cmbHeightOrder').val(), $("#filename").val(),false, $("#cmbColor option:selected").val());
            if($("#cmbWrap option:selected").val()=="Colour")
                CalculateScale($('#cmbWidthOrder').val(), $('#cmbHeightOrder').val(), $("#filename").val(),$("#colorPicker").val(), $("#cmbColor option:selected").val());
       },
    });
});
var presValue;
$('#zoomout').click(function(){   
    var plus = $('#zoom_range').val();
    plus++;
    $('#zoom_range').val(plus);
    zoom(plus);
})
$('#zoomin').click(function () {   
    var minus = $('#zoom_range').val(); 
    minus--;  
    $('#zoom_range').val(minus);
    zoom(minus);
})
$('#oorange').on("input", function () {
    if(presValue==undefined)
        presValue=5000;
    var newValue = $(this).val();
    $.ajax({
        url: '/imgsrc/',
        method: 'post',
        data: true,
        dataType: 'text',
        success: function (data) {
            gkhead.src = data;
            rezoom(newValue / presValue, newValue / presValue);
            presValue=newValue;
            status = 1;
            
            // rezoom(1);
        },
    });
}).trigger("change");






//
//
function trackTransforms(ctx) {
    var svg = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
    var xform = svg.createSVGMatrix();
    ctx.getTransform = function () { return xform; };
    var scale = ctx.scale;
    ctx.scale = function (sx, sy) {
        xform = xform.scaleNonUniform(sx, sy);
        return scale.call(ctx, sx, sy);
    };
    var translate = ctx.translate;
    ctx.translate = function (dx, dy) {
        xform = xform.translate(dx, dy);
        return translate.call(ctx, dx, dy);
    };
    var rotate = ctx.rotate;
    ctx.rotate = function (radians) {
        xform = xform.rotate(radians * 180 / Math.PI);
        return rotate.call(ctx, radians);
    };
    var pt = svg.createSVGPoint();
    ctx.transformedPoint = function (x, y) {
        pt.x = x; pt.y = y;
        return pt.matrixTransform(xform.inverse());
    }
}

//
    var gkhead = new Image;
    var canvas = document.getElementById("myCanvas");

    //gkhead.src = "/Media/planet_galaxy_universe_121293_1920x1200.jpg";
    var ctx = canvas.getContext('2d');
    trackTransforms(ctx);
    function redraw() {
        // Clear the entire canvas
        var p1 = ctx.transformedPoint(0, 0);
        var p2 = ctx.transformedPoint(canvas.width, canvas.height);
        ctx.clearRect(p1.x, p1.y, p2.x - p1.x, p2.y - p1.y);
        ctx.save();
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.restore();
        ctx.drawImage(gkhead, 0, 0);
    }
    var lastX = canvas.width / 2, lastY = canvas.height / 2;
    var dragStart, dragged;
       
    function drawRotated(degrees) {
        ctx.translate(gkhead.width / 2, gkhead.height / 2);
        ctx.rotate(degrees * Math.PI / 180);
        ctx.translate(-gkhead.width / 2, -gkhead.height / 2);
        ctx.drawImage(gkhead, -gkhead.width / 2, -gkhead.width / 2);
        redraw();
        side();
    }

    

    function side() {
        var scale = gkhead.width > gkhead.height ? gkhead.height / gkhead.width : gkhead.width / gkhead.height;
        var depth = 80 * scale;
        var width = gkhead.width;
        var height = gkhead.height;
        recta(depth, width, height, scale);
    }
    // function drawFlip() {
        

    //     // alert(canvas.width);
    //     // ctx.clearRect(0, 0, canvas.width, canvas.height);

    //     // ctx.translate(canvas.width, 0);
    //     // ctx.scale(-1, 1);
    //     // ctx.drawImage(image, positionImageX, positionImageY, image_width/nm, image_height/nm,0,0,canvas.width,canvas.height);
    //     // ctx.restore();
    //     // ctx.save();
    //     // ctx.drawImage(image, 0, 0, image_width/nm, image_height/nm,0,0,canvas.width,canvas.height);

    //     // updateDropDown($('#cmbWidthOrder').val(), $('#cmbHeightOrder').val(), true);
    //     if($("#cmbWrap option:selected").val()=="Colour")
    //         CalculateScale($('#cmbWidthOrder').val(), $('#cmbHeightOrder').val(), $("#filename").val(),$("#colorPicker").val(), $("#cmbColor option:selected").val());
    //     // if($("#cmbWrap option:selected").val()=="Mirror")
    //     //     CalculateScale($('#cmbWidthOrder').val(), $('#cmbHeightOrder').val(), $("#filename").val(),'Mirror', $("#cmbColor option:selected").val());
    //     // if($("#cmbWrap option:selected").val()=="Photo")
    //     //     CalculateScale($('#cmbWidthOrder').val(), $('#cmbHeightOrder').val(), $("#filename").val(),false, $("#cmbColor option:selected").val());
    // }

    function zoom(value){
        nm =1+value/10;
        // UpdateCanvas(ScaleW, ScaleH, file, color, filter);
        // updateDropDown($('#cmbWidthOrder').val(), $('#cmbHeightOrder').val(), true);
        if($("#cmbWrap option:selected").val()=="Colour")
            CalculateScale($('#cmbWidthOrder').val(), $('#cmbHeightOrder').val(), $("#filename").val(),$("#colorPicker").val(), $("#cmbColor option:selected").val());
        if($("#cmbWrap option:selected").val()=="Mirror")
            CalculateScale($('#cmbWidthOrder').val(), $('#cmbHeightOrder').val(), $("#filename").val(),'Mirror', $("#cmbColor option:selected").val());
        if($("#cmbWrap option:selected").val()=="Photo")
            CalculateScale($('#cmbWidthOrder').val(), $('#cmbHeightOrder').val(), $("#filename").val(),false, $("#cmbColor option:selected").val());
    
    }

    function activeMouse(ccc, event) { 
        let rect = ccc.getBoundingClientRect(); 
        let x = event.clientX - rect.left; 
        let y = event.clientY - rect.top; 
        posx = x;
        posy = y;
        mouseactive = true;
    }
    function mouseMove(ccc, event){
        if(mouseactive){
            let rect = ccc.getBoundingClientRect(); 
            let x = event.clientX - rect.left; 
            let y = event.clientY - rect.top; 
            
            let xnew = posx - x;
            let ynew = posy - y;
            positionImageX += xnew;
            positionImageY += ynew;
            if(positionImageX <= 0 ){
                positionImageX = 0;
            }
            if(positionImageY <= 0  ){
                positionImageY = 0;
            }
            if(nm == 1){
                positionImageX = 0;
                positionImageY = 0;
            }
            posx = x;
            posy = y;
            if($("#cmbWrap option:selected").val()=="Colour")
                CalculateScale($('#cmbWidthOrder').val(), $('#cmbHeightOrder').val(), $("#filename").val(),$("#colorPicker").val(), $("#cmbColor option:selected").val());
            if($("#cmbWrap option:selected").val()=="Mirror")
                CalculateScale($('#cmbWidthOrder').val(), $('#cmbHeightOrder').val(), $("#filename").val(),'Mirror', $("#cmbColor option:selected").val());
            if($("#cmbWrap option:selected").val()=="Photo")
                CalculateScale($('#cmbWidthOrder').val(), $('#cmbHeightOrder').val(), $("#filename").val(),false, $("#cmbColor option:selected").val());
        }
    }
    function releaseMouse(){
        posx = -1;
        posy = -1;
        mouseactive = false;
    }   
    canvas.addEventListener('mousedown', function (e) {
        activeMouse(canvas,e);     
    });
    canvas.addEventListener("mouseup",function(e){
        releaseMouse();
    });

    canvas.addEventListener("mousemove",function(e){
        mouseMove(canvas,e);
    });