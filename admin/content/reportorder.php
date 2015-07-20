<?php if(!defined('BASEPATH')) die('You are not allowed to access this page'); ?>
<span class="page-title">Rekap Laporan Order</span>
<div class="inner">
<form name="formReport">
  <table width="936" border="0" cellspacing="0" cellpadding="5">
    <tr>
      <td width="178">Dari Tanggal</td>
      <td width="16">:</td>
      <td width="712">
      	<input type="text" class="input required startdate" name="startdate" id="startdate" style="width:80px;" />      </td>
    </tr>
    
     <tr>
      <td width="178">Sampai Tanggal</td>
      <td width="16">:</td>
      <td width="712">
      	<input type="text" class="input required enddate" name="enddate" id="enddate" style="width:80px;" />      </td>
    </tr>
   
    <tr>
      <td>Status Order</td>
      <td>:</td>
      <td><select name="status" class="input" id="status" style="width:300px;">
      		<option value="">Semua status</option>
            <option value="2">COMPLETED</option>
            <option value="1">PENDING</option>
            <option value="-1">CANCELLED</option>
      </select></td>
    </tr>
  </table>
  </form>
  <input type="button" onclick="doReport();" value="Printout" class="button" />
<div class="clr"></div>
</div>
<script type="text/javascript">
function doReport(){
	if(validateForm('formReport')){
		var data = jQuery('form[name=formReport]').serialize();
		openFancybox('tmpl/orderReport.php?'+data,1120,600);
	}
}

jQuery('.startdate').datepicker({
	dateFormat: 'yy-mm-dd',
	changeMonth: true,
	changeYear: true,
	yearRange: "-100:+2",
	beforeShow : function(){
    	jQuery( this ).datepicker('option','maxDate', jQuery('.enddate').val() );
    }
});
	
jQuery('.enddate').datepicker({
	dateFormat: 'yy-mm-dd',
	changeMonth: true,
	changeYear: true,
	yearRange: "-100:+2",
    beforeShow : function(){
    	jQuery( this ).datepicker('option','minDate', jQuery('.startdate').val() );
    }
});
</script>