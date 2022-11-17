//
//ユーザー関連
//

//ボタンが押されたとき
function login_data() {
    var email = document.getElementById("submit_id").value;
    var pass = document.getElementById("submit_pass").value;
    console.log(email,pass);
    //login();
};

//認証処理
function login(){

console.log("pushed login function");
document.cookie = 'permission=admin';
document.cookie = 'number=1';
let name = encodeURIComponent('tagu');
document.cookie = 'name=' + name;

let e = document.getElementById('msg');
e.insertAdjacentHTML('afterend', '<p>' + document.cookie + '</p>');

};

//アプリ内でログイン中のユーザーを知りたいときに使う
function who(){
var cookies = document.cookie; //全てのcookieを取り出して
var cookiesArray = cookies.split(';'); // ;で分割し配列に

for(var c of cookiesArray){ //一つ一つ取り出して
    var cArray = c.split('='); //さらに=で分割して配列に
    if( cArray[0] == 'key名'){ // 取り出したいkeyと合致したら
        console.log(cArray);  // [key,value] 
    }
}
};