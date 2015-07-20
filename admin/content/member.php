<?php if(!defined('BASEPATH')) die('You are not allowed to access this page'); ?>
<?php
	$limit = 10;
	if(isset($_GET['h'])){
		$page = $_GET['h'];
   		$offset = $limit * ($page - 1);
	} else {
		$offset = 0;
		$page = 1;
	}
	
	//search
	$uri = "?p=member";
	$search = "";
	if(isset($_GET['s'])) {		
		$uri.="&s=".$_GET['s'];
		$keyword = urldecode($_GET['s']);
		$search.="AND (nama_lengkap LIKE '%".$keyword."%' 
			OR no_ktp LIKE '%".$keyword."%' 
			OR username LIKE '%".$keyword."%')";
	}
	
	//get total record
	$qryTotal = "SELECT count(*) total FROM member WHERE 0=0 ".$search." ";
	$resTotal = mysql_query($qryTotal);
	$row = mysql_fetch_array($resTotal, MYSQL_NUM );
	$totalRec = $row[0];
	
	//pagination
	$pagination = paging($totalRec, $limit, $page, $uri); 	
	
	//get record selected	
	$resQry = "SELECT * FROM member 
		WHERE 0=0 ".$search." 
		ORDER BY id DESC
		LIMIT ".$offset.",".$limit;
	$results = mysql_query($resQry);
	$countResults = mysql_num_rows($results);
?>
<span class="page-title">User member</span>
<div class="inner">

<div class="searchform">
	<form action="index.php" method="get">
    	<input type="hidden" name="p" value="<?php echo $_GET['p'];?>" />
   	  <input type="text" value="<?php echo isset($_GET['s'])?$_GET['s']:'';?>" id="search" name="s" placeholder="Cari Member..">
    </form>
</div>
<a class="addButton button" href="?p=addMember" title="Add New Record">Tambah Baru</a>
<a class="addButton button" href="?p=<?php echo $_GET['p'];?>" title="Clear Filter">Hapus Filter</a>
<div class="clr"></div><br>
<table id="listTable" width="100%" cellpadding="5" cellspacing="1">
  <thead>
    <tr>
      <td width="5%">No</td>
      <td width="23%">Nama Lengkap</td>
      <td width="14%">Tgl Lahir</td>
      <td width="19%">Email</td>
      <td width="16%">Telepon</td>
      <td width="13%" align="center">Aktif</td>
      <td width="10%">Tools</td>
    </tr>
  </thead>
  <tbody>
    <?php
	if($countResults > 0){  
		$i = 1;
		while($r = mysql_fetch_array($results)){
	?>
    <tr class="<?php echo ($i%2)==0?'odd':'';?>">
      <td align="center"><?php echo $i;?></td>
      <td><?php echo $r['nama_lengkap'];?></td>
      <td align="center"><?php echo showDate($r['tgl_lahir']);?></td>
      <td><?php echo $r['email'];?></td>
      <td><?php echo $r['telepon'];?></td>
      <td align="center"><?php echo $r['status']==1?'Aktif':'Non Aktif';?></td>
      <td align="center"><a class="bTools" href="?p=edMember&id=<?php echo $r['id'];?>" title="Edit">E</a> <a class="bTools" href="?p=delMember&id=<?php echo $r['id'];?>" title="Delete" onclick="return confirm('Hapus user <?php echo $r['nama_lengkap'];?> ?');">D</a> </td>
    </tr>
    <?php $i++; }
	
	} else  {
    ?>
    <tr>
      <td colspan="7" align="center">Record Not Available</td>
      </tr>
    <?php } ?>
  </tbody>
</table>
<div class="clr"></div>
<div class="paging clr">
	<?php echo $pagination; ?>
</div>
<div class="clr"></div>
</div>