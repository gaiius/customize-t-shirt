<?php if(!defined('BASEPATH')) die('You are not allowed to access this page'); ?>
<?php
	extract(html_entities($_GET));
	$Qry = "DELETE FROM kategori WHERE id='".$id."'";
	$Res = mysql_query($Qry);
	if($Res){
		$message = "<div class='success'>Berhasil menghapus record..</div>";
	} else {
		$message = "<div class='error'>".mysql_error()."</div>";
	}
	$_SESSION['msg'] = $message;
	header("Location: index.php?p=category");	
?>