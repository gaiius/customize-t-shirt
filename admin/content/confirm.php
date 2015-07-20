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
	$uri = "?p=konfirmasi";
	$search = "";
	if(isset($_GET['s']) and $_GET['s']!='') {		
		$uri.="&s=".$_GET['s'];
		$search.="AND order_id IN (SELECT id FROM `order` 
			WHERE no_order LIKE '%".urldecode($_GET['s'])."%')";
	}
	
	if(isset($_GET['status']) and $_GET['status']!='') {		
		$uri.="&status=".$_GET['status'];
		$search.="AND `status`='".$_GET['status']."'";
	}
	
	//get total record
	$qryTotal = "SELECT count(*) `total` FROM `konfirmasi` WHERE 0=0 ".$search." ";
	$resTotal = mysql_query($qryTotal);
	$row = mysql_fetch_array($resTotal, MYSQL_NUM );
	$totalRec = $row[0];
	
	//pagination
	$pagination = paging($totalRec, $limit, $page, $uri); 	
	
	//get record selected	
	$resQry = "SELECT a.*,
		(SELECT b.no_order FROM `order` b WHERE b.id=a.order_id) no_order, 
		(SELECT d.nama_bank FROM bank d WHERE d.id=a.bank_id) `bank`, 
		(SELECT c.nama_lengkap FROM member c WHERE c.id=a.member_id) `member` 
		FROM `konfirmasi` a WHERE 0=0 ".$search." 
		ORDER BY id ASC LIMIT ".$offset.",".$limit;
	$results = mysql_query($resQry);
	$countResults = mysql_num_rows($results);
?>
<span class="page-title">Konfirmasi Pembayaran</span>
<div class="inner">

<div class="searchform">
	<form action="index.php" method="get" name="formSearch">
   	  <input type="hidden" name="p" value="<?php echo $_GET['p'];?>" />
   	  <select class="input" style="padding-right:4px; font-size:12px;" name="status" onchange="document.formSearch.submit();">
      	<option value="" selected="selected">Semua Status</option>
        <?php
			$status = isset($_GET['status'])?$_GET['status']:'';
			$arrstatus = array('-1'=>'CANCELLED', '1'=>'PENDING', '2'=>'COMPLETED');
			foreach($arrstatus as $i=>$v){
				$selected = $i==$status?'selected':'';
				echo '<option value="'.$i.'" '.$selected.'>'.$v.'</option>';
			}
		?>
      </select>
      <input type="text" value="<?php echo isset($_GET['s'])?$_GET['s']:'';?>" id="search" name="s" placeholder="Cari No Order..">
    </form>
</div>
<a class="addButton button" href="?p=<?php echo $_GET['p'];?>" title="Clear Filter">Clear Filter</a>
<div class="clr"></div><br>
<table id="listTable" width="100%" cellpadding="5" cellspacing="1">
  <thead>
    <tr>
      <td width="4%">No</td>
      <td width="11%" align="center">No. Order</td>
      <td width="26%" align="center">Member / Pemesan</td>
      <td width="18%" align="center">Tujuan Pembayaran</td>
      <td width="13%" align="center">Total Transfer</td>
      <td width="9%" align="center">Tgl Bayar</td>
      <td width="11%" align="center">Status</td>
      <td width="8%" align="center">Tools</td>
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
      <td align="center" valign="top"><a target="_blank" href="?p=addOrder&id=<?php echo $r['order_id'];?>"><?php echo $r['no_order'];?></a></td>
      <td valign="top"><a target="_blank" href="?p=edMember&id=<?php echo $r['member_id'];?>"><?php echo $r['member'];?></a></td>
      <td align="left"><?php echo $r['bank'];?></td>
      <td align="right" valign="top"><?php echo number_format($r['nominal']);?></td>
      <td align="center" valign="top"><?php echo showDate($r['tgl_transfer']);?></td>
      <td align="center" valign="top"><?php echo $r['status']==2?'COMPLETED':($r['status']==1?'PENDING':'CANCELLED');?></td>
      <td align="center" valign="top"><a class="bTools" href="?p=edConfirm&id=<?php echo $r['id'];?>" title="Edit">E</a> <a class="bTools" href="?p=delConfirm&id=<?php echo $r['id'];?>" title="Delete" onclick="return confirm('Hapus record <?php echo $r['no_order'];?> ?');">D</a> </td>
    </tr>
    <?php $i++; }
	
	} else  {
    ?>
    <tr>
      <td colspan="8" align="center">Record Not Available</td>
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