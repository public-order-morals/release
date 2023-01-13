## ❯ About 

//起動＆停止
brew services start mysql@5.7
brew services stop mysql@5.7

//mysql ターミナルログイン
mysql --user=root --password

//user


create user `our`@`localhost` IDENTIFIED BY '0912';

//権限付与
grant all privileges on a_2.* to xur@localhost IDENTIFIED BY '0912';


//use MAMP

cd /Applications/MAMP/Library/bin/
./mysql -u root -proot

Use database_name;
Show table_name;