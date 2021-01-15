<?php
require_once 'constants.php';
  
  session_start();
  $editId=isset($_SESSION['editId'])?$_SESSION['editId']:-1;
  
$priceSteps=array(37, 49, 65, 81, 101, 121, 151,201,301,451,601,801,1001,1101,1201,1501);
$priceSteps=array(37, 49, 65, 81, 101, 121, 201,301,451,601,801,1001,1101,1201,1501,1501);
  
	include "dbcon.php";
	$con = connect();

	$polycoton_canvas = getPrices("polycoton_canvas");
	if (count($polycoton_canvas)==0){
		$polycoton_canvas=array(0.22,0.19,0.16,0.14,0.12,0.095,0.087,0.09,0.09,0.08,0.067);
	}
	
	$chromata_canvas = getPrices("chromata_canvas");
	if (count($chromata_canvas)==0){
		$chromata_canvas=array(0.2992,0.2584,0.2176,0.1904,0.1632,0.1292,0.11832,0.1224,0.1224,0.1088,0.09112);
	}
	
	$polycoton_rolled = getPrices("polycoton_rolled");
	if (count($polycoton_rolled)==0){
		$polycoton_rolled=array(0.165,0.1425,0.12,0.105,0.09,0.07125,0.06525,0.0675,0.0675,0.06,0.05025);
	}
	
	$chromata_rolled = getPrices("chromata_rolled");
	if (count($chromata_rolled)==0){
		$chromata_rolled=array(0.2244,0.1938,0.1632,0.1428,0.1224,0.969,0.08874,0.0918,0.0918,0.0816,0.06834);
	}

	$priceOffset = getDbPriceHavingSession("priceOffset", 0);
	$price40BarOffset = getDbPriceHavingSession("price40BarOffset", 0);
	$price60BarOffset = getDbPriceHavingSession("price60BarOffset", 0);
	$price72BarOffset = getDbPriceHavingSession("price72BarOffset", 0);
	$premiumCanvas = getDbPriceHavingSession("premiumCanvas", 35);
	$standardRolled = getDbPriceHavingSession("standardRolled", -25);
	$premiumRolled = getDbPriceHavingSession("premiumRolled", -25);
	
	$printMedium = getDbPriceHavingSession("printMedium", 40);
	$printHeavy = getDbPriceHavingSession("printHeavy", 15);

	$proofPrice	=getDbPriceHavingSession("proof", 8);
	close($con);
	
/* 
$polycoton_canvas=array(0.22,0.19,0.16,0.14,0.12,0.095,0.087,0.09,0.09,0.08,0.067);
$chromata_canvas=array(0.2992,0.2584,0.2176,0.1904,0.1632,0.1292,0.11832,0.1224,0.1224,0.1088,0.09112);
$polycoton_rolled=array(0.165,0.1425,0.12,0.105,0.09,0.07125,0.06525,0.0675,0.0675,0.06,0.05025);
$chromata_rolled=array(0.2244,0.1938,0.1632,0.1428,0.1224,0.969,0.08874,0.0918,0.0918,0.0816,0.06834);
*/   
$priceStepsJS=getJSArray($priceSteps);
$polycoton_canvasJS=getJSArray($polycoton_canvas);
$chromata_canvasJS=getJSArray($chromata_canvas);
$polycoton_rolledJS=getJSArray($polycoton_rolled);
$chromata_rolledJS=getJSArray($chromata_rolled);

function getJSArray($arr){
  $jsArr="";
  foreach($arr as $s){
    if ($jsArr!="")$jsArr.=",";
    $jsArr.="'$s'";
  }
  return "[" . $jsArr . "]";
}

$minDelivery=getMinShippingDelivery();
if (!isset($minDelivery["min"])){
	$minDelivery["min"]=0;
	$minDelivery["price"]=0;
}
?>
<html>
<head>
	<title>Canvas Photo</title>
	<style>
		.imgSelected #colorPreviewArea{
			display:block;
		}
		#colorPreviewArea{
			display:none;
			float:right;
			width:20px;
			height:20px;
			border:solid 1px black;
			background-color:white;
		}
	</style>
	<script language="javascript">
	var EditEl={
    id:-1,
    img:"",
    orderData:"",
    cx:0,
    cy:0,
    cw:0,
    ch:0,
    rw:0,
    rh:0,
	imgW:800,
	imgH:600,
    size:"",
    effect:"",
    priceType:"",
    edge:"",
	orderProof:0
  }
  
  <?php 
       if ($editId && $editId!=-1){
          include("../includes/connection.php");
          
          $result = mysql_query(" SELECT * FROM tblorders WHERE ID = '".$editId."'");
          $imgName="";
          $iW=0;
          $iH=0;
          $cx=0;
          $cy=0;
          $cw=0;
          $ch=0;
          $orderData="";
          $size="";
          $effect="";
          $priceType="";
		  $orderProof="0";
		      while($row = mysql_fetch_array($result)) {
		        $imgName=$row['name'];
		        $orderData=$row['orderData'];
		        $size=$row['size'];
		        $edge=$row['edge'];
				$orderProof=$row['orderProof'];
		      }
		$imgWidth=0;
		$imgHeight=0;

      $realOrigName=str_replace(".jpg", "-orig.jpg", $imgName);
      $realImg="uploads/" . time() . ".jpg";
      $command="convert $realOrigName $realImg";
      mylog("Prepare Edit(copy real image) $realImg");//: $path$command");
      //exec ("$path$command");
	  copy($realOrigName, $realImg);
	  
	  $path="";
	  $IMAGE_SIZE=420;
	  $previewImg = $realImg . ".jpg";
	  $command="convert \"$realImg\" -scale $IMAGE_SIZE" . "x" . "$IMAGE_SIZE \"$previewImg\"";
	  mylog("Prepare Edit(resize) : " . $command);
	  exec ("$path$command");
	
	  $command="convert \"$previewImg\" \"$previewImg.jpg\"";
	  //mylog("Prepare Edit(copy small) : " . $command);
	  //exec ("$path$command");
	  mylog("Prepare Edit(copy small image) $previewImg.jpg");
	  copy($previewImg, "$previewImg.jpg");


      $imgName=$previewImg;

		if ($imgName != ""){
			$foo = GetImageSize($realImg);
			$imgWidth=$foo[0];
			$imgHeight=$foo[1]; 
		}
		
	   
          $_SESSION['editId']=-1;
          echo "EditEl.id=$editId;";
          echo "EditEl.img='$imgName';";
          echo "EditEl.orderData='$orderData';";
          echo "EditEl.cx='$cx';";
          echo "EditEl.cy='$cy';";
          echo "EditEl.cw='$cw';";
          echo "EditEl.ch='$ch';";
          echo "EditEl.rw='$iW';";
          echo "EditEl.rh='$iH';";
		  echo "EditEl.imgW='$imgWidth';";
		  echo "EditEl.imgH='$imgHeight';";
          echo "EditEl.size='$size';";
          echo "EditEl.effect='$effect';";
          echo "EditEl.priceType='$priceType';";
          echo "EditEl.edge='$edge';";
		  echo "EditEl.orderProof='$orderProof';";
       }
  ?>
	
