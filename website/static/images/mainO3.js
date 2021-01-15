function doUpdateProofPrice(el){
	var b=getPrice();
	if (el.checked){
		b+=parseInt(el.value);
	}
	b="&pound;"+b;
	$("#previewPrice").html(b);
}
function doColorPicker(ui){
	if (dragStart1) return;
	var b=ui.position.left;
	var h=ui.position.top;
	var d=$("#zoomimage").width();
	var e=$("#imgPlace").width();
	var a=$("#zoomimage").height();
	var c=$("#imgPlace").height();
	//console.debug("a");
}
function doStepMain2(){
	doHideWait();
  doStep2();

	
	doFinishUpload(ImageData.filename, ImageData.origW, ImageData.origH);
}
function doStep00(){
  $("#stepSummary").hide();
  $("#editImage").hide();
  $("#uploadMainPreviewId").hide();
  
  $("#step1").show();
  
  $(".mainProductRows").show();
  
  $("#uploadMainId").hide();
  $("#uploadMainId0").hide();
  
  isMainUpload=true;
  
}
function doShowMirror(){
	isMirror=true;
	var a=buildURL("mirror_flop");
	var b=buildURL("mirror_flip");
	if(mirrorLeft==null){mirrorLeft=new Image();mirrorLeft.id="mirrorLeftId";mirrorLeft.src=a;$("#marginleft").html("");$("#marginleft").append(mirrorLeft)}
	else{mirrorLeft.src=a}
	$("#mirrorLeftId").css({opacity:0.5,position:"relative"});$("#mirrorLeftId").show();$("#marginleft").css({opacity:1});
	if(mirrorRight==null){mirrorRight=new Image();mirrorRight.id="mirrorRightId";mirrorRight.src=a;$("#marginright").html("");$("#marginright").append(mirrorRight)}
	else{mirrorRight.src=a}
	$("#mirrorRightId").css({opacity:0.5,position:"relative"});$("#mirrorRightId").show();$("#marginright").css({opacity:1});
	if(mirrorTop==null){mirrorTop=new Image();mirrorTop.id="mirrorTopId";mirrorTop.src=b;$("#margintop").html("");$("#margintop").append(mirrorTop)}
	else{mirrorTop.src=b}
	$("#mirrorTopId").css({opacity:0.5,position:"relative"});$("#mirrorTopId").show();$("#margintop").css({opacity:1});
	if(mirrorBottom==null){mirrorBottom=new Image();mirrorBottom.id="mirrorBottomId";mirrorBottom.src=b;$("#marginbottom").html("");$("#marginbottom").append(mirrorBottom)}
	else{mirrorBottom.src=b}
	$("#mirrorBottomId").css({opacity:0.5,position:"relative"});$("#mirrorBottomId").show();$("#marginbottom").css({opacity:1});doMirror()
}

function doHideMirror(){
	isMirror=false;$("#mirrorLeftId").hide();$("#mirrorRightId").hide();$("#mirrorTopId").hide();$("#mirrorBottomId").hide()
}

function doMirror(k){
	if(!isMirror){return}
	var e=$("#imgPlace").position();var m=$("#zoomimage").position();var o=$("#zoomimage").width();var n=$("#zoomimage").height();var p=$("#margintop").height();
	var d=$("#marginleft").width();var j=$("#marginleft").height();
	var i=m.top-e.top-p;
	var c=-o+d-(m.left-e.left-d);var g=$("#marginright").position();
	var l=g.left-m.left-o;
	$("#mirrorLeftId").css({width:o+"px",height:n+"px",left:c+"px",top:i+"px"});$("#mirrorRightId").css({width:o+"px",height:n+"px",left:l+"px",top:i+"px"});
	var a=$("#marginbottom").position();
	var h=m.left-e.left-d;var f=-n+p-(m.top-e.top-p);var b=a.top-m.top-n;
	$("#mirrorTopId").css({width:o+"px",height:n+"px",left:h+"px",top:f+"px"});$("#mirrorBottomId").css({width:o+"px",height:n+"px",left:h+"px",top:b+"px"})
}
var pickWidth=300;

function doHideColorPicker(){$("#colorPick").hide()}

function doHideColorPick(){
	/*
		$("#zoomimage").css({
			'cursor':'default'
		});*/
	$("#colorPickArea").hide();
}

var myPickData=null;
var colorPickColor="#ADD8E6";
var tmpColorPickColor="";
function doShowColorPick(){
	var mdata="a=5";
	var cx=0;
	var cy=0;

	var e=$("#imgPlace").position();
	var m=$("#zoomimage").position();
	var p=$("#margintop").height();
	var d=$("#marginleft").width();
	cy=parseInt(m.top-(e.top+p));
	cx=parseInt(m.left-(e.left+d));
	
	var cw=$("#margintop").width();
	var ch=$("#marginleft").height();
	var rw=$("#zoomimage").width();
	var rh=$("#zoomimage").height();
	
	mdata+="&time="+(new Date()).getTime();
	mdata+="&img="+imgFilename
	mdata+="&cx="+cx;
	mdata+="&cy="+cy;
	mdata+="&cw="+cw;
	mdata+="&ch="+ch;
	mdata+="&rw="+rw;
	mdata+="&rh="+rh;
	var l=10;
	var t=10;
	var w=100;
	var h=200;
	var pImg=$("#imgPlace").position();

	l=pImg.left + $("#lefttop").width();
	t=pImg.top + $("#lefttop").height();
	w=$("#margintop").width();
	h=$("#marginleft").height();
	$("#colorPickArea").css({left:l+"px",top:t+"px",width:w+"px",height:h+"px"});
	
	$("#colorPickArea").show();

	doShowWait('colorPickArea');
	
	$.ajax({ 
		type: "GET",
		url: "eyedropper.php", 
		context: document.body, 
		data: mdata,
		success: function(data){
			myPickData=eval("{[" + data + "]}");
			pickWidth=parseInt(myPickData[0]);
			
			doHideWait();
			//myPickData=eval("{" + data + "}");
			//alert(myPickData.c[0]);
			//alert(myPickData.w);
			//alert(myPickData.h);
    }});
	  
	
	//$("#colorPick").show();imageChanged();
/*
		$("#zoomimage").css({
			'cursor':'url("images/ColorPicker.cur"), crosshair'
		});*/
}


