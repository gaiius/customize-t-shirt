<?php if(!defined('BASEPATH')) die('You are not allowed to access this page'); ?>
<?php
	if($_POST){
		extract(html_entities($_POST));
		$price = str_replace(",","", $price);
		$picQry = "";
		$files = $_FILES['upload']['name'];
		if($files != ""){
			$source = $_FILES['upload']['tmp_name'];
			$ext = end(explode(".",$files));
			$picture = "asset/upload/".md5(time()).".".$ext;
			move_uploaded_file($source, "../".$picture);
			$picQry.= "gambar='".$picture."',";
		}
		
		$Qry = "UPDATE produk SET
			kategori_id = '".$kategori_id."',
			nama = '".$nama."',
			harga = '".$price."',
			diskon = '".$diskon."',
			satuan = '".$satuan."',
			".$picQry."
			keterangan_singkat = '".$keterangan_singkat."',
			keterangan_lengkap = '".$keterangan_lengkap."',
			`status` = '".$status."'
			WHERE id='".$id."'";
		$Res = mysql_query($Qry);
		
		if($Res){
			//delete removed ticket class
			$tikets = is_array($tiket_id)?implode(",",$tiket_id):0;
			$delQry = "DELETE FROM produk_atribut 
				WHERE produk_id='".$id."'
				AND id NOT IN (".$tikets.")";
			mysql_query($delQry);
			
			if(count($kelas) > 0){
				foreach($kelas as $i=>$row){
					$cHarga = str_replace(",","",$harga[$i]);
					if(isset($tiket_id[$i])){ //update 
						$dQry = "UPDATE produk_atribut 
							SET nama='".$row."', 
								harga='".$cHarga."' 
							WHERE id='".$tiket_id[$i]."'";
							//die($dQry);
					} else { //insert new
						$dQry = "INSERT INTO produk_atribut(produk_id, nama, harga)
							VALUES('".$id."', '".$row."', '".$cHarga."')";
					}
					
					mysql_query($dQry);
				}
			}
		
			$message = "<div class='success'>Berhasil mengupdate record..</div>";
		} else {
			$message = "<div class='error'>".mysql_error()."</div>";
		}
		$_SESSION['msg'] = $message;
		header("Location: index.php?p=product");
	}
	
	$doSql = "SELECT * FROM produk WHERE id='".$_GET['id']."'";
	$doQry = mysql_query($doSql);
	$r = mysql_fetch_array($doQry);
?>
<span class="page-title">Edit Product</span>
<div class="inner">
<form action="" method="post" enctype="multipart/form-data" name="formContent" id="formContent" onsubmit="tinymce.triggerSave(); return validateForm('formContent')">
<input type="hidden" name="id" value="<?php echo $r['id'];?>" />
<table width="100%" border="0" cellspacing="0" cellpadding="5">
  <tr>
      <td width="197">Kode Produk</td>
      <td width="3">:</td>
      <td width="1070"><input type="text" class="input required" name="kode" id="kode" readonly="readonly" style="background:#FFFFCC;" value="<?php echo $r['kode'];?>" /></td>
    </tr>
  <tr>
    <td width="197">Nama Produk</td>
    <td width="3">:</td>
    <td><input type="text" class="input required" name="nama" id="nama" value="<?php echo $r['nama'];?>" /></td>
  </tr>
  <tr>
    <td width="197">kategori Produk</td>
    <td width="3">:</td>
    <td><select class="input required" style="padding:4px; width:240px;" name="kategori_id" id="kategori_id">
      <option value="">( Pilih Kategori )</option>
      <?php 
		$qq = mysql_query("SELECT * FROM kategori");
		while($rr = mysql_fetch_array($qq)){
			$sel = $r['kategori_id']==$rr['id']?'selected':'';
        	echo '<option value="'.$rr['id'].'" '.$sel.'>'.$rr['nama'].'</option>';
		} ?>
    </select></td>
  </tr>
  <tr>
    <td width="197">Keterangan</td>
    <td width="3">:</td>
    <td><input name="keterangan_singkat" type="text" class="input" id="keterangan_singkat" value="<?php echo $r['keterangan_singkat'];?>" /></td>
  </tr>
  <tr>
    <td width="197">Harga</td>
    <td width="3">:</td>
    <td><input name="price" type="text" class="input required price" id="price" style="width:80px;" value="<?php echo $r['harga'];?>" />
Diskon(%)
  <input name="diskon" type="text" class="input number" id="diskon" style="width:30px;" value="<?php echo $r['diskon'];?>" />
Satuan
<input name="satuan" type="text" class="input required" id="satuan" style="width:80px;" value="<?php echo $r['satuan'];?>" /></td>
  </tr>
  <tr>
    <td valign="middle">Gambar Produk</td>
    <td valign="middle">:</td>
    <td valign="middle"><span style="float:left; margin-right:20px;"><img src="../<?php echo $r['gambar'] ?>" alt=""></span>
    	<input type="file" name="upload" id="upload" />
        <small>Ukuran 1000x600 px</small></td>
  </tr>
  <tr>
    <td valign="top">Keterangan Lengkap</td>
    <td valign="top">:</td>
    <td><textarea name="keterangan_lengkap" class="input required" id="keterangan_lengkap"><?php echo html_entities_decode($r['keterangan_lengkap']);?></textarea></td>
  </tr>
  <tr>
    <td>Status</td>
    <td>:</td>
    <td><input name="status" type="radio" id="radio" value="1" <?php echo $r['status']=='1'?'checked="checked"':'';?> />
      Publish
        <input type="radio" name="status" id="radio2" value="0" <?php echo $r['status']=='0'?'checked="checked"':'';?> />
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
   	<?php
    $tick = mysql_query("SELECT * FROM produk_atribut WHERE produk_id='".$r['id']."'");
	$count = 1;
	while($det = mysql_fetch_array($tick)){
		$bg = $count%2==1?'#FFFFFF':'#FFFFCC';
		$status = $det['status']==1?'Available':'Soldout';
		echo '<tr id="'.$count.'">
			<td align="center" bgcolor="'.$bg.'">
				<input type="hidden" name="tiket_id['.$count.']" id="tiket_'.$count.'" value="'.$det['id'].'" />
				<input type="text" name="kelas['.$count.']" id="kelas_'.$count.'" class="input required" style="width:170px;" value="'.$det['nama'].'" /></td>
			<td align="center" bgcolor="'.$bg.'">
				<input type="text" name="harga['.$count.']" id="harga_'.$count.'" class="input price required" style="width:100px;" value="'.$det['harga'].'" /></td>
			<td align="center" bgcolor="'.$bg.'">
				<a href="javascript:void(0);" onclick="delCell('.$count.');" class="animate bTools">D</a>
			</td></tr>';
		$count++;
	} ?>
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
var $count = <?php echo $count;?>;
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
