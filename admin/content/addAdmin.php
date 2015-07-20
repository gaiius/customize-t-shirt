<?php if(!defined('BASEPATH')) die('You are not allowed to access this page'); ?>
<?php
	if($_POST){
		extract(html_entities($_POST));
		$Qry = "INSERT INTO admin (nama_lengkap, username, `password`, `status`)
			VALUES ('".$nama_lengkap."', '".$username."', '".md5($password)."', '".$status."')";
		$Res = mysql_query($Qry);
		if($Res){
			$message = "<div class='success'>Berhasil menambah record baru..</div>";
		} else {
			$message = "<div class='error'>".mysql_error()."</div>";
		}
		$_SESSION['msg'] = $message;
		header("Location: index.php?p=admin");
	}
?>
<span class="page-title">Tambah Admin</span>
<div class="inner">
<form id="formContent" name="formContent" method="post" action="" onsubmit="return validateForm('formContent')">
  <table width="480" border="0" cellspacing="0" cellpadding="5">
    <tr>
      <td width="151">Nama Admin</td>
      <td width="3">:</td>
      <td width="242"><input type="text" class="input required" name="nama_lengkap" id="nama_lengkap" /></td>
    </tr>
    <tr>
      <td>Username</td>
      <td>:</td>
      <td><input type="text"  class="input required" name="username" id="username" /></td>
    </tr>
    <tr>
      <td>Password</td>
      <td>:</td>
      <td><input type="password"  class="input required password" name="password" id="password" /></td>
    </tr>
    <tr>
      <td>Confirm Password</td>
      <td>:</td>
      <td><input type="password"  class="input required cpassword" name="cpassword" id="cpassword" /></td>
    </tr>
    <tr>
      <td>Aktif</td>
      <td>:</td>
      <td><input name="status" type="radio" id="radio" value="1" checked="checked" />
        Aktif
        <input type="radio" name="status" id="radio2" value="0" />
        Non Aktif</td>
    </tr>
  </table>
  <hr />
  <input type="button" value="Cancel" class="button" onclick="window.location='index.php?p=admin';" />
  <input type="submit" value="Simpan" class="button" />
</form>
<div class="clr"></div>
</div>