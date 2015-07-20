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
      <div style="font-size:22px; font-weight:bold;" align="center">REKAP DETAIL PENJUALA ITEM (<?php echo showDate($startdate);?> s/d <?php echo showDate($enddate);?>)</div></td>
  </tr>
  
  <tr>
    <td><table width="1100" border="0" cellpadding="3" cellspacing="1" bgcolor="#CCCCCC">
      <tr>
        <td width="37" align="center" bgcolor="#EEEEEE">No.</td>
        <td width="79" align="center" bgcolor="#EEEEEE">Kode</td>
        <td width="120" align="center" bgcolor="#EEEEEE">Kategori</td>
        <td width="208" align="center" bgcolor="#EEEEEE">Nama Produk</td>
        <td width="173" align="center" bgcolor="#EEEEEE">Pilihan</td>
        <td width="89" align="center" bgcolor="#EEEEEE">Satuan</td>
        <td width="126" align="center" bgcolor="#EEEEEE">Harga</td>
        <td width="91" align="center" bgcolor="#EEEEEE">Diskon</td>
        <td width="113" align="center" bgcolor="#EEEEEE">Qty Terjual</td>
        </tr>
    <?php	
	$detQry = "SELECT c.kode, c.nama, 
			IF(ISNULL(d.nama),'-',d.nama) pilihan,
			b.harga, b.diskon, SUM(b.qty) qty_terjual,
			(SELECT nama FROM kategori WHERE id=c.kategori_id) `kategori`  
		FROM `order` a 
		LEFT JOIN order_detail b ON b.order_id=a.id
		LEFT JOIN produk c ON c.id=b.produk_id
		LEFT JOIN produk_atribut d ON (
			d.produk_id=b.produk_id AND d.id=b.atribut_id
		) 
		WHERE a.`status` = 2
		AND a.tgl_order >= '".$startdate."' 
		AND a.tgl_order <= '".$enddate."'
		GROUP BY b.produk_id, b.atribut_id
		ORDER BY qty_terjual DESC";
		//echo $detQry;
	$resQry = mysql_query($detQry);
	if(mysql_num_rows($resQry) > 0){
		$no = $vQty = 0;
		while($row = mysql_fetch_array($resQry)){
		$no++;
		$vQty = $vQty + $row['qty_terjual'];
		?>
      <tr>
        <td align="center" bgcolor="#FFFFFF"><?php echo $no;?></td>
        <td align="center" bgcolor="#FFFFFF"><?php echo $row['kode'];?></td>
        <td align="center" bgcolor="#FFFFFF"><?php echo $row['kategori'];?></td>
        <td align="left" bgcolor="#FFFFFF"><?php echo $row['nama'];?></td>
        <td align="left" bgcolor="#FFFFFF"><?php echo $row['pilihan'];?></td>
        <td align="center" bgcolor="#FFFFFF"><?php echo $row['satuan'];?></td>
        <td align="right" bgcolor="#FFFFFF"><?php echo number_format($row['harga']);?></td>
        <td align="center" bgcolor="#FFFFFF"><?php echo $row['diskon'].'%';?></td>
        <td align="center" bgcolor="#FFFFFF"><?php echo $row['qty_terjual'];?></td>
        </tr>
      <?php } ?>
      <tr>
        <td colspan="8" bgcolor="#FFFFFF">TOTAL QTY TERJUAL</td>
        <td align="center" bgcolor="#FFFFFF"><?php echo ($vQty);?></td>
        </tr>
      <?php } else { ?>
      <tr>
      <td colspan="9" align="center" bgcolor="#FFFFFF">
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