var Price={
    SIZE:null,
    POLYCOTON_CANVAS:null,
    CHROMATA_CANVAS:null,
    POLYCOTON_ROLLED:null,
    CHROMATA_ROLLED:null,
	price40BarOffset:<?php echo $price40BarOffset;?>,
	price60BarOffset:<?php echo $price60BarOffset;?>,
	price72BarOffset:<?php echo $price72BarOffset;?>,
	priceOffset:<?php echo $priceOffset;?>,
	premiumCanvas:<?php echo $premiumCanvas;?>,
	standardRolled:<?php echo $standardRolled;?>,
	premiumRolled:<?php echo $premiumRolled;?>,
	printMedium:<?php echo $printMedium;?>,
	printHeavy:<?php echo $printHeavy;?>,
	proofPrice:<?php echo $proofPrice;?>,
	minDelivery:{min:<?php echo $minDelivery["min"]?>, price:<?php echo $minDelivery["price"]?>}
}
  Price.SIZE=<?php echo $priceStepsJS ?>;
  Price.POLYCOTON_CANVAS=<?php echo $polycoton_canvasJS ?>;
  Price.CHROMATA_CANVAS=<?php echo $chromata_canvasJS ?>;
  Price.POLYCOTON_ROLLED=<?php echo $polycoton_rolledJS ?>;
  Price.CHROMATA_ROLLED=<?php echo $chromata_rolledJS ?>;
  
  
//  Price.SIZE=['37','49','65','81','101','121','151','201','301','451','601','801','1001','1101','1201','1501'];
//  Price.POLYCOTON_CANVAS=['0.3888','0.3333','0.28125','0.275','0.26','0.2333','0.19','0.16','0.14','0.12','0.095','0.087','0.09','0.09','0.08','0.076'];
//  Price.CHROMATA_CANVAS=['0.5277','0.4583','0.375','0.375','0.35','0.3166','0.2584','0.2176','0.1904','0.1632','0.1292','0.11832','0.1224','0.1224','0.1088','0.104'];
//  Price.POLYCOTON_ROLLED=['0.2777','0.25','0.203125','0.2','0.19','0.175','0.1425','0.12','0.105','0.09','0.07125','0.06525','0.0675','0.0675','0.06','0.057'];
//  Price.CHROMATA_ROLLED=['0.3888','0.3333','0.28125','0.275','0.26','0.2333','0.1938','0.1632','0.1428','0.1224','0.969','0.08874','0.0918','0.0918','0.0816','0.078'];

	</script>

 	<link href="css/default.css" rel="stylesheet" type="text/css"/>
    <link href="css/canvas_mobile.css" rel="stylesheet" type="text/css"/>
     	<link href="css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
        <link href="../templates/illusion/fonts/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css"/>
	<script type="text/javascript" src="swfupload/swfupload.js"></script>
	<script type="text/javascript" src="js/swfupload.queue.js"></script>
	<script type="text/javascript" src="js/fileprogress.js"></script>
	<script type="text/javascript" src="js/handlers.js"></script>

	<link rel="stylesheet" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.1/themes/ui-lightness/jquery-ui.css" type="text/css" media="screen" />
	<script src="js/jquery-1.12.4.min.js"></script>
	<script src="js/jquery-ui.min.js"></script>
	<script src="js/jquery.dropshadow.js"></script>
	
	<script src="js/jquery.simpledialog.0.1.pack.js"></script>
	<link rel="stylesheet" href="js/jquery.simpledialog.0.1.css" type="text/css" />
	
	<script type="text/javascript" src="js/farbtastic.js"></script>
	<link rel="stylesheet" href="js/farbtastic.css" type="text/css" />

	<script language="javascript">
		var IMAGE_SIZE=420;
		var URL = "http://demo.cincistele.com/main/canvasPhoto/";
		URL="";
		//var inchNormalSize = [6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40];
		var inchNormalSize = [];
		var inchLargeSizeStretched15 = [8,10,11,12,13,14,15,16,17,18,19,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,54,58,60,72,76,80,84,90];
		var inchLargeSizeRolled15 = [8,10,11,12,13,14,15,16,17,18,19,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,54,58,60,64,72,76,80,84,90];
		var inchLargeSize15 = inchLargeSizeStretched15;
		//var inchLargeSize07 = [42,44,46,48,50,60];
		var inchLargeSize07 = [8,10,12,14,16,18,20,22,24];
		var inchDepth = [0.7, 1.5];
		var PHPSESSID = "<?php echo session_id(); ?>";
	</script>

	<script type="text/javascript" src="mainO1.js?v=5"></script>
	<link rel="stylesheet" href="mainO1.css" type="text/css" />
	<link rel="stylesheet" href="http://pixelsolz.com/dev/Joomla/templates/illusion/css/custom_style.css" type="text/css" />

	<script type="text/javascript" src="swfobject.js"></script>
	<script type="text/javascript">
		<!-- For version detection, set to min. required Flash Player version, or 0 (or 0.0.0), for no version detection. --> 
		var swfVersionStr = "10.0.0";
		<!-- To use express install, set to playerProductInstall.swf, otherwise the empty string. -->
		var xiSwfUrlStr = "playerProductInstall.swf";
		var flashvars = {};
		var params = {};
		params.quality = "high";
		params.bgcolor = "#ffffff";
		params.allowscriptaccess = "sameDomain";
		params.allowfullscreen = "true";
		var attributes = {};
		attributes.id = "astest";
		attributes.name = "astest";
		attributes.align = "middle";
		swfobject.embedSWF(
			"astest.swf", "flashContent", 
			"100%", "300px", 
			swfVersionStr, xiSwfUrlStr, 
			flashvars, params, attributes);
		<!-- JavaScript enabled so display the flashContent div in case it is not replaced with a swf object. -->
		swfobject.createCSS("#flashContent", "display:block;text-align:left;");
	</script>	

	<style>
		/*.question{
			padding:2px;
			float:right;
		}*/
		
		#colorPalette{
			display:none;
		}
		
	.palette { float: right;  padding: 0; margin: 0; width: 140px; margin-right:5px;}
	.palette li { float: left; padding: 0; margin: 0; list-style: none; width: 20px; height: 20px;}
	.palette li span { display: none; }
	
