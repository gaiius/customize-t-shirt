// open standar popup
var grid;
var myWindow;
var $halaman;
function wPopUp(url,vWidth,vHeight) {
	var width = vWidth;
	var height = vHeight;
	var left = parseInt((screen.availWidth/2) - (width/2));
	var top = parseInt((screen.availHeight/2) - (height/2));
	//scrollbars,resizable,status,toolbar,menubar
	var windowFeatures = "width=" + width + ",height=" + height + 
	",left=" + left + ",top=" + top + ", screenX=" + left + ",screenY=" + top + 
	",scrollbars,status,resizable";
	myWindow = window.open(url, "", windowFeatures);
	myWindow.focus();
	return true;
}


// clear form
function clear_form(ele) {
  jQuery(ele).find(':input').each(function() {
    switch(this.type) {
      case 'password':
      case 'select-multiple':
      case 'select-one':
      case 'text':
      case 'textarea':
		jQuery(this).val('');
        break;
      case 'checkbox':
      case 'radio':
		this.checked = false;
    }
  });
}


// open dialog save & close
function openDialogSave($alamat,$judul,$lebar,$tinggi,$halaman, $callback){
	var rand = 'save-dialog'+Math.floor((Math.random()*1000)+3);
	var $dialog = jQuery("<div title='" + $judul + "'></div>");
	jQuery($dialog).dialog({
		modal:true,		
		height:$tinggi,
		dialogClass: rand,
		width:$lebar,	
		open: function ()
			{ jQuery(this).load($alamat); },
		buttons: {
			'Close': function() {			
				jQuery(this).dialog('close');
			},
			'Save': function() {
				//bypass validation if halaman kosong
				if($halaman != undefined) {
					if(validateForm($halaman)) {
						submitForm(jQuery(this).find('form'), rand, $dialog, true, $callback);
					}
				} else {
					submitForm(jQuery(this).find('form'), rand, $dialog, true, $callback);
				}
			}
		},
		close: function(ev, ui) {
			jQuery(this).load(OEmpty);
		}
 	});
}



function openDialogDelete($alamat,$judul,$lebar,$tinggi, $callback){
	var rand = 'delete-dialog'+Math.floor((Math.random()*1000)+3);
	var $dialog = jQuery("<div title='" + $judul + "'></div>"); 
	jQuery($dialog).dialog({
		modal:true,
		height:$tinggi,
		dialogClass: rand,
		width:$lebar,	
		open: function ()
			{ 
				jQuery(this).load($alamat);
				jQuery('.ui-dialog-buttonpane').find('button:contains("Delete")').addClass('ui-state-error');
			},
		buttons: {
			'Close': function() {
				jQuery(this).dialog('close');
			},
			'Delete': function() {
				submitForm(jQuery(this).find('form'), rand, $dialog, true, $callback);				
			}
		},
	  close: function(ev, ui) { 
			jQuery(this).load(OEmpty);
		}
 	});
}

function openFancybox($url, $width, $height){
	jQuery.fancybox({
		"titleShow"		: false,
		"overlayColor"	: "#666666",
		"overlayOpacity": 0.3,
		"type"			: "iframe",
		"padding"		: 10,
		"width"			: $width,
		"height"		: $height,
		"href"			: $url
	});	
}



function submitForm(form, rand, $dialog, destroy, $callback) {
	tinymce.triggerSave();
	form = jQuery(form);
	//alert(form.serialize());
	jQuery('.'+rand+' .ui-dialog-buttonpane').find('button').attr("disabled", true).addClass("ui-state-disabled");
	jQuery('.'+rand+' .ui-dialog-buttonpane').append('<div class="loading"></div>');
	jQuery('.'+rand+' .ui-dialog-content').css({'opacity':0.5});
	jQuery('.'+rand+' .ui-dialog-titlebar').find('.ui-dialog-titlebar-close').hide();
	//alert(form.serialize());
	jQuery.ajax({
		url		: form.attr('action'),
	    data	: form.serialize(),
	    type	: form.attr('method'),
		dataType: 'json',
	    success	: function(data) {
			//show error
		  if(data.err){
			alert(data.message);
		  }
		  
		  jQuery('.'+rand+' .ui-dialog-buttonpane').find('button').attr("disabled", false).removeClass("ui-state-disabled");
		  jQuery('.'+rand+' .ui-dialog-titlebar').find('.ui-dialog-titlebar-close').show();
		  jQuery('.'+rand+' .ui-dialog-buttonpane').find('.loading').remove();
		  jQuery('.'+rand+' .ui-dialog-content').css({'opacity':1});
			
		  //if close popup
		  if(destroy == true){
			jQuery($dialog).dialog('close');
			jQuery($dialog).load(OEmpty);  
		  }
		  
		  if($callback != 'undefined') eval($callback);
		}
	});
	return false;
}

function doPricing($element){
	jQuery($element).priceFormat({
		prefix: '',
        suffix: '',
		centsSeparator: '.',
		thousandsSeparator: ',',
		limit: false,
		centsLimit: 0
	}).css('text-align','right');	
}

function validateForm(form){
	jQuery("form[name="+form+"]").validate({
		errorElement: "span",
		rules: {
          password: { minlength: 5 }, 
          cpassword: { equalTo: "#password", minlength: 5}
		}
	});	
	if(jQuery("form[name="+form+"]").valid()){
		return true;
	} else {
		return false;
	}
}