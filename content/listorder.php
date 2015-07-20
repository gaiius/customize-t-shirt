<?php if(!defined('BASEPATH')) die('You are not allowed to access this page');
if($_SESSION['member']==true){
	//get record selected	
	$resQry = "SELECT a.* FROM `order` a WHERE 
		member_id='".$_SESSION['id']."' AND `status` > 0
		ORDER BY id DESC";
	$results = mysql_query($resQry);
	$countResults = mysql_num_rows($results);
?>
<div class="wrapRegister clr">
<h3>Daftar Order</h3>

<table width="720" border="0" cellpadding="5" cellspacing="1" bgcolor="#CCCCCC">
  <thead>
    <tr>
      <td width="5%" align="center" bgcolor="#EEEEEE">No</td>
      <td width="16%" align="center" bgcolor="#EEEEEE">No. Invoice</td>
      <td width="26%" align="center" bgcolor="#EEEEEE">Total Biaya</td>
      <td width="19%" align="center" bgcolor="#EEEEEE">Tgl Order</td>
      <td width="23%" align="center" bgcolor="#EEEEEE">Status</td>
      <td width="11%" align="center" bgcolor="#EEEEEE">Tools</td>
    </tr>
  </thead>
  <tbody>
    <?php
	if($countResults > 0){  
		$i = 1;
		while($r = mysql_fetch_array($results)){
	?>
    <tr>
      <td align="center" valign="top" bgcolor="#FFFFFF"><?php echo $i;?></td>
      <td align="center" valign="top" bgcolor="#FFFFFF"><?php echo $r['no_order'];?></td>
      <td align="right" valign="top" bgcolor="#FFFFFF"><?php echo number_format($r['total_order']);?></td>
      <td align="center" valign="top" bgcolor="#FFFFFF"><?php echo showDateTime($r['tgl_order']);?></td>
      <td align="center" valign="top" bgcolor="#FFFFFF"><?php echo $r['status']==2?'COMPLETED':($r['status']==1?'PENDING':'CANCELLED');?></td>
      <td align="center" valign="top" bgcolor="#FFFFFF">
      <a href="?p=orderdetail&id=<?php echo $r['id'];?>" title="View Detail">[Lihat]</a>      </td>
    </tr>
    <?php $i++; }
	
	} else  {
    ?>
    <tr>
      <td colspan="6" align="center" bgcolor="#FFFFFF">Record Not Available</td>
    </tr>
    <?php } ?>
  </tbody>
</table>
</div>
<script type="text/javascript">
function printOrder(id){
	openFancybox('tmpl/orderPrintout.php?id='+id,900,600);
}
</script>
<?php } else {
	header("Location: index.php");
	exit();
} ?>