#spanButtonPlaceHolderMM{
	width:100%;
	position:absolute;
	top:0px;
	left:0px;
}
#spanButtonPlaceHolderMM div{
	position:relative;

	overflow:hidden;
}


	</style>
</head>
<body><!--onbeforeunload="return showWarning();"-->

<div id="step1">
	<div class="steps table-responsive">
		Step 1 of 3 - CHOOSE YOUR PRODUCT
	</div>
    <div class="row">
    <div class="mainProductRows text-center"><h2>Choose Your Product</h2></div></div>
    
    <div class="mainProductRows row timg">
    <div class="pro1 col-sm-6"><img src="images/edge_on.png" alt="STRETCHED CANVAS" name="p_canvas" class="imgOption" id="p_canvas"/>
	  <br/><h2 class="productName">STRETCHED CANVAS</h2></div>
    <div class="pro2 col-sm-6"><img src="images/edge_off.png" alt="ROLLED CANVAS" name="p_rolled" class="imgOption" id="p_rolled"/>
	  <br/><h2 class="productName">ROLLED CANVAS</h2></div>
    <div class="clearfix"></div>
    </div>
    
    
    
    <div id="uploadMainId" style="display:none"> <fieldset>
				<h3 style="display:none;">Image Upload</h3>
				
				<div  class="imageloader" style="position:relative;width:100%;">
					<div id="fsUploadProgressM" style="float:left">
						<span id="tdPercentUploadedM"></span>
					</div>

					<div id="spanButtonPlaceHolderMM">
                     
						<div>
							<form id="uploadForm" action="fileAdmin1.php?action=uploadif" target="_upload" method="post" enctype="multipart/form-data">
								
								<div class="uimgs img-responsive">
                             
                                <div>
                                		<img alt="loader" tabindex="-1" style="display:none;" id="ifu_wait" src="images/ajax-loader1.gif"/>
        <img class="uimgs img-responsive" alt="upload" style="cursor:pointer" src="images/UploadYourImage160x22_t1x1.png"/>
                                
                                <input tabindex="-1" class="btn_style_default" onchange="ifUploadStart(this)" type="file" name="file0">

        
        </div>
                        
									
								</div>
							</form>
							<iframe name="_upload" style="display:none;"></iframe>
						</div>
					</div>
                   
					<div class="uplaodimg1">
                    
						<span id="spanButtonPlaceHolderM"><form action="" method="get"><input name="" type="image"></form></span><input style="display:none;float:right" class="btn_style_default" id="btnHistory" type="button" value="Use an image already uploaded" onclick="doShowPreviousImages()"/>
					</div>
				</div>

				

				<div class="boxRed" style="display:none" id="uploadErrorM"></div>
				<div id="imageSizeM"></div>
				<br/>
                <div class="noteg">
				<p>Our ordering system works with .jpg and .tif files only. If your file is in a different format please visit <a target="_top" href="/customorder">custom order</a>
                <br>
If you experience any problems with uploading your file please use <a target="_top" href="/customorder">custom order</a></p></div>
                
                
                
			</fieldset></div>
            
            
            <div id="uploadListId" class="col-md-6 col-sm-12 col-xs-12" style="display:none"> 
				<h3>Previously uploaded images</h3>
				<input style="float:right" type="button" value="X" onclick="doHidePreviousImages()"/>	
				<row>
					<div id="uploadedImages" class="upimgs clearfix">
						
                        
                       
					</div>
				</row>
                
			 </div>
            
            <div class="mainProductRows col-md-6 col-sm-12 col-xs-12">
            
            <div class="mainPreview" id="mainPreview_p_canvas"> 
             <h3>Professionally produced canvas prints:</h3>
            <div class="col-sm-4 11">
    <ul class="previewimgs">
     <li>
    <img alt="canvas preview corner" style="padding-bottom:10px;width:110px;" src="images/phoca_thumb_l_corner.jpg"/></li>
			
			<li><img alt="canvas preview corner zoom" style="padding-bottom:10px;width:110px;" src="images/phoca_thumb_l_canvas-corner-2.jpg"/></li>
			
<li><img alt="canvas hanger" style="padding-bottom:10px;width:110px;" src="images/phoca_thumb_l_canvas-hanger.jpg"/></li>
</ul></div>

<div class="col-sm-8">  		 
            		  <ul class="pro-list">
		  <li>Printed at 2880 dpi using latest Epson printers</li>
		  <li>450 gsm Poly-cotton blend canvas or</li>
		  <li>Archival quality Chromata White canvas</li>
		  <li>Free museum grade varnish</li>
		  <li>Selection of 18mm or 38mm frame</li>
		  <li>Colour calibrated workflow</li>
		  <li>Ready to hang out of the box</li>
			<li>Free proofs available on all products over &pound;100</li>
		  </ul>
</div></div>
            
            
<div class="mainPreview" id="mainPreview_p_rolled" style="display:none">
<h3>Professionally produced canvas prints:</h3>
<div class="col-sm-4 12">
<ul class="previewimgs"><li>
            
