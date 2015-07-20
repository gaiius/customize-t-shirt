<?php if(!defined('BASEPATH')) die('You are not allowed to access this page'); ?>
<?php
	if($_POST['register']){
		extract(html_entities($_POST));
		$qq = mysql_query("SELECT * FROM member WHERE username='".$username."'");
		if(mysql_num_rows($qq) == 0){	
			$Qry = "INSERT INTO member(nama_lengkap, tgl_lahir, jenis_kelamin, 
				email, telepon, kota, kode_pos, alamat, username, `password`, `status`) VALUES
				('".$nama_lengkap."', '".$tgl_lahir."', '".$jenis_kelamin."', 
				'".$email."', '".$telepon."', '".$kota."', '".$kode_pos."', '".$alamat."', 
				'".$username."', '".md5($password)."', '1')";
			$Res = mysql_query($Qry);
			$ids = mysql_insert_id();
			
			if(mysql_affected_rows() > 0){
				$_SESSION['msg'] = '<div class="success">Berhasil melakukan pendaftaran..</div>';
				$_SESSION['login'] = true;
				$_SESSION['member'] = true;
				$_SESSION['id'] = $ids;
				header("Location: ".urldecode($direct));
				exit();
			} else {
				$_SESSION['msg'] = '<div class="error">'.mysql_error().'</div>';
				header("Location: index.php?pregister&direct=".$direct);
				exit();
			}	
		} else {
			$_SESSION['msg'] = '<div class="error">Username sudah terdaftar, silahkan gunakan ID lain</div>';
			header("Location: index.php?p=register&direct=".$direct);
			exit();
		}
	}
?>

<div class="wrapRegister clr">
<h3>Buat akun baru</h3>
<form action="" method="post" name="formRegister" id="formRegister" onsubmit="return validateForm('formRegister');">
  <table width="100%" border="0" cellspacing="0" cellpadding="3">
    <tr>
      <td width="52%" align="left" valign="top"><table width="411" border="0" cellspacing="0" cellpadding="5">
        <tr>
          <td colspan="3"><h3><strong>Data Informasi</strong></h3></td>
        </tr>
        <tr>
          <td>Nama Lengkap</td>
          <td>:</td>
          <td><input type="text" class="input required" name="nama_lengkap" id="nama_lengkap" /></td>
        </tr>
        <tr>
          <td>Tgl Lahir</td>
          <td>:</td>
          <td><input type="text" class="input required datepicker" name="tgl_lahir" id="tgl_lahir" /></td>
        </tr>
        <tr>
          <td>Jenis Kelamin</td>
          <td>:</td>
          <td><input name="jenis_kelamin" type="radio" id="radio3" value="L" checked="checked" />
            Pria
            <input type="radio" name="jenis_kelamin" id="radio4" value="P" />
            Wanita</td>
        </tr>
        <tr>
          <td>No. Telepon</td>
          <td>:</td>
          <td><input type="text" class="input required" name="telepon" id="telepon" /></td>
        </tr>
        <tr>
          <td>Email</td>
          <td>:</td>
          <td><input type="text"  class="input required email" name="email" id="email" /></td>
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
          <td colspan="3"><h3><strong>Data  Login</strong></h3></td>
        </tr>
        <tr>
          <td width="216">Username</td>
          <td width="13">:</td>
          <td width="228"><input type="text" name="username" id="username" class="input required" /></td>
        </tr>
        <tr>
          <td>Password</td>
          <td>:</td>
          <td><input type="password" name="password" id="password" class="input required password" /></td>
        </tr>
        <tr>
          <td>Confirm Password</td>
          <td>:</td>
          <td><input type="password" name="cpassword" id="cpassword" class="input required cpassword" /></td>
        </tr>
      </table>        
      <input type="submit" class="button" name="register" id="register" value="Daftar Sekarang" />
      <input type="hidden" name="direct" value="<?php echo urlencode($_GET['direct']);?>" /></td>
    </tr>
  </table>
  </form>
  </div>