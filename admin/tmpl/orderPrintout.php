<?php 
	include_once('../../include/config.php');
	include_once('../../include/function.php');
	
	$doSql = "SELECT a.*, b.nama_lengkap, b.telepon 
		FROM `order` a 
		LEFT JOIN member b ON b.id=a.member_id
		WHERE a.id='".$_GET['id']."'";
	$doQry = mysql_query($doSql);
	$r = mysql_fetch_array($doQry);
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Cetak Order</title>
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
<table width="880" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td width="860" style="border-bottom:solid 1px #ccc; padding-bottom:10px;"><small>Print : <?php echo date('d M y, H:i:s');?></small><br />
      <div style="font-size:22px; font-weight:bold;" align="center">DETAIL ORDER</div></td>
  </tr>
  <tr>
    <td style="padding:10px 0; border-bottom:solid 1px #ccc; padding-bottom:10px;"><table width="880" border="0" cellspacing="0" cellpadding="2">
      <tr>
        <td width="171" align="left" valign="top">No. Order</td>
        <td width="6" align="left" valign="top">:</td>
        <td width="213" align="left" valign="top"><?php echo $r['no_order'];?>&nbsp;</td>
        <td width="123" align="left" valign="top">Nama Member</td>
        <td width="3" align="left" valign="top">:</td>
        <td width="341" align="left" valign="top"><?php echo $r['nama_lengkap'];?>&nbsp;</td>
      </tr>
      <tr>
        <td align="left" valign="top">Tanggal Order</td>
        <td align="left" valign="top">:</td>
        <td align="left" valign="top"><?php echo showDateTime($r['tgl_order']);?>&nbsp;</td>
        <td align="left" valign="top">Telepon</td>
        <td align="left" valign="top">:</td>
        <td align="left" valign="top"><?php echo $r['telepon'];?>&nbsp;</td>
      </tr>
      <tr>
        <td align="left" valign="top">Status </td>
        <td align="left" valign="top">:</td>
        <td align="left" valign="top"><?php echo $r['status']==2?'COMPLETED':($r['status']==1?'PENDING':'CANCELLED');?>&nbsp;</td>
        <td align="left" valign="top">Catatan</td>
        <td align="left" valign="top">:</td>
        <td align="left" valign="top"><?php echo $r['catatan'];?>&nbsp;</td>
      </tr>
    </table></td>
  </tr>
  <tr>
    <td style="padding-top:10px;"><br />
     <table width="880" cellpadding="5" cellspacing="1" bgcolor="#CCCCCC" id="tableDetail">
  <thead>
    <tr>
      <td width="172" align="center" bgcolor="#EEEEEE">Nama Produk</td>
      <td width="137" align="center" bgcolor="#EEEEEE">Pilihan</td>
      <td width="115" align="center" bgcolor="#EEEEEE">Harga</td>
      <td width="63" align="center" bgcolor="#EEEEEE"> Disc (%)</td>
      <td width="110" align="center" bgcolor="#EEEEEE">Total</td>
      <td width="65" align="center" bgcolor="#EEEEEE">Qty</td>
      <td width="138" align="center" bgcolor="#EEEEEE">Sub Total</td>
      </tr>
    </thead>
    <tbody>
    <?php
	$dQry = "SELECT a.*, b.nama, b.gambar,
		(SELECT c.nama FROM produk_atribut c WHERE c.id=a.atribut_id) pilihan 
		FROM order_detail a 
		LEFT JOIN produk b ON b.id=a.produk_id
		WHERE a.order_id='".$r['id']."'";
	$dRes = mysql_query($dQry); 
	while($row = mysql_fetch_array($dRes)){
	$vTotal = $row['harga'] - (($row['diskon'] /100)* $row['harga']); 
	?>
    <tr>
      <td bgcolor="#FFFFFF"><?php echo $row['nama'];?></td>
      <td align="center" bgcolor="#FFFFFF"><?php echo $row['pilihan']==''?'-':$row['pilihan'];?></td>
      <td align="right" bgcolor="#FFFFFF"><?php echo number_format($row['harga']);?></td>
      <td align="center" bgcolor="#FFFFFF"><?php echo $row['diskon']."%";?></td>
      <td align="right" bgcolor="#FFFFFF"><?php echo number_format($vTotal);?></td>
      <td align="center" bgcolor="#FFFFFF"><?php echo $row['qty'];?></td>
      <td align="right" bgcolor="#FFFFFF"><?php echo number_format($row['subtotal']);?></td>
      </tr>
      <?php } ?>
      <tr>
      <td colspan="6" align="left" bgcolor="#F5F5F5">Total Order</td>
      <td align="right" bgcolor="#F5F5F5"><?php echo number_format($r['total_order']);?></td>
      </tr>
    </tbody>
  </table>
    </td>
  </tr>
  <tr>
    <td>&nbsp;</td>
  </tr>
</table>
</body>
</html>
<?php if($_GET['print']!='no'){?>
<script>window.print();</script>
<?php } ?>