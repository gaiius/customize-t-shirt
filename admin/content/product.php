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
	$uri = "?p=product";
	$search = "";
	if($_GET['s']!='') {		
		$uri.="&s=".$_GET['s'];
		$search.=" AND nama LIKE '%".urldecode($_GET['s'])."%'";
	}
	
	if($_GET['kategori_id']!='') {		
		$uri.="&kategori_id=".$_GET['kategori_id'];
		$search.=" AND kategori_id='".$_GET['kategori_id']."'";
	}
	
	//get total record
	$qryTotal = "SELECT count(*) total FROM produk WHERE 0=0 ".$search." ";
	$resTotal = mysql_query($qryTotal);
	$row = mysql_fetch_array($resTotal, MYSQL_NUM );
	$totalRec = $row[0];
	
	//pagination
	$pagination = paging($totalRec, $limit, $page, $uri); 	
	
	//get record selected	
	$resQry = "SELECT a.*, 
		(SELECT b.nama FROM kategori b WHERE b.id=a.kategori_id) `kategori`
		FROM produk a WHERE 0=0 ".$search." 
		ORDER BY id DESC LIMIT ".$offset.",".$limit;

//die($resQry);
	$results = mysql_query($resQry);
	$countResults = mysql_num_rows($results);
?>
<span class="page-title">Data Product</span>
<div class="inner">

<div class="searchform">
	<form action="index.php" method="get" name="formSearch">
   	  <input type="hidden" name="p" value="<?php echo $_GET['p'];?>" />
   	  <select class="input" style="padding-right:4px; font-size:12px;" name="kategori_id" onchange="document.formSearch.submit();">
      	<option value="">Semua Kategori</option>
        <?php
			$catQry = mysql_query("SELECT * FROM kategori ORDER BY nama ASC");
			while($c = mysql_fetch_array($catQry)){
				$selected = $c['id']==$_GET['kategori_id']?'selected':'';
				echo '<option value="'.$c['id'].'" '.$selected.'>'.$c['nama'].'</option>';
			}
		?>
      </select>
      <input type="text" value="<?php echo isset($_GET['s'])?$_GET['s']:'';?>" id="search" name="s" placeholder="Search data..">
    </form>
</div>
<a class="addButton button" href="?p=addProduct" title="Add New Record">Tambah Baru</a>
<a class="addButton button" href="?p=<?php echo $_GET['p'];?>" title="Clear Filter">Hapus Filter</a>
<div class="clr"></div><br>
<table id="listTable" width="100%" cellpadding="5" cellspacing="1">
  <thead>
    <tr>
      <td width="2%">No</td>
       <td width="6%">Thumb</td>
       <td width="9%">Kode</td>
      <td width="36%">Nama</td>
      <td width="9%">Kategori</td>
      <td width="8%">Harga</td>
      <td width="7%" align="center">Satuan</td>
      <td width="8%" align="center">Status</td>
      <td width="15%">Tools</td>
    </tr>
  </thead>
  <tbody>
    <?php
	if($countResults > 0){  
		$i = 1;
		while($r = mysql_fetch_array($results)){
	?>
    <tr class="<?php echo ($i%2)==0?'odd':'';?>">
      <td align="center" valign="top"><?php echo $i;?></td>
     <td align="center" valign="top"> <img class="img-responsive" src="../<?php echo $r['gambar'] ?>"  alt=""></td>
     
      <td align="center" valign="top"><?php echo $r['kode'];?></td>
      <td align="left" valign="top"><?php echo $r['nama'];?></td>
      <td valign="top"><?php echo $r['kategori'];?></td>
      <td align="right" valign="top"><?php echo number_format($r['harga']);?></a></td>
      <td align="center" valign="top"><?php echo $r['satuan'];?></td>
      <td align="center" valign="top"><?php echo $r['status']==1?'PUBLISH':'UNPUBLISH';?></td>
      <td align="center" valign="top">
      	<a class="bTools" href="?p=edProduct&id=<?php echo $r['id'];?>" title="Edit">E</a>
        <a class="bTools" href="?p=delProduct&id=<?php echo $r['id'];?>" onclick="return confirm('Hapus record <?php echo $r['kode'];?> ?');" title="Hapus">D</a> </td>
    </tr>
    <?php $i++; }
	
	} else  {
    ?>
    <tr>
      <td colspan="9" align="center">Record Not Available</td>
      </tr>
    <?php } ?>
  </tbody>
</table>
<div class="clr"></div>
<div class="paging clr">
	<?php echo $pagination; ?>
</div>