<?php
  require_once 'constants.php';
  
  session_start();
  $editId=$_SESSION['editId'];
  
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
	$premiumCanvas = getDbPriceHavingSession("premiumCanvas", 35);
	$standardRolled = getDbPriceHavingSession("standardRolled", -25);
	$premiumRolled = getDbPriceHavingSession("premiumRolled", -25);

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
?>
<html>
<head>
	<title>Canvas Photo</title>
	
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
      mylog("$path$command");
      exec ("$path$command");
	  
	  
	  
	  $IMAGE_SIZE=420;
	  $previewImg = $realImg . ".jpg";
	  $command="convert \"$realImg\" -scale $IMAGE_SIZE" . "x" . "$IMAGE_SIZE \"$previewImg\"";
	  mylog("Upload comand : " . $command);
	  exec ("$path$command");
	
	  $command="convert \"$previewImg\" \"$previewImg.jpg\"";
	  mylog("Edit comand : " . $command);
	  exec ("$path$command");

	  
	  

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
	priceOffset:<?php echo $priceOffset;?>,
	premiumCanvas:<?php echo $premiumCanvas;?>,
	standardRolled:<?php echo $standardRolled;?>,
	premiumRolled:<?php echo $premiumRolled;?>
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
	<script type="text/javascript" src="swfupload/swfupload.js"></script>
	<script type="text/javascript" src="js/swfupload.queue.js"></script>
	<script type="text/javascript" src="js/fileprogress.js"></script>
	<script type="text/javascript" src="js/handlers.js"></script>

	<link rel="stylesheet" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.1/themes/ui-lightness/jquery-ui.css" type="text/css" media="screen" />
	<script src="js/jquery-1.3.2.min.js"></script>
	<script src="js/jquery-ui-1.7.1.custom.js"></script>
	<script src="js/jquery.dropshadow.js"></script>

	<script type="text/javascript" src="js/farbtastic.js"></script>
	<link rel="stylesheet" href="js/farbtastic.css" type="text/css" />

	<script language="javascript">
		var IMAGE_SIZE=420;
		var URL = "http://demo.cincistele.com/main/canvasPhoto/";
		URL="";
		var inchNormalSize = [6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40];
		var inchLargeSize15 = [42,44,46,48,50,52,54,56,58,60,72];
		var inchLargeSize07 = [42,44,46,48,50,60];
		var inchDepth = [0.7, 1.5];
		var PHPSESSID = "<?php echo session_id(); ?>";
	</script>

	<script type="text/javascript" src="mainO3.js"></script>
	<link rel="stylesheet" href="mainO.css" type="text/css" />

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
		.question{
			padding:2px;
			float:right;
		}
	</style>
</head>
<body onbeforeunload="return showWarning();">

