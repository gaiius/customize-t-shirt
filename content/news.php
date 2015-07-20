<?php if(!defined('BASEPATH')) die('You are not allowed to access this page'); ?>
<?php
	$limit = 5;
	if(isset($_GET['h'])){
		$page = $_GET['h'];
   		$offset = $limit * ($page - 1);
	} else {
		$offset = 0;
		$page = 1;
	}
	
	//search
	$uri = "?p=news";
	$search = "";
	
	//get total record
	$qryTotal = "SELECT count(*) total FROM artikel WHERE 0=0 ".$search." ";
	$resTotal = mysql_query($qryTotal);
	$row = mysql_fetch_array($resTotal, MYSQL_NUM );
	$totalRec = $row[0];
	
	//pagination
	$pagination = paging($totalRec, $limit, $page, $uri); 	
	
	//get record selected	
	$resQry = "SELECT * FROM artikel 
		WHERE 0=0 ".$search." 
		ORDER BY id DESC
		LIMIT ".$offset.",".$limit;
	$results = mysql_query($resQry);
	$countResults = mysql_num_rows($results);
?>
<h2>Artikel</h2><hr>
<p>
<?php
	if($countResults > 0){  
		$i = 1;
		while($r = mysql_fetch_array($results)){
	?>
<div class="boxNews clr">
	<span class="pic">
     <img src="<?php echo $r['gambar'] ?>" alt="">
    </span>
    <div class="right">
    	<a href="?p=newsdetail&id=<?php echo $r['id'];?>"><?php echo $r['judul'];?></a>
        <span class="summary">
        	<?php echo getExcerpt(html_entities_decode($r['content']), 50);?> 
        </span>
        <small><?php echo showDateTime($r['createdate']);?></small>
    </div> 
    <div class="clr"></div>
</div>
<?php }  } ?>

<div class="clr"></div>
<div class="paging clr">
	<?php echo $pagination; ?>
</div>
</p>