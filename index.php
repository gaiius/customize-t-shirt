<?php 
    //error_reporting(0);
    session_start();
    ob_start();
    define('BASEPATH', true);
    //include
    include_once("include/config.php");
    include_once("include/function.php");
    include_once("PHPMailer/class.phpmailer.php");
    include_once("include/sendmail.php");
    include_once("include/cart.php");
    $reqPage = isset($_GET['p'])?$_GET['p']:'home';
?>

<html>
<head>
<title>MultiUsaha</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="keywords" content="Gifty Responsive web template, Bootstrap Web Templates, Flat Web Templates, Andriod Compatible web template, 
Smartphone Compatible web template, free webdesigns for Nokia, Samsung, LG, SonyErricsson, Motorola web design" />
<script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } </script>
<link href="asset/css/bootstrap.css" rel='stylesheet' type='text/css' />
<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<!-- Custom Theme files -->
<link href="asset/css/style.css" rel='stylesheet' type='text/css' />
<link rel="stylesheet" href="asset/css/jquery.countdown.css" />
<!-- Custom Theme files -->
<!--webfont-->
<link href='http://fonts.googleapis.com/css?family=Raleway:100,200,300,400,500,600,700,800,900' rel='stylesheet' type='text/css'>
<script type="text/javascript" src="asset/js/jquery-1.11.1.min.js"></script>
<!-- dropdown -->
<script src="asset/js/jquery.easydropdown.js"></script>
<!-- start menu -->
<link href="asset/css/megamenu.css" rel="stylesheet" type="text/css" media="all" />
<script type="text/javascript" src="asset/js/megamenu.js"></script>
<script>$(document).ready(function(){$(".megamenu").megamenu();});</script>
<script src="asset/js/responsiveslides.min.js"></script>
<script>
    $(function () {
      $("#slider").responsiveSlides({
      	auto: true,
      	nav: false,
      	speed: 500,
        namespace: "callbacks",
        pager: true,
      });
    });
</script>
<script src="asset/js/jquery.countdown.js"></script>
<script src="asset/js/script.js"></script>
</head>
<body>
<div class="header_top">
  <div class="container">
  	<div class="header_top-box">
     <div class="header-top-left">
			  
   			  
   				    <div class="clearfix"></div>
   			 </div>
			 <div class="cssmenu">
				<ul>
						<li><?php if($_SESSION['login']!=true):?><a href="index.php?p=login">Login</a></li>
					<li><a href="index.php?p=register">Create an account</a><?php else:?>
                <?php endif;?></li>
				</ul>
			</div>
			<div class="clearfix"></div>
   </div>
</div>
</div>
<div class="header_bottom">
	<div class="container">
	 <div class="header_bottom-box">
		<div class="header_bottom_left">
			<img src="assets/img/logo.jpg" alt=""/>
			<div class="clearfix"> </div>
		</div>
		
		<div class="header_bottom_right">
			<div class="search">
			  <input type="text" value="Your email address" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Your email address';}">
			  <input type="submit" value="">
	  		</div>
	  		<ul class="bag">
	  			<a href="#"><i class="bag_left"> </i></a>
	  			<a href="#"><li class="bag_right"><p>205.00 $</p> </li></a>
	  			<div class="clearfix"> </div>
	  		</ul>
		</div>
		<div class="clearfix"> </div>
	</div>
</div>
</div>
<div class="menu">
	<div class="container">
		<div class="menu_box">
	     <ul class="megamenu skyblue">
			<li class="active grid"><a class="color2" href="index.html">Home</a></li>
			<li><a href="index.php"><span>Beranda</span></a></li>
                <li><a class="color2" href="?p=product"><span>Semua Produk</span></a></li>
                <li><a class="color5" href="?p=aboutus"><span>Tentang Kami</span></a></li>
                <li><a class="color7" href="?p=news"><span>Artikel</span></a></li>
                <li><a class="color8"href="?p=caraorder"><span>Cara Pemesanan</span></a></li>
                <li><a class="color3" href="?p=contactus"><span>Hubungi Kami</span></a></li>
			<div class="clearfix"> </div>
		 </ul>
	  </div>
</div>
</div>
 <?php if($reqPage == 'home'):?>
<div class="index_slider">
	<div class="container">
	  <div class="callbacks_container">
	      <ul class="rslides" id="slider">
	        <li><img src="asset/images/slider1.jpg" class="img-responsive" alt=""/></li>
			
	      </ul>
	  </div>
	</div> 
</div>
 <?php endif; ?>	