<div id="step1">
	<div class="steps">
		Step 1 of 3 - CHOOSE YOUR PRODUCT
	</div>
	<table align="center" cellpadding="20">
	<tr class="mainProductRows" style="text-align:center">
		<td colspan="2">
		<h2>Choose your product</h2>
		</td>
	</tr>
	<tr class="mainProductRows">
		<td align="center">
			<img id="p_canvas" class="imgOption" src="images/edge_on.png"/>
			<br/><span class="productName">STRETCHED CANVAS</span>
		</td>
		<td align="center">
			<img id="p_rolled" class="imgOption" src="images/edge_off.png"/>
			<br/><span class="productName">ROLLED CANVAS</span>
		</td>
	</tr>
	<tr class="mainProductRows">
		<td colspan="2"  style="text-align:center">
		Please click the icon to select your product type
		</td>
	</tr>
	 <tr id="uploadMainId0" style="display:none"><td>
	   <input type="button" value="Choose different product/photo " onclick="doStep00()">
	 </td></tr>
	<tr id="uploadMainId" style="display:none">
		<td colspan="2" align="center">
			<fieldset>
				<legend>Image Upload</legend>
				<div id="fsUploadProgressM" style="float:right">
					<span id="tdPercentUploadedM"></span>
				</div>
				<div>
					<span id="spanButtonPlaceHolderM"></span>
				</div>
				<div class="boxRed" style="display:none" id="uploadErrorM"></div>
				<div id="imageSizeM"></div>
			</fieldset>
		</td>
	</tr>
	
	<tr class="mainProductRows">
		<td colspan="2" style="width:600px;">
		<table class="mainPreview" id="mainPreview_p_canvas"><tr><td>
		<td align="center">
			<img style="padding-bottom:10px;width:110px;" src="images/phoca_thumb_l_corner.jpg"/>
			<br/>
			<img style="padding-bottom:10px;width:110px;" src="images/phoca_thumb_l_canvas-corner-2.jpg"/>
			<br/>
			<img style="padding-bottom:10px;width:110px;" src="images/phoca_thumb_l_canvas-hanger.jpg"/>
		</td>
		<td align="left">
		  <span style="color:#357EC7;font-weight:bold;padding-bottom:10px;padding-left:25px;">Professionally produced canvas prints:</span>
		  <ul>
		  <li>Printed at 1440 dpi using latest Epson printers
		  <li>450 gsm Poly-cotton blend canvas or
		  <li>Archival quality Chromata White canvas
		  <li>Free museum grade varnish
		  <li>Selection of 18mm or 38mm frame
		  <li>Colour calibrated workflow
		  <li>Ready to hang out of the box
		  </ul>
		</td>
		</tr></table>
		<table class="mainPreview" id="mainPreview_p_rolled" style="display:none"><tr><td>
		<td align="center">
			<img style="padding-bottom:10px;width:110px;" src="images/rolled-canvas-zoom.jpg"/>
			<br/>
			<img style="padding-bottom:10px;width:110px;" src="images/rolled_packed.jpg"/>
			<br/>
			<img style="padding-bottom:10px;width:110px;" src="images/spectroscan.jpg"/>
		</td>
		<td align="left">
		  <span style="color:#357EC7;font-weight:bold;padding-bottom:10px;padding-left:25px;">Professionally produced canvas prints:</span>
		  <ul>
		  <li>Printed at 1440 dpi using latest Epson printers
		  <li>450 gsm Poly-cotton blend canvas or
		  <li>Archival quality Chromata White canvas
		  <li>Free museum grade varnish
		  <li>Colour calibrated workflow
		  </ul>
		</td>
		</tr></table>

		</td>
	</tr>

	
	<tr id="uploadMainPreviewId" style="display:none">
		<td colspan="2" align="center">
			<fieldset>
				<legend>Image Summary</legend>
				<table cellspacing="3">
				<tr>
					<td rowspan="4"><img onload="doMainPreviewLoadEnd();" style="height:80px;" src="" id="mainPreview"/></td>
					<td>Filename</td><td id="mainFilename"></td>
				</tr>
				<tr>
					<td>Width</td><td id="mainWidth"></td>
				</tr>
				<tr>
					<td>Height</td><td id="mainHeight"></td>
				</tr>
				<tr>
					<td>Max. Recommended Size</td><td id="mainRecomended"></td>
				</tr>
				</table>
			</fieldset>
			<input type="button" value="Continue" onclick="doStepMain2();"/>
		</td>
	</tr>
	</table>
