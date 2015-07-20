<?php if(!defined('BASEPATH')) die('You are not allowed to access this page'); ?>
<?php
if($_SESSION['member']==true){
	$doSql = "SELECT a.*,
		(SELECT nama_lengkap FROM member WHERE id=a.member_id) `member` 
		FROM `order` a WHERE a.id='".$_GET['id']."'";
	$doQry = mysql_query($doSql);
	$r = mysql_fetch_array($doQry);
?>
<div class="wrapRegister clr">
<h3>Detail Order</h3>

  <table width="700" border="0" cellspacing="0" cellpadding="5">
    <tr>
      <td width="226"><strong>No. Order</strong></td>
      <td width="8"><strong>:</strong></td>
      <td width="672"><strong><?php echo $r['no_order'];?></strong></td>
    </tr>
    
    <tr>
      <td width="226">Pembeli / Member</td>
      <td width="8">:</td>
      <td width="672"><?php echo $r['member'];?></td>
    </tr>
    
    <tr>
      <td width="226">Catatan</td>
      <td width="8">:</td>
      <td width="672">
      <?php echo $r['catatan'];?></td>
    </tr>
    <tr>
      <td>Tanggal Order</td>
      <td>:</td>
      <td><?php echo showDateTime($r['tgl_order']);?></td>
    </tr>
    
    <tr>
      <td>Status</td>
      <td>:</td>
      <td><?php echo $r['status']==2?'COMPLETED':($r['status']==1?'PENDING (WAIT PAYMENT)':'CANCELLED');?></td>
    </tr>
  </table>
  <hr />

  <table width="720" cellpadding="5" cellspacing="1" bgcolor="#CCCCCC" id="tableDetail">
  <thead>
    <tr>
      <td width="42" align="center" bgcolor="#EEEEEE">Picture</td>
      <td width="115" align="center" bgcolor="#EEEEEE">Nama Produk</td>
      <td width="108" align="center" bgcolor="#EEEEEE">Pilihan</td>
      <td width="83" align="right" bgcolor="#EEEEEE">Harga</td>
      <td width="56" align="center" bgcolor="#EEEEEE"> Disc (%)</td>
      <td width="88" align="right" bgcolor="#EEEEEE">Total</td>
      <td width="46" align="center" bgcolor="#EEEEEE">Qty</td>
      <td width="91" align="right" bgcolor="#EEEEEE">Sub Total</td>
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
      <td align="center" bgcolor="#FFFFFF"> <img src="<?php echo $row['gambar'] ?>" alt=""></td>
      <td align="center" bgcolor="#FFFFFF"><?php echo $row['nama'];?></td>
      <td align="center" bgcolor="#FFFFFF"><?php echo $row['pilihan']==''?'-':$row['pilihan'];?></td>
      <td align="right" bgcolor="#FFFFFF"><?php echo number_format($row['harga']);?></td>
      <td align="center" bgcolor="#FFFFFF"><?php echo $row['diskon']."%";?></td>
      <td align="right" bgcolor="#FFFFFF"><?php echo number_format($vTotal);?></td>
      <td align="center" bgcolor="#FFFFFF"><?php echo $row['qty'];?></td>
      <td align="right" bgcolor="#FFFFFF"><?php echo number_format($row['subtotal']);?></td>
      </tr>
      <?php } ?>
      <tr>
      <td align="left" colspan="7" bgcolor="#F5F5F5">Total Order</td>
      <td align="right" bgcolor="#F5F5F5"><?php echo number_format($r['total_order']);?></td>
      </tr>

    </tbody>
  </table>
  <br />
  <input type="button" value="Kembali" class="button" onclick="window.location='index.php?p=listorder';" />
  <input type="button" value="Cetak" class="button" onclick="cetakOrder();" />
</div>
<script type="text/javascript">
function cetakOrder(){
	<?php if($r['status']=='2'):?>
	openFancybox('tmpl/orderPrintout.php?id=<?php echo $r['id'];?>',900,600);
	<?php else: ?>
	alert('Order dengan status completed yang bisa dicetak!');
	<?php endif;?>
}
</script>
<?php } else {
	header("Location: index.php");
	exit();
} ?>