$(document).ready(function(){
	$("#slider").slider({range:"min",value:200,min:1,max:600,step:1,slide:function(a,b){ var flag=doUpdateZoom(b.value); return flag;}});
	initUploadTool();doInitRoom();
	$(".imgOption").mouseover(function(){$(this).fadeTo("slow",1);$(this).parent().addClass("imgSelected"); $(".mainPreview").hide(); $("#mainPreview_"+this.id).show();});
	$(".imgOption").mouseout(function(){if(sel_product==this.id){return}$(this).fadeTo("slow",0.5);$(this).parent().removeClass("imgSelected");$("#mainPreview_"+this.id).hide()});
	$(".imgOption").click(function(){
		if(sel_product!=""){
			$("#"+sel_product).parent().removeClass("imgSelected");
			$("#"+sel_product).fadeTo("slow",0.5)
		}
		sel_product=this.id;
		
		//$(".mainProductRows").hide();
		
		$("#uploadMainId").show();
		//$("#uploadMainId0").show();
		//doStep2()
	});
	$(".imgEdge").mouseover(function(){$(this).fadeTo("slow",1)});
	$(".imgEdge").mouseout(function(){if(sel_edge==this.id){return}$(this).fadeTo("slow",0.5);$(this).parent().removeClass("imgSelected")});
	$(".imgEdge").click(function(){if(sel_edge!=""){$("#"+sel_edge).parent().removeClass("imgSelected");$("#"+sel_edge).fadeTo("slow",0.5)}sel_edge=this.id;$(this).parent().addClass("imgSelected");setEdge(sel_edge);$(this).fadeTo("fast",1)});
	$(".imgEffect").mouseover(function(){$(this).fadeTo("slow",1)});
	$(".imgEffect").mouseout(function(){if(sel_effect==this.id){return}$(this).fadeTo("slow",0.5);$(this).parent().removeClass("imgSelected")});
	$(".imgEffect").click(function(){if(sel_effect!=""){$("#"+sel_effect).parent().removeClass("imgSelected");$("#"+sel_effect).fadeTo("slow",0.5)}sel_effect=this.id;$(this).parent().addClass("imgSelected");doSetEffect(sel_effect);$(this).fadeTo("fast",1)});
	$("#btnSummary12").click(function(){doStep3(true)});
	$("#btnSummary11").click(function(){doStep3()});
	$("#btnSummary").click(function(){
		doPlaceOrder();
	});
	$("#colorPickArea").mousemove(function(e){
		var relativeX = e.pageX - this.offsetLeft;
		var relativeY = e.pageY - this.offsetTop;
		//console.debug(relativeX + " "+ relativeY);
		var color=myPickData[relativeY*pickWidth+relativeX+1];
		setEdgeColor(color,1);
		tmpColorPickColor=color;
	});
	$("#colorPickArea").mouseout(function(e){
		setEdgeColor(colorPickColor,1);
	});
	$("#colorPickArea").click(function(){
		colorPickColor=tmpColorPickColor;
		doHideColorPick();
	});
	
	if (EditEl.id != -1){
		if (EditEl.orderProof != "0" && EditEl.orderProof != "" && EditEl.orderProof != null){
			document.getElementById("proofId").checked=true;
		}
		ImageData.filename = EditEl.img;
		ImageData.origW=EditEl.imgW;
		ImageData.origH=EditEl.imgH;

		setDefault();
		
		var orderData=EditEl.orderData;
		
		var size = EditEl.size;
		if (size != ""){
			var idx = size.indexOf("x");
			var w=-1;
			var h=-1;
			var d=-1;
			if (idx!= -1){
				w=size.substring(0,idx);
				size=size.substring(idx+1);
				idx = size.indexOf("x");
				if (idx!= -1){
					h=size.substring(0,idx);
					d=size.substring(idx+1);
				} else {
					h=size;
					d=0;
				}
			}
			setWW(w);
			setHH(h);
			
			$("#depth").val(d);
			sel_product=(d>0)?"p_canvas":"p_rolled";

			var effect="";
			var idx=orderData.indexOf("Effect");
			if (idx!=-1){
				effect=orderData.substring(idx+7);
				idx=effect.indexOf("]");
				effect=effect.substring(0, idx);
			}
			
			if (effect=="sepia") editEffect = '$("#effect_sepia").click();';
			else if (effect=="grayscale"||effect=="gray")  editEffect = '$("#effect_gray").click();';
			else  editEffect = '$("#effect_normal").click();';

			
			doStepMain2();
			
			
			var price="";
			
			var idx=orderData.indexOf("PriceType");
			if (idx!=-1){
				price=orderData.substring(idx+10);
				idx=price.indexOf("]");
				price=price.substring(0, idx);
			}
			
			
			
			if (price=="standard"){
				document.getElementById("standard").checked=true;
			} else {			
				document.getElementById("premium").checked=true;
			}
			
			
			var edge=EditEl.edge;
			if (edge.indexOf("edge_") != -1){
        edge=edge.substring(5);
      }
			
			if (edge=="white") $("#edge_white").click();
			else if (edge=="black") $("#edge_black").click();
			else if (edge=="mirror") $("#edge_mirror").click();
			else if (edge=="wrap") $("#edge_wrap").click();
			else if (edge.indexOf("color")!=-1) $("#edge_color").click();
			
			isNewImage=false;

		}
		
	}
});

var editEffect="";
var sel_product="";var sel_edge="";var sel_effect="";
function doStep2(){
	$("#stepSummary").hide();$("#step1").hide();$("#editImage").show();
	if(sel_product=="p_canvas"){
		$("#edgesArea").show();
		$(".marginClass").show();
		$("#imgPlace").css({"border-style":"none"});$("#depthId").show()
		$("#dwidth1").hide();
		$("#dheight1").hide();
	}else{
		$("#edgesArea").hide();
		$(".marginClass").hide();
		$("#imgPlace").css({"border-style":"none"});
		$("#depthId").hide();
		$("#dwidth1").show();
		$("#dheight1").show();
	}
}

function doStep3(isFromRoom){
  if (isFromRoom == undefined) doShowRoom();
	
	$("#editImage").hide();
	$("#stepPreview").hide();
	$("#stepSummary").show();
	
	var filename = formatFilename(ImageData.filename);
	$("#previewFilename").html(filename);
	if(sel_product=="p_canvas"){
		$("#previewDepthId").show();$("#previewEdgesId").show();
		$("#previewDepth").html($("#depth option:selected").text());
		var a="None";
		if(sel_edge=="edge_white"){a="White"}
		if(sel_edge=="edge_black"){a="Black"}
		if(sel_edge=="edge_mirror"){a="Mirror"}
		if(sel_edge=="edge_wrap"){a="Wrap"}
		if(sel_edge=="edge_color"){a="Colour"}
		$("#previewEdges").html(a)
	}else{
		$("#previewDepthId").hide();$("#previewEdgesId").hide()
	}
	var a="None";
	if(sel_effect=="effect_sepia"){a="Sepia"}
	if(sel_effect=="effect_gray"){a="Grayscale"}
	$("#previewEffects").html(a);
	var b=getPrice();
	if (document.getElementById("proofId").checked){
		b+=parseInt(document.getElementById("proofId").value);
	}
	b="&pound;"+b;
	$("#previewPrice").html(b);
	$("#previewWidth").html(getWWText());$("#previewHeight").html(getHHText());
	showCanvas();
}

function formatFilename(filename){
	var idx=filename.indexOf("uploads/");
	if (idx!= -1) filename=filename.substring(idx+8);
	idx=filename.indexOf(".jpg.jpg");
	if (idx!= -1) filename=filename.substring(0, idx+4);
	return filename;
}