<img alt="rolled canvas preview" style="padding-bottom:10px;width:110px;" src="images/rolled-canvas-zoom.jpg"/></li>
		
	<li><img alt="rolled canvas preview packed" style="padding-bottom:10px;width:110px;" src="images/rolled_packed.jpg"/></li>
		
	<li><img alt="rolled canvas preview spectroscan" style="padding-bottom:10px;width:110px;" src="images/spectroscan.jpg"/></li></ul></div>
<div class="col-sm-8">  
            	  <ul class="pro-list">
		  <li>Printed at 2880 dpi using latest Epson printers</li>
		  <li>450 gsm Poly-cotton blend canvas or</li>
		  <li>Archival quality Chromata White canvas</li>
		  <li>Free museum grade varnish</li>
		  <li>Colour calibrated workflow</li>
		  <li>Securely packaged</li>
		  <li>Any custom size available</li>
			<li>Free proofs available on all products over &pound;100</li>
		  </ul>
          </div></div>
<div class="mainPreview" id="mainPreview_p_paper" style="display:none"> 
<h3>Professionally produced giclee prints:</h3>
 <div class="col-sm-12 13">
        
        <ul class="previewimgs">
        <li>
        <img alt="giclee preview zoom" style="padding-bottom:10px;width:110px;" src="images/giclee-prints.png"/>
		</li>
			<li><img alt="giclee preview packed" style="padding-bottom:10px;width:110px;" src="images/rolled_packed.jpg"/>
			</li>
	<li><img alt="giclee preview spectroscan" style="padding-bottom:10px;width:110px;" src="images/spectroscan.jpg"/></li>
    
    </ul>
    </div>
		<div class="col-sm-10">
		  
		  <ul class="pro-list">
				<li>Produced at 2880dpi using latest HDR Epson inks<li>
				<li>Choice of 5 Fine Art Hahnemuhle papers or<li>
				<li>4 Epson/EFI premium photo papers<li>
				<li>Free Hahnemuhle protective spray<li>
				<li>Any custom size available<li>
				<li>Colour calibrated workflow<li>
				<li>Free postage on orders over &pound;10<li>
				<li>Free proofs available on all products over &pound;100<li>
		  </ul>
          </div>

</div></div>

	
	<div id="uploadMainPreviewId" style="display:none;">
		<div align="center">
			<fieldset>
				<h1>Image Summary</h1>
                
                <div class="col-sm-6">
                <div id="uploadMainId0" style="display:none"> 
                <div class="btn_style_default dimgs"> 
                <i class="fa fa-picture-o" aria-hidden="true"></i>
 <input type="button"  value="Choose different product/photo" onclick="doStep00()" class="picimg"></div>
 
 
 </div>
                <img class="img-responsive" alt="user canvas preview" onload="doMainPreviewLoadEnd();" 
                style="margin-bottom:20px;" src="" id="mainPreview"/></div>
                <div class="table-responsive">
				<table cellspacing="3" class="table">
				<tr class="noborder">
					<td rowspan="4"></td>
					<td>Filename</td><td id="mainFilename"></td>
				</tr>
				<tr>
					<td>Width</td><td id="mainWidth"></td>
				</tr>
				<tr>
					<td>Height</td><td id="mainHeight"></td>
				</tr>
				<tr id="maxRecSize">
					<td>Max. Recommended Size</td><td id="mainRecomended"></td>
				</tr>
                
				</table>
                 <div class="cbuttonc"><span class="btn_style_default cbutton">
                            <i class="fa fa-arrow-right" aria-hidden="true"></i>
			<input type="button"  value="Continue" class="cbutton" onclick="doStepMain2();"/></span></div>
                </div>
                			</fieldset>
                           
                            
			<!--<br/>
			If image preview is not working, please click <a href="#" onclick="return doRetryPreview();">here</a> for retry.-->
                </div>
                
                
                
                
			</fieldset>
            </div>

 </div>


<!--  IMage edit --> 

<div id="editImage" style="display:none">
	<div class="steps">
		Step 2 of 3 - UPLOAD AND EDIT YOUR PHOTO
	</div>

	<div id="colorPick"><input type="button" value="Close" onclick="doHideColorPicker()" style="float:right">
		<div id="flashContent" style="margin:0; padding:0;"></div>
	</div>
	<table class="col-sm-6 col-xs-12"><tr>
	<td class="inputstyles" style="width:400px;vertical-align:top">
	<table >
	 <tr><td>
	   
	 </td></tr>
		<tr style="display:none"><td colspan="2" align="center">
			<fieldset>
				<legend>Image Upload</legend>
				<div id="fsUploadProgress" style="float:right">
					<span id="tdPercentUploaded"></span>
				</div>
				<div>
					<span id="spanButtonPlaceHolder"></span>
				</div>
				<div class="boxRed" style="display:none" id="uploadError"></div>
				<div id="imageSize"></div>
			</fieldset>
			<div id="uploadArea" style="display:none">
			<input type="button" id="btnUpload" onclick="fncUpload()" value="Upload an image"/>
			<br>
				<fieldset style="display:none">
					<legend>Image Upload</legend>
					<table align="center">
						<tr>
							<td nowrap="true" align="center">
							<div id="content">
								<div id="uploadError"></div>
								<form id="form11" action="index.php" method="post" enctype="multipart/form-data">
										<div class="fieldset flash" id="fsUploadProgress1">
										<span id="tdPercentUploaded1"></span><br>
										</div>
									<div style="display:none" id="divStatus">0 Files Uploaded</div>
										<div>
											<span id="spanButtonPlaceHolder1"></span>
										</div>
								</form>
							</div>
							<div style="display:none">
								<form enctype="multipart/form-data" action="fileAdmin1.php?action=upload" method="post" target="_upload">
									<input name="file0" id="uploadfile" type="file">
									<input type="submit" value="Upload" onclick="return startUpload();">
								</form>
							</div>
							</td>
						</tr>
						<tr><td id="uploadMsg" style="display:none">Image uploading</td></tr>
						<tr><td><iframe frameborder=0 id="_upload" name="_upload" src="about:blank" height='0'></iframe></td></tr>
						<tr style="display:none">
							<td id="uploadedImages" style="display:none"></td>
						</tr>
					</table>
				</fieldset>
			</div>
		</td></tr>
		<tr>
		  			
                <div class="col-sm-6">
 <h1 class="imgc">Image Colour 
