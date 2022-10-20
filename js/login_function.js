//login中のユーザーを識別



function login(){
document.cookie = 'permission=admin';
document.cookie = 'number=1';
let name = encodeURIComponent('tagu');
document.cookie = 'name=' + name;

let e = document.getElementById('msg');
e.insertAdjacentHTML('afterend', '<p>' + document.cookie + '</p>');
};


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