var tid=null;function uploadProgress(){if(tid!=null){clearTimeout(tid)}var a=document.getElementById("uploadMsg").innerHTML;if(a.length>=50){a="Image uploading"}document.getElementById("uploadMsg").innerHTML=a+".";tid=setTimeout("uploadProgress()",50)}function startUpload(){document.getElementById("uploadMsg").innerHTML="Image uploading";document.getElementById("uploadMsg").style.display="";uploadProgress();return true}function endUpload(){document.getElementById("uploadMsg").style.display="none"}var imgList=new Array();var imgFilename=null;var rotateAngle=0;var ImageData={filename:null,origW:0,origH:0,thumbW:0,thumbH:0,zoom:0};
function fImageAdd(b){
	var a=imgList[b];
	uploadCompleted(a,true)
}
function addImage(a,f){endUpload();fncUpload();if(f==undefined||f==""){return}var d=imgList.length;imgList[imgList.length]=a;var b=document.getElementById("uploadedImages");var e="upload"+imgList.length;var c="<div id='"+e+"' style='text-align:center;display:inline-block;width:100%;float:left'><img onclick='fImageAdd(\""+d+"\")' src='"+f+"' style='height:40px;cursor:pointer'/></div>";b.innerHTML=b.innerHTML+"<td>"+c+"</td>"}

var origImageW=0;
var origImageH=0;

function doUploadCompletedMain(d){

	$(".mainProductRows").hide();
	$("#uploadMainId").hide();
	$("#uploadMainId0").show();
	
	$("#uploadMainPreviewId").show();
	
	var b=d.indexOf("|");
	var filename=d.substring(b+1);
	var f=d.substring(0,b);
	b=f.indexOf("x");
	var width=parseInt(f.substring(0,b));
	var height=parseInt(f.substring(b+1));

  doShowWait("mainPreview");

	document.getElementById("mainPreview").src=getURL("getimg",filename);
	
	var filename1 = formatFilename(filename);
	$("#mainFilename").html(filename1);
	$("#mainWidth").html(width);
	$("#mainHeight").html(height);
	
	var frameWidth=width/72
	var frameHeight=height/72;
	
	frameWidth=parseInt(frameWidth);
	frameHeight=parseInt(frameHeight);
	
	frameWidth=Math.round(frameWidth);
	frameHeight=Math.round(frameHeight);

	if (sel_product=="p_canvas"){
		frameWidth-=3;
		frameHeight-=3;
	}
	
	if (frameWidth%2 != 0){
		frameWidth--;
	}
	if (frameHeight%2 != 0){
		frameHeight--;
	}

	if (frameWidth<6)frameWidth=6;
	if (frameWidth>60 && frameWidth<72)frameWidth=60;
	if (frameWidth>72)frameWidth=72;
	if (frameHeight<6)frameHeight=6;
	if (frameHeight>60 && frameHeight<72)frameHeight=60;
	if (frameHeight>72)frameHeight=72;
	if (frameHeight>40 && frameWidth>40){
    if (frameWidth>=frameHeight) frameHeight=40;
    else frameWidth=40;
  }
	
	var sizeRecomended=frameWidth+"\"" + " x " + frameHeight+"\"" + "/" + (frameWidth*2.5)+"cm" + " x " + (frameHeight*2.5)+"cm";
	$("#mainRecomended").html(sizeRecomended);

	setDefault(); 

	setWW(frameWidth);
	setHH(frameHeight);
	$("#depth").val("1.5");
	
	ImageData.filename=filename;
	ImageData.origW=width;
	ImageData.origH=height;
}

function uploadCompleted(d,g){
	if("error"==d){alert("Some error occured. Please try again");return}
	document.getElementById("uploadedImages").style.display="block";
	var b=d.indexOf("|");
	var filename=d.substring(b+1);
	var f=d.substring(0,b);
	b=f.indexOf("x");
	var c=parseInt(f.substring(0,b));
	var e=parseInt(f.substring(b+1));
	if(g==undefined){
		addImage(d,filename)
	}
	doFinishUpload(filename,c,e);
}
function doFinishUpload(filename, c, e){
	imageCrop=false;
	imageOk=true;
	document.getElementById("imageSize").innerHTML="The image you uploaded is "+c+" by "+e + "";
	origImageW=c;
	origImageH=e;
	fromUpload=true;
	imgFilename=filename;
	newText="";
	imageLoading=false;
	rotateAngle=0;
	ImageData.filename=filename;
	ImageData.origW=c;
	ImageData.origH=e;
	var a=c;
	if(a<e){a=e}
	ImageData.thumbW=(IMAGE_SIZE*c)/a;
	ImageData.thumbH=(IMAGE_SIZE*e)/a;
	keepImageSize=false;
	
	rotateAngle=0;
	imageEffect="normal";
	isFlip=false;
	var a=buildURL("effect");
	
	loadPreviewImage(a);
}
	
var imageLoading=false;var img1=null;var keepImageSize=false;

function loadPreviewImage(a,fRotate){
	if(imageLoading){return}
	imageLoading=true;
	if(fRotate==undefined){
    isRotate=false;
		if(!keepImageSize){
			$("#zoomimage").css({width:ImageData.thumbW+"px",height:ImageData.thumbH+"px"})
		}
	}else{
		newWidth=$("#zoomimage").width();
		newHeight=$("#zoomimage").height();
		isRotate=true
	}
	if(img1==null){
		img1=new Image();
		img1.id="zoomimage";
		img1.onload=function(){imageLoadFinished()};img1.src=a;$("#imgPlace").html("");$("#imgPlace").append(img1);
	}else{img1.src=a}
	if(!keepImageSize){
		zoomLevel=100;prevPos=200;$("#slider").slider("value",prevPos)
	}
}

function imageLoadFinished(){
	imageLoading=false;


	if(isRotate){
		$("#zoomimage").css({width:newHeight+"px",height:newWidth+"px"});
		var aux=ImageData.thumbW;
		ImageData.thumbW=ImageData.thumbH;
		ImageData.thumbH=aux;
	}
	doShowFrame();
	
	if(!keepImageSize){
	   doInitPositionImage1();
	} else {
		//doInitPositionImage1();
	}

	setTimeout("initDrag();",1000);  
	if (isMirror) {doShowMirror();}
}

var dragStart1=false;

	
var isRotate=false;var newWidth;var newHeight;
function doRotate(b){
	if(imageLoading){return}
	keepImageSize=false;
	rotateAngle+=b;
	if(rotateAngle==360){rotateAngle=0}
	if (rotateAngle<0){
		rotateAngle=360+b;
	}
	var a=buildURL("rotate");
	loadPreviewImage(a,true)
}
var imageEffect="";

function doSetEffect(b){
	if(imageLoading){return}
	keepImageSize=true;
	if(b=="effect_normal"){imageEffect="normal"}
	if(b=="effect_sepia"){imageEffect="sepia"}
	if(b=="effect_gray"){imageEffect="gray"}
	var a=buildURL("effect");
	loadPreviewImage(a)
}

var isFlip=false;
function doFlip(){
	if(imageLoading){return}
	keepImageSize=true;
	isFlip=!isFlip;
	var a=buildURL("flip");
	loadPreviewImage(a)
}

