<?php
session_start();
include_once("include/config.php");
include_once("include/function.php");
include_once("include/cart.php");

$task = $_REQUEST['task'];
if(function_exists($task)){
	$task();
} else {
	die();
}

function cartRemove(){
	extract($_POST);
	unset($_SESSION['myCart'][$id]);
	$_SESSION['msg'] = '<div class="success">Berhasil menghapus item dari keranjang belanja..</div>';
	echo 'oke';
}

?>