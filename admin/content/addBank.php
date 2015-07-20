<?php if(!defined('BASEPATH')) die('You are not allowed to access this page'); ?>
<?php
	if($_POST){
		extract(html_entities($_POST));
		$Qry = "INSERT INTO bank (nama_bank, nama_akun, no_rekening)
			VALUES ('".$nama_bank."', '".$nama_akun."', '".$no_rekening."')";
		$Res = mysql_query($Qry);
		if($Res){
			$message = "<div class='success'>Berhasil menambah record baru..</div>";
		} else {
			$message = "<div class='error'>".mysql_error()."</div>";
		}
		$_SESSION['msg'] = $message;
		header("Location: index.php?p=bank");
	}
?>
<span class="page-title">Tambah Rekening</span>
<div class="inner">
<form id="formContent" name="formContent" method="post" action="" onsubmit="return validateForm('formContent')">
  <table width="480" border="0" cellspacing="0" cellpadding="5">
    <tr>
      <td width="151">Nama Bank</td>
      <td width="3">:</td>
      <td width="242"><input type="text" class="input required" name="nama_bank" id="nama_bank" /></td>
    </tr>
    <tr>
      <td>Nama Pemilik</td>
      <td>:</td>
      <td><input type="text"  class="input required" name="nama_akun" id="nama_akun" /></td>
    </tr>
    <tr>
      <td>Nomor Rekening</td>
      <td>:</td>
      <td><input type="text"  class="input required" name="no_rekening" id="no_rekening" /></td>
    </tr>
  </table>
  <hr />
  <input type="button" value="Cancel" class="button" onclick="window.location='index.php?p=bank';" />
  <input type="submit" value="Simpan" class="button" />
</form>
<div class="clr"></div>
</div>