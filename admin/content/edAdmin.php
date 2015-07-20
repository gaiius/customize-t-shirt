<?php if(!defined('BASEPATH')) die('You are not allowed to access this page'); ?>
<?php
	if($_POST){
		extract(html_entities($_POST));
		$addQry = "";
		if($password != "") $addQry.="`password`='".md5($password)."',";
		$Qry = "UPDATE admin SET nama_lengkap='".$nama_lengkap."', 
			username='".$username."', ".$addQry." `status`='".$status."'
			WHERE id='".$id."'";
		$Res = mysql_query($Qry);
		if($Res){
			$message = "<div class='success'>Berhasil mengupdate record..</div>";
		} else {
			$message = "<div class='error'>".mysql_error()."</div>";
		}
		$_SESSION['msg'] = $message;
		header("Location: index.php?p=admin");
	}
	
	$doSql = "SELECT * FROM admin WHERE id='".$_GET['id']."'";
	$doQry = mysql_query($doSql);
	$r = mysql_fetch_array($doQry);
?>
<span class="page-title">Edit Admin</span>
<div class="inner">
<form id="formContent" name="formContent" method="post" action="" onsubmit="return validateForm('formContent')">
<input type="hidden" name="id" value="<?php echo $r['id'];?>" />
  <table width="480" border="0" cellspacing="0" cellpadding="5">
    <tr>
      <td width="151">Nama Admin</td>
      <td width="3">:</td>
      <td width="242"><input value="<?php echo $r['nama_lengkap'];?>" type="text" class="input required" name="nama_lengkap" id="nama_lengkap" /></td>
    </tr>
    <tr>
      <td>Username</td>
      <td>:</td>
      <td><input type="text"  value="<?php echo $r['username'];?>" class="input required" name="username" id="username" /></td>
    </tr>
    <tr>
      <td>Password</td>
      <td>:</td>
      <td><input type="password"  class="input password" name="password" id="password" />
        <br /><small>Kosongkan jika anda tidak ingin mengubahnya</small></td>
    </tr>
    <tr>
      <td>Confirm Password</td>
      <td>:</td>
      <td><input type="password"  class="input cpassword" name="cpassword" id="cpassword" /></td>
    </tr>
    <tr>
      <td>Aktif</td>
      <td>:</td>
      <td><input name="status" type="radio" id="radio" value="1" <?php echo $r['status']==1?'checked="checked"':''?> />
        Aktif
        <input type="radio" name="status" id="radio2" value="0" <?php echo $r['status']==1?'':'checked="checked"'?> />
        Non Aktif</td>
    </tr>
  </table>
  <hr />
  <input type="button" value="Cancel" class="button" onclick="window.location='index.php?p=admin';" />
  <input type="submit" value="Simpan" class="button" />
</form>
<div class="clr"></div>
</div>