</h1>
<div>
<ul class="imgcolors" >
<li><img alt="no effect" id="effect_normal" class="imgEffect" src="images/effect_off.png"/>
							<br/><span class="productName">Original</span></li>
                            <li><img alt="effect sepia" id="effect_sepia" class="imgEffect" src="images/effect_sepia.png"/>
							<br/><span class="productName">Sepia</span></li>
                            <li><img alt="effect grayscale" id="effect_gray" class="imgEffect" src="images/effect_grayscale.png"/>
							<br/><span class="productName">Grayscale</span></li> </ul>
                
</div>
 </div>
		
			
			

			
            <div class="col-sm-6">
            
					<h1 class="imgc"><span id="idCanvasSize">Canvas Size</span></h1>
					
					<div class="col-xs-12">
                    
                    <table class="table-p col-sm-4">
		<tr style="display:none">
			<td>
				Orientation
			</td>
			<td nowrap="true">
				<table><tr>
				<td>
				<input type="radio" name="orientation" id="portrait" value="p" onclick="setOrientationType('p');">
				</td>
				<td><div onclick="setOrientationType('p')" style="cursor:pointer;width:20px;height:30px;border:2px solid black"></div>
				</td>
				<td>
				<input type="radio" name="orientation" id="landscape" value="l" onclick="setOrientationType('l');">
				</td><td><div onclick="setOrientationType('l')" style="cursor:pointer;width:30px;height:20px;border:2px solid black"></div></td>
				</tr></table>
			</td>
		</tr>
		<tr>
			<td>
				Units
			</td>
			<td>
				<input class="radio-custom" type="radio" name="units" id="cm_units" value="cm" onclick="setCmUnitType();"><label class="radio-custom-label" for="cm_units">cm</label>
				<input class="radio-custom" type="radio" name="units" id="inch_units" value="inch" onclick="setInchUnitType();"><label class="radio-custom-label" for="inch_units">inch</label>
			</td>
		</tr>
		<tr id="widthId">
			<td>
				Width
			</td>
			<td nowrap="true" align="center">
				
			   <input style="float:left" type="button" value="-" onclick="doChangeSize('width',-1)">
               				<div class="input-v">
					<select id="width" onchange="doChangeSize('width',0)">
					</select>
					<div id="dwidth1" style="width:100%;display:none"><input onchange="doChangeWH();" style="width:100%;" type="text" id="width1" value=""/></div>
				</div>
				
				<input style="float:right" type="button" value="+" onclick="doChangeSize('width',1)">

			</td>
		</tr>
		<tr class="helpCustomSize" style="display:none">
			<td colspan="2" align="right"><font size="2"><i>Type your own size</i></font></td>
		</tr>
		<tr id="heightId">
			<td>
				Height
			</td>
			<td nowrap="true" align="center">
			   <input style="float:left" type="button" value="-" onclick="doChangeSize('height',-1)">
               				<div class="input-v">
					<select id="height" onchange="doChangeSize('height',0)">
				</select>
					<div id="dheight1" style="width:100%;display:none"><input onchange="doChangeWH();" style="width:100%;" type="text" id="height1" value=""/></div>
				</div>
				<input style="float:right" type="button" value="+" onclick="doChangeSize('height',1)">

			</td>
		</tr>
		<tr class="helpCustomSize" style="display:none">
			<td colspan="2" align="right"><font size="2"><i>Type your own size</i></font></td>
		</tr>
		<tr id="depthId">
			<td>
				Depth
			</td>
			<td nowrap="true" align="center">
       
			   <input type="button" value="-" onclick="doChangeSizeD('depth',-1)" style="float:left">
                               	<div class="input-v"><select id="depth" onchange="doChangeSizeD('depth',0)">
				</select></div>
