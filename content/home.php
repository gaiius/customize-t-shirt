<?php if(!defined('BASEPATH')) die('You are not allowed to access this page'); ?>
<div class="container">
<div class="col-md-8">

			<div class="product">
	<h3>Produk Terbaru</h3>
   	
    	
        <?php
		$stayQry = mysql_query("SELECT * FROM produk WHERE `status`=1 ORDER BY id DESC LIMIT 6");
		$i = 0;
		while($row = mysql_fetch_array($stayQry)){ 
			$i++;
			$liClass = '';
			if($i == 3){
				$liClass = 'last';
				$i=0;
			}
			
			$vPrice = $row['harga'] - (($row['diskon'] * $row['harga'])/100);
			?>
			<div class="col-md-3 box-in-at" <?php echo $liClass;?>>
		<div class=" grid_box portfolio-wrapper">	
            	<span class="pic">
					<?php if($row['diskon'] > 0): ?>
                    <span class="diskon"></span>
                    <?php endif;?>
					
                    <img class="img-responsive" src="<?php echo $row['gambar'] ?>" alt="">
                </span>
					 
                <div class="desc">
                	<a class="animate title" href="?p=productdetail&id=<?php echo $row['id'];?>"><?php echo $row['nama'];?></a>
                    <p><?php echo $row['keterangan_singkat'];?></p>
                    <span class="price <?php echo $row['diskon']>0?'old':'';?> clr">Rp <?php echo number_format($row['harga']);?></span>
                    <?php if($row['diskon']>0):?>
                    <span class="price clr">Rp <?php echo number_format($vPrice);?></span>
                    <?php endif;?>
                </div>
          </div>
		 
		  </div>
		<?php } ?>
        
    
	</div>
	</div>
</div>