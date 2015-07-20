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
<title>Gifty an E-Commerce online Shopping Category Flat Bootstarp responsive Website Template| Home :: w3layouts</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="keywords" content="Gifty Responsive web template, Bootstrap Web Templates, Flat Web Templates, Andriod Compatible web template, 
Smartphone Compatible web template, free webdesigns for Nokia, Samsung, LG, SonyErricsson, Motorola web design" />
<script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } </script>
<link href="css/bootstrap.css" rel='stylesheet' type='text/css' />
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
<script type="text/javascript" src="js/megamenu.js"></script>
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
			  <div class="box">
			  	   	<select tabindex="4" class="dropdown drop">
					   <option value="" class="label" value="">Rupiah :</option>
					</select>
   			   </div>
   			   <div class="box1">
   				       <select tabindex="4" class="dropdown">
							<option value="" class="label" value="">English :</option>
					  </select>
   			   </div>
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
			
			<ul class="clock">
				<i class="clock_icon"> </i>
				<li class="clock_desc">Justo 24/h</li>
			</ul>
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
<div class="container">
<div class="menu">
		<div class="menu_box">
	     <ul class="megamenu skyblue">
		<li><a href="index.php"><span>Beranda</span></a></li>
                <li><a href="?p=product"><span>Semua Produk</span></a></li>
                <li><a href="?p=aboutus"><span>Tentang Kami</span></a></li>
                <li><a href="?p=news"><span>Artikel</span></a></li>
                <li><a href="?p=caraorder"><span>Cara Pemesanan</span></a></li>
                <li><a href="?p=contactus"><span>Hubungi Kami</span></a></li>
		 </ul>
	  </div>
</div>
</div>
<div class="content_middle">
 <?php if($reqPage == 'home'):?>
<div class="index_slider">
	<div class="container">
	  <div class="callbacks_container">
	      <ul class="rslides" id="slider">
	        <li><img src="asset/images/slider1.jpg" class="img-responsive" alt=""/></li>
	        <li><img src="asset/images/2.jpg" class="img-responsive" alt=""/></li>
	        <li><img src="asset/images/3.jpg" class="img-responsive" alt=""/></li>
	      </ul>
	  </div>
	</div> 
</div>
 <?php endif; ?>	

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
                            <?php } ?>
					<div class="content_middle_bottom">
					
					<div class="col-md-4">
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
						<?php
                            $qq = mysql_query("SELECT * FROM kategori ORDER BY nama");
                            while($rr = mysql_fetch_array($qq)){ ?>
                           
                         
                          </ul>
		  <ul class="spinner">
			<i class="spinner_icon"> </i>
		 <li><a class="animate" href="?p=product&cat_id=<?php echo $rr['id'];?>"><?php echo $rr['nama'];?></a></li>	
			<div class="clearfix"> </div>
			
			 <?php } ?>
			 
		  </ul>
		</div>
		<div class="col-md-8">
				 <div class="right-grid">
					<div class="inner">
                    <?php
                        $reqFile = "content/".$reqPage.".php";
                        if(file_exists($reqFile)){
                            include_once($reqFile);
                        } else {
                            echo '<h1 class="error404">Error Document Not Found</h1>';
                        }
                    ?>
                </div>
				 </div>
				 <div class="clearfix"></div>
			
		</div>
		<div class="clearfix"></div>
	</div>
</div>
	<div class="content_middle">
		 <ul id="flexiselDemo3">
		  <?php
                        $qryLatest = mysql_query("SELECT * FROM produk WHERE `status`=1 ORDER BY id DESC LIMIT 3");
                        while($row = mysql_fetch_array($qryLatest)){
                            ?>
						<li> <img src="<?php echo $row['gambar'] ?>" alt=""> <div class="grid-flex"><a href="?p=productdetail&id=<?php echo $row['id'];?>"><?php echo $row['nama'];?></a></p>
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
    <div class="content_bottom">
    	<div class="col-md-4 span_1">
    	  <ul class="spinner">
			 <i class="bubble"> </i>
			 <li class="spinner_head"><h3>Tentang Kami</h3></li>
			 <div class="clearfix"> </div>
		  </ul>
		  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat</p>
    	</div>
    	<div class="col-md-4 span_1">
    	  <ul class="spinner">
			 <i class="mail"> </i>
			 <li class="spinner_head"><h3>Hubungi Kami via</h3></li>
			 <div class="clearfix"> </div>
		  </ul>
		 <ul class="social">
			<li><a href=""> <i class="fb"> </i> </a></li>
		    <li><a href=""><i class="tw"> </i> </a></li>
			<li><a href=""><i class="google"> </i> </a></li>
			<li><a href=""><i class="linkedin"> </i> </a></li>
			<li><a href=""><i class="skype"> </i> </a></li>
		</ul>
    	</div>
    	<div class="col-md-4 span_1">
    	  <ul class="spinner">
			 <i class="mail"> </i>
			 <li class="spinner_head"><h3>Hubungi Kami</h3></li>
			 <div class="clearfix"> </div>
		  </ul>
		  <p>500 Lorem Ipsum Dolor Sit,</p>
		  <p>22-56-2-9 Sit Amet, Lorem,</p>
		  <p>Phone:(00) 222 666 444</p>
		  <p><a href="mailto:info@demo.com"> info(at)lutfishop.com</a></p>
    	</div>
    	<div class="clearfix"> </div>
    </div>
</div>
<div class="footer">
	<div class="container">
		<p class="copy">Copyright&copy; 2015 Template by <a href="#" target="_blank"> Lutfi Shop</a></p>
	</div>
</div>
</body>
</html>		