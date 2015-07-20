<?php if(!defined('BASEPATH')) die('You are not allowed to access this page'); ?>
<?php
	if($_POST){
		extract(html_entities($_POST));
		$Qry = "UPDATE bank  SET nama_bank='".$nama_bank."', nama_akun='".$nama_akun."', 
			no_rekening='".$no_rekening."' WHERE id='".$id."'";
		$Res = mysql_query($Qry);
		if($Res){
			$message = "<div class='success'>Berhasil mengupdate record..</div>";
		} else {
			$message = "<div class='error'>".mysql_error()."</div>";
		}
		$_SESSION['msg'] = $message;
		header("Location: index.php?p=bank");
	}
	
	$doSql = "SELECT * FROM bank WHERE id='".$_GET['id']."'";
	$doQry = mysql_query($doSql);
	$r = mysql_fetch_array($doQry);
	
?>
<span class="page-title">Edit Rekening</span>
<div class="inner">
<form id="formContent" name="formContent" method="post" action="" onsubmit="return validateForm('formContent')">
<input type="hidden" name="id" value="<?php echo $r['id'];?>" />
  <table width="480" border="0" cellspacing="0" cellpadding="5">
    <tr>
      <td width="151">Nama Bank</td>
      <td width="3">:</td>
      <td width="242"><input type="text" value="<?php echo $r['nama_bank'];?>" class="input required" name="nama_bank" id="nama_bank" /></td>
    </tr>
    <tr>
      <td>Nama Pemilik</td>
      <td>:</td>
      <td><input type="text"  class="input required" value="<?php echo $r['nama_akun'];?>" name="nama_akun" id="nama_akun" /></td>
    </tr>
    <tr>
      <td>Nomor Rekening</td>
      <td>:</td>
      <td><input type="text"  class="input required" value="<?php echo $r['no_rekening'];?>" name="no_rekening" id="no_rekening" /></td>
    </tr>
  </table>
  <hr />
  <input type="button" value="Cancel" class="button" onclick="window.location='index.php?p=bank';" />
  <input type="submit" value="Simpan" class="button" />
</form>
<div class="clr"></div>
</div>