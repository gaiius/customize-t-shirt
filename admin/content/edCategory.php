<?php if(!defined('BASEPATH')) die('You are not allowed to access this page'); ?>
<?php
	if($_POST){
		extract(html_entities($_POST));
		$Qry = "UPDATE kategori SET nama='".$nama."' WHERE id='".$id."'";
		$Res = mysql_query($Qry);
		if($Res){
			$message = "<div class='success'>Berhasil mengupdate record..</div>";
		} else {
			$message = "<div class='error'>".mysql_error()."</div>";
		}
		$_SESSION['msg'] = $message;
		header("Location: index.php?p=category");
	}
	
	$doSql = "SELECT * FROM kategori WHERE id='".$_GET['id']."'";
	$doQry = mysql_query($doSql);
	$r = mysql_fetch_array($doQry);
?>
<span class="page-title">Edit Product Category</span>
<div class="inner">
<form id="formContent" name="formContent" method="post" action="" onsubmit="return validateForm('formContent')">
<input type="hidden" name="id" value="<?php echo $r['id'];?>" />
  <table width="480" border="0" cellspacing="0" cellpadding="5">
    <tr>
      <td width="151">Nama Kategori</td>
      <td width="3">:</td>
      <td width="242"><input type="text" class="input required" name="nama" id="nama" value="<?php echo $r['nama'];?>" /></td>
    </tr>
  </table>
  <hr />
  <input type="button" value="Cancel" class="button" onclick="window.location='index.php?p=category';" />
  <input type="submit" value="Simpan" class="button" />
</form>
<div class="clr"></div>
</div>