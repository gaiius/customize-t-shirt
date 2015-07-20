<?php if(!defined('BASEPATH')) die('You are not allowed to access this page'); ?>
<?php
	if($_POST){
		extract(html_entities($_POST));
		$picQry = "";
		$files = $_FILES['upload']['name'];
		if($files != ""){
			$source = $_FILES['upload']['tmp_name'];
			$ext = end(explode(".",$files));
			$picture = "asset/upload/".md5(time()).".".$ext;
			move_uploaded_file($source, "../".$picture);
			$picQry.= "gambar='".$picture."',";
		}
		
		$Qry = "UPDATE artikel SET judul='".$judul."', ".$picQry." 
			content='".$content."', `status`='".$status."'
			WHERE id='".$id."'";
		$Res = mysql_query($Qry);
		if($Res){
			$message = "<div class='success'>Berhasil mengupdate record..</div>";
		} else {
			$message = "<div class='error'>".mysql_error()."</div>";
		}
		$_SESSION['msg'] = $message;
		header("Location: index.php?p=post");
	}
	
	$doSql = "SELECT * FROM artikel WHERE id='".$_GET['id']."'";
	$doQry = mysql_query($doSql);
	$r = mysql_fetch_array($doQry);
?>
<span class="page-title">Edit Artikel</span>
<div class="inner">
<form action="" method="post" enctype="multipart/form-data" name="formContent" id="formContent" onsubmit="tinymce.triggerSave(); return validateForm('formContent')">
<input type="hidden" name="id" value="<?php echo $r['id'];?>" />
  <table width="100%" border="0" cellspacing="0" cellpadding="5">
    <tr>
      <td width="200">Judul Artikel</td>
      <td width="11">:</td>
      <td width="692"><input value="<?php echo $r['judul'];?>" type="text" class="input required" name="judul" id="judul" style="width:400px;" /></td>
    </tr>
    <tr>
      <td>Thumbnail Pic</td>
      <td>:</td>
      <td>
      	<span style="float:left; margin-right:20px;">
        <?php picThumbnail($r['gambar'],50,50,'picThumbnail', true);?>
        </span>
        <input type="file" name="upload" id="upload" /> <small><br />
        Ukuran 200x200 px <br />(Upload jika ingin mengubah thumbnail)</small></td>
    </tr>
    <tr>
      <td>Content Artikel</td>
      <td>:</td>
      <td><textarea name="content" class="input required" id="content"><?php echo html_entities_decode($r['content']);?></textarea></td>
    </tr>
    <tr>
      <td>Status</td>
      <td>:</td>
      <td><input name="status" type="radio" id="radio" value="1" <?php echo $r['status']==1?'checked="checked"':'';?>/>
        Publish 
          <input type="radio" name="status" id="radio2" value="0" <?php echo $r['status']==1?'':'checked="checked"';?> />
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
