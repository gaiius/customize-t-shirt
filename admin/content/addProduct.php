<?php if(!defined('BASEPATH')) die('You are not allowed to access this page'); ?>
<?php
	if($_POST){
		extract(html_entities($_POST));
		$price = str_replace(",","", $price);
		$picture = "";
		$files = $_FILES['upload']['name'];
		if($files != ""){
			$source = $_FILES['upload']['tmp_name'];
			$ext = end(explode(".",$files));
			$picture = $_FILES['upload']['name'];
			move_uploaded_file($source, "../".$picture);
		}
		
		$Qry = "INSERT INTO produk(kode, kategori_id, nama, keterangan_singkat, 
			harga, diskon, satuan, gambar, keterangan_lengkap, createdate, `status`)
			 VALUES ('".$kode."', '".$kategori_id."', '".$nama."', '".$keterangan_singkat."', 
			'".$price."', '".$diskon."', '".$satuan."', '".$picture."', '".$keterangan_lengkap."', 
			NOW(), '".$status."')";
		$Res = mysql_query($Qry);
		$ids = mysql_insert_id();
		if(mysql_affected_rows() > 0){
			//insert ticket detail
			if(count($kelas) > 0){
				foreach($kelas as $i=>$row){
					$cHarga = str_replace(",","",$harga[$i]);
					$detQry = "INSERT INTO produk_atribut(produk_id, nama, harga)
						VALUES('".$ids."', '".$row."', '".$cHarga."')";
					mysql_query($detQry);
				}
			}
			$message = "<div class='success'>Berhasil menambah record baru..</div>";
		} else {
			$message = "<div class='error'>".mysql_error()."</div>";
		}
		
		$_SESSION['msg'] = $message;
		header("Location: index.php?p=product");
	}
?>
<span class="page-title">Tambah Product</span>
<div class="inner">
<form action="" method="post" enctype="multipart/form-data" name="formContent" id="formContent" onsubmit="tinymce.triggerSave(); return validateForm('formContent')">
  <table width="100%" border="0" cellspacing="0" cellpadding="5">
     <tr>
      <td width="221">Kode Produk</td>
      <td width="19">:</td>
      <td width="1030"><input type="text" class="input required" name="kode" id="kode" readonly="readonly" style="background:#FFFFCC;" value="<?php echo getProductNumber();?>" /></td>
    </tr>
    <tr>
      <td width="221">Nama Produk</td>
      <td width="19">:</td>
      <td><input type="text" class="input required" name="nama" id="nama" /></td>
    </tr>
    
    <tr>
      <td width="221">Kategori</td>
      <td width="19">:</td>
      <td>
      
      <select class="input required" style="padding:4px; width:240px;" name="kategori_id" id="kategori_id">
        <option value="">( Pilih Kategori )</option>
        <?php 
		$qq = mysql_query("SELECT * FROM kategori");
		while($rr = mysql_fetch_array($qq)){
        	echo '<option value="'.$rr['id'].'">'.$rr['nama'].'</option>';
		} ?>
      </select></td>
    </tr>
    
    <tr>
      <td width="221">Keterangan</td>
      <td width="19">:</td>
      <td><input type="text" class="input" name="keterangan_singkat" id="keterangan_singkat" /></td>
    </tr>
    
    <tr>
      <td width="221">Harga</td>
      <td width="19">:</td>
      <td><input name="price" type="text" class="input required price" id="price" style="width:80px;" value="0" /> 
      Diskon(%) 
        <input name="diskon" type="text" class="input number" id="diskon" style="width:30px;" value="0" /> 
        Satuan 
        <input type="text" class="input required" style="width:80px;" name="satuan" id="satuan" /></td>
      </tr>
    
   <tr>
      <td>Gambar Produk</td>
      <td>:</td>
      <td><input type="file" name="upload" id="upload" /> 
      <small>Ukuran 1000x600 px</small></td>
    </tr>
    
    <tr>
      <td valign="top">Keterangan lengkap</td>
      <td valign="top">:</td>
      <td><textarea name="keterangan_lengkap" class="input required" id="keterangan_lengkap"></textarea></td>
    </tr>
    <tr>
      <td>Status</td>
      <td>:</td>
      <td><input name="status" type="radio" id="radio" value="1" checked="checked" />
        Publish
          <input type="radio" name="status" id="radio2" value="0" />
        Unpublish</td>
    </tr>
  </table>
  <hr />
  <h3>Pilihan Produk</h3>
  
  <table width="340" border="0" cellpadding="5" cellspacing="1" bgcolor="#CCCCCC" id="ticketTable">
   <thead>
    <tr>
      <td width="170" align="center" bgcolor="#EEEEEE">Nama Item</td>
      <td width="100" align="center" bgcolor="#EEEEEE">Harga</td>
      <td width="70" align="center" bgcolor="#EEEEEE"><a href="javascript:void(0);" onclick="addCell();">Tambah</a></td>
    </tr>
   </thead>
   <tbody>
   
    </tbody>
  </table>
  <p>&nbsp;</p>
  <hr />
  <input type="button" value="Cancel" class="button" onclick="window.location='index.php?p=product';" />
  <input type="submit" value="Simpan" class="button" />
</form>
<div class="clr"></div>
</div>
<script type="text/javascript">
doPricing('.price');
var $count = 1;
function addCell(){
	var bg = $count%2==1?'#FFFFFF':'#FFFFCC';
jQuery('#ticketTable tbody').append('<tr id="'+$count+'"><td align="center" bgcolor="'+bg+'"><input type="text" name="kelas['+$count+']" id="kelas_'+$count+'" class="input required" style="width:170px;" /></td><td align="center" bgcolor="'+bg+'"><input type="text" name="harga['+$count+']" id="harga_'+$count+'" class="input price required" style="width:100px;" /></td><td align="center" bgcolor="'+bg+'"><a href="javascript:void(0);" onclick="delCell('+$count+');" class="animate bTools">D</a></td></tr>');
	doPricing('.price');
	$count++;
}

function delCell(id){
	jQuery('#ticketTable tbody tr#'+id).remove();
}
tinymce.init({
	skin 	: 'lightgray',
	content_css : "admin/asset/css/content.css",
	document_base_url: "<?php echo abspath;?>",
	width	: 600,
	height	: 200,
	selector: "#keterangan_lengkap",
    plugins	: [
    	"moxiemanager advlist autolink link image lists charmap hr anchor pagebreak",
        "visualblocks visualchars code media nonbreaking table contextmenu directionality emoticons textcolor textcolor"
	],

    toolbar1: "insertfile | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent blockquote",
    toolbar2: "fontselect fontsizeselect | link unlink anchor image media code | forecolor backcolor | table | hr removeformat",
    menubar: false,
	toolbar_items_size: 'small'
});
</script>