<input style="float:right" type="button" value="+" onclick="doChangeSizeD('depth',1)">
                

			</td>
		</tr>
		<tr id="canvasWarning" style="color:red;font-size:12px;display:none;padding:0px;margin:0px;">
			<td colspan="2" align="center"><i>We recommend using 1.5" depth above 24"</i></td>
		</tr>
		<tr id="standardSize" style="display:none">
			<td>
				Standard
			</td>
			<td nowrap="true" align="center" style="width:123px">
				<select style="float:left" id="standardSizeDrop" onchange="doChangeSizeStandard()">
					<option value=""></option><option value="A0">A0</option><option value="A1">A1</option><option value="A2">A2</option><option value="A3">A3</option><option value="A4">A4</option><option value="A5">A5</option>
				</select>
				<img alt="orientation portrait" onclick="setOrientation1('P')" id="sizePortrait" style="cursor:pointer;height:28px;float:left;padding-left:3px;padding-right:3px;" src="images/portrait.png"/>
				<img alt="orientation landscape" onclick="setOrientation1('L')" id="sizeLandscape" style="cursor:pointer;height:28px;float:left" src="images/landscape.jpg"/>
			</td>
		</tr>
	</table>
                    
                    
                    
                    </div>

            
            
            
            
            </div>
				
			
		</tr>
		<tr id="edgesArea">
			<td colspan="2" align="center">
				<div class="col-sm-12">
					<h1 class="imgc" style="margin-top:10px;">Canvas Edge</h1>
					
					<table align="center"><tr>
						<td align="center">
							<img alt="canvas edge white" id="edge_white" class="imgEdge" src="images/edge_white.png"/>
							<br/><span class="productName">White</span>
						</td>
						<td align="center">
							<img alt="canvas edge black" id="edge_black" class="imgEdge" src="images/edge_black.png"/>
							<br/><span class="productName">Black</span>
						</td>
						<td align="center">
							<img alt="canvas edge mirror" id="edge_mirror" class="imgEdge" src="images/edge_mirror.png"/>
							<br/><span class="productName">Mirror</span>
						</td>
						<td align="center">
							<img alt="canvas edge wrap" id="edge_wrap" class="imgEdge" src="images/edge_wrap.png"/>
							<br/><span class="productName">Wrap</span>
						</td>
						<td align="center">
							<img alt="canvas edge colour" id="edge_color" class="imgEdge" src="images/edge_color.png"/>
							<br/><span class="productName">Colour</span>
							<div id="colorPreviewArea"></div>
						</td>
					</tr></table>
				</div>
			</td>
		</tr>
		<tr id="idSpecialOption" style="display:none">
			<td colspan="2" align="center" nowrap="true">
 					<fieldset>
						<legend>Image Border</legend>
						
						<input type="radio" name="printBorder1" id="printBorder1White" value="white"><label for="printBorderTrim">White</label>&nbsp;
						<input type="radio" name="printBorder1" id="printBorder1Black" value="black"><label for="printBorderTrim">Black</label>&nbsp;
						<input type="radio" name="printBorder1" id="printBorder1Colour" value="colour"><label for="printBorderTrim">Colour</label>&nbsp;
						<input checked type="radio" name="printBorder1" id="printBorder1None" value="none"><label for="printBorderTrim">No Border</label>&nbsp;
					</fieldset>
			</td>
		</tr>
		<tr id="colorPalette">
			<td colspan="2" align="center">
				<div style="float:right">
					<div class="closebutton btn_style_default"><i class="fa fa-times" aria-hidden="true"></i><input style="width:60px;" type="button" value="Close" onclick="pcancelSetColor()"/></div><br/><br/>
					<input id="colorPaletteValuePreview" type="text" value="" readonly style="border:none;background-color:none;width:60px;"/>
					<br/>
					<input id="colorPaletteValue" type="text" value="" maxlength="7" style="border:none;background-color:none;width:60px;"/>
					<br/>
					<input id="colorPaletteEdit" style="width:60px;" type="button" value="Edit" onclick="pEditColor()"/>
					<input id="colorPaletteApply" style="display:none;width:60px;" type="button" value="Apply" onclick="pApplyColor()"/><br/>
					<input id="colorPaletteDelete" style="display:none;width:60px;" type="button" value="Cancel" onclick="pDeleteColor()"/><br/>
				</div>
				<ul class="palette" id="colorPaletteArea">
				</ul>
			</td>
		</tr>
		
		<tr>
			<td class="materialArea" colspan="2" align="left" nowrap="true">
				<div id="canvas_rolled_price">
 					<fieldset>
						<h1 class="imgc mitems">Material</h1>
						<div class=" col-sm-12">
                        
						<div class="col-md-6 col-sm-12 col-xs-12 materal-itme">	
                        <input  class="radio-custom" type="radio" name="material" id="standard" value="p" onclick="setPrice();"><label class="radio-custom-label" for="standard">Standard canvas</label></div>
					
                        <div class="col-md-6 col-sm-12 col-xs-12 materal-itme">	<input class="radio-custom" type="radio" name="material" id="premium" value="l" onclick="setPrice();"><label class="radio-custom-label" for="premium">Premium canvas</label></div>
                        
						
						
						 <div style="display:none"><br/><span id="price1"></span>&pound; / <span id="price2"></span>&pound;</div>
					</div>
 					<div style="display:none;float:right;width:45%;text-align:center">
						<span class="material standard">Giclee Standard</span>
						<span class="material premium">Giclee Premium</span>
					</div>
					<div style="clear:both"></div>
					</fieldset>
					
				</div>
 					<fieldset id="paper_price" style="display:none">
						<legend>Material</legend>
						<img class="question" src="images/question.png" title="<?php echo $DESC_MATERIAL;?>"/>
						<input checked type="radio" name="material" id="standard_paper" value="s" onclick="Layout.materialChange();setPrice();"/><label for="standard_paper">Photo Papers</label>
						<br/>
						<div class="material_suboption" id="standard_paper_suboption" style="display:block">
							<input checked type="radio" name="ps_material" id="ps_1" value="ps_1" onclick="setPrice();" /><label for="ps_1">Epson Premium Luster</label>&nbsp;<a href="#" id="sdHc1" rel="simpleDialog1"><img src="images/question.png" /></a><br/>
							<input type="radio" name="ps_material" id="ps_2" value="ps_2" onclick="setPrice();"/><label for="ps_2">EFI 4245g Semimatte</label>
						</div>
						<input type="radio" name="material" id="medium" value="m" onclick="Layout.materialChange();setPrice();"/><label for="medium">Fine Art - Medium Weight</label>
						<br/>
						<div class="material_suboption" id="medium_suboption">
							<input checked type="radio" name="pm_material" id="pm_1" value="pm_1" onclick="setPrice();"/><label for="pm_1">Albrecht Durer 210 g</label><br/>
							<input type="radio" name="pm_material" id="pm_2" value="pm_2" onclick="setPrice();"/><label for="pm_2">Photo Rag 188g</label><br/>
							<input type="radio" name="pm_material" id="pm_3" value="pm_3" onclick="setPrice();"/><label for="pm_3">William Turner 190g</label>
						</div>
						<input type="radio" name="material" id="heavy" value="h" onclick="Layout.materialChange();setPrice();"><label for="heavy">Fine Art - Heavy Weight</label>
						<div class="material_suboption" id="heavy_suboption">
							<input checked type="radio" name="ph_material" id="ph_1" value="ph_1" onclick="setPrice();"/><label for="ph_1">German Etching 310g</label><br/>
							<input type="radio" name="ph_material" id="ph_2" value="ph_2" onclick="setPrice();"/><label for="ph_2">Photo Rag 308g</label><br/>
							<input type="radio" name="ph_material" id="ph_3" value="ph_3" onclick="setPrice();"/><label for="ph_3">William Turner 310g</label><br/>
							<input type="radio" name="ph_material" id="ph_4" value="ph_4" onclick="setPrice();"/><label for="ph_4">Baryta 325g</label>
						</div>
						
						 <div style="display:none"><br/><span id="price1"></span>&pound; / <span id="price2"></span>&pound;</div>
					</fieldset>
			</td>
		</tr>
		<tr>
		  <td colspan="2" class="mainPrice" align="center">
		    <span id="mainPriceId"></span>P&P <span id="mainPriceDelivery">free of charge</span>. Vat included
				<div style="display:none" class="freeProofNote"><i>Free proof available in next step</i></div>
                <div class="btn_style_default btnSummary11">
