<?php if(!defined('BASEPATH')) die('You are not allowed to access this page');?>
<?php
	if($_POST['update']){
		extract(html_entities($_POST));
		$myCart = $_SESSION['myCart'];
		if(count($myCart) > 0){
			foreach($myCart as $i=>$cart){
				$harga	= $cart['harga'];
				$diskon = $cart['diskon'];
				$subtotal = $myQty[$i] * ($harga - (($harga * $diskon)/100));
				$_SESSION['myCart'][$i]['qty'] = $myQty[$i];
				$_SESSION['myCart'][$i]['subtotal'] = $subtotal;
			}
		}
		$_SESSION['msg'] = '<div class="success">Berhasil mengupdate keranjang belanja..</div>';
		header("Location: index.php?p=cart");
		exit();
	}
	
?>
<div class="wrapRegister wrapHomeDetail">
	<h3>Keranjang Belanja</h3>
    <div class="clr"></div>
    <div style="height:20px;">
    <img src="images/indicator.gif" width="18" class="imgLoading" style="display:none;">
    </div>
    <form action="" method="post" id="formCart" name="formCart" onsubmit="return validateForm('formCart');">
   	<table width="720" border="0" cellpadding="3" cellspacing="1" bgcolor="#CCCCCC">
      <tr>
        <td width="24" align="center" bgcolor="#EEEEEE">No.</td>
        <td width="46" align="center" bgcolor="#EEEEEE">Thumb</td>
        <td width="173" align="center" bgcolor="#EEEEEE">Nama</td>
        <td width="173" align="center" bgcolor="#EEEEEE">Pilihan</td>
        <td width="81" align="center" bgcolor="#EEEEEE">Harga</td>
        <td width="46" align="center" bgcolor="#EEEEEE">Diskon</td>
        <td width="46" align="center" bgcolor="#EEEEEE">Qty</td>
        <td width="46" align="center" bgcolor="#EEEEEE">Satuan</td>
        <td width="88" align="center" bgcolor="#EEEEEE">Total</td>
        <td width="40" align="center" bgcolor="#EEEEEE">Hapus</td>
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
        <td align="center" bgcolor="#FFFFFF"><img class="img-responsive" src="<?php echo $row['gambar'] ?>" alt=""></td> 
        <td align="center" bgcolor="#FFFFFF"><a target="_blank" href="?p=productdetail&id=<?php echo $row['id'];?>"><?php echo $row['nama'];?></a></td> 
        <td align="center" bgcolor="#FFFFFF"><?php echo $row['pilihan'];?></td>      
        <td align="right" bgcolor="#FFFFFF"><?php echo number_format($cart['harga']);?></td>
        <td align="center" bgcolor="#FFFFFF"><?php echo $cart['diskon'].'%';?></td>
        <td align="center" bgcolor="#FFFFFF">
        	<input type="text" name="myQty[<?php echo $cart['id'];?>]" class="input required number" 
            	value="<?php echo $cart['qty'];?>" min="1" max="20" style="width:20px; text-align:center;" />
        </td>
        <td align="center" bgcolor="#FFFFFF"><?php echo $row['satuan'];?></td>
        <td align="right" bgcolor="#FFFFFF"><?php echo number_format($cart['subtotal']);?></td>
        <td align="center" bgcolor="#FFFFFF">
        	<a href="javascript:void(0);" onClick="if(confirm('Hapus <?php echo $row['title'];?>?')) deleteCart(<?php echo $cart['id'];?>);">[D]</a>
        </td>
      </tr>
      <?php } ?>
      <tr>
        <td colspan="8" bgcolor="#EEEEEE">SUB TOTAL</td>
        <td align="right" bgcolor="#EEEEEE"><?php echo number_format($vTotal);?></td>
        <td align="center" bgcolor="#EEEEEE">&nbsp;</td>
      </tr>
      <?php } else { ?>
      <tr>
      <td colspan="10" align="center" bgcolor="#FFFFFF">
      	Record Not Available
      </td>
      </tr>
      <?php } ?>
  </table><br><br>
  <div class="clr"></div>
  <?php if(count($myCart) > 0):?>
  <input type="submit" value="Update Cart" class="button" name="update" />
  <a href="?p=checkout" class="button">Lanjutkan Pemesanan</a>
  <?php endif;?>
  </form>
</div>
<script type="text/javascript">
function deleteCart(id){
	jQuery('.imgLoading').show();
	jQuery.ajax({
		url		: 'ajax.php',
		data	: 'task=cartRemove&id='+id,
		type	: 'post',
		success	: function(msg){
			window.location.reload();
		}
	});
}
</script>