<?php if(!defined('BASEPATH')) die('You are not allowed to access this page'); ?>
<?php
	if($_POST){
		extract(html_entities($_POST));
		$picture = "";
		$files = $_FILES['upload']['name'];
		if($files != ""){
			$source = $_FILES['upload']['tmp_name'];
			$ext = end(explode(".",$files));
			$picture = "asset/upload/".md5(time()).".".$ext;
			move_uploaded_file($source, "../".$picture);
		}
		
		$Qry = "INSERT INTO artikel (judul, content, gambar, createdate, `status`)
			VALUES ('".$judul."', '".$content."', '".$picture."', NOW(), '".$status."')";
		$Res = mysql_query($Qry);
		if($Res){
			$message = "<div class='success'>Berhasil menambah record baru..</div>";
		} else {
			$message = "<div class='error'>".mysql_error()."</div>";
		}
		$_SESSION['msg'] = $message;
		header("Location: index.php?p=post");
	}
?>
<span class="page-title">Tambah Artikel</span>
<div class="inner">
<form action="" method="post" enctype="multipart/form-data" name="formContent" id="formContent" onsubmit="tinymce.triggerSave(); return validateForm('formContent')">
  <table width="100%" border="0" cellspacing="0" cellpadding="5">
    <tr>
      <td width="108" align="left" valign="top">Judul Artikel</td>
      <td width="3" align="left" valign="top">:</td>
      <td width="459" align="left" valign="top"><input type="text" class="input required" name="judul" id="judul" style="width:400px;" /></td>
    </tr>
    <tr>
      <td align="left" valign="top">Thumbnail Pic</td>
      <td align="left" valign="top">:</td>
      <td align="left" valign="top"><input type="file" name="upload" id="upload" /> <small>Ukuran 200x200 px</small></td>
    </tr>
    <tr>
      <td align="left" valign="top">Content Artikel</td>
      <td align="left" valign="top">:</td>
      <td align="left" valign="top"><textarea name="content" class="input required" id="content"></textarea></td>
    </tr>
    <tr>
      <td align="left" valign="top">Status</td>
      <td align="left" valign="top">:</td>
      <td align="left" valign="top"><input name="status" type="radio" id="radio" value="1" checked="checked" />
        Publish 
          <input type="radio" name="status" id="radio2" value="0" />
          Unpublish</td>
    </tr>
  </table>
  <hr />
  <input type="button" value="Cancel" class="button" onclick="window.location='index.php?p=post';" />
  <input type="submit" value="Simpan" class="button" />
</form>
<div class="clr"></div>
</div>
<script type="text/javascript">
tinymce.init({
	skin 	: 'lightgray',
	content_css : "admin/asset/css/content.css",
	document_base_url: "<?php echo abspath;?>",
	width	: 600,
	height	: 300,
	selector: "#content",
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