function getURL(b, imgFilename){var c="action="+b;c+="&time="+(new Date()).getTime();c+="&img="+imgFilename;var a=URL+"fileAdmin1.php?"+c;return a};
function buildURL(b){var c="action="+b;c+="&time="+(new Date()).getTime();c+="&img="+imgFilename;c+="&isFlip="+isFlip;c+="&angle="+rotateAngle;c+="&effect="+imageEffect;var a=URL+"fileAdmin1.php?"+c;return a}var zoomLevel=100;var prevPos=200;

function getDepth(){
	if(sel_product=="p_canvas"){
		var b=$("#depth").val();
		return b;
	}
	return 0;
}

var PRICE1=0;
var PRICE2=0;
function doShowPrice1(r,x){
	var area = r*x;

	var idx=Price.SIZE.length-1;
	for(var i=0;i<Price.SIZE.length;i++){
		if (parseInt(Price.SIZE[i])>area){
			idx=i;
			break;
		}
	}

	var itemPrice1=0;
	var itemPrice2=0;
	
	if(sel_product=="p_canvas"){
		itemPrice1=Price.POLYCOTON_CANVAS[idx];
		itemPrice2=Price.CHROMATA_CANVAS[idx];
	} else {
		itemPrice1=Price.POLYCOTON_ROLLED[idx];
		itemPrice2=Price.CHROMATA_ROLLED[idx];
	}
	
	var price1=0;
	var price2=0;

	if (itemPrice1<=0){
		price1=doGetNewPrice(area, "normal", sel_product);
	} else {
		price1=area*itemPrice1;
		price1=Math.round(price1);
		price1=parseInt(price1);
	}
	if (itemPrice2<=0){
		price2=doGetNewPrice(area, "premium", sel_product);
	} else {
		price2=area*itemPrice2;
		price2=Math.round(price2);
		price2=parseInt(price2);
	}
	
	priceOffset = Price.priceOffset;
	price1+=price1*priceOffset/100;
	price1=Math.round(price1);
//	price1=intval(price1);

	price2+=price2*priceOffset/100;
	price2=Math.round(price2);
//	price2=intval(price2);

/*	
	var price1=area*itemPrice1;
	var price2=area*itemPrice2;

	price1=Math.round(price1);
	price2=Math.round(price2);
	price1=parseInt(price1);
	price2=parseInt(price2);
*/

	PRICE1=price1;
	PRICE2=price2;


	//$("#price1").html(price1);
	//$("#price2").html(price2);

  setPrice();
}

function doGetNewPrice(area, quality, type){
	if (type!="canvas"&&type!="p_canvas") type="rolled";
	premiumCanvas = Price.premiumCanvas;
	standardRolled = Price.standardRolled;
	premiumRolled = Price.premiumRolled;
//	$standardRolled = getDbPriceHavingSession("standardRolled", -25);
//	$premiumRolled = getDbPriceHavingSession("premiumRolled", -25);

	y=1.635*Math.pow(area, 0.591);
	if (quality=="premium"){
		y+=y*premiumCanvas/100;
	}
	if (type=="rolled"){
		var price=standardRolled;
		if (quality=="premium") price=premiumRolled;
		y+=y*price/100;
	}
	return y;
}

var isMirror=false;var mirrorLeft=null;var mirrorRight=null;var mirrorTop=null;var mirrorBottom=null;
var crtEdge="";

function setEdge(a){
	if (crtEdge != a){
		if (crtEdge == "edge_wrap" || a == "edge_wrap"){
			doInitPositionImage1(a);
		}
	}
	crtEdge=a;
	if(isMirror&&a!="edge_mirror"){doHideMirror()}
	if(a=="edge_white"){
    setEdgeColor("#ffffff",1);
    $("#edgePlace").css({"background-color":'lightgray'});
    $("#lefttop").css({"background-color":'lightgray'});
  	$("#leftbottom").css({"background-color":'lightgray'});
  	$("#righttop").css({"background-color":'lightgray'});
  	$("#rightbottom").css({"background-color":'lightgray'});
  } else {
      $("#edgePlace").css({"background-color":'white'});
    $("#lefttop").css({"background-color":'white'});
  	$("#leftbottom").css({"background-color":'white'});
  	$("#righttop").css({"background-color":'white'});
  	$("#rightbottom").css({"background-color":'white'});

  }
	if(a=="edge_black"){setEdgeColor("#000000",1)}
	if(a=="edge_mirror"){setEdgeColor("lightblue",0.5);doShowMirror()}
	if(a=="edge_wrap"){setEdgeColor("lightblue",0.5)}
	if(a=="edge_color"){
		doShowColorPick();
	} else {
		doHideColorPick();
	}
}

	
function setEdgeColor(a,b){$("#margintop").css({"background-color":a,opacity:b});$("#marginbottom").css({"background-color":a,opacity:b});$("#marginleft").css({"background-color":a,opacity:b});$("#marginright").css({"background-color":a,opacity:b})}

function as2jsColorChoosed(b){b=parseInt(b);if(b<0){b=4294967295+b+1}var a=b.toString(16);while(a.length<6){a="0"+a}var a="#"+a;setEdgeColor(a,1);doHideColorPicker()}
function as2jsColorChanged(b){b=parseInt(b);if(b<0){b=4294967295+b+1}var a=b.toString(16);while(a.length<6){a="0"+a}var a="#"+a;setEdgeColor(a,1)}
function imageChanged(){if(document.astest.sendTextToFlash==undefined){return}}

function setCmUnitType(){updateSize("width"," cm",2.5);updateSize("height"," cm",2.5);updateSelect("depth",inchDepth," cm",2.5);$("#sofaSize").html("200cm");updateEditSize(1);}
function setInchUnitType(){updateSize("width",'"',1);updateSize("height",'"',1);updateSelect("depth",inchDepth,'"',1);$("#sofaSize").html(200/2.5+'"');updateEditSize(0);}
function updateEditSize(type){
	var w=$("#width1").val();
	w=parseFloat(w);
	var h=$("#height1").val();
	h=parseFloat(h);
	if (w==undefined || isNaN(w)){
		w=$("#width").val();
		if (type==0) w*=2.5;
	}
	if (h==undefined || isNaN(h)){
		h=$("#height").val();
		if (type==0) h*=2.5;
	}
	
	if (type==1){
		w=w*2.5;
		h=h*2.5;
	} else {
		w=w/2.5;
		h=h/2.5;
	}
	$("#width1").val(w);
	$("#height1").val(h);
}


function updateSize(f,g,d){
	var c=document.getElementById(f);
	var b=c.selectedIndex;
	if(b==-1){b=0}
	c.options.length=0;
	for(var a=0;a<inchNormalSize.length;a++){var h=inchNormalSize[a];var e=(h*d)+g;c.options[a]=new Option(e,h)}
	//if(("width"==f&&document.getElementById("landscape").checked)||("height"==f&&document.getElementById("portrait").checked)){
		var inchLargeSize=inchLargeSize15;
		var depth=getDepth();
		if (depth == ""+0.7){
			inchLargeSize=inchLargeSize07;
		} else if (depth == ""+1.5){
			inchLargeSize=inchLargeSize15;
		}
		for(var a=0;a<inchLargeSize.length;a++){
			var h=inchLargeSize[a];
			var e=(h*d)+g;
			c.options[c.options.length]=new Option(e,h)
		}
	//}
	c.selectedIndex=b;
}


