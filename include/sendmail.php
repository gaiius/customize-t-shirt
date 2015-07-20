<?php
function sendmail_order($id){
	$doSql = "SELECT a.*, b.nama_lengkap, b.email, b.telepon
		FROM `order` a 
		LEFT JOIN member b ON b.id=a.member_id
		WHERE a.id='".$id."'";
	$doQry = mysql_query($doSql);
	$r = mysql_fetch_array($doQry);
	
	$content = '
		<p>Selamat transaksi anda telah kami proses, silahkan lakukan pembayaran sesuai tagihan dibawah ini :</p><p>&nbsp;</p>
		<table width="720" border="0" cellpadding="3" cellspacing="1" bgcolor="#CCCCCC">
			  <tr>
				<td width="141" align="left" valign="top" bgcolor="#EEEEEE">No. Order</td>
				<td width="213" align="left" valign="top" bgcolor="#FFFFFF">'.$r['no_order'].'</td>
				<td width="123" align="left" valign="top" bgcolor="#EEEEEE">Nama Member</td>
				<td width="291" align="left" valign="top" bgcolor="#FFFFFF">'.$r['nama_lengkap'].'</td>
			  </tr>
			  <tr>
				<td align="left" valign="top" bgcolor="#EEEEEE">Tanggal Order</td>
				<td align="left" valign="top" bgcolor="#FFFFFF">'.showDateTime($r['tgl_order']).'</td>
				<td align="left" valign="top" bgcolor="#EEEEEE">Telepon</td>
				<td align="left" valign="top" bgcolor="#FFFFFF">'.$r['telepon'].'</td>
			  </tr>
			  <tr>
				<td align="left" valign="top" bgcolor="#EEEEEE">Status </td>
				<td align="left" valign="top" bgcolor="#FFFFFF">'.($r['status']==2?'COMPLETED':($r['status']==1?'PENDING':'CANCELLED')).'</td>
				<td align="left" valign="top" bgcolor="#EEEEEE">Catatan</td>
				<td align="left" valign="top" bgcolor="#FFFFFF">'.$r['catatan'].'</td>
			  </tr>
		</table>
			<br />
		<h3>Detail Order</h3>
		  <table width="720" cellpadding="5" cellspacing="1" bgcolor="#CCCCCC" id="tableDetail">
		  <thead>
			<tr>
			  <td width="131" align="center" bgcolor="#EEEEEE">Nama Produk</td>
			  <td width="105" align="center" bgcolor="#EEEEEE">Pilihan</td>
			  <td width="81" align="right" bgcolor="#EEEEEE">Harga</td>
			  <td width="55" align="center" bgcolor="#EEEEEE"> Disc (%)</td>
			  <td width="79" align="right" bgcolor="#EEEEEE">Total</td>
			  <td width="46" align="center" bgcolor="#EEEEEE">Qty</td>
			  <td width="90" align="right" bgcolor="#EEEEEE">Sub Total</td>
			  </tr>
			</thead>
			<tbody>';
			
	$dQry = "SELECT a.*, b.nama, b.gambar,
		(SELECT c.nama FROM produk_atribut c WHERE c.id=a.atribut_id) pilihan 
		FROM order_detail a 
		LEFT JOIN produk b ON b.id=a.produk_id
		WHERE a.order_id='".$r['id']."'";
	$dRes = mysql_query($dQry); 
		
	while($row = mysql_fetch_array($dRes)){
		$vTotal = $row['harga'] - (($row['diskon'] /100)* $row['harga']); 
		$content.='
			<tr>
			  <td align="center" bgcolor="#FFFFFF">'.$row['nama'].'</td>
			  <td align="center" bgcolor="#FFFFFF">'.($row['pilihan']==''?'-':$row['pilihan']).'</td>
			  <td align="right" bgcolor="#FFFFFF">'.number_format($row['harga']).'</td>
			  <td align="center" bgcolor="#FFFFFF">'.$row['diskon'].'%</td>
			  <td align="right" bgcolor="#FFFFFF">'.number_format($vTotal).'</td>
			  <td align="center" bgcolor="#FFFFFF">'.$row['qty'].'</td>
			  <td align="right" bgcolor="#FFFFFF">'.number_format($row['subtotal']).'</td>
		  </tr>';
	}
		
	$content.='
		 <tr>
			<td align="left" colspan="6" bgcolor="#F5F5F5">Total Order</td>
			<td align="right" bgcolor="#F5F5F5">'.number_format($r['total_order']).'</td>
		  </tr>
		</tbody>
		</table>
		<p>Pembayaran dapat dilakukan ke rekening berikut ini :</p></p><p>&nbsp;</p>';
        
	$qry2 = mysql_query("SELECT * FROM bank");
	while($res = mysql_fetch_array($qry2)){
		$content.= '<p><strong>'.$res['nama_bank'].'</strong> : '.$res['no_rekening'].' a/n '.$res['nama_akun'].'</p>';
	}
        
	$content.= '<p>&nbsp;</p>
        <p>Terima Kasih<br />
        <strong>W2F Catering</strong></p>';
	
	$mail = new PHPMailer();
	$mail->SMTPKeepAlive = true;  
	$mail->Mailer 		= "smtp"; 
	$mail->IsSMTP(); 		// telling the class to use SMTP  
	$mail->CharSet		= 'utf-8';  
	$mail->SMTPDebug	= 2;   
	$mail->SMTPAuth 	= true;
    $mail->SMTPSecure 	= "tls";
    $mail->Host 		= "smtp.gmail.com";
    $mail->Port 		= 587;
    $mail->Username 	= gmailaccount;
    $mail->Password 	= gmailpassword; 
	$mail->Subject  	= $r['no_order']." Order kami terima - W2F Catering";
	$mail->MsgHTML($content);
	$mail->setFrom('admin@localhost.com', 'W2F Catering');
	$mail->addReplyTo('admin@localhost.com', 'W2F Catering');
	$mail->AddAddress($r['email']);
	
	if(!$mail->Send()) {
	  //die('Mailer error: ' . $mail->ErrorInfo);
	  return false;
	  
	} else {
	  return true;
	}
}




