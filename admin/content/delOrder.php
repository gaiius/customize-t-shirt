<?php if(!defined('BASEPATH')) die('You are not allowed to access this page'); ?>
<?php
	extract(html_entities($_GET));
	$Qry = "DELETE FROM `order` WHERE id='".$id."'";
	$Res = mysql_query($Qry);
	if(mysql_affected_rows() > 0){
		//hapus detail order
		mysql_query("DELETE FROM order_detail WHERE order_id='".$id."'");
		$message = "<div class='success'>Berhasil menghapus record..</div>";
	} else {
		$message = "<div class='error'>".mysql_error()."</div>";
	}
	$_SESSION['msg'] = $message;
	header("Location: index.php?p=order");	
?>