</div>
<div id="editImage" style="display:none">
	<div class="steps">
		Step 2 of 3 - UPLOAD AND EDIT YOUR PHOTO
	</div>

	<div id="colorPick"><input type="button" value="Close" onclick="doHideColorPicker()" style="float:right">
		<div id="flashContent" style="margin:0; padding:0;"></div>
	</div>
	<table><tr>
	<td style="width:400px;vertical-align:top">
	<table width="100%">
	 <tr><td>
	   <input type="button" value="Upload different photo" onclick="doStep00()">
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
		  			<td align="center">
				<fieldset>
					<legend>Image Colour</legend>
					<img class="question" src="images/question.png" title="<?php echo $DESC_EFFECT;?>"/>
					<table align="center"><tr>
						<td align="center">
							<img id="effect_normal" class="imgEffect" src="images/effect_off.png"/>
							<br/><span class="productName">Original</span>
						</td>
						<td align="center">
							<img id="effect_sepia" class="imgEffect" src="images/effect_sepia.png"/>
							<br/><span class="productName">Sepia</span>
						</td>
						<td align="center">
							<img id="effect_gray" class="imgEffect" src="images/effect_grayscale.png"/>
							<br/><span class="productName">Grayscale</span>
						</td>
					</tr></table>
				</fieldset>
			</td>

			<td>
				<fieldset style="width:200px;">
					<legend>Canvas Size</legend>
					<img class="question" src="images/question.png" title="<?php echo $DESC_SIZE;?>"/>
					<table align="center">
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
				<input type="radio" name="units" id="cm_units" value="cm" onclick="setCmUnitType();"><label for="cm_units">cm</label>
				<input type="radio" name="units" id="inch_units" value="inch" onclick="setInchUnitType();"><label for="inch_units">inch</label>
			</td>
		</tr>
		<tr>
			<td>
				Width
			</td>
			<td nowrap="true" align="center">
				
			   <input style="float:left" type="button" value="-" onclick="doChangeSize('width',-1)">
				<img src="images/minus.gif" onclick="doChangeSize('width',-1)" style="cursor:pointer;display:none">
				<input style="float:right" type="button" value="+" onclick="doChangeSize('width',1)">
				<div>
					<select id="width" onchange="doChangeSize('width',0)">
					</select>
					<div id="dwidth1" style="width:100%;display:none"><input onchange="doChangeWH();" style="width:100%;" type="text" id="width1" value=""/></div>
				</div>
			</td>
		</tr>
		<tr>
			<td>
				Height
			</td>
			<td nowrap="true" align="center">
			   <input style="float:left" type="button" value="-" onclick="doChangeSize('height',-1)">
				<input style="float:right" type="button" value="+" onclick="doChangeSize('height',1)">
				<div>
					<select id="height" onchange="doChangeSize('height',0)">
				</select>
					<div id="dheight1" style="width:100%;display:none"><input onchange="doChangeWH();" style="width:100%;" type="text" id="height1" value=""/></div>
				</div>
			</td>
		</tr>
		<tr id="depthId">
			<td>
				Depth
			</td>
			<td nowrap="true">
			   <input type="button" value="-" onclick="doChangeSizeD('depth',-1)">
				<select id="depth" onchange="doChangeSizeD('depth',0)">
				</select>
				&nbsp;<input type="button" value="+" onclick="doChangeSizeD('depth',1)">
			</td>
		</tr>
					</table>
				</fieldset>
			</td>
		</tr>
		<tr id="edgesArea">
			<td colspan="2" align="center">
				<fieldset>
					<legend>Canvas Edge</legend>
					<img class="question" src="images/question.png" title="<?php echo $DESC_EDGE;?>"/>
					<table align="center"><tr>
						<td align="center">
							<img id="edge_white" class="imgEdge" src="images/edge_white.png"/>
							<br/><span class="productName">White</span>
						</td>
						<td align="center">
							<img id="edge_black" class="imgEdge" src="images/edge_black.png"/>
							<br/><span class="productName">Black</span>
						</td>
						<td align="center">
							<img id="edge_mirror" class="imgEdge" src="images/edge_mirror.png"/>
							<br/><span class="productName">Mirror</span>
						</td>
						<td align="center">
							<img id="edge_wrap" class="imgEdge" src="images/edge_wrap.png"/>
							<br/><span class="productName">Wrap</span>
						</td>
						<td align="center">
							<img id="edge_color" class="imgEdge" src="images/edge_color.png"/>
							<br/><span class="productName">Colour</span>
						</td>
					</tr></table>
				</fieldset>
			</td>
		</tr>
		<tr>
			<td colspan="2" align="left" nowrap="true">
 					<fieldset>
						<legend>Material</legend>
						<img class="question" src="images/question.png" title="<?php echo $DESC_MATERIAL;?>"/>
						<input type="radio" name="material" id="standard" value="p" onclick="setPrice();"><label for="standard">Standard 450gsm Polycotton Blend Canvas</label>
						<br/>
						<input type="radio" name="material" id="premium" value="l" onclick="setPrice();"><label for="premium">Premium Chromata White Archival Quality Canvas</label>
						
						 <div style="display:none"><br/><span id="price1"></span>&pound; / <span id="price2"></span>&pound;</div>
					</fieldset>
			</td>
		</tr>
		<tr>
		  <td colspan="2" class="mainPrice" align="center">
		    <span id="mainPriceId"></span>P&P free of charge. Vat included
		   </td>
		</tr>
			<tr>
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
        		<input style="font-weight:bold;color:blue;font-size:15px;width:300px;" id="btnSummary11" type="button" value="Canvas Summary & Order"/></p>
        		</div>
		  </td>
		</tr>

	</table>
	</td>
	<td valign="top" align="center">
		<div id="edgePlace" style="padding:5px;background-color:white" align="left">
			<div id="imgPlace"></div>
		</div>
		<div>
			<table><tr>
				<td>
				  <img src="images/Zoom-Out-icon.png" onclick="doZoomOut()" style="cursor:pointer;" alt="Zoom Out" title="Zoom Out">
				</td>
				<td><div id="slider" style="width:200px"></div></td>
				<td>&nbsp;&nbsp;&nbsp;
				<td>
				  <img src="images/Zoom-In-icon.png" onclick="doZoomIn()" style="cursor:pointer;" alt="Zoom In" title="Zoom In">
				</td>
				<td>
					<img style="cursor:pointer;width:30px;" src="images/rotateLeft.png" onclick="doRotate(-90)" alt="Rotate Left" title="Rotate Left"/>
				<td>
				<td>
					<img style="cursor:pointer;width:30px;" src="images/rotateRight.png" onclick="doRotate(90)" alt="Rotate Right" title="Rotate Right"/>
				<td>
					<img style="cursor:pointer;width:30px;" src="images/horizontalFlip.gif" onclick="doFlip()" alt="Flip" title="Flip"/>
				</td>
			</tr></table>
		</div>
		
		<img style="float:right;padding-top:15px;padding-right:25px;" class="question" src="images/question.png" title="<?php echo $DESC_QUALITY;?>"/>
		<div style="width:300px;">
			<div id="qa" style="font-size:12px;border-left-style:solid;border-width:normal;border-color:green;text-align:left;margin-left:144px;white-space: nowrap;
