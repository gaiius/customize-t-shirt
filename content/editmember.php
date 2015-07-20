<?php if(!defined('BASEPATH')) die('You are not allowed to access this page'); ?>
<?php if($_SESSION['member']==true){ //if session member
	if($_POST['update']){
		extract(html_entities($_POST));
		$passQry = "";
		if($password!="") $passQry.= " `password`='".md5($password)."', ";
		
		$Qry = "UPDATE member SET
			nama_lengkap = '".$nama_lengkap."',
			tgl_lahir = '".$tgl_lahir."',
			jenis_kelamin = '".$jenis_kelamin."',
			email = '".$email."',
			telepon = '".$telepon."',
			kota = '".$kota."',
			alamat = '".$alamat."',
			kode_pos = '".$kode_pos."',
			".$passQry." 
			username='".$username."'
			WHERE id='".$id."'";
		$Res = mysql_query($Qry);
		
		if($Res){
			$message = "<div class='success'>Berhasil mengupdate data..</div>";
		} else {
			$message = "<div class='error'>".mysql_error()."</div>";
		}
		$url = $direct==''?'index.php?p=editmember':urldecode($direct);
		$_SESSION['msg'] = $message;
		header("Location: ".$url);
		exit();
	}
	
	//ambil data member
	$qDet = mysql_query("SELECT * FROM member WHERE id='".$_SESSION['id']."'");
	$r = mysql_fetch_array($qDet);
?>
<div class="wrapRegister">
<h3>Edit Account</h3>
<div class="inner">
	<form action="" method="post" enctype="multipart/form-data" name="formRegister" id="formRegister" onsubmit="return validateForm('formRegister');">
        <input type="hidden" name="id" value="<?php echo $r['id'];?>">
        <table width="600" border="0" cellspacing="0" cellpadding="5">
          <tr>
            <td>Nama Lengkap</td>
            <td>:</td>
            <td><input type="text" class="input required" name="nama_lengkap" id="nama_lengkap" value="<?php echo $r['nama_lengkap'];?>" /></td>
            </tr>
          <tr>
            <td>Tgl Lahir</td>
            <td>:</td>
            <td><input name="tgl_lahir" type="text" class="input required datepicker" style="width:80px;" id="tgl_lahir" value="<?php echo $r['tgl_lahir'];?>" /></td>
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
            <td>No. Telepon</td>
            <td>:</td>
            <td><input type="text" class="input required" name="telepon" id="telepon" value="<?php echo $r['telepon'];?>" /></td>
            </tr>
          <tr>
            <td>Email </td>
            <td>:</td>
            <td><input type="text" value="<?php echo $r['email'];?>" class="input required email" name="email" id="email" /></td>
            </tr>
            
            <tr>
            <td>Kota</td>
            <td>:</td>
            <td><input type="text" class="input required" name="kota" id="kota" value="<?php echo $r['kota'];?>" /></td>
            </tr>
          <tr>
            <td>Alamat</td>
            <td>:</td>
            <td><textarea name="alamat" class="input required" id="alamat"><?php echo $r['alamat'];?></textarea></td>
            </tr>
          
          <tr>
            <td>Kode Pos</td>
            <td>:</td>
            <td><input type="text" class="input required" name="kode_pos" id="kode_pos" value="<?php echo $r['kode_pos'];?>" /></td>
            </tr>
         <tr>
          <td colspan="3"><h3><strong>Data  Login</strong></h3></td>
        </tr>
        <tr>
          <td width="216">Username</td>
          <td width="13">:</td>
          <td width="308"><input type="text" name="username" id="username" value="<?php echo $r['username'];?>" class="input required" /></td>
        </tr>
        <tr>
          <td>Password</td>
          <td>:</td>
          <td><input type="password" name="password" id="password" class="input password" /></td>
        </tr>
        <tr>
          <td>Confirm Password</td>
          <td>:</td>
          <td><input type="password" name="cpassword" id="cpassword" class="input cpassword" /></td>
        </tr>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td><input type="submit" name="update" id="update" class="button" value="Update Informasi Akun" />
            <input type="hidden" name="direct" value="<?php echo urlencode($_GET['direct']);?>" /></td>
          </tr>
        </table>
    </form>
</div>
</div>
<?php } else {
	header("Location: index.php");
	exit();
} ?>