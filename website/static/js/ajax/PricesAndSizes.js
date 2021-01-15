    // =============================================
	// Change from Inch to CM - Vise Versa
	// Detects if CM or Inch Radio button has been clicked in the HTML page
	// =============================================
	$('input[type=radio][name=radSize]').change(function() {
	    var cmbWidth = $("#cmbWidth option:selected").val();
	    var cmbHeight = $("#cmbHeight option:selected").val();

		console.log (this.value, cmbWidth);
		updateDropDown("Width", this.value, cmbWidth);
		console.log (this.value, cmbHeight);
		updateDropDown("Height", this.value, cmbHeight);
	});

    // =============================================
    //Detects change in Width Dropdown
    // =============================================
	$('#cmbWidth').change(function(e){
	    updateDropDown($('#cmbWidth').val(), $('#cmbHeight').val());
	});

    // =============================================
    //Detects change in Height Dropdown
    // =============================================
	$('#cmbHeight').change(function(){
	    updateDropDown($('#cmbWidth').val(), $('#cmbHeight').val());
	});

    // =============================================
	// Change from Standard to Premium - Vise Versa - ORDERING SYSTEM Step 2 **********
	// =============================================
	$('input[type=radio][name=radMaterial]').change(function() {
	    var m = $('input[type=radio][name=radMaterial]:checked').val();
	    var cmbWidth = $("#cmbWidthOrder option:selected").val();
	    var cmbHeight = $("#cmbHeightOrder option:selected").val();
	    var p = $("#cmbProof option:selected").val();

		console.log ('*********** ds Material: ' + m);
		updateCost(cmbWidth, cmbHeight, m, p);
	});

	$('#cmbProof').change(function(){
        var m = $('input[type=radio][name=radMaterial]:checked').val();
	    var w = $("#cmbWidthOrder option:selected").val();
	    var h = $("#cmbHeightOrder option:selected").val();
	    var p = $("#cmbProof option:selected").val();

        updateCost(w, h, m, p);
    });

    // =============================================
    // Determines if Inch or CMs is selected - returns String value "Inch/Cm"
    // =============================================
	function getMetric(){
	    var ele = document.getElementsByName('radSize');

        for(i = 0; i < ele.length; i++)
            if(ele[i].checked)
                return ele[i].value;

	}


    // =============================================
    // Combined function once H/W Dropdown has been changed - call then to Ajax to Update Cost to user screen.
	// =============================================
	function updateDropDown(w, h, m = false){
		//console.log ("Function: JS updateDropDown..." + $('#cmbWidth').val());
		if (m == false){
		    updateCost(w, h);
		}else{
		    var m = $('input[type=radio][name=radMaterial]:checked').val();
		    var p = $("#cmbProof option:selected").val();
		    updateCost(w, h, m, p);
		}
	}

    // =============================================
    // Updates the cost to the user screen - Material Type is for Ordering system when only required to show
    // Standard or Premium Pricing
    // =============================================
	function updateCost(w, h, materialType = false, proof=false){
		var data = "&w=" + w + "&h=" + h;
		var cost;

		$.ajax({
		    url: '/getPrices/',
		    type: 'GET',
		    data: data,
		    dataType: 'json',
		    success: function(data){

                console.log ('******** Material Tyoe: ', materialType);

		        if (materialType){
		            if (materialType == 'Premium') cost = parseInt(data.Premium);
                    if (materialType == 'Standard') cost = parseInt(data.Standard);

                    console.log ('******** PROOF: ', cost + ' ' + proof);

                    if (cost < 100){
                         $('#proofcost').html('<strong>Proof:</strong><span class="highlight">£8</span>');
                        if (proof == 1) {
                            cost = cost + 8;
                        }
                    }else{
                        $('#proofcost').html('<strong>Proof:</strong><span class="highlight">Free</span>');
                    }
                }

                if (materialType == "") {
                    $('#StandardPrice').html('<span class="price-unit">&pound;</span>' + data.Standard);
                    $('#PremiumPrice').html('<span class="price-unit">&pound;</span>' + data.Premium);
                }else if (materialType == 'Premium') {
                    $('#Price').html('<span class="price-unit">&pound;</span>' + cost);
                    $('#Cost').val(cost);
                    $("input[name*='canvasCost']").val(cost);
                }else{
                    $('#Price').html('<span class="price-unit">&pound;</span>' + cost);
                    $('#Cost').val(cost);
                    $("input[name*='canvasCost']").val(cost);
                    console.log ('Standard Cost:' + cost);
                }
                if (materialType != "") {
                    $('#canvasMaterial').val(materialType);
                    $("input[name*='canvasMaterial']").val(materialType);
                }


            }
        });
	}

	// =============================================
    // Determines if Inch or CMs is selected - returns String value "Inch/Cm"
    // =============================================
	function populateCmbDimensions(cmb, Metric){
	    var data = "&Metric=" + Metric;
	    $.ajax({
		    url: '/getCmbDimensions/',
		    type: 'GET',
		    data: data,
		    dataType: 'json',
		    success: function(data){
                //$('#' + cmb).html(data.data);
                //console.log ("Return: " + data.data);
            },
            error : function(xhr) {
                console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
            }
        });
	}


