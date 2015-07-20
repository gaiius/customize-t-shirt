<?php if(!defined('BASEPATH')) die('You are not allowed to access this page');?>
<?php
	if($_POST['booking']){
		extract(html_entities($_POST));
		$subtotal = $qty * ($harga - (($diskon * $harga) /100));
		$data = array(
			'id'		=> $produk_id,
			'atribut_id'=> $atribut_id,
			'harga'		=> $harga,
			'diskon'	=> $diskon,
			'qty'		=> $qty,
			'satuan'	=> $satuan,
			'subtotal'	=> $subtotal
		);
		if(cartAddItem($data)){
			$msg = '<div class="success">Berhasil menyimpan ke keranjang belanja..</div>';
		} else {
			$msg = '<div class="error">Item sudah ada di keranjang belanja..</div>';
		}
		
		$_SESSION['msg'] = $msg;
		header("Location: index.php?p=productdetail&id=".$produk_id);
		exit();
	}

	//get record selected	
	$resQry = "SELECT a.*, 
		(SELECT nama FROM kategori WHERE id=a.kategori_id) category
		FROM produk a
		WHERE a.id='".$_GET['id']."' LIMIT 1";
	$results = mysql_query($resQry);
	$r = mysql_fetch_array($results);
	$vPrice = $r['harga'] - ($r['harga'] * $r['diskon']/ 100);
	
	
		$resQrys = "SELECT * FROM produks";
	$resultst = mysql_query($resQrys);
	$s = mysql_fetch_array($resultst);
	
	if ($_SERVER['REQUEST_METHOD'] == 'POST')
{
	$targ_w = $targ_h = 150;
	$jpeg_quality = 90;

	$src = 'upload/'.$_POST['src'];
	$img_r = imagecreatefromjpeg($src);
	$dst_r = ImageCreateTrueColor( $targ_w, $targ_h );

	imagecopyresampled($dst_r,$img_r,0,0,$_POST['x'],$_POST['y'],$targ_w,$targ_h,$_POST['w'],$_POST['h']);

	header('Content-type: image/jpeg');
	imagejpeg($dst_r,null,$jpeg_quality);

	exit; 
	
}
$id = $_GET['id'];
$qur = mysql_query("select * from image where id='$id'");
while($rt = mysql_fetch_array($qur)){
	extract($rt);
	$img = $src;
}

?>

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>	
	<script type="text/javascript" src="js/fabric.js"></script>
	<script type="text/javascript" src="js/tshirtEditor.js"></script>
	<script type="text/javascript" src="js/jquery.miniColors.min.js"></script>
	
	<script type="text/javascript" src="jquery.Jcrop.min.js"></script>
	<link rel="stylesheet" href="jquery.Jcrop.min.css" type="text/css" />
  <script type="text/javascript">

 
</script>
<style type="text/css">
  #target {
    background-color: #ccc;
    width: 500px;
    height: 330px;
    font-size: 24px;
    display: block;
  }


