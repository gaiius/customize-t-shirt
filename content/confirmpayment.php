<?php if(!defined('BASEPATH')) die('You are not allowed to access this page'); ?>
<?php if($_SESSION['member']==true){ //if session member
	if($_POST['submit']){
		extract(html_entities($_POST));
		$nominal = str_replace(",","", $nominal);
		$picture = "";
		$files = $_FILES['upload']['name'];
		if($files != ""){
			$source = $_FILES['upload']['tmp_name'];
			$ext = end(explode(".",$files));
			$picture = "asset/upload/".md5(time()).".".$ext;
			move_uploaded_file($source, $picture);
		}
		$total = str_replace(",","", $total);
		
		$Qry = "INSERT INTO konfirmasi (order_id, member_id, bank_id, nominal, 
			tgl_transfer, nama_akun, no_rekening, nama_bank, gambar, `status`) VALUES 
			('".$order_id."', '".$_SESSION['id']."', '".$bank_id."', 
			'".$nominal."', '".$tgl_transfer."', '".$nama_akun."', 
			'".$no_rekening."', '".$nama_bank."', '".$picture."', '1')";
		$Res = mysql_query($Qry);
		if($Res){
			$message = "<div class='success'>Berhasil mengirim konfirmasi pembayaran..</div>";
		} else {
			$message = "<div class='error'>".mysql_error()."</div>";
		}
		
		$_SESSION['msg'] = $message;
		header("Location: index.php?p=confirmpayment");
	}
?>

<div class="wrapRegister">
<h3>Konfirmasi Pembayaran</h3>
<div class="inner">
<form action="" method="post" enctype="multipart/form-data" name="formConfirm" id="formConfirm" onsubmit="return validateForm('formConfirm');">
<table width="510" border="0" cellspacing="3" cellpadding="5">
	<tr>
    	<td colspan="3"><strong>Data Invoice</strong></td>
        </tr>
    <tr>
    	<td width="154">No. Invoice Order<br /></td>
        <td width="12">:</td>
        <td width="314"><select name="order_id" id="order_id" class="input required">
        	<option value="">No. Invoice yg dibayar</option>
            <?php
			$q = mysql_query("SELECT * FROM `order` WHERE member_id='".$_SESSION['id']."' AND `status`=1");
			while($r=mysql_fetch_array($q)){
				echo '<option value="'.$r['id'].'">'.$r['no_order'].' - '.showDate($r['tgl_order']).'</option>';
			}
			?>
        </select>
</td>
	</tr>
    <tr>
    	<td>Bank Tujuan</td>
        <td>:</td>
        <td><select name="bank_id" id="bank_id" class="input required">
        	<option value="">Rekening Tujuan Transfer</option>
            <?php
			$q = mysql_query("SELECT * FROM bank WHERE 0=0");
			while($r=mysql_fetch_array($q)){
				echo '<option value="'.$r['id'].'">'.$r['nama_bank'].' | '.$r['no_rekening'].'</option>';
			}
			?>
        </select>
</td>
    </tr>
    <tr>
      <td>Nominal Transfer</td>
      <td>:</td>
      <td><input style="width:100px;" type="text" name="nominal" id="nominal" class="input required price" /></td>
    </tr>
    <tr>
      <td>Tanggal Transfer</td>
      <td>:</td>
      <td><input style="width:100px;" type="text" name="tgl_transfer" id="tgl_transfer" class="input required datepicker" /></td>
    </tr>
    <tr>
      <td colspan="3"><strong>Data Pengirim</strong></td>
      </tr>
    <tr>
      <td>Dikirim dari Bank</td>
      <td>:</td>
      <td><input name="nama_bank" type="text" class="input required" id="nama_bank" /></td>
    </tr>
    <tr>
      <td>Dari No rekening</td>
      <td>:</td>
      <td><input type="text" name="no_rekening" id="no_rekening" class="input required" /></td>
    </tr>
    <tr>
      <td>Atas Nama</td>
      <td>:</td>
      <td><input type="text" name="nama_akun" id="nama_akun" class="input required" /></td>
    </tr>
    
    <tr>
      <td align="left">Unggah Bukti Transfer</td>
      <td align="right">&nbsp;</td>
      <td align="left" valign="middle"><input type="file" name="upload" id="upload"><br>
        <small>Pastikan ukuran gambar 400x500 px</small>      </td>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td><input name="submit" type="submit" class="button" id="submit" value="Submit data ke admin" /></td>
    </tr>
</table>
</form>
<script>doPricing('.price');</script>
</div>
</div>
<?php } else {
	header("Location: index.php");
	exit();
} ?>