function refreshSize(){
	var w=getWW()
	var h=getHH();
	if(document.getElementById("cm_units").checked){
		setCmUnitType();
	}else{
		setInchUnitType();
	}
	var depth=getDepth();
	if (depth == ""+0.7){
		if ((w>50 &&w<60)|| w>60) w=60;
		if ((h>50 &&h<60)|| h>60) h=60;
	}
	setWW(w);
	setHH(h);
}

function updateSelect(f,g,b,d){var i=document.getElementById(f);var e=i.selectedIndex;if(e==-1){e=0}i.options.length=0;for(var h=0;h<g.length;h++){var c=g[h];var a=(g[h]*d)+b;i.options[h]=new Option(a,c)}i.selectedIndex=e}

var sel_orientation='';
function setOrientationType(type){
	if (sel_orientation == type) return;
	sel_orientation = type;
	if (type =="l"){
		document.getElementById("landscape").checked=true;
	}
	if (type =="p"){
		document.getElementById("portrait").checked=true;
	}
	var c=document.getElementById("width");
	var b=document.getElementById("height");
	var a=c.selectedIndex;
	var d=b.selectedIndex;
	if(document.getElementById("cm_units").checked){
		setCmUnitType()
	}else{
		setInchUnitType()
	}
	c.selectedIndex=d;
	b.selectedIndex=a;
	doShowFrame()
}

function setDefault(){
	document.getElementById("inch_units").checked=true;setInchUnitType();
	document.getElementById("standard").checked=true;
	
	$(".imgEdge").parent().removeClass("imgSelected");
	$(".imgEffect").parent().removeClass("imgSelected");
	
	$(".imgEdge").fadeTo("slow",0.5);
	$(".imgEffect").fadeTo("slow",0.5);

  //$("#effect_normal").click();
	//$("#edge_wrap").click();
	
	$("#comments").val(""); 
  isNewImage=true;   
	//setOrientationType('l');
}

function fncUpload(){
	document.getElementById("tdPercentUploaded").innerHTML="";
/*
	if(document.getElementById("uploadArea").style.display=="block"){
		document.getElementById("uploadArea").style.display="none";
		document.getElementById("btnUpload").value="Upload an image"
	}else{
		document.getElementById("uploadArea").style.display="block";
		document.getElementById("btnUpload").value="Hide Upload Tool"
	}
*/
	}
var swfu;
var swfuM;
function initUploadTool(){
	var a={flash_url:"swfupload/swfupload.swf",file_post_name:"file0",upload_url:"fileAdmin1.php?action=uploadf",file_size_limit:"100 MB",file_types:"*.jpg",file_types_description:"Only JPG Files",file_upload_limit:100,file_queue_limit:0,custom_settings:{uploadError:"uploadError",progressTarget:"fsUploadProgress",tdPercentUploaded:"tdPercentUploaded"},debug:false,button_image_url:"images/UploadYourImage160x22_t1.png",button_width:"160",button_height:"24",button_placeholder_id:"spanButtonPlaceHolder",file_queued_handler:fileQueued,file_queue_error_handler:fileQueueError,file_dialog_complete_handler:fileDialogComplete,upload_start_handler:uploadStart,upload_progress_handler:uploadProgress1,upload_error_handler:uploadError,upload_success_handler:uploadSuccess,upload_complete_handler:uploadComplete,queue_complete_handler:queueComplete};
	swfu=new SWFUpload(a);
	
	var aM={flash_url:"swfupload/swfupload.swf",file_post_name:"file0",upload_url:"fileAdmin1.php?action=uploadf",file_size_limit:"100 MB",file_types:"*.jpg",file_types_description:"Only JPG Files",file_upload_limit:100,file_queue_limit:0,custom_settings:{uploadError:"uploadErrorM",progressTarget:"fsUploadProgressM",tdPercentUploaded:"tdPercentUploadedM"},debug:false,button_image_url:"images/UploadYourImage160x22_t1.png",button_width:"160",button_height:"24",button_placeholder_id:"spanButtonPlaceHolderM",file_queued_handler:fileQueued,file_queue_error_handler:fileQueueError,file_dialog_complete_handler:fileDialogComplete,upload_start_handler:uploadStart,upload_progress_handler:uploadProgress1,upload_error_handler:uploadError,upload_success_handler:uploadSuccess,upload_complete_handler:uploadComplete,queue_complete_handler:queueComplete};
	swfuM=new SWFUpload(aM)
}

var isMainUpload=true;
function doUploadSuccess(a){
	if (true || isMainUpload){
		isMainUpload=false;
		doUploadCompletedMain(a);
		return;
	}
	uploadCompleted(a)
}

function doInitRoom(){
	$("#picker").farbtastic(doRoomColor);
	$("#obj1").draggable();$("#obj2").draggable();
//	$("#objImage").draggable();
	doRoomReset()
}
function doRoomReset(){$("#obj1").css({top:"300px",left:"400px"});$("#obj2").css({top:"400px",left:"550px"});$("#roomPreview").css({"background-color":"#FFE4B5"});$("#color").val("#FFE4B5")}function doRoomColor(a){$("#color").val(a);$("#roomPreview").css({"background-color":a})}function doRoomColor1(){$("#roomPreview").css({"background-color":$("#color").val()})}function setCmUnitType1(){}function setInchUnitType1(){}function doHideRoom(){$("#stepPreview").hide();$("#editImage").show()}var ppt;var ppl;var ppw;var pph;var pit;var pil;var piw;var pih;

function doChangeWH(){
	var w=$("#width1").val();
	w=parseFloat(w);
	var h=$("#height1").val();
	h=parseFloat(h);
	if (w==undefined || isNaN(w)){
		w=$("#width").val();
	}
	if (h==undefined || isNaN(h)){
		h=$("#height").val();
	}
	
	if (w<1) w=1;
	if (h<1) h=1;
	if ((w>40 && h>40 && !document.getElementById("cm_units").checked) || (w>40*2.5 && h>40*2.5 && document.getElementById("cm_units").checked)) {
		if (document.getElementById("cm_units").checked) {
			alert('Only one size can be over 100cm. You can rotate the image if you need different orientation');
			w=40*2.5;
		} else {
			alert('Only one size can be over 40". You can rotate the image if you need different orientation');
			w=40;
		}
	} 
	
	$("#width1").val(w);
	$("#height1").val(h);
	
	doShowFrame(true);
	
	doInitPositionImage1('');
	
	doMirror();
}

