<?php
$email = $_POST["email"];

// データベースの情報を書く
$HOST = "localhost";//ホスト名
$DBNAME = "data";//データベース名
$USER = "root";//データベース接続の為のユーザー名
$PASS = "root";//データベース接続の為のパスワード
//接続の為のオブジェクト生成
$pdo = new pdo('mysql:host='.$HOST.';dbname='.$DBNAME.';',$USER,$PASS);

$sql_str = "UPDATE account SET deleted = true where email = '".$email."'";

// SQL文をセット
$stmt = $pdo->prepare($sql_str);
// SQL文を実行し、変数$db_dataに結果を代入
$isSuccess = $stmt->execute();

if( $isSuccess ){
	echo '削除処理が成功しました';
	header('Location: user_management.html');
	exit();
}else{
	echo '削除処理が失敗しました';
	echo '<a href="user_management.php" class="btn">';
	//header('Location: user_management.php');
	//exit();
}
?>