</style>
	
    <!-- Le styles -->
    <link type="text/css" rel="stylesheet" href="css/jquery.miniColors.css" />
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/bootstrap-responsive.min.css" rel="stylesheet">
	 <script type="text/javascript">
	 </script>
	 <style type="text/css">
		 .footer {
			padding: 70px 0;
			margin-top: 70px;
			border-top: 1px solid #E5E5E5;
			background-color: whiteSmoke;
			}			
	      body {
	        padding-top: 60px;	        
	      }
	      .color-preview {
	      	border: 1px solid #CCC;
	      	margin: 2px;
	      	zoom: 1;
	      	vertical-align: top;
	      	display: inline-block;
	      	cursor: pointer;
	      	overflow: hidden;
	      	width: 20px;
	      	height: 20px;
	      }
	      .rotate {  
		    -webkit-transform:rotate(90deg);
		    -moz-transform:rotate(90deg);
		    -o-transform:rotate(90deg);
		    /* filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=1.5); */
		    -ms-transform:rotate(90deg);		   
		}		
		.Arial{font-family:"Arial";}
		.Helvetica{font-family:"Helvetica";}
		.MyriadPro{font-family:"Myriad Pro";}
		.Delicious{font-family:"Delicious";}
		.Verdana{font-family:"Verdana";}
		.Georgia{font-family:"Georgia";}
		.Courier{font-family:"Courier";}
		.ComicSansMS{font-family:"Comic Sans MS";}
		.Impact{font-family:"Impact";}
		.Monaco{font-family:"Monaco";}
		.Optima{font-family:"Optima";}
		.HoeflerText{font-family:"Hoefler Text";}
		.Plaster{font-family:"Plaster";}
		.Engagement{font-family:"Engagement";}

	 </style>
  </head>
  <!-- Navbar
    ================================================== -->
 

    <div class="container">
		<section id="typography">
		  <div class="page-header">
		    <h1>Customize T-Shirt</h1>
		  </div>
		
		  <!-- Headings & Paragraph Copy -->
		  <div class="row">			
		    <div class="span3">
		    	
		    	<div class="tabbable"> <!-- Only required for left/right tabs -->
				  <ul class="nav nav-tabs">
				  	<li class="active"><a href="#tab1" data-toggle="tab">T-Shirt Options</a></li>				    
				    <li><a href="#tab2" data-toggle="tab">Gravatar</a></li>
				  </ul>
				  <div class="tab-content">
				     <div class="tab-pane active" id="tab1">
				     	<div class="well">
<!--					      	<h3>Tee Styles</h3>-->
<!--						      <p>-->
						      	<select id="">                        
				                    <option value="1" selected="selected">Short Sleeve Shirts</option>
				                    <option value="2">Long Sleeve Shirts</option>                                        
				                    <option value="3">Hoodies</option>                    
				                    <option value="4">Tank tops</option>
								</select>				
