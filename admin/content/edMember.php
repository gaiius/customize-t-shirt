<?php if(!defined('BASEPATH')) die('You are not allowed to access this page'); ?>
<?php
	if($_POST){
		extract(html_entities($_POST));
		$passQry = "";
		if($password != "") $passQry.= " `password`='".md5($password)."', ";
		$Qry = "UPDATE member SET
			nama_lengkap = '".$nama_lengkap."',
			tgl_lahir = '".$tgl_lahir."',
			jenis_kelamin = '".$jenis_kelamin."',
			alamat = '".$alamat."',
			kota = '".$kota."',
			kode_pos = '".$kode_pos."',
			telepon = '".$telepon."',
			email = '".$email."',
			username = '".$username."',
			".$passQry." `status`='".$status."'
			WHERE id='".$id."'";
		$Res = mysql_query($Qry);
		if($Res){
			$message = "<div class='success'>Berhasil mengupdate record..</div>";
		} else {
			$message = "<div class='error'>".mysql_error()."</div>";
		}
		$_SESSION['msg'] = $message;
		header("Location: index.php?p=member");
	}
	
	$doSql = "SELECT * FROM member WHERE id='".$_GET['id']."'";
	$doQry = mysql_query($doSql);
	$r = mysql_fetch_array($doQry);
?>
<span class="page-title">Edit Member</span>
<div class="inner">
<form action="" method="post" enctype="multipart/form-data" name="formContent" id="formContent" onsubmit="return validateForm('formContent')">
<input type="hidden" name="id" value="<?php echo $r['id'];?>" />
   <table width="486" border="0" cellspacing="0" cellpadding="5">
     <tr>
       <td width="144">Nama Lengkap</td>
       <td width="4">:</td>
       <td width="308"><input type="text" class="input required" name="nama_lengkap" id="nama_lengkap" value="<?php echo $r['nama_lengkap'];?>" /></td>
     </tr>
     <tr>
       <td>Tgl Lahir</td>
       <td>:</td>
       <td><input type="text" class="input required datepicker" name="tgl_lahir" id="tgl_lahir" value="<?php echo $r['tgl_lahir'];?>" /></td>
     </tr>
     <tr>
       <td>Jenis Kelamin</td>
       <td>:</td>
       <td><input name="jenis_kelamin" type="radio" id="radio3" value="L" <?php echo $r['jenis_kelamin']=='L'?'checked="checked"':'';?> />
         Pria
         <input type="radio" name="jenis_kelamin" id="radio4" value="P" <?php echo $r['jenis_kelamin']=='P'?'checked="checked"':'';?> />
         Wanita</td>
     </tr>
     <tr>
       <td>Email</td>
       <td>:</td>
       <td><input type="text"  class="input required email" name="email" id="email" value="<?php echo $r['email'];?>" /></td>
     </tr>
     <tr>
       <td>No. Telepon</td>
       <td>:</td>
       <td><input type="text" class="input required" name="telepon" id="telepon" value="<?php echo $r['telepon'];?>" /></td>
     </tr>
     <tr>
       <td>Alamat</td>
       <td>:</td>
       <td><textarea name="alamat" class="input required" id="alamat"><?php echo $r['alamat'];?></textarea></td>
     </tr>
     <tr>
       <td>Kota</td>
       <td>:</td>
       <td><input type="text" class="input required" name="kota" id="kota" value="<?php echo $r['kota'];?>" /></td>
     </tr>
     <tr>
       <td>Kode Pos</td>
       <td>:</td>
       <td><input type="text" class="input required" name="kode_pos" id="kode_pos" value="<?php echo $r['kode_pos'];?>" /></td>
     </tr>
     <tr>
       <td>&nbsp;</td>
       <td>&nbsp;</td>
       <td>&nbsp;</td>
     </tr>
     <tr>
       <td>Username</td>
       <td>:</td>
       <td><input type="text" class="input required" name="username" id="username" value="<?php echo $r['username'];?>" /></td>
     </tr>
     <tr>
       <td>Password</td>
       <td>:</td>
       <td><input type="password" class="input password" name="password" id="password" /></td>
     </tr>
     <tr>
       <td>Confirm Password</td>
       <td>:</td>
       <td><input type="password" class="input cpassword" name="cpassword" id="cpassword" /></td>
     </tr>
     <tr>
       <td>Aktif Member</td>
       <td>:</td>
       <td><input name="status" type="radio" id="radio" value="1" <?php echo $r['status']=='1'?'checked="checked"':'';?> />
         Aktif
         <input type="radio" name="status" id="radio2" value="0" <?php echo $r['status']=='0'?'checked="checked"':'';?> />
         Non Aktif</td>
     </tr>
   </table>
  <hr />
  <input type="button" value="Cancel" class="button" onclick="window.location='index.php?p=member';" />
  <input type="submit" value="Simpan" class="button" />
</form>
<div class="clr"></div>
</div>