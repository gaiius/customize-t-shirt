<?php if(!defined('BASEPATH')) die('You are not allowed to access this page'); ?>
<?php
	if($_POST['login']){
		extract(html_entities($_POST));
		$qry = "SELECT * FROM member 
			WHERE username='".$username."'
			AND `password`='".md5($password)."'
			AND `status`=1 LIMIT 1";
		$res = mysql_query($qry);
		if(mysql_num_rows($res) > 0){
			$r = mysql_fetch_array($res);
			$_SESSION['member']	= true;
			$_SESSION['login']	= true;
			$_SESSION['id']		= $r['id'];
			$url = $direct==''?'index.php?p=listorder':urldecode($direct); 
			$msg = '<div class="success">Selamat datang <strong>'.$r['fullname'].'</strong></div>';
		} else {
			$url = 'index.php?p=login&direct='.urlencode($direct); 
			$msg = '<div class="error">Invalid username or password!</div>';
		}	
		$_SESSION['msg'] = $msg;
		header("Location: ".$url);
		exit();
	}
	
	//logout
	if($_GET['act']=='logout'){
		unset($_SESSION['login']);
		unset($_SESSION['member']);
		unset($_SESSION['id']);
		$_SESSION['msg'] = "<div class='success'>You are logged out</div>";
		header("Location: index.php");
		exit();
	}
?>

<div class="boxLogin">
	<h3>Login Disini</h3>
    <div class="inner">
    <form action="?p=login" method="post" name="loginWidget2" onsubmit="return validateForm('loginWidget2');">
                       	  <table width="240" border="0" cellspacing="0" cellpadding="3">
                              <tr>
                                <td>
                                	<label>Username</label><br />
                                    <input type="text" name="username" id="username" class="input required" />
                                </td>
                              </tr>
                              <tr>
                                <td>
                                	<label>Password</label><br />
                                    <input type="password" name="password" id="password" class="input required" />
                                </td>
                              </tr>
                              <tr>
                                <td>
                                <input name="login" type="submit" class="button" id="login" value="Login" /></td>
                              </tr>
                            </table>
                            <input type="hidden" value="<?php echo urlencode($_GET['direct']);?>" name="direct" />
                            </form>
    </div>
</div>
<div class="boxRegister">
	<h3>Daftar jadi Member ?</h3>
    <div class="inner">
    <a href="?p=register&direct=<?php echo urlencode($_GET['direct']);?>" class="button">BUAT AKUN SEKARANG</a>
    </div>
</div>