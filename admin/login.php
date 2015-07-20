<?php
	error_reporting(0);
	session_start();
	include_once("../include/config.php");
	include_once("../include/function.php");
	
	$Login = isset($_POST['login'])?true:false;
	$msg = "";
	//login execution
	if($Login){
		extract(html_entities($_POST));
		$password = md5($password);
		
		$sqlLogin = "SELECT * FROM admin 
			WHERE `username`='".$username."'
			AND `password`='".$password."' 
			AND `status`=1 LIMIT 1";
		$qryLogin = mysql_query($sqlLogin);
		
		if(mysql_num_rows($qryLogin) > 0){
			$r = mysql_fetch_array($qryLogin);
			//set session login
			$_SESSION['admin']		= true;
			$_SESSION['id']			= $r['id'];
			$_SESSION['fullname']	= $r['nama_lengkap'];
			//direct to dashboard
			header("Location: index.php");		
		} else {
			$msg = "<div class='error'>Invalid username or password!</div>";
		}
	}
	
	if($_GET['act'] == 'logout'){
		unset($_SESSION['admin']);
		unset($_SESSION['id']);
		unset($_SESSION['fullname']);
		$msg = "<div class='success'>You are logged out!</div>";
	}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="shortcut icon" href="" />
<link rel="stylesheet" type="text/css" href="asset/css/login.css" />
<title>Multi usaha Administrator</title>
<script type="text/javascript" src="asset/js/jquery-1.7.2.min.js"></script>
<script type="text/javascript" src="asset/js/jquery.validate.min.js"></script>
<script type="text/javascript">
	function validateForm(form){
		jQuery("form[name="+form+"]").validate({
			errorElement: "span"
		});	
		if(jQuery("form[name="+form+"]").valid()){
			return true;
		} else {
			return false;
		}
	}
</script>
</head>
<body>
	<div class="wrapper">
   
        <div class="boxLogin">
    	<div class="inner">
            <div class="clr"></div>
            <div class="message">
            	<?php echo $msg; ?>
            </div>
            <div class="clr"></div>
            <div class="formDetail clr">
            	<form action="login.php" method="post" id="formLogin" name="formLogin" onsubmit="return validateForm('formLogin');">
            	  <table width="220" border="0" cellspacing="0" cellpadding="3">
                    <tr>
                      <td>
                      <small>Username</small><br />
                      <input type="text" class="input required" name="username" id="username" /></td>
                    </tr>
                    <tr>
                      <td>
                      <small>Password</small><br />
                      <input type="password" class="input required" name="password" id="password" /></td>
                    </tr>
                    <tr>
                      <td align="right"><input type="submit" class="button" name="login" id="button" value="Login" /></td>
                    </tr>
                  </table>
           	  </form>
            
            	</div>
            </div>
        </div>
    </div>
    <div style="text-align:center;"><br />
    <a title="Back to site" href="../index.php">&#8249; <small>Kembali ke website utama</small></a></div>
</body>
</html>
