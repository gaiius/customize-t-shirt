<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="shortcut icon" href="favicon.ico" />
<title>W2F Catering | Classic Custom Cupcakes</title>
<link rel="stylesheet" type="text/css" href="asset/css/style.css" />
<link rel="stylesheet" type="text/css" href="asset/css/camera.css" />
<link rel="stylesheet" type="text/css" href="asset/css/jquery-ui.css" />
<link rel="stylesheet" type="text/css" href="asset/css/jquery.fancybox.css" />
<script type="text/javascript" src="asset/js/jquery-1.7.2.min.js"></script>
<script type="text/javascript" src="asset/js/jquery-ui-1.8.21.custom.min.js"></script>
<script type="text/javascript" src="asset/js/jquery.autocomplete.js"></script>
<script type="text/javascript" src="asset/js/jquery.price_format1.8-min.js"></script>
<script type="text/javascript" src="asset/js/jquery.validate.min.js"></script>
<script type="text/javascript" src="asset/js/jquery.easing.1.3.js"></script>
<script type="text/javascript" src="asset/js/jquery.fancybox.js"></script>
<script type="text/javascript" src="asset/js/jquery.nicescroll.js"></script>
<script type="text/javascript" src="asset/js/camera.min.js"></script>
<script type="text/javascript" src="asset/js/hoverIntent.js"></script>
<script type="text/javascript" src="asset/js/superfish.js"></script>
<script type="text/javascript" src="asset/js/validator.js"></script>
<script type="text/javascript">
jQuery(function($){
     //nicescroll
     $('body').niceScroll({
        cursoropacitymax : 0.8,
        cursorborderradius  : "6px",
        cursorwidth     : "10px", 
        cursorcolor     : "rgba(0,0,0,0.8)",
        cursorborder    : "none",
        cursorminheight : 80,
        cursormaxheight : 200,
        railpadding     : {left:0, right:1},
        railalign       : "center",
        enablekeyboard  : false
    });
    
    $('#camera_wrap').camera({
        height: '272px',
        navigation:false,
        navigationHover:false,
        mobileNavHover:false,
        pagination:true,
        playPause:false,
        loader: false,
        fx: "simpleFade"
    });
    
    $(".datepicker").datepicker({
        dateFormat: 'yy-mm-dd',
        changeMonth: true,
        changeYear: true
    });
     
    $('ul.sf-menu').superfish();
    setTimeout("jQuery('div.message > div').slideUp();",3000);
});
</script>
</head>
<body id="bd">
<div class="wrapper clr">
    <div class="header clr">
        <div class="main">
            <h1 class="logo">
                <a href="index.php">
                    <span>W2F Catering</span>
                </a>
            </h1>
            <div class="navtop">
                <?php if($_SESSION['login']!=true):?>
                <a href="index.php?p=login">Login</a> or <a href="index.php?p=register">Create an account</a>
                <?php else:?>
                <a>You are logged in</a>
                <?php endif;?>
            </div>
            <div class="searchform">
                
                <form action="index.php" method="get">
                    <input type="hidden" name="p" value="product" />
                    <input type="hidden" name="cat_id" value="<?php echo $_GET['cat_id'];?>" />
                    <input value="<?php echo isset($_GET['s'])?$_GET['s']:'';?>" name="s" id="search" placeholder="Pencarian.." />
                </form> 
            </div>
            <div class="clr"></div>
        </div>
    </div><!--header-->
    <div class="clr"></div>
    
    <div class="mainnav clr">
        <div class="main">
            <ul class="sf-menu">
                <li><a href="index.php"><span>Beranda</span></a></li>
                <li><a href="?p=product"><span>Semua Produk</span></a></li>
                <li><a href="?p=aboutus"><span>Tentang Kami</span></a></li>
                <li><a href="?p=news"><span>Artikel</span></a></li>
                <li><a href="?p=caraorder"><span>Cara Pemesanan</span></a></li>
                <li><a href="?p=contactus"><span>Hubungi Kami</span></a></li>
            </ul>
        </div>
    </div><!--mainnav-->
    <div class="clr"></div>
    
    <div class="container clr">
        <div class="main">
            <div class="contentwrap">
                <div class="message clr">
                    <?php
                        echo $_SESSION['msg'];
                        unset($_SESSION['msg']);
                    ?>
                </div>
                <?php if($reqPage == 'home'):?>
                <div class="slideshow clr">
                    <div class="camera_wrap camera_white_skin" style="height:300px;" id="camera_wrap">
                        <div data-src="asset/images/slides/1.jpg"></div>
                        <div data-src="asset/images/slides/2.jpg"></div>
                        <div data-src="asset/images/slides/3.jpg"></div>
                    </div>
                    <div class="clr"></div>
                </div><!--slideshow-->
                <div class="clr"></div>
                <?php endif; ?>
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
            </div><!--contentwrap-->
            
            <div class="sidebar">
                <div class="inner">
                    
                    <div class="widget widget-cart clr">
                        <h3><span>Keranjang Belanja</span></h3>
                        <div class="inner">
                            <?php 
                                $cartCount = cartCountUniqueItems();
                                $cartTotal = cartCountTotalItems();
                            if($cartCount > 0){ ?>
                            <p><?php echo $cartCount;?> Item / Rp. <?php echo number_format($cartTotal);?></p>
                            <a href="?p=cart" class="button">Checkout</a>  <div class="clr"></div><br />           
                            <?php } else { ?>
                            <p>Tidak ada item di keranjang</p>
                            <?php } ?>
                        </div>
                    </div><!--cart-->
                    
                    <?php if($_SESSION['member']==true):?>
                    <div class="widget widget-menu clr">
                        <h3><span>Member Area</span></h3>
                        <div class="inner">
                            <ul>
                                <li><a href="?p=listorder">Daftar Order</a></li>
                                <li><a href="?p=confirmpayment">Konfirmasi Bayar</a></li>
                                <li><a href="?p=editmember">Edit Account</a></li>
                                <li><a href="?p=testimonial">Testimonial</a></li>
                                <li><a href="?p=login&act=logout">Logout</a></li>
                            </ul>
                        </div>
                    </div><!--member menu -->
                    <?php endif;?>
                                        
                    <div class="widget widget-menu clr">
                        <h3><span>Kategori Produk</span></h3>
                        <div class="inner">
                          <ul>
                          <?php
                            $qq = mysql_query("SELECT * FROM kategori ORDER BY nama");
                            while($rr = mysql_fetch_array($qq)){ ?>
                            <li><a class="animate" href="?p=product&cat_id=<?php echo $rr['id'];?>"><?php echo $rr['nama'];?></a></li>
                          <?php } ?>
                          </ul>
                        </div>
                    </div><!--category-->
                    
                    <div class="widget widget-cs clr">
                        <h3><span>Customer Service</span></h3>
                        <div class="inner">
                            <p>
                                Winda<br />
                                <a href="ymsgr:sendIM?moehamadmuri@ymail.com"> 
                                    <img src="asset/images/ym.png" />
                                </a>
                            </p>
                            <p>
                                Windi<br />
                                <a href="ymsgr:sendIM?moehamadmuri@ymail.com"> 
                                    <img src="asset/images/ym.png" />
                                    <!--img alt="" src="http://opi.yahoo.com/online?u=khafidli@mail.com&amp;m=g&amp;t=2&amp;l=us" /-->
                                </a>
                            </p>
                        </div>
                    </div><!--rekening-->
                    
                    <div class="widget widget-testimony clr">
                        <h3><span>Testimonial</span></h3>
                        <div class="inner">
                            <ul>
                                <?php
                                $tQry = "SELECT a.komentar,
                                        (SELECT nama_lengkap FROM 
                                            member WHERE id=a.member_id) `member`
                                        FROM testimonial a
                                        ORDER BY id DESC LIMIT 1";
                                $qq = mysql_query($tQry);
                                while($rr=mysql_fetch_array($qq)){
                                ?>
                                <li>
                                    <p><?php echo $rr['komentar'];?></p>
                                    <h4><?php echo $rr['member'];?></h4>
                                </li>
                                <?php } ?>
                            </ul>
                      </div>
                    </div><!--rekening-->
                </div>
            </div><!--sidebar-->
            <div class="clr"></div>
        </div>
        <div class="clr"></div>
    </div><!--container-->
    <div class="clr"></div>
    
    <div class="botnav clr">
        <div class="main">
            <div class="boxBottom first">
                <h3>Kue Terlaris</h3>
                <div class="inner">
                    <ul class="latest">
                    <?php
                        $dqry = "SELECT a.*, 
                            SUM(b.qty) qty_terjual FROM produk a 
                            LEFT JOIN order_detail b ON b.produk_id=a.id
                            WHERE a.`status`=1 GROUP BY a.id 
                            ORDER BY qty_terjual DESC LIMIT 3";
                        $qryLatest = mysql_query($dqry);
                        while($row = mysql_fetch_array($qryLatest)){
                            ?>
                            <li class="clr">
                                <span class="pic">
                                    <?php echo picThumbnail($row['gambar'],50,50,'');?>
                                </span>
                                <div class="right">
                                    <a href="?p=productdetail&id=<?php echo $row['id'];?>"><?php echo $row['nama'];?></a>
                                    <span class="price">Rp. <?php echo number_format($row['harga']);?></span>
                                </div> 
                                <div class="clr"></div>
                            </li>
                            <?php
                        }
                    ?>
                    </ul>
                </div>
            </div>
            
            <div class="boxBottom second">
                <h3>Produk Terbaru</h3>
                <div class="inner">
                <ul class="latest">
                    <?php
                        $qryLatest = mysql_query("SELECT * FROM produk WHERE `status`=1 ORDER BY id DESC LIMIT 3");
                        while($row = mysql_fetch_array($qryLatest)){
                            ?>
                            <li class="clr">
                                <span class="pic">
                                    <?php echo picThumbnail($row['gambar'],50,50,'');?>
                                </span>
                                <div class="right">
                                    <a href="?p=productdetail&id=<?php echo $row['id'];?>"><?php echo $row['nama'];?></a>
                                    <span class="price">Rp. <?php echo number_format($row['harga']);?></span>
                                </div> 
                                <div class="clr"></div>
                            </li>
                            <?php
                        }
                    ?>
                    </ul>
                </div>
          </div>
            
            <div class="boxBottom last">
                <h3>Hubungi Kami</h3>
                <div class="inner" style="line-height:1.8;">
                    <div style="font-size:18px;">W2F Catering</div>
                    <p>
                    JL. Garuda 4 No. 25 <br />
                    Griya Sangiang Mas, Tangerang</p>
                    <table width="200" border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td>Telp</td>
                        <td>:</td>
                        <td>(021) 5516521</td>
                      </tr>
                      <tr>
                        <td>Hp</td>
                        <td>:</td>
                        <td>0856 93703802</td>
                      </tr>
                      <tr>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>0852 13756626</td>
                      </tr>
                    </table>
              </div>
            </div>
            <div class="clr"></div>
        </div>
    </div><!--botnav-->
    
    <div class="footer clr">
        <div class="main">
            &copy; 2014 W2F Catering, All right reserved.
        </div>
    </div><!--footer-->
    
</div>
</body>
</html>