function doChangeSize(elId,dir){
  var otherId='#width';
  if (elId=='width') otherId='#height';
  var otherEl = document.getElementById(otherId);
	var el = document.getElementById(elId);
	var idx = el.selectedIndex;

 	idx+=dir;
	if (idx<0 || idx >= el.options.length) return;

  if (($(otherId).val() > 40)&&(el.options[idx].value > 40)){
    alert('Only one size can be over 40". You can rotate the image if you need different orientation');
    $(el).val(40);
    return;
  }
  
	el.selectedIndex=idx;
	
	if (document.getElementById("cm_units").checked) {
		$("#width1").val(parseInt($("#width").val())*2.5);
		$("#height1").val(parseInt($("#height").val())*2.5);
	} else {
		$("#width1").val($("#width").val());
		$("#height1").val($("#height").val());
	}

	
	doShowFrame(true);
	
	doInitPositionImage1('');
	
	doMirror();
}
function doChangeSizeD(elId,dir){
  var otherId='width';
	var el = document.getElementById(elId);
	var idx = el.selectedIndex;
	idx+=dir;
	if (idx<0 || idx >= el.options.length) return;
	el.selectedIndex=idx;
//	doShowFrame();
//	refreshSize();
	
	doShowFrame();
	refreshSize();
	doInitPositionImage1('');
	
	doMirror();
}

function setPrice(){
  var mainPrice=PRICE2;
 	if(document.getElementById("standard").checked){
	 mainPrice=PRICE1;
  }
  
  mainPrice = "&pound;" + mainPrice;
	$("#mainPriceId").html(mainPrice);
}
function getPrice(){
  var mainPrice=PRICE2;
 	if(document.getElementById("standard").checked){
	 mainPrice=PRICE1;
  }
	return mainPrice;
}

function getDepthNo(){
	if (sel_product!="p_canvas") return 0;
	var selD=$("#depth").val();
	if (selD=="1.5") selD=1.5+0.5; else if (selD=="0.7") selD=0.7+0.5;
	return selD;
}
function doInitPositionImage(){
  var selW=getWW();
  var selH=getHH();
  var selD=getDepthNo();
  //420...selW+2*selD/x....selD
  
  selW=parseInt(selW);
  selH=parseInt(selH);
  
  //selD=parseInt(selD);
  
  var selSize=selW;
  if  (ImageData.thumbW < ImageData.thumbH) selSize=selH;
  var padPos = 420*selD/(selSize+2*selD);
  
  //420 ....selW+2*selD/x....selW
  var selMax=420*selSize/(selSize+2*selD);
  var fitW=20;
  var fitH=30;  

  if  (ImageData.thumbW < ImageData.thumbH){
    fitH=selMax;
    fitW=selMax*ImageData.thumbW/ImageData.thumbH;
  } else {
    fitW=selMax;
    fitH=selMax*ImageData.thumbH/ImageData.thumbW;
  }
  //$("#zoomimage").css({width:fitW+"px", height:fitH+"px"});
  
  if(sel_product!="p_canvas"){
    $("#zoomimage").css({top:0+"px",left:0+"px"});
  } else{
    $("#zoomimage").css({top:padPos+"px",left:padPos+"px",width:fitW+"px", height:fitH+"px"});
  }
}

function doQualityUpdate(){
	var crtImageWidth=$("#zoomimage").width();
	var crtImageHeight=$("#zoomimage").height();

	//var selD=getDepthNo();

	var selWidth=getWW();
	var selHeight=getHH();
	selWidth=parseInt(selWidth);
	selHeight=parseInt(selHeight);
//	selWidth+=depth*2;
//	selHeight+=depth*2;

	var oiW=origImageW;
	var oiH=origImageH;
	var f=oiW/selWidth;var c=oiH/selHeight;
	if (rotateAngle==90||rotateAngle==270){
		f=oiW/selHeight;var c=oiH/selWidth;
	}
	var b=f;
	if(c<f){b=c}
	
	oiTW=ImageData.thumbW;
	oiTW=$("#margintop").width();
	oiTH=$("#marginleft").height();
	
	var origWH=oiW;
	if (rotateAngle==90||rotateAngle==270){
		origWH=oiH;
	}
	
	var imgViewWidth = (crtImageWidth-(crtImageWidth-oiTW));
	b=(origWH*imgViewWidth/crtImageWidth)/selWidth;
	
	var ratio=imgViewWidth/oiTW;
	if (rotateAngle==90||rotateAngle==270){
		//ratio=crtImageHeight/oiTW;
		//ratio=crtImageWidth/oiTH;
	}
	var b=b/ratio;
	if(b>150){b=150}
	if(b<0){b=0}
	b=Math.round(b);
	if(b<52){$("#qualityWarning").show()}
	else{$("#qualityWarning").hide()}
	if (parseInt(b) >=150){
		$("#qa").html("Image Quality>150");
	} else {
		$("#qa").html("Image Quality:"+parseInt(b));
	}
	b*=2;
	$("#qa").css({"margin-left":b+"px"})
}

function doShowRoom(){
		var m=$("#zoomimage").position();
		var s=$("#zoomimage").width();
		var p=$("#zoomimage").height();
		var t=$("#imgPlace").position();
		var b=$("#imgPlace").width();
		var oiTH=$("#margintop").height();

		
		
	var cx=0;
	var cy=0;

	var oiTL=$("#marginleft").width();
	cy=parseInt(m.top-(t.top+oiTH));
	cx=parseInt(m.left-(t.left+oiTL));
	
	var cw=$("#margintop").width();
	var ch=$("#marginleft").height();
	var rw=$("#zoomimage").width();
	var rh=$("#zoomimage").height();
	
		
	OrderData.cx=cx;
	OrderData.cy=cy;
	OrderData.cw=cw;
	OrderData.ch=ch;
	OrderData.rw=rw;
	OrderData.rh=rh;
		
		
	$("#stepSummary").hide();	
	$("#editImage").hide();
	$("#stepPreview").show();
	
	doShowWait('stepPreview');
	
	var l=getWW();var r=getHH();
	var k=$("#obj2").width()-15;
	var f=k/80;var d=l*f;var o=r*f;
	var a=$("#obj2").position();
	
	var paddingTop = (a.top-$("#roomPreview").position().top-o)/2
	
	var n=a.left+(k-d)/2;var g=a.top-o;//-50;
	
	g=g-paddingTop;
	
	$("#objImage").css({top:g+"px",left:n+"px",width:d+"px",height:o+"px"});
	ppt=g;ppl=n;ppw=d;pph=o;

	$("#roomImage").hide();
	
	if(imgFilename!=null){
	 var newImg = imgFilename;
	 if (newImg.indexOf(".jpg.jpg.jpg") == -1) newImg+=".jpg";
		newImg+="?time="+(new Date()).getTime();
		document.getElementById("roomImage").src=newImg;
		var tleft=t.left;
		var ttop=t.top;

		var selD=getDepthNo();
		if (selD >0){
			
			tleft+=oiTH;
			ttop+=oiTH;
			b-=2*oiTH;
		}
		/*
		var imageSize=IMAGE_SIZE;
		var frameDepth=getDepth();
		var imgPlaceWidth=$("#width").val();
		var imgPlaceHeight=$("#height").val();

		imgPlaceWidth=parseInt(imgPlaceWidth);
		imgPlaceHeight=parseInt(imgPlaceHeight);

		var ratio=1;
		if(imgPlaceWidth>imgPlaceHeight){ratio=imageSize/imgPlaceWidth}else{ratio=imageSize/imgPlaceHeight}
		frameDepth*=ratio;
		
		tleft+=frameDepth;
		ttop+=frameDepth;
		*/
		var q=b/d;
		var j=s/q;
		var i=p/q;
		var e=(-tleft+m.left)/q;
		var c=(-ttop+m.top)/q;
		
//		c+=-frameWidth;
//		e+=-frameWidth;
		$("#roomImage").css({top:c+"px",left:e+"px",width:j+"px",height:i+"px"});
		pit=c;pil=e;piw=j;pih=i
	}
	if(sel_product!="p_canvas"){
		//$("#objImage").css({"border-bottom-width":"thin","border-right-width":"thin"})
	}else{
		//$("#objImage").css({"border-bottom-width":"normal","border-right-width":"normal"})
		$("#objImage").removeShadow()
		$("#objImage").dropShadow();
		//$("#objImage").redrawShadow();
	}
	$("#previewWidth1").html(getWWText());$("#previewHeight1").html(getHHText())
}