<i class="fa fa-check-square-o" aria-hidden="true"></i>
<input  class="" id="btnSummary11" type="button" value="Canvas Summary & Order"/></div>
		   </td>
		</tr>
			<tr style="display:none">

		  <td colspan="2" align="center">
		    		<div>
        		<table align="center">
        			<tr>
        				<td colspan="2" align="left">
        				</td>
        			</tr>
        		</table>
        		<p align="center"><input style="font-weight:bold;color:black;font-size:15px;" type="button" value="Preview" onclick="doShowRoom();">
        		&nbsp;&nbsp;&nbsp;
        		<input style="font-weight:bold;color:blue;font-size:15px;width:300px;" id="btnSummary11_" type="button" value="Canvas Summary & Order"/></p>
        		</div>
		  </td>
		</tr>

	</table>
	</td>
    </tr></table>

    
     <div class="col-sm-6 col-xs-12">   
    <div class="text-center upload_dif_pic btn_style_default"><i class="fa fa-picture-o" aria-hidden="true"></i><input type="button"  value="Upload different photo" onclick="doStep00()"></div>
    
    <div class="imgplc col-sm-12">	
    
    <div class="imgborder" style=" ">
	<div class="marginClass" id='lefttop'></div><div class="marginClass" id='leftbottom'></div><div class="marginClass" id='righttop'></div><div class="marginClass" id='rightbottom'></div>
	<div class="marginClass" id='marginleft'></div><div class="marginClass" id='marginright'></div><div class="marginClass" id='margintop'></div><div class="marginClass" id='marginbottom'></div>
    </div>
   
    
    
    	<div id="edgePlace" style="margin:5px;background-color:white" align="left">
			<div id="imgPlace"></div>
		</div>
	</div>
     <div class="clearfix"></div>
    
    <div class="imgq col-sm-12">
    <ul class="imgtools">
    <li class="zout">

<i class="fa fa-search-minus" aria-hidden="true" onclick="doZoomOut()" style="cursor:pointer;"  title="Zoom Out"></i>



</li>
     <li class="sliderimg"><div id="slider" style="width:200px"></div></li>
      <li class="zin"><i class="fa fa-search-plus" aria-hidden="true" onclick="doZoomIn()" style="cursor:pointer;"   title="Zoom In"></i></li>
      
      <li class="rleft">
      <i class="fa fa-undo" aria-hidden="true" onclick="doRotate(-90)"  title="Rotate Left"></i>
      
      
      
      </li>
      <li class="rright">
<i class="fa fa-repeat" aria-hidden="true"  onclick="doRotate(90)"  title="Rotate Right"></i>




</li>
      <li class="cflip"><img alt="canvas flip" style="cursor:pointer;" src="images/flip-icon.png" onclick="doFlip()"  title="Flip"/></li>
      <li></li></ul>
      
      <div class="imginf"></div>
      
      <ul> <li> 	</li>
      <li><div style="width:300px;">
			<div id="qa" style="font-size:12px;border-left-style:solid;border-width:normal;border-color:green;text-align:left;margin-left:144px;white-space: nowrap;
">Image Quality</div>
			<img alt="canvas quality" src="images/quality.png" style="width:300px;height:25px;float:left"/><br>
			<div id="qg" style="font-size:12px;border-left-style:solid;border-width:normal;border-color:blue;text-align:left;margin-left:144px">Quality Guaranteed</div>
		</div></li>
        
        <li><div id="qualityWarning">
        
        
<div class="sface">
        <i class="fa fa-frown-o" aria-hidden="true"></i>
        </div>
        <div class="sface-txt">
        <p>Your selected canvas size is too big for your image.</p>
        <p>You can proceed but the quality is not guaranteed.</p>
        </div>
        <div class="clearfix"></div>





</div></li>




        <li><input id="btnPreview" style="font-weight:bold;color:black;font-size:15px;" type="button" value="Preview" onclick="doShowRoom();"></li>
      
<li>


</li>
      
      <div style="display:none">
		<br><img id="qa1" src="images/arrow.png" style="float:left;padding-left:150px">
	</div>
      
      </ul>
    
    </div></div>
    

    
    
      </div>
<!-- Summary -->
<div id="stepSummary">
		<div class="steps">
			Step 3 of 3 - CANVAS SUMMARY AND ORDER
		</div>
		<div id="roomSummary" valign="bottom" align="center">
			<div class="roomSize col-md-6">
				<fieldset>
					<h1 class="imgc">Order Summary</h1>
					<table align="center" class="previewSize table">
					<tr>
						<td>
							Width
						</td>
						<td id="previewWidth">
						</td>
					</tr>
					<tr>
						<td>
							Height
						</td>
						<td id="previewHeight">
						</td>
					</tr>
					<tr id="previewDepthId">
						<td>
							Depth
						</td>
						<td id="previewDepth">
						</td>
					</tr>
					<tr id="previewEdgesId">
						<td>
							Edges
						</td>
						<td id="previewEdges">
						</td>
					</tr>
					<tr id="idPreviewEffects">
						<td>
							Colour
						</td>
						<td id="previewEffects">
						</td>
					</tr>
					<tr id="idPreviewMaterial">
						<td>
							Material
						</td>
						<td id="previewMaterial" nowrap="true">
						</td>
					</tr>
					<tr id="idPrintBorder">
						<td nowrap="true">
							Print Border
						</td>
						<td id="previewPrintBorder">
						</td>
					</tr>
					<tr>
						<td>
							Price
						</td>
						<td id="previewPrice">
						</td>
					</tr>
					<tr style="display:none">
						<td nowrap="true">
							Picture Filename
						</td>
						<td id="previewFilename">
						</td>
                        </tr>
                    
					
					<tr>
						<td nowrap="true" colspan="2" align="left">
