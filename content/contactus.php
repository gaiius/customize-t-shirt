<?php if(!defined('BASEPATH')) die('You are not allowed to access this page'); ?>
<?php if($_POST['submit']){	
		$data = html_entities($_POST);
		if(sendmail_contact($data)){
			$msg = "<div class='success'>Pesan terkirim, terima kasih atas partisipasi anda.</div>";
		} else {
			$msg = "<div class='error'>Email tidak dapat terikirm..</div>";
		}
		$_SESSION['msg'] = $msg;
		header("Location: index.php?p=contactus");
		exit();	
	}
?>
<h2>MultiUsaha</h2>
<p> JL. Garuda 4 No. 25 <br />
Griya Sangiang Mas, Tangerang</p>
<table cellpadding="0" cellspacing="0" border="0" width="200">
  <tbody>
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
      <td> </td>
      <td> </td>
      <td>0852 13756626</td>
    </tr>
  </tbody>
</table>
<p><br>
</p>
<p>Silahan tinggalkan pesan anda, kami akan memberikan respon dalam waktu 2x24 jam.</p>
<form action="" method="post" name="formContact" id="formContact" onSubmit="return validateForm('formContact');">
  <table width="500" border="0" cellspacing="0" cellpadding="0">
    <tr>
      <td>
      	<label for="fullname">Nama Lengkap</label><br>
      <input type="text" name="fullname" id="fullname" class="input required" style="width:350px;">
      </td>
    </tr>
    <tr>
      <td>
      <label for="email"><br />
      Alamat Email</label>
      <br>
      <input type="text" name="email" id="email" class="input required email" style="width:350px;">
      </td>
    </tr>
    <tr>
      <td>
      <label for="subject"><br />
      Judul Pesan</label>
      <br>
      <input type="text" name="subject" id="subject" class="input required" style="width:350px;">
      </td>
    </tr>
    <tr>
      <td>
      <label for="message"><br />
      Pesan Anda</label>
      <br>
      <textarea name="message" rows="4" class="input required" id="message" style="width:350px;"></textarea>
      </td>
    </tr>
    <tr>
      <td><input type="submit" name="submit" class="button" id="submit" value="Kirim Pesan"></td>
    </tr>
  </table>

</form>
<p>&nbsp;</p>