function sendmail_cancel($id){
	$doSql = "SELECT a.*, c.nama_lengkap `member`, c.email 
		FROM `order` a 
		LEFT JOIN member c ON c.id=a.member_id 
		WHERE a.id='".$id."'";
	$doQry = mysql_query($doSql);
	$r = mysql_fetch_array($doQry);
	$content = '
		<p>Maaf transaksi anda dengan nomor invoice #'.$r['no_order'].' kami batalkan.<br>
		Untuk informasi lebih lanjut silahkan hubungi Customer Service di website kami.</p>
		<p>&nbsp;</p>
		<p>Terima kasih<strong><br>
		W2F Catering</strong></p>';
	
	$mail = new PHPMailer();
	$mail->SMTPKeepAlive = true;  
	$mail->Mailer 		= "smtp"; 
	$mail->IsSMTP(); 		// telling the class to use SMTP  
	$mail->CharSet		= 'utf-8';  
	$mail->SMTPDebug	= 2;   
	$mail->SMTPAuth 	= true;
    $mail->SMTPSecure 	= "tls";
    $mail->Host 		= "smtp.gmail.com";
    $mail->Port 		= 587;
    $mail->Username 	= gmailaccount;
    $mail->Password 	= gmailpassword; 
	$mail->Subject  	= $r['no_order']." Cancelled Order - W2F Catering";
	$mail->MsgHTML($content);
	$mail->setFrom('admin@localhost.com', 'W2F Catering');
	$mail->addReplyTo('admin@localhost.com', 'W2F Catering');
	$mail->AddAddress($r['email']);
	
	if(!$mail->Send()) {
	  return false;
	  //die('Mailer error: ' . $mail->ErrorInfo);
	} else {
	  return true;
	}
}

