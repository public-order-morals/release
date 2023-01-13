<?php
$email = $_POST["user_email"];
$password = $_POST["user_password"];


// データベースの情報を書く
$HOST = "localhost";//ホスト名
$DBNAME = "data";//データベース名
$USER = "root";//データベース接続の為のユーザー名
$PASS = "root";//データベース接続の為のパスワード
//接続の為のオブジェクト生成
$pdo = new pdo('mysql:host='.$HOST.';dbname='.$DBNAME.';',$USER,$PASS);

$sql_str = "select * from account";

// SQL文をセット
$stmt = $pdo->prepare($sql_str);
// SQL文を実行し、変数$db_dataに結果を代入
$stmt->execute();
$db_data = $stmt->fetchAll();
/* ここまでデータベース関連 */

$flag = 0;


for ($i = 0; $i < count($db_data); $i++){
  if($db_data[$i]["email"] == $email && $db_data[$i]["password"] == $password){
    $flag = 1;
    echo "ログイン成功";
    setcookie('email', $email);
    setcookie('password', $password);
    header("Location: home_admin.html");
    exit();
  }
}

if($flag == 0){
  echo "メールアドレスかパスワードが間違っているためログインできませんでした.";
  echo "<br>";
  echo '<a href="index.html" style="background:#0000ff;color:#ffffff;width:50px;">戻る</a>';
}

?>