<br>
<div class="container">
<h3><span>Keranjang Belanja</span></h3>
                      <i class="spinner_icon"> </i>
                            <?php 
                                $cartCount = cartCountUniqueItems();
                                $cartTotal = cartCountTotalItems();
                            if($cartCount > 0){ ?>
                            <p><?php echo $cartCount;?> Item / Rp. <?php echo number_format($cartTotal);?></p>
                            <a href="?p=cart" class="button">Checkout</a>  <div class="clr"></div><br />           
                            <?php } else { ?>
                            <p>Tidak ada item di keranjang</p>
     	<div class="clearfix"> </div>	
   <?php } ?>
   <div class="container">
	  
       	<?php if($_SESSION['member']==true):?>
	  
					  <ul class="spinner">
					 <h3><span>Member Area</span></h3>
								<li><a class="animate" href="?p=listorder">Daftar Order</a></li>
                                <li><a class="animate" href="?p=confirmpayment">Konfirmasi Bayar</a></li>
                                <li><a class="animate" href="?p=editmember">Edit Account</a></li>
                                <li><a class="animate" href="?p=testimonial">Testimonial</a></li>
                                <li><a class="animate" href="?p=login&act=logout">Logout</a></li>
						  </ul>
						    <?php endif;?>
					        

	<div class="clearfix"> </div>	
   <div class="content_middle_bottom">
   
	  <div class="col-md-4">
	  	<?php
          $qq = mysql_query("SELECT * FROM kategori ORDER BY nama");
         while($rr = mysql_fetch_array($qq)){ ?>
                           
		  <ul class="spinner">
			<i class="spinner_icon"> </i>
			<li class="spinner_head"><h3><a href="?p=product&cat_id=<?php echo $rr['id'];?>"><?php echo $rr['nama'];?></a></h3></li>
			<div class="clearfix"> </div>
		
		  </ul>
	 <?php } ?>
		</div>
			
		<div class="col-md-8">
		  <ul class="spinner">
			<i class="paperclip"> </i>
			<li class="spinner_head"><h3>From the Blog</h3></li>
			<div class="clearfix"> </div>
		  </ul>
		    
				 <?php
                        $reqFile = "content/".$reqPage.".php";
                        if(file_exists($reqFile)){
                            include_once($reqFile);
                        } else {
                            echo '<h1 class="error404">Error Document Not Found</h1>';
                        }
                    ?>

		<div class="clearfix"></div>
	</div>
	<div class="clearfix"> </div>
	<div class="content_middle">
	<div class="container">
		<ul class="promote">
			<i class="promote_icon"> </i>
			<li class="promote_head"><h3>Promotion</h3></li>
		</ul>
		 <ul id="flexiselDemo3">
		   <?php
                        $qryLatest = mysql_query("SELECT * FROM produk WHERE `status`=1 ORDER BY id DESC LIMIT 3");
                        while($row = mysql_fetch_array($qryLatest)){
                            ?>
						<li><img src="<?php echo $row['gambar'] ?>" class="img-responsive" alt=""> <div class="grid-flex"><a href="?p=productdetail&id=<?php echo $row['id'];?>"><?php echo $row['nama'];?></a>
							<div class="m_3">Rp. <?php echo number_format($row['harga']);?></div>
							<div class="ticket"> </div>
						</div></li>
						<?php }?>
				     </ul>
				    <script type="text/javascript">
					 $(window).load(function() {
						$("#flexiselDemo3").flexisel({
							visibleItems: 6,
							animationSpeed: 1000,
							autoPlay:true,
							autoPlaySpeed: 3000,    		
							pauseOnHover: true,
							enableResponsiveBreakpoints: true,
					    	responsiveBreakpoints: { 
					    		portrait: { 
					    			changePoint:480,
					    			visibleItems: 1
					    		}, 
					    		landscape: { 
					    			changePoint:640,
					    			visibleItems: 2
					    		},
					    		tablet: { 
					    			changePoint:768,
					    			visibleItems: 3
					    		}
					    	}
					    });
					    
					});
				   </script>
				   <script type="text/javascript" src="asset/js/jquery.flexisel.js"></script>
	</div>
</div>
</div>
<div class="footer">
	<div class="container">
		<ul class="footer_nav">
		  <li><a href="index.php"><span>Beranda</span></a></li>
                <li><a class="color2" href="?p=product"><span>Semua Produk</span></a></li>
                <li><a class="color5" href="?p=aboutus"><span>Tentang Kami</span></a></li>
                <li><a class="color7" href="?p=news"><span>Artikel</span></a></li>
                <li><a class="color8"href="?p=caraorder"><span>Cara Pemesanan</span></a></li>
                <li><a class="color3" href="?p=contactus"><span>Hubungi Kami</span></a></li>
		</ul>
		<p class="copy">Copyright&copy; 2015 Template by <a href="#" target="_blank">MultiUsaha</a></p>
	</div>
</div>
</body>
</html>		