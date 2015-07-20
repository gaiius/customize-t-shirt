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
	$uri = "?p=order";
	$search = "";
	if(isset($_GET['s']) and $_GET['s']!='') {		
		$uri.="&s=".$_GET['s'];
		$search.="AND no_order LIKE '%".urldecode($_GET['s'])."%'";
	}
	
	if(isset($_GET['status']) and $_GET['status']!='') {		
		$uri.="&status=".$_GET['status'];
		$search.="AND `status`='".$_GET['status']."'";
	}
	
	//get total record
	$qryTotal = "SELECT count(*) totalrec FROM `order` WHERE 0=0 ".$search." ";
	$resTotal = mysql_query($qryTotal);
	$row = mysql_fetch_array($resTotal, MYSQL_NUM );
	$totalRec = $row[0];
	
	//pagination
	$pagination = paging($totalRec, $limit, $page, $uri); 	
	
	//get record selected	
	$resQry = "SELECT a.*, 
		(SELECT c.nama_lengkap FROM member c WHERE c.id=a.member_id) `member` 
		FROM `order` a WHERE 0=0 ".$search." 
		ORDER BY id DESC LIMIT ".$offset.",".$limit;
	$results = mysql_query($resQry);
	$countResults = mysql_num_rows($results);
?>
<span class="page-title">Data Order</span>
<div class="inner">

<div class="searchform">
	<form action="index.php" method="get" name="formSearch">
   	  <input type="hidden" name="p" value="<?php echo $_GET['p'];?>" />
   	  <select class="input" style="padding-right:4px;" name="status" onchange="document.formSearch.submit();">
      	<option value="" selected="selected">Semua Status</option>
        <?php
			$state = isset($_GET['state'])?$_GET['state']:'';
			$arrState = array('-1'=>'CANCELLED', '1'=>'PENDING', '2'=>'COMPLETED');
			foreach($arrState as $i=>$v){
				$selected = $i==$state?'selected':'';
				echo '<option value="'.$i.'" '.$selected.'>'.$v.'</option>';
			}
		?>
      </select>
      <input type="text" value="<?php echo isset($_GET['s'])?$_GET['s']:'';?>" id="search" name="s" placeholder="Cari No Order..">
    </form>
</div>
<a class="addButton button" href="?p=<?php echo $_GET['p'];?>" title="Clear Filter">Hapus Filter</a>
<div class="clr"></div><br>
<table id="listTable" width="100%" cellpadding="5" cellspacing="1">
  <thead>
    <tr>
      <td width="2%">No</td>
      <td width="10%">Kode. Order</td>
      <td width="30%">Member / Pemesan</td>
      <td width="13%" align="center">Total Order</td>
      <td width="10%" align="center">Tgl Order</td>
      <td width="13%" align="center">Status</td>
      <td width="12%" align="center">Tools</td>
    </tr>
  </thead>
  <tbody>
    <?php
	if($countResults > 0){  
		$i = 1;
		while($r = mysql_fetch_array($results)){
	?>
    <tr class="<?php echo ($i%2)==0?'odd':'';?>" <?php echo $r['status']==1?'style="background:#99CCCC;"':'';?>>
      <td align="center" valign="top"><?php echo $i;?></td>
      <td align="center" valign="top"><?php echo $r['no_order'];?></td>
      <td valign="top"><a target="_blank" href="?p=edMember&id=<?php echo $r['member_id'];?>"><?php echo $r['member'];?></a></td>
      <td align="right" valign="top"><?php echo number_format($r['total_order']);?></td>
      <td align="center" valign="top"><?php echo showDate($r['tgl_order']);?></td>
      <td align="center" valign="top"><?php echo $r['status']==2?'COMPLETED':($r['status']==1?'PENDING':'CANCELLED');?></td>
      <td align="center" valign="top">
      <a class="bTools" href="?p=addOrder&id=<?php echo $r['id'];?>" title="Edit">E</a> 
      <a class="bTools" href="?p=delOrder&id=<?php echo $r['id'];?>" title="Delete" onclick="return confirm('Hapus record <?php echo $r['no_order'];?> ?');">D</a> </td>
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