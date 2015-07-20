<?php if(!defined('BASEPATH')) die('You are not allowed to access this page'); ?>
<?php
	if($_POST){
		extract(html_entities($_POST));
		$Qry = "UPDATE `order` SET `status`='".$status."' WHERE id='".$id."'";
		$Res = mysql_query($Qry);
		if(mysql_affected_rows() > 0){
			$msg = "";
			if($status == 2 ){
				if(sendmail_confirm($id)) $msg.="dan mengirim email konfirmasi";
			} else {
				if(sendmail_cancel($id)) $msg.="dan mengirim email konfirmasi";
			}
			$message = "<div class='success'>berhasil mengupdate data order. ".$msg."</div>";
		} else {
			$message = "<div class='error'>".mysql_error()."</div>";
		}
		
		$_SESSION['msg'] = $message;
		header("Location: index.php?p=addOrder&id=".$id);
	}
	
	$doSql = "SELECT a.*,
		(SELECT nama_lengkap FROM member WHERE id=a.member_id) `member`
		FROM `order` a WHERE a.id='".$_GET['id']."'";
	$doQry = mysql_query($doSql);
	$r = mysql_fetch_array($doQry);
?>
<span class="page-title">Detail Order</span>
<div class="inner">
<form action="" method="post" name="formContent" id="formContent" onsubmit="return validateForm('formContent')">
<input type="hidden" name="id" value="<?php echo $r['id'];?>" />
  <table width="700" border="0" cellspacing="0" cellpadding="5">
    <tr>
      <td width="226">No. Order</td>
      <td width="8">:</td>
      <td width="672"><input name="no_order" type="text" class="input" value="<?php echo $r['no_order'];?>" disabled="disabled"/></td>
    </tr>
    
    <tr>
      <td width="226">Pembeli / Member</td>
      <td width="8">:</td>
      <td width="672"><input name="member" type="text" class="input" value="<?php echo $r['member'];?>" disabled="disabled"/>
        <a href="?p=edMember&id=<?php echo $r['member_id'];?>" target="_blank" class="button">Lihat</a></td>
    </tr>
    
    <tr>
      <td width="226">Catatan</td>
      <td width="8">:</td>
      <td width="672">
      
        <textarea name="catatan" class="input" id="catatan" disabled="disabled" cols="45" rows="3"><?php echo $r['catatan'];?></textarea></td>
    </tr>
    <tr>
      <td>Tanggal Order</td>
      <td>:</td>
      <td><input ype="text" class="input" disabled="disabled" value="<?php echo showDateTime($r['tgl_order']);?>" /></td>
    </tr>
    
    <tr>
      <td>Status</td>
      <td>:</td>
      <td><input ype="text" class="input" disabled="disabled" value="<?php echo $r['status']==2?'COMPLETED':($r['status']==1?'PENDING (WAIT PAYMENT)':'CANCELLED');?>" /></td>
    </tr>
  </table>
  <hr />
  
  <h3>Detail Order</h3>

  <table width="700" cellpadding="5" cellspacing="1" bgcolor="#CCCCCC" id="tableDetail">
  <thead>
    <tr>
      <td width="42" align="center" bgcolor="#EEEEEE">Picture</td>
      <td width="111" align="center" bgcolor="#EEEEEE">Nama Produk</td>
      <td width="105" align="center" bgcolor="#EEEEEE">Pilihan</td>
      <td width="81" align="right" bgcolor="#EEEEEE">Harga</td>
      <td width="55" align="center" bgcolor="#EEEEEE"> Disc (%)</td>
      <td width="79" align="right" bgcolor="#EEEEEE">Total</td>
      <td width="46" align="center" bgcolor="#EEEEEE">Qty</td>
      <td width="90" align="right" bgcolor="#EEEEEE">Sub Total</td>
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
      <td align="center" bgcolor="#FFFFFF"><?php echo picThumbnail($row['gambar'],30,30,'', true);?></td>
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
  <hr />
  <input type="hidden" name="status" value="<?php echo $r['status'];?>" /> 
  <input type="button" value="Tutup" class="button" onclick="window.location='index.php?p=order';" />
  <input type="button" <?php echo $r['status']=='1'?'':'disabled="disabled"';?> onclick="doConfirm('-1');" value="Cancelled" class="button" />
  <input type="button" <?php echo $r['status']=='1'?'':'disabled="disabled"';?> onclick="doConfirm('2');" value="Completed" class="button" />
  <input type="button" value="Cetak" class="button" onclick="cetakOrder();" <?php echo $r['status']==2?'':'disabled="disabled"';?> />
</form>
<div class="clr"></div>
</div>
<script type="text/javascript">
function cetakOrder(){
	openFancybox('tmpl/orderPrintout.php?id=<?php echo $r['id'];?>',900,600);
}

function doConfirm(a){
	if(a=='-1') msg = "Anda yakin ingin membatalkan order ini?";
	if(a=='2')  msg = "Pastikan dana sudah masuk, \nklik OK untuk menutup Order ini.";
	if(confirm(msg)){
		jQuery('input[name=status]').val(a);
		document.formContent.submit();
	}
}
</script>