Printed&nbsp;proof&nbsp;required(+&pound;<span id="proofPriceSpan">

<?php echo $proofPrice;?></span>)&nbsp;&nbsp;&nbsp;
<input  onchange="doUpdateProofPrice(this)" type="checkbox" id="proofId"  value="<?php echo $proofPrice;?>"/>   <label for="checkbox-1" class="checkbox-custom-label"></label>
      
                            
                            
                            
                            
						</td>
					</tr>
					<tr>
						<td colspan="2" align="left">
					<span class="comment-txt">
					<span class="freeProofNote"><i>(free on all products above &pound;100)</i><br/></span>
					We will produce 1:1 proof of a section of your image printed and varnished. Please note it will add 3-4 working days before you receive your final product</span>
                    <div class="user-comments">                            <h1>Comments</h1>
                            <span style="white-space:normal;font-weight:normal;font-size:80%">Please let us know if you have any special requirements i.e. want us to edit your photo, delete date stamp, or have any other notes with regards to your order.</span>
							<textarea rows="6" cols="30" style="width:250px" id="comments"></textarea></div>
					<!--We will produce two A4 proofs showing the whole image and also a section in 1:1 scale of your chosen size on selected media. Usually despatched same day-->
						</td>
					</tr>
					</table>
				</fieldset>
			</div>
				
			</div>
			<div class="col-md-6">
            
            <div class="b2edit btn_style_default">
            <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
            <input type="button" class="back2edit" value="Back to Edit" onclick="doStep2();">
            
            </div>
			<div id="objImage1" align="left">
            
            
            
            
            <img onload="doPreviewLoadEnd();" style="position:relative" id="roomImage1" src=""/></div>
            
            
             
                
                
            </div>
            
            
            

			<div style="clear:both"></div>
            <div class="center-block" style="padding-top:20px;">
                <div class="ad2cart btn_style_default">

<i class="fa fa-cart-plus" aria-hidden="true"></i>

<input style="display:none;font-weight:bold;font-size:15px;"  type="button" value="Preview" onclick="doShowRoom();"><input style=""   onClick="getFinalImage()" id="btnSummary" type="button" value="Add to Cart">
                </div>
                </div>
		</div>
</div>



<!-- Step Preview -->

<div id="stepPreview">
		<div class="steps">
			ROOM PREVIEW
		</div>
	<div id="roomPreview" valign="bottom">
		<input type="button" value="Back to Edit" onclick="doHideRoom();" style="float:right">
		<div class="roomSize">
			<fieldset>
				<legend>Image Size</legend>
				<table align="center" class="previewSize">
				<tr>
					<td>
						Width
					</td>
					<td id="previewWidth1">
					</td>
				</tr>
				<tr>
					<td>
						Height
					</td>
					<td id="previewHeight1">
					</td>
				</tr>
				</table>
			</fieldset>
		
			<fieldset>
					<legend>Wall Colour</legend>
					<div class="form-item"><label for="color">Colour:</label><input onchange="doRoomColor1()" type="text" id="color" name="color" value="#FFE4B5" /></div>
					<div style="padding:5px;" id="picker"></div>
					<p align="center">
					<input type="button" value="Reset Settings" onclick="doRoomReset();">
					</p>
					

			</fieldset>
			
			<div style="padding-top:20px;" align="center"><input style="font-weight:bold;color:blue;font-size:15px;" id="btnSummary12" type="button" value="Canvas Summary & Order"/></div>
		</div>
		<div id="objImage" align="left"><img onload="doPreviewLoadEnd();" style="position:relative" id="roomImage" src=""/></div>
		<img class="objClass" id="obj1" src="images/room/flower.png"/>
		<img class="objClass" id="obj2" src="images/room/canapea.png"/>
		<div align="center" style="position: relative;"></div>
	</div>
	<div style="width:100%;background-color:lightblue;text-align:center;font-size:14px;">For illustration purposes only. Our sofa is approx. <span id="sofaSize">200cm</span> long.</div>
</div>




<!-- Color Pick -->
<div id="colorPickArea" style="display:none">&nbsp;</div>

<form name="frmOrder" id="frmOrder" action="order5.php" method="post" target="_top">
	<input type="hidden" value="" name="orderUnit" id="orderUnit"/>
	<input type="hidden" value="" name="orderWidth" id="orderWidth"/>
	<input type="hidden" value="" name="orderHeight" id="orderHeight"/>
	<input type="hidden" value="" name="orderDepth" id="orderDepth"/>
	<input type="hidden" value="" name="orderEffect" id="orderEffect"/>
	<input type="hidden" value="" name="orderEdge" id="orderEdge"/>
	<input type="hidden" value="" name="orderCanvas" id="orderCanvas"/>
	<input type="hidden" value="" name="orderCanvasType" id="orderCanvasType"/>
	<input type="hidden" value="" name="orderImage" id="orderImage"/>
	<input type="hidden" value="" name="orderPrice" id="orderPrice"/>
	<input type="hidden" value="" name="orderX" id="orderX"/>
	<input type="hidden" value="" name="orderY" id="orderY"/>
	<input type="hidden" value="" name="orderW" id="orderW"/>
	<input type="hidden" value="" name="orderH" id="orderH"/>
	<input type="hidden" value="" name="orderRH" id="orderRH"/>
	<input type="hidden" value="" name="orderRW" id="orderRW"/>
	<input type="hidden" value="" name="orderComments" id="orderComments"/>
	<input type="hidden" value="" name="editId" id="editId"/>
	<input type="hidden" value="" name="orderProof" id="orderProof"/>
	<input type="hidden" value="" name="printBorderOption" id="printBorderOption"/>
    <input type="hidden" value="" name="finalProductImage" id="finalProductImage"/>
</form>


<script>
function getFinalImage() {
	var roomImage1 = document.getElementById("roomImage1").src;
	document.getElementById("finalProductImage").value 	= roomImage1;
	

}
</script>

<div id="loadingId" style="display:none;position:absolute"><img src="images/ajax-loader1.gif" /></div>

<div style="display:none;" id="simpleDialog1">
  <h3>Photo Papers </h3>
  <p>Epson Premium Luster</p>
  <img src="images/print/epson_premium_luster.jpg"/>
</div>
</body>
</html>