function sendmail_confirm($id){
	$doSql = "SELECT a.*, b.nama_lengkap `member`, b.email,
		b.alamat, b.kota, b.kode_pos, b.telepon
		FROM `order` a
		LEFT JOIN member b ON b.id=a.member_id
		WHERE a.id='".$id."'";
	$doQry = mysql_query($doSql);
	$r = mysql_fetch_array($doQry);
	$content = '
		<p>Pembayaran anda telah kami terima, kami akan segera memproses pesanan anda<br> 
			dan mengirimkannya ke alamat anda dalam waktu 2x24 jam</p><br>
		<p><strong>Detail Order</strong></p><br>
		<table width="700" border="0" cellspacing="0" cellpadding="5">
			<tr>
			  <td width="226">No. Order</td>
			  <td width="8">:</td>
			  <td width="672">'.$r['no_order'].'</td>
			</tr>
			<tr>
			  <td>Tanggal Order</td>
			  <td>:</td>
			  <td>'.showDateTime($r['tgl_order']).'</td>
			</tr>
			<tr>
			  <td width="226">Pembeli / Member</td>
			  <td width="8">:</td>
			  <td width="672">'.$r['member'].'</td>
			</tr>
			<tr>
			  <td width="226">Alamat Pengiriman</td>
			  <td width="8">:</td>
			  <td width="672">'.$r['alamat'].'<br>'.$r['kota'].' '.$r['kode_pos'].'</td>
			</tr>
			<tr>
			  <td width="226">Contact</td>
			  <td width="8">:</td>
			  <td width="672">'.$r['telepon'].'</td>
			</tr>
		</table><hr>
		<table width="700" cellpadding="5" cellspacing="1" bgcolor="#CCCCCC" id="tableDetail">
		  <thead>
			<tr>
			  <td width="111" align="center" bgcolor="#EEEEEE">Nama Produk</td>
			  <td width="105" align="center" bgcolor="#EEEEEE">Pilihan</td>
			  <td width="81" align="right" bgcolor="#EEEEEE">Harga</td>
			  <td width="55" align="center" bgcolor="#EEEEEE"> Disc (%)</td>
			  <td width="79" align="right" bgcolor="#EEEEEE">Total</td>
			  <td width="46" align="center" bgcolor="#EEEEEE">Qty</td>
			  <td width="90" align="right" bgcolor="#EEEEEE">Sub Total</td>
			  </tr>
			</thead>
			<tbody>';
		
	$dQry = "SELECT a.*, b.nama, b.gambar,
		(SELECT c.nama FROM produk_atribut c WHERE c.id=a.atribut_id) pilihan 
		FROM order_detail a 
		LEFT JOIN produk b ON b.id=a.produk_id
		WHERE a.order_id='".$r['id']."'";
	$dRes = mysql_query($dQry); 
	
	while($row = mysql_fetch_array($dRes)){
		$vTotal = $row['harga'] - (($row['diskon'] /100)* $row['harga']); 
		$content.='
			<tr>
			  <td align="center" bgcolor="#FFFFFF">'.$row['nama'].'</td>
			  <td align="center" bgcolor="#FFFFFF">'.($row['pilihan']==''?'-':$row['pilihan']).'</td>
			  <td align="right" bgcolor="#FFFFFF">'.number_format($row['harga']).'</td>
			  <td align="center" bgcolor="#FFFFFF">'.$row['diskon'].'%</td>
			  <td align="right" bgcolor="#FFFFFF">'.number_format($vTotal).'</td>
			  <td align="center" bgcolor="#FFFFFF">'.$row['qty'].'</td>
			  <td align="right" bgcolor="#FFFFFF">'.number_format($row['subtotal']).'</td>
		  </tr>';
	}
		
	$content.='
		 <tr>
			<td align="left" colspan="6" bgcolor="#F5F5F5">Total Order</td>
			<td align="right" bgcolor="#F5F5F5">'.number_format($r['total_order']).'</td>
		  </tr>
		</tbody>
		</table><br>
		  <p>Terima Kasih atas kepercayaan anda pada kami.</p>
		  <p><strong>W2F Catering</strong></p>
		<p>&nbsp;</p>';
	
	$mail = new PHPMailer();
	$mail->SMTPKeepAlive = true;  
	$mail->Mailer 		= "smtp"; 
	$mail->IsSMTP(); 		// telling the class to use SMTP  
	$mail->CharSet		= 'utf-8';  
	$mail->SMTPDebug	= 2;   
	$mail->SMTPAuth 	= true;
    $mail->SMTPSecure 	= "tls";
    $mail->Host 		= "smtp.gmail.com";
    $mail->Port 		= 587;
    $mail->Username 	= gmailaccount;
    $mail->Password 	= gmailpassword; 
	$mail->Subject  	= $r['no_order']." Pembayaran diterima - W2F Catering";
	$mail->MsgHTML($content);
	$mail->setFrom('admin@localhost.com', 'W2F Catering');
	$mail->addReplyTo('admin@localhost.com', 'W2F Catering');
	$mail->AddAddress($r['email']);
	
	if(!$mail->Send()) {
	  return false;
	  die('Mailer error: ' . $mail->ErrorInfo);
	} else {
	  return true;
	}
}


function sendmail_contact($data = array()){
	extract($data);

	$content = '
		<h3>Contact Detail</h3>
		<table width="611" border="0" cellspacing="0" cellpadding="2">
			<tr>
				  <td width="169">Nama Lengkap</td>
				  <td width="15">:</td>
				  <td width="415">'.$fullname.'</td>
			  </tr>    
				<tr>
				  <td width="169">Email</td>
				  <td width="15">:</td>
				  <td width="415">'.$email.'</td>
			  </tr>   
			 <tr>
			  <td width="169">Subject</td>
			  <td width="15">:</td>
			  <td width="415">'.$subject.'</td>
			</tr>    
			 <tr>
			  <td width="169">Pesan</td>
			  <td width="15">:</td>
			  <td width="415">'.$message.'</td>
			</tr>    
			
		</table>
		<p>&nbsp;</p>';

	
	$mail = new PHPMailer();
	$mail->SMTPKeepAlive = true;  
	$mail->Mailer 		= "smtp"; 
	$mail->IsSMTP(); 		// telling the class to use SMTP  
	$mail->CharSet		= 'utf-8';  
	$mail->SMTPDebug	= 2;   
	$mail->SMTPAuth 	= true;
    $mail->SMTPSecure 	= "tls";
    $mail->Host 		= "smtp.gmail.com";
    $mail->Port 		= 587;
    $mail->Username 	= gmailaccount;
    $mail->Password 	= gmailpassword; 
	$mail->Subject  	= "W2F Catering Contact form - ".$subject;
	$mail->MsgHTML($content);
	$mail->setFrom($email, $fullname);
	$mail->addReplyTo($email, $fullname);
	$mail->AddAddress(adminemail);
	
	if(!$mail->Send()) {
	  return false;
	  //die('Mailer error: ' . $mail->ErrorInfo);
	} else {
	  return true;
	}
}
?>