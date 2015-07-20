<?php if(!defined('BASEPATH')) die('You are not allowed to access this page');?>
<?php
	$limit = 9;
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
	
	if(isset($_GET['cat_id'])) {		
		$uri.="&cat_id=".$_GET['cat_id'];
		$search.="AND kategori_id='".$_GET['cat_id']."'";
	}
	
	if(isset($_GET['s'])) {		
		$uri.="&s=".$_GET['s'];
		$search.="AND nama LIKE '%".urldecode($_GET['s'])."%'";
	}
	
	//get total record
	$qryTotal = "SELECT count(*) total FROM produk WHERE 0=0 ".$search." ";
	$resTotal = mysql_query($qryTotal);
	$row = mysql_fetch_array($resTotal, MYSQL_NUM );
	$totalRec = $row[0];
	
	//pagination
	$pagination = paging($totalRec, $limit, $page, $uri); 	
	
	//get record selected	
	$resQry = "SELECT a.*
		FROM produk a WHERE 0=0 ".$search." 
		ORDER BY id DESC LIMIT ".$offset.",".$limit;
	$results = mysql_query($resQry);
	$countResults = mysql_num_rows($results);
?>
<!DOCTYPE html>

	<div class="container">
	<div class="col-md-8">
		<div class="product">
		<h2 class="new"><?php echo isset($_GET['s'])?'Search : '.$_GET['s']:'Produk Kami';?></h2>
		  <?php if(isset($_GET['cat_id'])):?>
		   <?php 
		$catqry = mysql_query("SELECT `nama` FROM kategori WHERE id='".$_GET['cat_id']."'");
		$catrow = mysql_fetch_array($catqry); 
	?>
	 <h3 class="new"><?php echo $catrow['nama'];?></h3>
	   <?php endif;?>
	      <?php
		$i = 0;
		while($row = mysql_fetch_array($results)){
			$i++;
			$liClass = '';
			if($i == 3){
				$liClass = 'last';
				$i=0;
			}
			$vPrice = $row['harga'] - (($row['diskon'] * $row['harga'])/100);
			?>
	
			<div class="col-md-3 box-in-at">
			<div class=" grid_box portfolio-wrapper">		
							<?php if($row['diskon'] > 0): ?>
							<?php endif;?>
							<a href="?p=productdetail&id=<?php echo $row['id'];?>"><img class="img-responsive" src="<?php echo $row['gambar'] ?>" alt=""><p><?php echo $row['nama'];?></p></a><p><?php echo $row['keterangan_singkat'];?></p>  <span class="price <?php echo $row['diskon']>0?'old':'';?> clr"></span>
                    <?php if($row['diskon']>0):?>
                    <?php endif;?>
						
				</div>	 	
		          
				<!---->
						<div class="grid_1 simpleCart_shelfItem">
							<a href="?p=productdetail&id=<?php echo $row['id'];?>" class="cup item_add"><span class=" item_price" >Rp <?php echo number_format($row['harga']);?><i> </i> </span></a>					
						</div>
					<!---->
				
				 </div>
			
	<?php } ?>
				<div class="clearfix"> </div>
				
	
			</div>
		</div>
		</div>
	<!--footer-->
	
</body>
<div class="clr"></div>
<div class="paging clr">
	<?php echo $pagination; ?>
</div>
