<?php if(!defined('BASEPATH')) die('You are not allowed to access this page'); ?>
<?php
	if($_POST){
		extract($_POST);
		$qry = "UPDATE konfirmasi 
			SET `status`='".$status."' 
			WHERE id='".$id."'";
		$res = mysql_query($qry);
		if(mysql_affected_rows() > 0){	
			if($status == 2){
				$qry2 = "UPDATE `order` SET status='2' WHERE id='".$order_id."'";
				$res2 = mysql_query($qry2);
				$addMsg = "";
				if(sendmail_confirm($order_id)) $addMsg.=" Konfirmasi telah dikirim";
			}
			$message = "<div class='success'>Pembayaran telah dikonfirmasi".$addMsg."..</div>";
		} else {
			$message = "<div class='error'>".mysql_error()."</div>";
		}
		//reload page
		$_SESSION['msg'] = $message;
		header("Location: index.php?p=confirm");
	}
	
	$doSql = "SELECT a.*, 
		(SELECT b.no_order FROM `order` b WHERE b.id=a.order_id) no_order, 
		(SELECT d.nama_bank FROM bank d WHERE d.id=a.bank_id) `bank`, 
		(SELECT c.nama_lengkap FROM member c WHERE c.id=a.member_id) `member`
		FROM `konfirmasi` a 
		WHERE a.id='".$_GET['id']."'";
	$doQry = mysql_query($doSql);
	$r = mysql_fetch_array($doQry);
?>
<span class="page-title">Detail Konfirmasi</span>
<div class="inner">
<form action="" method="post" name="formContent" id="formContent">
<input type="hidden" name="id" value="<?php echo $r['id'];?>" />
  <table width="936" border="0" cellspacing="0" cellpadding="5">
    <tr>
      <td width="178">No. Order / Invoice</td>
      <td width="16">:</td>
      <td width="712"><input name="order_no" type="text" class="input required" id="order_no" disabled="disabled" value="<?php echo $r['no_order'];?>"/>
      <a href="javascript:void(0);" class="button" onclick="openFancybox('tmpl/orderPrintout.php?print=no&id=<?php echo $r['order_id'];?>',900,600);">Lihat</a>      </td>
    </tr>
    
    <tr>
      <td width="178">Pembeli / Member</td>
      <td width="16">:</td>
      <td width="712">
      	<input type="text" class="input required" name="member" disabled="disabled" id="member_id" value="<?php echo $r['member'];?>" />      </td>
    </tr>
    
     <tr>
      <td width="178">Bank Tujuan</td>
      <td width="16">:</td>
      <td width="712">
      	<input type="text" class="input required" name="bank" disabled="disabled" id="member_id" value="<?php echo $r['bank'];?>" />      </td>
    </tr>
    
     <tr>
      <td width="178">Total Transfer</td>
      <td width="16">:</td>
      <td width="712">
      	<input type="text" class="input required" name="total" disabled="disabled" id="member_id" value="<?php echo number_format($r['nominal']);?>" />      </td>
    </tr>
    
     <tr>
      <td>Tanggal Bayar</td>
      <td>:</td>
      <td><input name="paydate" disabled="disabled" class="input" id="paydate" value="<?php echo showDate($r['tgl_transfer']);?>" ype="text" /> 
      <?php echo $r['gambar']==''?'':' <a href="'.abspath.$r['gambar'].'" class="button" target="_blank">Bukti</a>';?>
      </td>
    </tr>
     <tr>
      <td width="178"><strong>Transfer Dari Bank</strong></td>
      <td width="16">:</td>
      <td width="712">
      	<input type="text" class="input required" name="account_bank" disabled="disabled" id="member_id" value="<?php echo $r['nama_bank'];?>" />      </td>
    </tr>
    
     <tr>
      <td width="178">Dari No Rekening</td>
      <td width="16">:</td>
      <td width="712">
      	<input type="text" class="input required" name="account_number" disabled="disabled" id="member_id" value="<?php echo $r['no_rekening'];?>" />      </td>
    </tr>
    
     <tr>
      <td width="178">Atas Nama</td>
      <td width="16">:</td>
      <td width="712">
      	<input type="text" class="input required" name="account_name" disabled="disabled" id="member_id" value="<?php echo $r['nama_akun'];?>" />      </td>
    </tr>
   
    <tr>
      <td>Konfirmasi Masuk</td>
      <td>:</td>
      <td><input ype="text" class="input" disabled="disabled" value="<?php echo showDateTime($r['createdate']);?>" /></td>
    </tr>
  </table>
  
  <hr />
  <input type="hidden" name="order_id" value="<?php echo $r['order_id'];?>" />
  <input type="hidden" name="status" value="<?php echo $r['status'];?>" /> 
  <input type="button" value="Tutup" class="button" onclick="window.location='index.php?p=confirm';" />
  <input type="button" <?php echo $r['status']=='1'?'':'disabled="disabled"';?> onclick="doConfirm('-1');" value="Cancelled" class="button" />
   <input type="button" <?php echo $r['status']=='1'?'':'disabled="disabled"';?> onclick="doConfirm('2');" value="Completed" class="button" />
</form>
<div class="clr"></div>
</div>
<script>
function doConfirm(a){
	if(a=='-1') msg = "Anda yakin ingin membatalkan konfirmasi pembayaran ini?";
	if(a=='2')  msg = "Pastikan dana sudah masuk, \nklik OK untuk menutup Order dan Konfirmasi ini.";
	if(confirm(msg)){
		jQuery('input[name=status]').val(a);
		document.formContent.submit();
	}
}
</script>