<!--						      </p>-->								
					      </div>
					      		      
				     </div>				   
				    <div class="tab-pane" id="tab2">
				    	<div class="well">
				    		<div class="input-append">
							  <input class="span2" id="text-string" type="text" placeholder="add text here..."><button id="add-text" class="btn" title="Add text"><i class="icon-share-alt"></i></button>
							  <hr>
							</div>
							<div id="avatarlist">
								<img style="cursor:pointer;" class="img-polaroid" src="img/11.png">
				                <img style="cursor:pointer;" class="img-polaroid" src="img/12.png">
				                <img style="cursor:pointer;" class="img-polaroid" src="img/13.png">
				                <img style="cursor:pointer;" class="img-polaroid" src="img/14.png">
				                <img style="cursor:pointer;" class="img-polaroid" src="img/15.png">
				                <img style="cursor:pointer;" class="img-polaroid" src="img/17.png">
							</div>				    		
				    	</div>				      
				    </div>
				  </div>
				</div>				
		    </div>		
		    <div class="span6">		    
		    		<div align="center" style="min-height: 32px;">
		    			<div class="clearfix">
							<div class="btn-group inline pull-left" id="texteditor" style="display:none">						  
								<button id="font-family" class="btn dropdown-toggle" data-toggle="dropdown" title="Font Style"><i class="icon-font" style="width:19px;height:19px;"></i></button>		                      
							    <ul class="dropdown-menu" role="menu" aria-labelledby="font-family-X">
								    <li><a tabindex="-1" href="#" onclick="setFont('Arial');" class="Arial">Arial</a></li>
								    <li><a tabindex="-1" href="#" onclick="setFont('Helvetica');" class="Helvetica">Helvetica</a></li>
								    <li><a tabindex="-1" href="#" onclick="setFont('Myriad Pro');" class="MyriadPro">Myriad Pro</a></li>
								    <li><a tabindex="-1" href="#" onclick="setFont('Delicious');" class="Delicious">Delicious</a></li>
								    <li><a tabindex="-1" href="#" onclick="setFont('Verdana');" class="Verdana">Verdana</a></li>
								    <li><a tabindex="-1" href="#" onclick="setFont('Georgia');" class="Georgia">Georgia</a></li>
								    <li><a tabindex="-1" href="#" onclick="setFont('Courier');" class="Courier">Courier</a></li>
								    <li><a tabindex="-1" href="#" onclick="setFont('Comic Sans MS');" class="ComicSansMS">Comic Sans MS</a></li>
								    <li><a tabindex="-1" href="#" onclick="setFont('Impact');" class="Impact">Impact</a></li>
								    <li><a tabindex="-1" href="#" onclick="setFont('Monaco');" class="Monaco">Monaco</a></li>
								    <li><a tabindex="-1" href="#" onclick="setFont('Optima');" class="Optima">Optima</a></li>
								    <li><a tabindex="-1" href="#" onclick="setFont('Hoefler Text');" class="Hoefler Text">Hoefler Text</a></li>
								    <li><a tabindex="-1" href="#" onclick="setFont('Plaster');" class="Plaster">Plaster</a></li>
								    <li><a tabindex="-1" href="#" onclick="setFont('Engagement');" class="Engagement">Engagement</a></li>
				                </ul>
							    <button id="text-bold" class="btn" data-original-title="Bold"><img src="img/font_bold.png" height="" width=""></button>
							    <button id="text-italic" class="btn" data-original-title="Italic"><img src="img/font_italic.png" height="" width=""></button>
							    <button id="text-strike" class="btn" title="Strike" style=""><img src="img/font_strikethrough.png" height="" width=""></button>
							 	<button id="text-underline" class="btn" title="Underline" style=""><img src="img/font_underline.png"></button>
							 	<a class="btn" href="#" rel="tooltip" data-placement="top" data-original-title="Font Color"><input type="hidden" id="text-fontcolor" class="color-picker" size="7" value="#000000"></a>
						 		<a class="btn" href="#" rel="tooltip" data-placement="top" data-original-title="Font Border Color"><input type="hidden" id="text-strokecolor" class="color-picker" size="7" value="#000000"></a>
								  <!--- Background <input type="hidden" id="text-bgcolor" class="color-picker" size="7" value="#ffffff"> --->
							</div>							  
							<div class="pull-right" align="" id="imageeditor" style="display:none">
							  <div class="btn-group">										      
							      <button class="btn" id="bring-to-front" title="Bring to Front"><i class="icon-fast-backward rotate" style="height:19px;"></i></button>
							      <button class="btn" id="send-to-back" title="Send to Back"><i class="icon-fast-forward rotate" style="height:19px;"></i></button>
							      <button id="flip" type="button" class="btn" title="Show Back View"><i class="icon-retweet" style="height:19px;"></i></button>
							      <button id="remove-selected" class="btn" title="Delete selected item"><i class="icon-trash" style="height:19px;"></i></button>
							  </div>
							</div>			  
						</div>												
					</div>					  		
				<!--	EDITOR      -->					
					<div id="shirtDiv" class="page" style="width: 530px; height: 630px; position: relative; background-color: rgb(255, 255, 255);">
						
						<img id="cropbox" src="<?php echo $r['gambar'] ?>" alt=""></img>
						<div id="drawingArea" style="position: absolute;top: 100px;left: 160px;z-index: 10;width: 200px;height: 400px;">					
							<canvas id="tcanvas" width=200 height="400" class="hover" style="-webkit-user-select: none;"></canvas>
						</div>
					</div>
<!--					<div id="shirtBack" class="page" style="width: 530px; height: 630px; position: relative; background-color: rgb(255, 255, 255); display:none;">-->
<!--						<img src="img/crew_back.png"></img>-->
<!--						<div id="drawingArea" style="position: absolute;top: 100px;left: 160px;z-index: 10;width: 200px;height: 400px;">					-->
<!--							<canvas id="backCanvas" width=200 height="400" class="hover" style="-webkit-user-select: none;"></canvas>-->
<!--						</div>-->
<!--					</div>						-->
								
				<!--	/EDITOR		-->
		    </div>
		
		
		  </div>
		
		</section>
    </div><!-- /container -->
    
