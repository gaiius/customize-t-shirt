<?php 
	error_reporting(0);
	include_once('../../include/config.php');
	include_once('../../include/function.php');
	$status = "";
	extract($_GET);
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Cetak Laporan Order</title>
<style type="text/css">
<!--
body,td,th {
	font-family: Arial, Helvetica, sans-serif;
	font-size: 12px;
	color: #666666;
}
body {
	background-color: #FFFFFF;
}
-->
</style></head>

<body>
<table width="1100" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td width="860" style="padding-bottom:10px;"><small>Print : <?php echo date('d M y, H:i:s');?></small><br />
      <div style="font-size:22px; font-weight:bold;" align="center">REKAP LAPORAN (<?php echo showDate($startdate);?> s/d <?php echo showDate($enddate);?>)</div></td>
  </tr>
  
  <tr>
    <td><table width="1100" border="0" cellpadding="3" cellspacing="1" bgcolor="#CCCCCC">
      <tr>
        <td width="35" align="center" bgcolor="#EEEEEE">No.</td>
        <td width="93" align="center" bgcolor="#EEEEEE">No. Order</td>
        <td width="97" align="center" bgcolor="#EEEEEE">Tgl. Order</td>
        <td width="294" align="center" bgcolor="#EEEEEE">Nama Member</td>
        <td width="115" align="center" bgcolor="#EEEEEE">Telepon</td>
        <td width="123" align="center" bgcolor="#EEEEEE">Total</td>
        <td width="178" align="center" bgcolor="#EEEEEE">Catatan</td>
        <td width="108" align="center" bgcolor="#EEEEEE">Status</td>
      </tr>
    <?php
	$where = "";
	if($status!='') $where.=" AND a.`status`='".$status."' ";
	
	$detQry = "SELECT a.*, b.nama_lengkap, b.telepon,
		(CASE a.`status` WHEN '2' THEN 'COMPLETED' WHEN '1' THEN 'PENDING'
		WHEN '-1' THEN 'CANCELLED' END) AS state 
		FROM `order` a
		LEFT JOIN `member` b ON b.id=a.member_id
		WHERE a.tgl_order >= '".$startdate."' 
		AND a.tgl_order <= '".$enddate."'
		".$where." ORDER BY a.id DESC";
		//echo $detQry;
	$resQry = mysql_query($detQry);
	if(mysql_num_rows($resQry) > 0){
		$no = $vTotal = $vQty = 0;
		while($row = mysql_fetch_array($resQry)){
		$no++;
		$vQty = $vQty + $row['qty'];
		$vTotal= $vTotal + $row['total_order'];
		?>
      <tr>
        <td align="center" bgcolor="#FFFFFF"><?php echo $no;?></td>
        <td align="center" bgcolor="#FFFFFF"><?php echo $row['no_order'];?></td>
        <td align="center" bgcolor="#FFFFFF"><?php echo showDate($row['tgl_order']);?></td>
        <td align="left" bgcolor="#FFFFFF"><?php echo $row['nama_lengkap'];?></td>
        <td align="center" bgcolor="#FFFFFF"><?php echo $row['telepon'];?></td>
        <td align="right" bgcolor="#FFFFFF"><?php echo number_format($row['total_order']);?></td>
        <td align="left" bgcolor="#FFFFFF"><?php echo $row['catatan'];?></td>
        <td align="center" bgcolor="#FFFFFF"><?php echo $row['state'];?></td>
      </tr>
      <?php } ?>
      <tr>
        <td colspan="5" bgcolor="#FFFFFF">SUB TOTAL</td>
        <td align="right" bgcolor="#FFFFFF"><?php echo number_format($vTotal);?></td>
        <td align="center" colspan="2" bgcolor="#FFFFFF">&nbsp;</td>
      </tr>
      <?php } else { ?>
      <tr>
      <td colspan="8" align="center" bgcolor="#FFFFFF">
      	Record Not Available      </td>
      </tr>
      <?php } ?>
    </table></td>
  </tr>
  <tr>
    <td>&nbsp;</td>
  </tr>
</table>
<script>window.print();</script>
</body>
</html>