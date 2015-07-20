<?php if(!defined('BASEPATH')) die('You are not allowed to access this page'); ?>
<?php
$ids = $_GET['id'];
if($ids != ''){
	$resQry = "SELECT * FROM artikel
		WHERE id='".$ids."'";
	$results = mysql_query($resQry);
	$countResults = mysql_num_rows($results);

	if($countResults > 0){  
	$r = mysql_fetch_array($results);
	?>
<h2><?php echo $r['judul'];?></h2><hr>
<p>
<div class="boxNewsDetail clr">
	<?php echo html_entities_decode($r['content']);?> 
    </span>
    <small><?php echo showDateTime($r['createdate']);?></small>
    <div class="clr"></div>
</div>
</p><br>
<a href="?p=news" class="button">Kembali ke Artikel</a>
<?php  } ?>
<?php } ?>