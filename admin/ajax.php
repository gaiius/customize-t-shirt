<?php
session_start();
include_once("../include/config.php");
include_once("../include/function.php");


	$task = $_REQUEST['task'];
	if(function_exists($task)){
		$task();
	} else {
		die();
	}
	
	function getOptionEvent(){
		extract(html_entities($_POST));
		$q = mysql_query("SELECT * FROM event WHERE kategori_id='".$kategori_id."' ORDER BY kode DESC");
		while($r = mysql_fetch_array($q)){
			$sel2 = $sel==$r['id']?'selected':'';
			echo '<option value="'.$r['id'].'" '.$sel2.'>'.$r['kode'].' - '.$r['nama'].'</option>';
		}
	}
	
	function getOptionEvent2(){
		extract(html_entities($_POST));
		$q = mysql_query("SELECT * FROM event WHERE `status`='".$status."' ORDER BY kode DESC");
		while($r = mysql_fetch_array($q)){
			echo '<option value="'.$r['id'].'">'.$r['kode'].' - '.$r['nama'].'</option>';
		}
	}
	
	
	function search(){
		extract($_REQUEST);
		$status = isset($status)?$status:1;
		$stateQry = $status==""?"":" AND a.`status`='".$status."'";
		$Qry = "SELECT a.*, CONCAT(a.kode,' | ', a.kategori,' | ',b.nama_paket) `name` 
			FROM jadwal a LEFT JOIN paket b ON b.id=a.paket_id 
			WHERE 0=0 ".$stateQry." AND a.terdaftar < a.`max`
			AND (a.kode LIKE '%".$q."%' OR a.kategori LIKE '%".$q."%'
			 OR b.nama_paket LIKE '%".$q."%') LIMIT ".$limit; 
		$Res = mysql_query($Qry);
		$Data= array();
		while($Arr = mysql_fetch_array($Res)){
			$Data[] = $Arr;
		}
		echo json_encode($Data);
	}
	
	function searchOrder(){
		extract($_REQUEST);
		$Qry = "SELECT b.*, 
			CONCAT(b.no_pesanan, ' | ', c.kode,' : ', d.kategori,'-',d.nama_paket) name,
			(SELECT nama_lengkap FROM member WHERE id=b.member_id) `member`
			FROM pesanan b LEFT JOIN jadwal c ON c.id=b.jadwal_id
			LEFT JOIN paket d ON d.id=c.paket_id
			WHERE b.status=1 AND b.bayar < b.harga
			AND (b.no_pesanan LIKE '%".$q."%' OR c.kode LIKE '%".$q."%'
			 OR d.nama_paket LIKE '%".$q."%') LIMIT ".$limit; 
		$Res = mysql_query($Qry);
		$Data= array();
		while($Arr = mysql_fetch_array($Res)){
			$Data[] = $Arr;
		}
		echo json_encode($Data);
	}
	
	function searchOrder2(){
		extract($_REQUEST);
		$Qry = "SELECT b.*, 
			CONCAT(b.no_pesanan, ' | ', c.kode,' : ', d.kategori,'-',d.nama_paket) name,
			(SELECT nama_lengkap FROM member WHERE id=b.member_id) `member`
			FROM pesanan b LEFT JOIN jadwal c ON c.id=b.jadwal_id
			LEFT JOIN paket d ON d.id=c.paket_id
			WHERE 0=0
			AND (b.no_pesanan LIKE '%".$q."%' OR c.kode LIKE '%".$q."%'
			 OR d.nama_paket LIKE '%".$q."%') LIMIT ".$limit; 
		$Res = mysql_query($Qry);
		$Data= array();
		while($Arr = mysql_fetch_array($Res)){
			$Data[] = $Arr;
		}
		echo json_encode($Data);
	}
?>