function doPreviewLoadEnd(){
	doHideWait();
	$("#roomImage").show();
}




function doShowFrame(keepRatio){
	var s=0;
	var d=IMAGE_SIZE;
	var b=getDepthNo();
	
	if (b==null || b==undefined)return;
	
	//if(b==0.7){s=0.7}else{s=1.5}
	s=b;
	var r=getWW();
	var x=getHH();

	r=parseInt(r);
	x=parseInt(x);

  doShowPrice1(r,x);
	
	r+=s*2;
	x+=s*2;

	var j=1;
	if(r>x){j=d/r}else{j=d/x}
	var f=r*j;
	var o=x*j;
	$("#imgPlace").css({width:f+"px",height:o+"px"});
	
	var i=$("#zoomimage").width();
	var e=$("#zoomimage").height();
	s=s*j;
	var q=s;
	
	var k=$("#imgPlace").position();
	var n=$("#imgPlace").width();
	var t=$("#imgPlace").height();
	var g=k.left;
	var p=k.top;
	var l=p+t-q;
	var v=g+n-s;
	var m=g+s;
	var a=n-2*s;
	var u=p+q;
	var c=t-2*q;
/*
	g=Math.round(g);
	p=Math.round(p);
	s=Math.round(s)+1;
	q=Math.round(q);
	l=Math.round(l);
	v=Math.round(v);
*/
	$("#lefttop").css({left:g+"px",top:p+"px",width:s+"px",height:q+"px"});
	$("#leftbottom").css({left:g+"px",top:l+"px",width:s+"px",height:(q+1)+"px"});
	$("#righttop").css({left:v+"px",top:p+"px",width:(s+1)+"px",height:q+"px"});
	$("#rightbottom").css({left:v+"px",top:l+"px",width:(s+1)+"px",height:(q+1)+"px"});
	$("#margintop").css({left:m+"px",top:p+"px",width:a+"px",height:q+"px"});
	$("#marginbottom").css({left:m+"px",top:l+"px",width:a+"px",height:(q+1)+"px"});
	$("#marginleft").css({left:g+"px",top:u+"px",width:s+"px",height:c+"px"});
	$("#marginright").css({left:v+"px",top:u+"px",width:(s+1)+"px",height:c+"px"});
	
	doQualityUpdate();
	doMirror();
}



function doInitPositionImage1(edgeType){
	if (edgeType =="" || edgeType==undefined) edgeType=crtEdge;
	var fitBorder = edgeType == "edge_wrap";
	
  var selW=getWW();
  var selH=getHH();
  var selD=getDepthNo();
  
  if (fitBorder) selD=0;
  //420...selW+2*selD/x....selD
  
  selW=parseInt(selW);
  selH=parseInt(selH);
  
  //selD=parseInt(selD);
  
  var selSize=selW;
  if  (ImageData.thumbW < ImageData.thumbH) selSize=selH;
  var padPos = 420*selD/(selSize+2*selD);
  
  //420 ....selW+2*selD/x....selW
  var selMax=420*selSize/(selSize+2*selD);
  var fitW=20;
  var fitH=30;  

  var ratio=1;
  if  (ImageData.thumbW < ImageData.thumbH){
    fitH=selMax;
    fitW=selMax*ImageData.thumbW/ImageData.thumbH;
	ratio=ImageData.thumbH/ImageData.thumbW;
  } else {
    fitW=selMax;
    fitH=selMax*ImageData.thumbH/ImageData.thumbW;
	ratio=ImageData.thumbW/ImageData.thumbH;
  }
  
  if (selD != 0){
	padPos = $("#marginleft").width();
  }
  
  var minW=$("#imgPlace").width()-2*padPos;
  var minH=$("#imgPlace").height()-2*padPos;
  if (fitW<minW){
	var r=minW/fitW;
	fitH*=r;
	fitW=minW;
  }
  if (fitH<minH){
	var r=minH/fitH;
	fitW*=r;
	fitH=minH;
  }
  //$("#zoomimage").css({width:fitW+"px", height:fitH+"px"});
  
  //padPos=Math.round(padPos);
  
  var lp=(fitW-minW)/2;
  var tp=(fitH-minH)/2;
  
  lp=padPos-lp;
  tp=padPos-tp;
 /* 
  fitW=Math.round(fitW);
  fitH=Math.round(fitH);
 */
  if(sel_product!="p_canvas"){
    $("#zoomimage").css({top:tp+"px",left:lp+"px",width:fitW+"px", height:fitH+"px"});
  } else{
    $("#zoomimage").css({top:tp+"px",left:lp+"px",width:fitW+"px", height:fitH+"px"});
  }
  
  doQualityUpdate();
}


function doZoomIn(){
	var a=$("#slider").slider("value");
	a=a+10;
	if(a>600){return}
	doUpdateZoom(a,1)
}
function doZoomOut(){
	var a=$("#slider").slider("value");
	a=a-10;
	if(a<0){return}
	doUpdateZoom(a,-1)
}
function doUpdateZoom(h,d){
	var aaa=h;
	if(imgFilename==null){return false}
	
	ImageData.zoom=h;
	var hhh=h;
	var e=h-prevPos;var c=10;
	if(d!=undefined){h=d}else{h=e;c=100}
	var f=$("#zoomimage").width();var b=$("#zoomimage").height();
	var g=ImageData.thumbW/c;var a=ImageData.thumbH/c;
	f+=g*h/2;b+=a*h/2;
	
	var selD=getDepthNo();
  
	var fitBorder = crtEdge == "edge_wrap";
	if (fitBorder) selD=0;
	var padPos=0;
	if (selD != 0){
		padPos = $("#marginleft").width();
	}
	  
	var minW=$("#imgPlace").width()-2*padPos;
	var minH=$("#imgPlace").height()-2*padPos;
	if (f<minW) {
		$("#slider").slider("value",prevPos);
		return false;
	}
	if (b<minH){
		$("#slider").slider("value",prevPos);
		return false;
	}

	
	prevPos=hhh;
	$("#slider").slider("value",aaa);
	$("#zoomimage").css({width:f+"px",height:b+"px"});
	
	
	if (d<0){
		$("#zoomimage").css({left:padPos+"px", top:padPos+"px"});
		var ip=$("#zoomimage").position();
		if (ip.left+f<padPos+minW){
			
		}
	}
	
	doQualityUpdate();doMirror();
	
	return true;
}

