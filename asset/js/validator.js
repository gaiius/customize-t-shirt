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
function number_format(number, decimals, dec_point, thousands_sep) {
  //  discuss at: http://phpjs.org/functions/number_format/
  // original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
  // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // improved by: davook
  // improved by: Brett Zamir (http://brett-zamir.me)
  // improved by: Brett Zamir (http://brett-zamir.me)
  // improved by: Theriault
  // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // bugfixed by: Michael White (http://getsprink.com)
  // bugfixed by: Benjamin Lupton
  // bugfixed by: Allan Jensen (http://www.winternet.no)
  // bugfixed by: Howard Yeend
  // bugfixed by: Diogo Resende
  // bugfixed by: Rival
  // bugfixed by: Brett Zamir (http://brett-zamir.me)
  //  revised by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
  //  revised by: Luke Smith (http://lucassmith.name)
  //    input by: Kheang Hok Chin (http://www.distantia.ca/)
  //    input by: Jay Klehr
  //    input by: Amir Habibi (http://www.residence-mixte.com/)
  //    input by: Amirouche
  //   example 1: number_format(1234.56);
  //   returns 1: '1,235'
  //   example 2: number_format(1234.56, 2, ',', ' ');
  //   returns 2: '1 234,56'
  //   example 3: number_format(1234.5678, 2, '.', '');
  //   returns 3: '1234.57'
  //   example 4: number_format(67, 2, ',', '.');
  //   returns 4: '67,00'
  //   example 5: number_format(1000);
  //   returns 5: '1,000'
  //   example 6: number_format(67.311, 2);
  //   returns 6: '67.31'
  //   example 7: number_format(1000.55, 1);
  //   returns 7: '1,000.6'
  //   example 8: number_format(67000, 5, ',', '.');
  //   returns 8: '67.000,00000'
  //   example 9: number_format(0.9, 0);
  //   returns 9: '1'
  //  example 10: number_format('1.20', 2);
  //  returns 10: '1.20'
  //  example 11: number_format('1.20', 4);
  //  returns 11: '1.2000'
  //  example 12: number_format('1.2000', 3);
  //  returns 12: '1.200'
  //  example 13: number_format('1 000,50', 2, '.', ' ');
  //  returns 13: '100 050.00'
  //  example 14: number_format(1e-8, 8, '.', '');
  //  returns 14: '0.00000001'

  number = (number + '')
    .replace(/[^0-9+\-Ee.]/g, '');
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    s = '',
    toFixedFix = function (n, prec) {
      var k = Math.pow(10, prec);
      return '' + (Math.round(n * k) / k)
        .toFixed(prec);
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n))
    .split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '')
    .length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1)
      .join('0');
  }
  return s.join(dec);
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