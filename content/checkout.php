<?php if(!defined('BASEPATH')) die('You are not allowed to access this page');?>
<?php if($_SESSION['member']==true and count($_SESSION['myCart']) > 0){
	if($_POST['doOrder']){
		extract($_POST);
		$cartTotal = cartCountTotalItems();
		$member_id = $_SESSION['id'];
		$no_order  = getOrderNumber();
		
		$qry = "INSERT INTO `order` (no_order, tgl_order, member_id, total_order, catatan, `status`)
			VALUES ('".$no_order."', NOW(), '".$member_id."', '".$cartTotal."', '".$catatan."', 1)";
		$res = mysql_query($qry);
		$ids = mysql_insert_id();
		
		if(mysql_affected_rows() > 0){
			$myCart = $_SESSION['myCart'];
			if(count($myCart) > 0){
				foreach($myCart as $i=>$cart){
					$qry2 = "INSERT INTO order_detail(order_id, produk_id, 
						atribut_id, satuan, harga, diskon, qty, subtotal) VALUES
						('".$ids."', '".$i."', '".$cart['atribut_id']."',
						'".$cart['satuan']."', '".$cart['harga']."','".$cart['diskon']."', 
						'".$cart['qty']."', '".$cart['subtotal']."')";
					mysql_query($qry2);
				}
			}
			
			$msg = 'Pesanan anda akan kami proses, silahkan cek email anda untuk melihat detail order';
			unset($_SESSION['myCart']);
			if(sendmail_order($ids)) $msg.= ', Email berhasil dikirim'; 
			$_SESSION['msg'] = '<div class="success">'.$msg.'</div>';
			header("Location: index.php?p=orderdetail&id=".$ids);
		} else {
			header("Location: index.php?p=checkout");
			exit();
		}	
	}
?>
<div class="wrapRegister wrapHomeDetail">
<h3>Konfirmasi Order</h3>
<div class="clr"></div>
<p>Pastikan data produk yang akan anda pesan benar :</p>
<form action="" method="post" name="formCheckout" onSubmit="return validateForm('formCheckout');">
	<table width="720" border="0" cellpadding="3" cellspacing="1" bgcolor="#CCCCCC">
      <tr>
        <td width="24" align="center" bgcolor="#EEEEEE">No.</td>
        <td width="173" align="center" bgcolor="#EEEEEE">Nama</td>
        <td width="173" align="center" bgcolor="#EEEEEE">Pilihan</td>
        <td width="81" align="center" bgcolor="#EEEEEE">Harga</td>
        <td width="46" align="center" bgcolor="#EEEEEE">Diskon</td>
        <td width="46" align="center" bgcolor="#EEEEEE">Qty</td>
        <td width="46" align="center" bgcolor="#EEEEEE">Satuan</td>
        <td width="88" align="center" bgcolor="#EEEEEE">Total</td>
      </tr>
    <?php
		$myCart = $_SESSION['myCart'];
		if(count($myCart) > 0){
			$no = $vTotal =0;
		foreach($myCart as $i=>$cart){
			$no++;
			$vTotal = $vTotal + $cart['subtotal'];
			$sql = "SELECT a.*, 
				(SELECT nama FROM produk_atribut WHERE id='".$cart['atribut_id']."' AND produk_id=a.id) pilihan
				FROM produk a WHERE a.id='".$cart['id']."'";
			$qry = mysql_query($sql);
			$row = mysql_fetch_array($qry);
		?>
	  <tr>
        <td align="center" bgcolor="#FFFFFF"><?php echo $no;?></td>
        <td align="center" bgcolor="#FFFFFF"><a target="_blank" href="?p=productdetail&id=<?php echo $row['id'];?>"><?php echo $row['nama'];?></a></td> 
        <td align="center" bgcolor="#FFFFFF"><?php echo $row['pilihan'];?></td>      
        <td align="right" bgcolor="#FFFFFF"><?php echo number_format($cart['harga']);?></td>
        <td align="center" bgcolor="#FFFFFF"><?php echo $cart['diskon'].'%';?></td>
        <td align="center" bgcolor="#FFFFFF"><?php echo $cart['qty'];?></td>
        <td align="center" bgcolor="#FFFFFF"><?php echo $row['satuan'];?></td>
        <td align="right" bgcolor="#FFFFFF"><?php echo number_format($cart['subtotal']);?></td>
      </tr>
      <?php } ?>
      <tr>
        <td colspan="7" bgcolor="#EEEEEE">SUB TOTAL</td>
        <td align="right" bgcolor="#EEEEEE"><?php echo number_format($vTotal);?></td>
      </tr>
      <?php } else { ?>
      <tr>
      <td colspan="8" align="center" bgcolor="#FFFFFF">
      	Record Not Available      </td>
      </tr>
      <?php } ?>
  </table>
	<br><br>
  <p>Pastikan data alamat anda sudah benar, karena data ini akan kami gunakan alamat pengiriman. <br />
    Edit akun anda jika data diri anda belum benar.</p>
  <p><a href="?p=editmember&direct=<?php echo urlencode('index.php?p=checkout');?>" class="button">Klik disini</a></p>
  <div class="clr"></div>
  <p>Pastikan anda telah mengetahui syarat &amp; ketentuan yang berlaku. <a href="?p=caraorder" target="_blank">Baca disini</a></p>
  <p>Catatan untuk admin :</p>
  <textarea name="catatan" id="catatan" class="input"></textarea><br>
  <input type="submit" class="button" name="doOrder" value="Lanjutkan Order ke Transaksi">
</form>
</div>
<?php } else { 
	$_SESSION['msg'] = '<div class="error"><strong>Silahkan login sebagai member</strong> dan pastikan cart tidak kosong</div>';
	header("Location: index.php?p=login&direct=".urlencode('index.php?p=checkout'));
	exit();
} ?>