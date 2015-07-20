<?php if(!defined('BASEPATH')) die('You are not allowed to access this page'); ?>
<?php if($_SESSION['member']==true){ //if session member
	if($_POST['submit']){
		extract(html_entities($_POST));	
		$Qry = "INSERT INTO testimonial (member_id, komentar, `status`) 
			VALUES ('".$_SESSION['id']."', '".$komentar."', '1')";
		$Res = mysql_query($Qry);
		
		if($Res){
			$message = "<div class='success'>Terima kasih atas pertisipasi anda..</div>";
		} else {
			$message = "<div class='error'>".mysql_error()."</div>";
		}
		
		$_SESSION['msg'] = $message;
		header("Location: index.php?p=listorder");
	}
	$q = mysql_query("SELECT * FROM member WHERE id='".$_SESSION['id']."'");
	$r = mysql_fetch_array($q);
?>

<div class="wrapRegister">
<h3>Submit Testimonial</h3>
<div class="inner">
<form action="" method="post" enctype="multipart/form-data" name="formConfirm" id="formConfirm" onsubmit="return validateForm('formConfirm');">
<table width="510" border="0" cellspacing="3" cellpadding="5">
    <tr>
      <td width="154" align="left" valign="top">Nama</td>
      <td width="12" align="left" valign="top">:</td>
      <td width="314" align="left" valign="top"><input name="nama" type="text" class="input required" style="background:#eee;" id="nama" value="<?php echo $r['nama_lengkap'];?>" disabled="disabled" /></td>
    </tr>
    <tr>
      <td align="left" valign="top">Email</td>
      <td align="left" valign="top">:</td>
      <td align="left" valign="top"><input type="text" name="email" id="email" class="input required" style="background:#eee;" value="<?php echo $r['email'];?>" disabled="disabled" /></td>
    </tr>
    <tr>
      <td align="left" valign="top">Pesan &amp; Kesan</td>
      <td align="left" valign="top">:</td>
      <td align="left" valign="top"><textarea name="komentar" class="input required" id="komentar" style="height:200px; width:300px;"></textarea></td>
    </tr>
    <tr>
      <td align="left" valign="top">&nbsp;</td>
      <td align="left" valign="top">&nbsp;</td>
      <td align="left" valign="top"><input name="submit" type="submit" class="button" id="submit" value="Submit data" /></td>
    </tr>
</table>
</form>
</div>
</div>
<?php } else {
	header("Location: index.php");
	exit();
} ?>