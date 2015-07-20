<?php
	//error_reporting(0);
	session_start();
	ob_start();
	define('BASEPATH', true);
	if(!isset($_SESSION['admin']) || $_SESSION['admin']!=true){
		header("Location: login.php");
		exit();
	}
	
	include_once("../include/config.php");
	include_once("../include/function.php");
	include_once("../PHPMailer/class.phpmailer.php");
	include_once("../include/sendmail.php");
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

<title>MultiUsaha| Administrator</title>
<?php if($_POST): ?>
<?php else: ?>
<link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
  <script src="//code.jquery.com/jquery-1.10.2.js"></script>
  <script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
  <link rel="stylesheet" href="/resources/demos/style.css">
   <style>
  #draggable { width: 150px; height: 150px; padding: 0.5em; }
  </style>
  <script>
  $(function() {
    $( "#draggable" ).draggable();
  });
  </script>
<link type="text/css" rel="stylesheet" href="asset/css/style.css" />
<link type="text/css" rel="stylesheet" href="asset/css/jquery.fancybox.css" />
<link type="text/css" rel="stylesheet" href="asset/css/jquery-ui.css" />
<script type="text/javascript" src="asset/js/jquery-1.7.2.min.js"></script>
<script type="text/javascript" src="asset/js/jquery-ui-1.8.21.custom.min.js"></script>
<script type="text/javascript" src="asset/js/jquery.price_format1.8-min.js"></script>
<script type="text/javascript" src="asset/js/jquery.fancybox.js"></script>
<script type="text/javascript" src="asset/js/jquery.nicescroll.js"></script>
<script type="text/javascript" src="asset/js/jquery.validate.min.js"></script>
<script type="text/javascript" src="asset/js/jquery.autocomplete.js"></script>
<script src="asset/js/jquery.easydropdown.js"></script>
<script type="text/javascript" src="../asset/tinymce/tinymce.min.js"></script>
<script type="text/javascript" src="../asset/tinymce/plugins/moxiemanager/js/moxman.loader.min.js"></script>
<script>var OEmpty = 'empty.php';</script>
<script type="text/javascript" src="asset/js/validator.js"></script>
<link href="asset/css/bootstrap.css" rel='stylesheet' type='text/css' />
<script>$(document).ready(function(){$(".megamenu").megamenu();});</script>
<script src="asset/js/responsiveslides.min.js"></script>
<script type="text/javascript">
jQuery(function($){
	$(".datepicker").datepicker({
		dateFormat: 'yy-mm-dd',
		changeMonth: true,
		changeYear: true
	});
	
	$('body').niceScroll({
		autohidemode		: true,
		cursoropacitymax	: 0.8,
		cursorborderradius	: "6px",
		cursorwidth			: "8px", 
		cursorcolor			: "#333333",
		cursorborder		: "none",
		cursorminheight		: 80,
		railpadding			: {left:0, right:1},
		railalign			: "center",
		enablekeyboard		: true
	});
	
	var hNav = $('.mainnav').height();
	var hCon = $('.contentwrap').height();
	if(hNav > hCon) $('.contentwrap').height(hNav);
	if(hNav < hCon) $('.mainnav').height(hCon); 
	setTimeout("jQuery('div.message > div').fadeOut('fast');",3000);
});
</script>
<?php endif; ?>
</head>
<body id="bd">
<div class="wrapper clr">
    <div class="header clr">
    	<h1 class="logo">
        	<a href="index.php">
            	<span>TAKASHIMURA</span>
            </a>
		</h1>
            
        <a href="login.php?act=logout" class="logout animate">
        	<span>Logout</span>
        </a>
        <div class="clr"></div>
	</div>
    
    <div class="message clr">
    <?php
		echo $_SESSION['msg'];
		unset($_SESSION['msg']);
	?>
    </div>
	
    <div class="container clr">
        <div class="mainnav">
        	<div class="titlenav">Main Menu</div>
                <ul class="navigation">
                    <li><a href="?p=home"><span>Beranda</span></a></li>
                    <li><a href="javascript:void(0);"><span>Data Master</span></a>
                        <ul>
                            <li><a href="?p=post"><span>Data Artikel</span></a></li>
                            <li><a href="?p=bank"><span>Data Bank</span></a></li>
                            <li><a href="?p=admin"><span>Data Admin</span></a></li>
                        </ul>
                    </li>
                    
                    <li><a href="javascript:void(0);"><span>Data Operation</span></a>
                        <ul>
                            <li><a href="?p=member"><span>Data Member</span></a></li>
                            <li><a href="?p=category"><span>Product Category</span></a></li>
                            <li><a href="?p=product"><span>Data Product</span></a></li>
							<li><a href="?p=products"><span>Data Logo</span></a></li>
                            <li><a href="?p=order"><span>Data Order</span></a></li>
                            <li><a href="?p=confirm"><span>Konfirmasi Bayar</span></a></li>
                        </ul>
                    </li>
                    
                    <li><a href="javascript:void(0);"><span>Data Laporan</span></a>
                        <ul>
                            <li><a href="?p=reportorder"><span>Order Penjualan</span></a></li>
                            <li><a href="?p=reportdetail"><span>Penjualan Product</span></a></li>
                        </ul>
                    </li>
                </ul>
      </div><!--mainnav-->
        
        <div class="contentwrap">
        <?php
            $pages = isset($_GET['p'])?$_GET['p']:'home';
            $dirPages = "content/".$pages.".php";
            if(file_exists($dirPages)){
                include_once($dirPages);
            } else {
                ?>
                <span class="page-title">Error 404</span>
                <div class="inner">
                    <h1>Uuppss Error 404 Document Not Found</h1>
                </div>
                <?php
            }
        ?>
        <div class="clr"></div>
        </div>
    <div class="clr"></div>
    </div>
</div>
</body>
</html>
