<?php
$email = $_POST["email"];
$newPassword = $_POST["password"];

if($newPassword == NULL){
	echo "空白のためダメです";
  echo "<br>";
  echo '<a href="user_change.html" style="background:#0000ff;color:#ffffff;width:50px;">戻る</a>';
}else{
	// データベースの情報を書く
	$HOST = "localhost";//ホスト名
	$DBNAME = "login_prac";//データベース名
	$USER = "root";//データベース接続の為のユーザー名
	$PASS = "";//データベース接続の為のパスワード
	//接続の為のオブジェクト生成
	$pdo = new pdo('mysql:host='.$HOST.';dbname='.$DBNAME.';',$USER,$PASS);

	$sql_str = "UPDATE account SET password = $newPassword where email = '".$email."'";

	// SQL文をセット
	$stmt = $pdo->prepare($sql_str);
	// SQL文を実行し、変数$db_dataに結果を代入
	$isSuccess = $stmt->execute();

	var_dump( $stmt );

	if( $isSuccess ){
		echo '成功しました';
		setcookie('password', $newPassword);
		header('Location: home_admin.html');
		exit();
	}
}




?>