function getMinImageArea(){
	var selD=getDepthNo();
  
	var fitBorder = crtEdge == "edge_wrap";
	if (fitBorder) selD=0;
	var padPos=0;
	if (selD != 0){
		padPos = $("#marginleft").width();
	}
	var minW=$("#imgPlace").width()-2*padPos;
	var minH=$("#imgPlace").height()-2*padPos;
	return {w:minW,h:minH}
}

var minDragLeft=0;
function initDrag(){
	$("#zoomimage").draggable({
		drag:function(f,ui){
			var left=ui.position.left;var top=ui.position.top;

			var selD=getDepthNo();
		  
			var fitBorder = crtEdge == "edge_wrap";
			if (fitBorder) selD=0;
			var padPos=0;
			if (selD != 0){
				padPos = $("#marginleft").width();
			}
			  
			var minW=$("#imgPlace").width()-2*padPos;
			var minH=$("#imgPlace").height()-2*padPos;

			if (left>padPos){
				ui.position.left=padPos;
			}
			if (top>padPos){
				ui.position.top=padPos;
			}
			
			
			var iw=$("#zoomimage").width();
			var offsetW=padPos-left;
			
			if (offsetW+minW>iw){
				ui.position.left=padPos-(iw-minW);
			}
			
			var ih=$("#zoomimage").height();
			var offsetH=padPos-top;
			
			if (offsetH+minH>ih){
				ui.position.top=padPos-(ih-minH);
			}
			/*
			if (iw-minW<left+padPos){
				ui.position.left=left+padPos;
			}
			*/
			
			
			var e=$("#imgPlace").width();
			var a=$("#zoomimage").height();var c=$("#imgPlace").height();doMirror();
			//doColorPicker(g);
		},
		start: function(event, ui) { 
			dragStart1=true;
			
			//$("#edgePlace").css({"overflow":"visible"});
			//$("#imgPlace").css({"overflow":"visible"});
			//$("#zoomimage").fadeTo(0,0.5);
		},
		stop: function(event, ui) {
			dragStart1=false;
			
			//$("#edgePlace").css({"overflow":"hidden"});
			//$("#imgPlace").css({"overflow":"hidden"});
			//$("#zoomimage").fadeTo(400,1);
		}
	});
	
	//$("#effect_normal").click();
	if (isNewImage){
	 $("#edge_wrap").click();
	 isNewImage=false;
	}
	if (editEffect != ""){
    setTimeout(editEffect, 100);
    editEffect="";
  }
}

var isNewImage=false;

function doShowWait(mainId){
	if (mainId != undefined){
		mainId="#"+mainId;
		var p=$(mainId).position();
		var l=p.left+($(mainId).width()/2)-$("#loadingId").width()/2;
		var t=p.top+($(mainId).height()/2)-$("#loadingId").height()/2;
		$("#loadingId").css({
			left:l+"px",
			top:t+"px"
		});
	}
	$("#loadingId").show();
}
function doHideWait(){
	$("#loadingId").hide();
}

var OrderData={
	cx:0,
	cy:0,
	cw:0,
	ch:0,
	rw:0,
	rh:0
}
function doPlaceOrder(){
	doShowWait();

	$("#orderWidth").val(getWW());
	$("#orderHeight").val(getHH());
	$("#orderDepth").val(getDepth());
	$("#orderEffect").val(imageEffect);
	
	if (getDepth() == ""+0) crtEdge="";
	if (crtEdge=="edge_color") crtEdge += ":"+colorPickColor;
	$("#orderEdge").val(crtEdge);
	$("#orderCanvas").val(sel_product);
	
	var canvasType = "premium";
	if(document.getElementById("standard").checked){
		canvasType="standard";
	}
	$("#orderCanvasType").val(canvasType);
	
	$("#orderImage").val(imgFilename);
	$("#orderPrice").val(getPrice());
	
	var ordProofVal = 0;
	if (document.getElementById("proofId").checked) ordProofVal = document.getElementById("proofId").value;
	$("#orderProof").val(ordProofVal);
	
	$("#orderX").val(OrderData.cx);
	$("#orderY").val(OrderData.cy);
	$("#orderW").val(OrderData.cw);
	$("#orderH").val(OrderData.ch);
	$("#orderRH").val(OrderData.rh);
	$("#orderRW").val(OrderData.rw);
	
	$("#orderComments").val($("#comments").val());
	
	$("#editId").val(EditEl.id);

	showMsg=false;
	document.getElementById("frmOrder").submit();
}

var showMsg=true
function showWarning(){
	if (showMsg)
    return "Are you sure you want to leave the page ? You will loose all your changes";
}

function doMainPreviewLoadEnd(){
	doHideWait();
}

function showCanvas(){
  var a="#objImage1";
  var c="roomImage1";
  var b=2;$(a).css({top:ppt*b+"px",left:ppl*b+"px",width:ppw*b+"px",height:pph*b+"px"});
  
  doShowWait('objImage1');
  
  if(imgFilename!=null){
    var newImg = imgFilename;
	 if (newImg.indexOf(".jpg.jpg.jpg") == -1) newImg+=".jpg";
	 newImg+="?time="+(new Date()).getTime();
    document.getElementById(c).src=newImg;
    $("#"+c).css({top:pit*b+"px",left:pil*b+"px",width:piw*b+"px",height:pih*b+"px"})
  }
  /*
 if(sel_product!="p_canvas"){$(a).css({"border-bottom-width":"thin","border-right-width":"thin"})}else{$(a).css({"border-bottom-width":"normal","border-right-width":"normal"})}
*/  
  };

function getWW(){
	if(sel_product=="p_canvas")	return $("#width").val();
	else if(document.getElementById("cm_units").checked) return $("#width1").val()/2.5; else return $("#width1").val();
}
function getWWText(){
	if(sel_product=="p_canvas")	return $("#width option:selected").text();
	else return $("#width1").val();
}	
function setWW(w){
	$("#width").val(w);
	$("#width1").val(w);
}
function getHH(){
	if(sel_product=="p_canvas")	return $("#height").val();
	else if(document.getElementById("cm_units").checked) return $("#height1").val()/2.5; else return $("#height1").val();
}
function getHHText(){
	if(sel_product=="p_canvas")	return $("#height option:selected").text();
	else return $("#height1").val();
}	
function setHH(h){
	$("#height").val(h);
	$("#height1").val(h);
}