">Image Quality</div>
			<img src="images/quality.png" style="width:300px;height:25px;float:left"/><br>
			<div style="font-size:12px;border-left-style:solid;border-width:normal;border-color:blue;text-align:left;margin-left:144px">Quality Guaranteed</div>
		</div>
		<div id="qualityWarning"><img src="images/sad-face.jpg" style="font-size:12px;float:left;height:50px;"/><i>Your selected canvas size is too big for your image. <br>You can proceed but the quality is not guaranteed.</i></div>

	</td>
	</tr>
	
	

	
	</table>
	
	<div class="marginClass" id='lefttop'></div><div class="marginClass" id='leftbottom'></div><div class="marginClass" id='righttop'></div><div class="marginClass" id='rightbottom'></div>
	<div class="marginClass" id='marginleft'></div><div class="marginClass" id='marginright'></div><div class="marginClass" id='margintop'></div><div class="marginClass" id='marginbottom'></div>
	
	<div style="display:none">
		<br><img id="qa1" src="images/arrow.png" style="float:left;padding-left:150px">
	</div>
</div>
<div id="stepSummary">
		<div class="steps">
			Step 3 of 3 - CANVAS SUMMARY AND ORDER
		</div>
		<div id="roomSummary" valign="bottom" align="center">
			<input type="button" value="Back to Edit" onclick="doStep2();" style="float:right">
			<div class="roomSize">
				<fieldset>
					<legend>Order Summary</legend>
					<table align="center" class="previewSize">
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
					<tr>
						<td>
							Colour
						</td>
						<td id="previewEffects">
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
						<td>
							Picture Filename
						</td>
						<td id="previewFilename">
						</td>
					</tr>
					<tr>
						<td colspan="2" align="left">
							Comments
						</td>
					</tr>
					<tr>
						<td colspan="2" align="left">
							<span style="white-space:normal;font-weight:normal;font-size:80%">Please let us know if you have any special requirements i.e. want us to edit your photo, delete date stamp, or have any other notes with regards to your order.</span><br/>
							<textarea rows="6" cols="30" style="width:250px" id="comments"></textarea>
						</td>
					</tr>
					<tr>
						<td nowrap="true" colspan="2" align="left">
							Printed&nbsp;proof&nbsp;required(+&pound;<?php echo $proofPrice;?>)&nbsp;&nbsp;&nbsp;<input onchange="doUpdateProofPrice(this)" type="checkbox" id="proofId" value="<?php echo $proofPrice;?>"/>
						</td>
					</tr>
					<tr>
						<td colspan="2" align="left">
					<span style="white-space:normal;font-weight:normal;font-size:80%">
					We will produce two A4 proofs showing the whole image and also a section in 1:1 scale of your chosen size on selected media. Usually despatched same day
						</td>
					</tr>
					</table>
				</fieldset>
			
				<div style="padding-top:20px;"><input style="font-weight:bold;color:black;font-size:15px;" type="button" value="Preview" onclick="doShowRoom();">&nbsp;&nbsp;&nbsp;<input style="font-weight:bold;color:blue;font-size:15px;" id="btnSummary" type="button" value="Add to Cart"></div>
			</div>
			<div id="objImage1" align="left"><img onload="doPreviewLoadEnd();" style="position:relative" id="roomImage1" src=""/></div>

		</div>
</div>
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

<div id="colorPickArea" style="display:none">&nbsp;</div>

<form name="frmOrder" id="frmOrder" action="order.php" method="get">
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
</form>

<div id="loadingId" style="display:none;position:absolute"><img src="images/loadingbar.gif" /></div>

</body>
</html>