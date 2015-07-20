<?php if(!defined('BASEPATH')) die('You are not allowed to access this page'); ?>
<?php
	if($_POST){
		extract(html_entities($_POST));
		
		$Qry = "INSERT INTO member (nama_lengkap, tgl_lahir, jenis_kelamin, email, telepon, kota, 
			kode_pos, alamat, username, `password`, `status`) VALUES ('".$nama_lengkap."',
			'".$tgl_lahir."', '".$jenis_kelamin."','".$email."', '".$telepon."', '".$kota."', 
			'".$kode_pos."', '".$alamat."', '".$username."', '".md5($password)."', '".$status."')";
		$Res = mysql_query($Qry);
		
		if($Res){
			$message = "<div class='success'>Berhasil menambah record baru..</div>";
		} else {
			$message = "<div class='error'>".mysql_error()."</div>";
		}
		$_SESSION['msg'] = $message;
		header("Location: index.php?p=member");
	}
?>
<span class="page-title">Tambah Member</span>
<div class="inner">
<form action="" method="post" enctype="multipart/form-data" name="formContent" id="formContent" onsubmit="return validateForm('formContent')">
  <table width="486" border="0" cellspacing="0" cellpadding="5">
    <tr>
      <td width="144">Nama Lengkap</td>
      <td width="4">:</td>
      <td width="308"><input type="text" class="input required" name="nama_lengkap" id="nama_lengkap" /></td>
      </tr>
    <tr>
      <td>Tgl Lahir</td>
      <td>:</td>
      <td><input type="text" class="input required datepicker" name="tgl_lahir" id="tgl_lahir" /></td>
      </tr>
    <tr>
      <td>Jenis Kelamin</td>
      <td>:</td>
      <td><input name="jenis_kelamin" type="radio" id="radio3" value="PRIA" checked="checked" />
        Pria
        <input type="radio" name="jenis_kelamin" id="radio4" value="WANITA" />
        Wanita</td>
      </tr>
    <tr>
      <td>Email</td>
      <td>:</td>
      <td><input type="text"  class="input required email" name="email" id="email" /></td>
      </tr>
    <tr>
      <td>No. Telepon</td>
      <td>:</td>
      <td><input type="text" class="input required" name="telepon" id="telepon" /></td>
      </tr>
    <tr>
      <td>Alamat</td>
      <td>:</td>
      <td><textarea name="alamat" class="input required" id="alamat"></textarea></td>
      </tr>
    <tr>
      <td>Kota</td>
      <td>:</td>
      <td><input type="text" class="input required" name="kota" id="kota" /></td>
      </tr>
    <tr>
      <td>Kode Pos</td>
      <td>:</td>
      <td><input type="text" class="input required" name="kode_pos" id="kode_pos" /></td>
      </tr>
    <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      </tr>
    <tr>
      <td>Username</td>
      <td>:</td>
      <td><input type="text" class="input required" name="username" id="username" /></td>
      </tr>
    <tr>
      <td>Password</td>
      <td>:</td>
      <td><input type="password" class="input required password" name="password" id="password" /></td>
    </tr>
    <tr>
      <td>Confirm Password</td>
      <td>:</td>
      <td><input type="password" class="input required cpassword" name="cpassword" id="cpassword" /></td>
    </tr>
    <tr>
      <td>Aktif Member</td>
      <td>:</td>
      <td><input name="status" type="radio" id="radio" value="1" checked="checked" />
        Aktif
        <input type="radio" name="status" id="radio2" value="-1" />
        Non Aktif</td>
    </tr>
  </table>
  <hr />
  <input type="button" value="Cancel" class="button" onclick="window.location='index.php?p=member';" />
  <input type="submit" value="Simpan" class="button" />
</form>
<div class="clr"></div>
</div>