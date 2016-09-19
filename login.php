<?php
if(isset($_POST['login'])) {
	//echo $_GET['email'];
	//echo $_GET['password'];
	
	$email=trim($_POST['email']);
	$password=trim($_POST['password']);
	//$login=mysql_num_rows(mysql_query("select * from `phonegap_login` where `email`='$email' and `password`='$password'"));
	
	//echo $email;
	//echo $password;
	
	//if($login!=0) {
	if($email == 'test' && $password == 'test') {
		echo "success";
	} else {
		echo "failed";
	}
}
?>