<!-- Footer ================================================== -->
      <!--<footer class="footer">      
      	<div class="container">
	        <p class="pull-right"><a href="#">Back to top</a></p>	        
	      </div>       
    </footer>
    <!-- Le javascript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->    
    <script src="js/bootstrap.min.js"></script>    
    <script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-35639689-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	
    $('#cropbox').Jcrop({
      aspectRatio: 1,
      onSelect: updateCoords
    });

  })();
   

 
  function updateCoords(c)
  {
    $('#x').val(c.x);
    $('#y').val(c.y);
    $('#w').val(c.w);
    $('#h').val(c.h);
  };

  function checkCoords()
  {
    if (parseInt($('#w').val())) return true;
    alert('Please select a crop region then press submit.');
    return false;
  };


</script>
  </body>

<!--<div id="draggable" class="ui-widget-content">
  <p><img src="<php echo $s['gambar'] ?>" alt=""></p>
</div>--->

<!--<div class="wrapRegister wrapHomeDetail">
	<h3><php echo $r['nama'];?></h3>
    <div class="clr"></div>
   	
		 <img src="<php echo $r['gambar'] ?>" alt="">
		
    </div>-->
    <div class="desc">
    	<span class="category clr">Kategori : <?php echo $r['category'];?></span>
        <span class="price clr" <?php echo ($r['diskon']>0)?'style="text-decoration:line-through;"':'';?>>Rp <?php echo number_format($r['harga']);?></span> 
        <?php if($r['diskon'] > 0):?>
        <span class="price price2 clr">Rp <?php echo number_format($vPrice);?></span>
        <span class="diskon clr">Diskon <?php echo $r['diskon']."%";?></span>   
        <?php endif; ?>
       
      <form name="formHomestay" class="formHomestay" method="post" action="" onSubmit="return validateForm('formHomestay');">
       	  <input type="hidden" name="produk_id" value="<?php echo $r['id'];?>">
          <input type="hidden" name="harga" value="<?php echo $r['harga'];?>">
          <input type="hidden" name="diskon" value="<?php echo $r['diskon'];?>">
          <input type="hidden" name="satuan" value="<?php echo $r['satuan'];?>">
          <?php
		  	$qq = mysql_query("SELECT * FROM produk_atribut WHERE produk_id='".$r['id']."'");
			if(mysql_num_rows($qq) > 0){
				echo '<h4>Pilihan Kue : </h4>';
				?>
                <select class="input required" name="atribut_id" id="atribut_id">
               		<option value="">( Tentukan Pilihan )</option>
                    <?php while($rr = mysql_fetch_array($qq)){ ?>
					<option value="<?php echo $rr['id'];?>" data-price="<?php echo $rr['harga'];?>"><?php echo $rr['nama'];?></option>
					<?php } ?>
               	</select>
                <?php
			} else {
			 echo '<input type="hidden" name="atribut_id" value="0">';
			}
		  ?><br>
          <h4>Qty (<?php echo $r['satuan'];?>) :</h4> 
          <input type="text" class="input required number" style="width:30px; margin-right:10px;" min="1" max="20" name="qty" id="qty" value="1" /><br>
          <input name="booking" type="submit" class="bButton" id="booking" value="Add to Cart">
      </form>
    </div>
    <div class="clr"></div>
    
    <h3>Keterangan</h3>
    <div class="summary clr" style="border-top:solid 1px #FFCC66; margin-bottom:20px; border-bottom:solid 1px #FFCC66; padding:10px 0;">
    	<?php echo html_entities_decode($r['keterangan_lengkap']);?>
    </div>
    <div class="clr"></div>
    
    <a href="javascript:history.back();" class="button">Kembali</a>
    
</div>
<div class="clr"></div>
<script type="text/javascript">
jQuery(function($){
	$('#atribut_id').change(function(){
		var diskon = $('input[name=diskon]').val();
		var harga = $('option:selected', this).attr('data-price');
		var vPrice = harga - ((diskon * harga) /100);
		
		$('input[name=harga]').val(harga);
		$('.wrapHomeDetail .price').html('Rp ' +number_format(harga));
		$('.wrapHomeDetail .price2').html('Rp ' +number_format(vPrice));
		
	});
});
</script>