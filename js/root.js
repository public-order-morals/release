//
//データの管理（すべてのHTMLでincludeして）
//

message.innerHTML = "データを取得してください";

//
//SQL関連
//
function connect_SQL(){
 // requireの設定
 const mysql = require('mysql');

 // MySQLとのコネクションの作成
 const connection = mysql.createConnection({
     host : 'localhost',
     user : 'root',
     database: 'data'
 });
 
 // 接続
 connection.connect();
 
 // userdataの取得
 connection.query('SELECT * from userdata;', function (err, rows, fields) {
     if (err) { console.log('err: ' + err); } 
 
     console.log('name: ' + rows[0].name);
     console.log('id: ' + rows[0].id);
 
 });
 
 // userdataのカラムを取得
 connection.query('SHOW COLUMNS FROM userdata;', function (err, rows, fields) {
     if (err) { console.log('err: ' + err); }
 
     console.log(rows[0].Field);
     console.log(rows[1].Field);
 });
 
 // 接続終了
 connection.end();
};

var data = [
    {
        "id": "1",
        "資産番号": "00000-99999999-00000",
        "所属": "EE",
        "資産名": "PC",
        "場所": "405",
        "担当": "uchida",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "2",
        "資産番号": "00000-99999999-00000",
        "所属": "EE",
        "資産名": "PC",
        "場所": "403",
        "担当": "utsugi",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "3",
        "資産番号": "00000-99999999-00000",
        "所属": "CS",
        "資産名": "PC",
        "場所": "405",
        "担当": "uchida",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "4",
        "資産番号": "00000-99999999-00000",
        "所属": "EE",
        "資産名": "PC",
        "場所": "401",
        "担当": "uchida",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "5",
        "資産番号": "00000-99999999-00000",
        "所属": "CS",
        "資産名": "PC",
        "場所": "409",
        "担当": "ooshima",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "6",
        "資産番号": "00000-99999999-00000",
        "所属": "CS",
        "資産名": "PC",
        "場所": "409",
        "担当": "uchida",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "7",
        "資産番号": "00000-99999999-00000",
        "所属": "CS",
        "資産名": "PC",
        "場所": "408",
        "担当": "uchida",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "8",
        "資産番号": "00000-99999999-00000",
        "所属": "AD",
        "資産名": "PC",
        "場所": "402",
        "担当": "utsugi",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "9",
        "資産番号": "00000-99999999-00000",
        "所属": "EE",
        "資産名": "PC",
        "場所": "409",
        "担当": "ooshima",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "10",
        "資産番号": "00000-99999999-00000",
        "所属": "ME",
        "資産名": "PC",
        "場所": "405",
        "担当": "utsugi",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    }]


//更新
function refresh() {

    console.log(data);
    let tbody = document.querySelector('#csv_data_table tbody');
    tbody.innerHTML = "";

    //　CSVの内容を表示
    let tbody_html = "";
    for (item of data) {
        tbody_html += `<tr>
      <td>${item.id}</td>
      <td>${item.資産番号}</td>
      <td>${item.所属}</td>
      <td>${item.資産名}</td>
      <td>${item.場所}</td>
      <td>${item.担当}</td>
      <td>${item.管理者}</td>
      <td>${item.形式}</td>
      <td>${item.個数}</td>
      <td>${item.識別番号}</td>
      <td>${item.取得日時}</td>
      <td>${item.編集日時}</td>
    </tr>
    `
    }
    tbody.innerHTML = tbody_html;
    console.log(tbody_html);
    message.innerHTML = data.length + "件のデータがあります。"
};

function Utt() {
    console.log(data);
};


//絞り込み検索
function location_search() {
    const str = document.getElementById("location1").value;

    let tbody = document.querySelector('#csv_data_table tbody');
    tbody.innerHTML = "";

    var data_03 = data.filter(function (data) {
        return data.場所 == str;
    })
    console.log(data_03);
    //　CSVの内容を表示
    let tbody_html = "";
    for (item of data_03) {
        tbody_html += `<tr>
      <td>${item.id}</td>
      <td>${item.資産番号}</td>
      <td>${item.所属}</td>
      <td>${item.資産名}</td>
      <td>${item.場所}</td>
      <td>${item.担当}</td>
      <td>${item.管理者}</td>
      <td>${item.形式}</td>
      <td>${item.個数}</td>
      <td>${item.識別番号}</td>
      <td>${item.取得日時}</td>
      <td>${item.編集日時}</td>
    </tr>
    `
    }
    tbody.innerHTML = tbody_html;
    console.log(tbody_html);
    message.innerHTML = "部屋" + str + "には" + data_03.length + "件の資産があります。"
};

function kind_search() {
    const str = document.getElementById("kind").value;

    let tbody = document.querySelector('#csv_data_table tbody');
    tbody.innerHTML = "";

    var data_03 = data.filter(function (data) {
        return data.所属 == str;
    })
    console.log(data_03);
    //　CSVの内容を表示
    let tbody_html = "";
    for (item of data_03) {
        tbody_html += `<tr>
      <td>${item.id}</td>
      <td>${item.資産番号}</td>
      <td>${item.所属}</td>
      <td>${item.資産名}</td>
      <td>${item.場所}</td>
      <td>${item.担当}</td>
      <td>${item.管理者}</td>
      <td>${item.形式}</td>
      <td>${item.個数}</td>
      <td>${item.識別番号}</td>
      <td>${item.取得日時}</td>
      <td>${item.編集日時}</td>
    </tr>
    `
    }
    tbody.innerHTML = tbody_html;
    console.log(tbody_html);
    message.innerHTML = "学科" + str + "が所有している資産は" + data_03.length + "件です"
};

function user_search() {
    const str = document.getElementById("user").value;

    let tbody = document.querySelector('#csv_data_table tbody');
    tbody.innerHTML = "";

    var data_03 = data.filter(function (data) {
        return data.担当 == str;
    })
    console.log(data_03);
    //　CSVの内容を表示
    let tbody_html = "";
    for (item of data_03) {
        tbody_html += `<tr>
      <td>${item.id}</td>
      <td>${item.資産番号}</td>
      <td>${item.所属}</td>
      <td>${item.資産名}</td>
      <td>${item.場所}</td>
      <td>${item.担当}</td>
      <td>${item.管理者}</td>
      <td>${item.形式}</td>
      <td>${item.個数}</td>
      <td>${item.識別番号}</td>
      <td>${item.取得日時}</td>
      <td>${item.編集日時}</td>
    </tr>
    `
    }
    tbody.innerHTML = tbody_html;
    console.log(tbody_html);
    message.innerHTML = "ユーザー" + str + "は" + data_03.length + "件の資産を担当しています"
};

function admin_search() {
    const str = document.getElementById("admin1").value;

    let tbody = document.querySelector('#csv_data_table tbody');
    tbody.innerHTML = "";

    var data_03 = data.filter(function (data) {
        return data.管理者 == str;
    })
    console.log(data_03);
    //　CSVの内容を表示
    let tbody_html = "";
    for (item of data_03) {
        tbody_html += `<tr>
      <td>${item.id}</td>
      <td>${item.資産番号}</td>
      <td>${item.所属}</td>
      <td>${item.資産名}</td>
      <td>${item.場所}</td>
      <td>${item.担当}</td>
      <td>${item.管理者}</td>
      <td>${item.形式}</td>
      <td>${item.個数}</td>
      <td>${item.識別番号}</td>
      <td>${item.取得日時}</td>
      <td>${item.編集日時}</td>
    </tr>
    `
    }
    tbody.innerHTML = tbody_html;
    console.log(tbody_html);
    message.innerHTML = "管理者" + str + "は" + data_03.length + "件の資産を持っています。"
};

$(document).ready(function () {
    $('.select').select2({
      width: '350px',
      placeholder: '　',
      allowClear: true,
      language: 'ja',
      tags: true
    });
  });
//ダミーデータ

/*[

    {
        "id": "1",
        "資産番号": "00000-99999999-00000",
        "所属": "EE",
        "資産名": "PC",
        "場所": "405",
        "担当": "uchida",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "2",
        "資産番号": "00000-99999999-00000",
        "所属": "EE",
        "資産名": "PC",
        "場所": "403",
        "担当": "utsugi",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "3",
        "資産番号": "00000-99999999-00000",
        "所属": "CS",
        "資産名": "PC",
        "場所": "405",
        "担当": "uchida",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "4",
        "資産番号": "00000-99999999-00000",
        "所属": "EE",
        "資産名": "PC",
        "場所": "401",
        "担当": "uchida",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "5",
        "資産番号": "00000-99999999-00000",
        "所属": "CS",
        "資産名": "PC",
        "場所": "409",
        "担当": "ooshima",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "6",
        "資産番号": "00000-99999999-00000",
        "所属": "CS",
        "資産名": "PC",
        "場所": "409",
        "担当": "uchida",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "7",
        "資産番号": "00000-99999999-00000",
        "所属": "CS",
        "資産名": "PC",
        "場所": "408",
        "担当": "uchida",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "8",
        "資産番号": "00000-99999999-00000",
        "所属": "AD",
        "資産名": "PC",
        "場所": "402",
        "担当": "utsugi",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "9",
        "資産番号": "00000-99999999-00000",
        "所属": "EE",
        "資産名": "PC",
        "場所": "409",
        "担当": "ooshima",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "10",
        "資産番号": "00000-99999999-00000",
        "所属": "ME",
        "資産名": "PC",
        "場所": "405",
        "担当": "utsugi",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "11",
        "資産番号": "00000-99999999-00000",
        "所属": "CS",
        "資産名": "PC",
        "場所": "400",
        "担当": "uchida",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "12",
        "資産番号": "00000-99999999-00000",
        "所属": "EE",
        "資産名": "PC",
        "場所": "401",
        "担当": "ooshima",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "13",
        "資産番号": "00000-99999999-00000",
        "所属": "ME",
        "資産名": "PC",
        "場所": "405",
        "担当": "ooshima",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "14",
        "資産番号": "00000-99999999-00000",
        "所属": "EE",
        "資産名": "PC",
        "場所": "408",
        "担当": "utsugi",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "15",
        "資産番号": "00000-99999999-00000",
        "所属": "ME",
        "資産名": "PC",
        "場所": "408",
        "担当": "ooshima",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "16",
        "資産番号": "00000-99999999-00000",
        "所属": "AD",
        "資産名": "PC",
        "場所": "409",
        "担当": "utsugi",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "17",
        "資産番号": "00000-99999999-00000",
        "所属": "ME",
        "資産名": "PC",
        "場所": "406",
        "担当": "utsugi",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "18",
        "資産番号": "00000-99999999-00000",
        "所属": "CS",
        "資産名": "PC",
        "場所": "407",
        "担当": "uchida",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "19",
        "資産番号": "00000-99999999-00000",
        "所属": "ME",
        "資産名": "PC",
        "場所": "400",
        "担当": "utsugi",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "20",
        "資産番号": "00000-99999999-00000",
        "所属": "ME",
        "資産名": "PC",
        "場所": "402",
        "担当": "uchida",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "21",
        "資産番号": "00000-99999999-00000",
        "所属": "CS",
        "資産名": "PC",
        "場所": "401",
        "担当": "uchida",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "22",
        "資産番号": "00000-99999999-00000",
        "所属": "AD",
        "資産名": "PC",
        "場所": "409",
        "担当": "uchida",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "23",
        "資産番号": "00000-99999999-00000",
        "所属": "AD",
        "資産名": "PC",
        "場所": "404",
        "担当": "utsugi",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "24",
        "資産番号": "00000-99999999-00000",
        "所属": "AD",
        "資産名": "PC",
        "場所": "400",
        "担当": "ooshima",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "25",
        "資産番号": "00000-99999999-00000",
        "所属": "AD",
        "資産名": "PC",
        "場所": "409",
        "担当": "utsugi",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "26",
        "資産番号": "00000-99999999-00000",
        "所属": "EE",
        "資産名": "PC",
        "場所": "405",
        "担当": "ooshima",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "27",
        "資産番号": "00000-99999999-00000",
        "所属": "AD",
        "資産名": "PC",
        "場所": "401",
        "担当": "ooshima",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "28",
        "資産番号": "00000-99999999-00000",
        "所属": "AD",
        "資産名": "PC",
        "場所": "409",
        "担当": "uchida",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "29",
        "資産番号": "00000-99999999-00000",
        "所属": "ME",
        "資産名": "PC",
        "場所": "409",
        "担当": "uchida",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "30",
        "資産番号": "00000-99999999-00000",
        "所属": "CS",
        "資産名": "PC",
        "場所": "401",
        "担当": "uchida",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "31",
        "資産番号": "00000-99999999-00000",
        "所属": "CS",
        "資産名": "PC",
        "場所": "404",
        "担当": "utsugi",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "32",
        "資産番号": "00000-99999999-00000",
        "所属": "EE",
        "資産名": "PC",
        "場所": "407",
        "担当": "uchida",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "33",
        "資産番号": "00000-99999999-00000",
        "所属": "AD",
        "資産名": "PC",
        "場所": "409",
        "担当": "utsugi",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "34",
        "資産番号": "00000-99999999-00000",
        "所属": "ME",
        "資産名": "PC",
        "場所": "404",
        "担当": "uchida",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "35",
        "資産番号": "00000-99999999-00000",
        "所属": "CS",
        "資産名": "PC",
        "場所": "406",
        "担当": "ooshima",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "36",
        "資産番号": "00000-99999999-00000",
        "所属": "ME",
        "資産名": "PC",
        "場所": "401",
        "担当": "uchida",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "37",
        "資産番号": "00000-99999999-00000",
        "所属": "CS",
        "資産名": "PC",
        "場所": "400",
        "担当": "uchida",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "38",
        "資産番号": "00000-99999999-00000",
        "所属": "CS",
        "資産名": "PC",
        "場所": "402",
        "担当": "uchida",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "39",
        "資産番号": "00000-99999999-00000",
        "所属": "AD",
        "資産名": "PC",
        "場所": "406",
        "担当": "uchida",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "40",
        "資産番号": "00000-99999999-00000",
        "所属": "EE",
        "資産名": "PC",
        "場所": "406",
        "担当": "uchida",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "41",
        "資産番号": "00000-99999999-00000",
        "所属": "CS",
        "資産名": "PC",
        "場所": "401",
        "担当": "uchida",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "42",
        "資産番号": "00000-99999999-00000",
        "所属": "ME",
        "資産名": "PC",
        "場所": "405",
        "担当": "uchida",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "43",
        "資産番号": "00000-99999999-00000",
        "所属": "ME",
        "資産名": "PC",
        "場所": "400",
        "担当": "uchida",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "44",
        "資産番号": "00000-99999999-00000",
        "所属": "AD",
        "資産名": "PC",
        "場所": "402",
        "担当": "uchida",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "45",
        "資産番号": "00000-99999999-00000",
        "所属": "AD",
        "資産名": "PC",
        "場所": "408",
        "担当": "utsugi",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "46",
        "資産番号": "00000-99999999-00000",
        "所属": "EE",
        "資産名": "PC",
        "場所": "404",
        "担当": "uchida",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "47",
        "資産番号": "00000-99999999-00000",
        "所属": "EE",
        "資産名": "PC",
        "場所": "400",
        "担当": "ooshima",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "48",
        "資産番号": "00000-99999999-00000",
        "所属": "ME",
        "資産名": "PC",
        "場所": "403",
        "担当": "ooshima",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "49",
        "資産番号": "00000-99999999-00000",
        "所属": "ME",
        "資産名": "PC",
        "場所": "401",
        "担当": "utsugi",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "50",
        "資産番号": "00000-99999999-00000",
        "所属": "CS",
        "資産名": "PC",
        "場所": "400",
        "担当": "uchida",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "51",
        "資産番号": "00000-99999999-00000",
        "所属": "AD",
        "資産名": "PC",
        "場所": "407",
        "担当": "uchida",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "52",
        "資産番号": "00000-99999999-00000",
        "所属": "AD",
        "資産名": "PC",
        "場所": "406",
        "担当": "uchida",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "53",
        "資産番号": "00000-99999999-00000",
        "所属": "AD",
        "資産名": "PC",
        "場所": "400",
        "担当": "uchida",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "54",
        "資産番号": "00000-99999999-00000",
        "所属": "ME",
        "資産名": "PC",
        "場所": "401",
        "担当": "ooshima",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "55",
        "資産番号": "00000-99999999-00000",
        "所属": "EE",
        "資産名": "PC",
        "場所": "406",
        "担当": "uchida",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "56",
        "資産番号": "00000-99999999-00000",
        "所属": "EE",
        "資産名": "PC",
        "場所": "406",
        "担当": "ooshima",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "57",
        "資産番号": "00000-99999999-00000",
        "所属": "CS",
        "資産名": "PC",
        "場所": "405",
        "担当": "uchida",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "58",
        "資産番号": "00000-99999999-00000",
        "所属": "CS",
        "資産名": "PC",
        "場所": "408",
        "担当": "ooshima",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "59",
        "資産番号": "00000-99999999-00000",
        "所属": "EE",
        "資産名": "PC",
        "場所": "400",
        "担当": "ooshima",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "60",
        "資産番号": "00000-99999999-00000",
        "所属": "CS",
        "資産名": "PC",
        "場所": "409",
        "担当": "ooshima",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "61",
        "資産番号": "00000-99999999-00000",
        "所属": "ME",
        "資産名": "PC",
        "場所": "409",
        "担当": "ooshima",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "62",
        "資産番号": "00000-99999999-00000",
        "所属": "AD",
        "資産名": "PC",
        "場所": "407",
        "担当": "uchida",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "63",
        "資産番号": "00000-99999999-00000",
        "所属": "EE",
        "資産名": "PC",
        "場所": "406",
        "担当": "ooshima",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "64",
        "資産番号": "00000-99999999-00000",
        "所属": "EE",
        "資産名": "PC",
        "場所": "400",
        "担当": "uchida",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "65",
        "資産番号": "00000-99999999-00000",
        "所属": "EE",
        "資産名": "PC",
        "場所": "408",
        "担当": "utsugi",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "66",
        "資産番号": "00000-99999999-00000",
        "所属": "ME",
        "資産名": "PC",
        "場所": "403",
        "担当": "uchida",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "67",
        "資産番号": "00000-99999999-00000",
        "所属": "CS",
        "資産名": "PC",
        "場所": "408",
        "担当": "utsugi",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "68",
        "資産番号": "00000-99999999-00000",
        "所属": "ME",
        "資産名": "PC",
        "場所": "409",
        "担当": "uchida",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "69",
        "資産番号": "00000-99999999-00000",
        "所属": "AD",
        "資産名": "PC",
        "場所": "408",
        "担当": "uchida",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "70",
        "資産番号": "00000-99999999-00000",
        "所属": "EE",
        "資産名": "PC",
        "場所": "400",
        "担当": "utsugi",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "71",
        "資産番号": "00000-99999999-00000",
        "所属": "ME",
        "資産名": "PC",
        "場所": "405",
        "担当": "ooshima",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "72",
        "資産番号": "00000-99999999-00000",
        "所属": "CS",
        "資産名": "PC",
        "場所": "403",
        "担当": "ooshima",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "73",
        "資産番号": "00000-99999999-00000",
        "所属": "EE",
        "資産名": "PC",
        "場所": "407",
        "担当": "uchida",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "74",
        "資産番号": "00000-99999999-00000",
        "所属": "EE",
        "資産名": "PC",
        "場所": "402",
        "担当": "uchida",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "75",
        "資産番号": "00000-99999999-00000",
        "所属": "AD",
        "資産名": "PC",
        "場所": "408",
        "担当": "uchida",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "76",
        "資産番号": "00000-99999999-00000",
        "所属": "AD",
        "資産名": "PC",
        "場所": "407",
        "担当": "uchida",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "77",
        "資産番号": "00000-99999999-00000",
        "所属": "ME",
        "資産名": "PC",
        "場所": "401",
        "担当": "ooshima",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "78",
        "資産番号": "00000-99999999-00000",
        "所属": "AD",
        "資産名": "PC",
        "場所": "403",
        "担当": "uchida",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "79",
        "資産番号": "00000-99999999-00000",
        "所属": "CS",
        "資産名": "PC",
        "場所": "404",
        "担当": "ooshima",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "80",
        "資産番号": "00000-99999999-00000",
        "所属": "CS",
        "資産名": "PC",
        "場所": "401",
        "担当": "uchida",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "81",
        "資産番号": "00000-99999999-00000",
        "所属": "ME",
        "資産名": "PC",
        "場所": "409",
        "担当": "ooshima",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "82",
        "資産番号": "00000-99999999-00000",
        "所属": "ME",
        "資産名": "PC",
        "場所": "408",
        "担当": "ooshima",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "83",
        "資産番号": "00000-99999999-00000",
        "所属": "ME",
        "資産名": "PC",
        "場所": "403",
        "担当": "utsugi",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "84",
        "資産番号": "00000-99999999-00000",
        "所属": "AD",
        "資産名": "PC",
        "場所": "409",
        "担当": "utsugi",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "85",
        "資産番号": "00000-99999999-00000",
        "所属": "AD",
        "資産名": "PC",
        "場所": "404",
        "担当": "ooshima",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "86",
        "資産番号": "00000-99999999-00000",
        "所属": "CS",
        "資産名": "PC",
        "場所": "409",
        "担当": "utsugi",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "87",
        "資産番号": "00000-99999999-00000",
        "所属": "AD",
        "資産名": "PC",
        "場所": "408",
        "担当": "ooshima",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "88",
        "資産番号": "00000-99999999-00000",
        "所属": "ME",
        "資産名": "PC",
        "場所": "407",
        "担当": "ooshima",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "89",
        "資産番号": "00000-99999999-00000",
        "所属": "CS",
        "資産名": "PC",
        "場所": "405",
        "担当": "ooshima",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "90",
        "資産番号": "00000-99999999-00000",
        "所属": "AD",
        "資産名": "PC",
        "場所": "407",
        "担当": "utsugi",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "91",
        "資産番号": "00000-99999999-00000",
        "所属": "AD",
        "資産名": "PC",
        "場所": "406",
        "担当": "uchida",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "92",
        "資産番号": "00000-99999999-00000",
        "所属": "AD",
        "資産名": "PC",
        "場所": "405",
        "担当": "uchida",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "93",
        "資産番号": "00000-99999999-00000",
        "所属": "ME",
        "資産名": "PC",
        "場所": "405",
        "担当": "uchida",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "94",
        "資産番号": "00000-99999999-00000",
        "所属": "EE",
        "資産名": "PC",
        "場所": "407",
        "担当": "utsugi",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "95",
        "資産番号": "00000-99999999-00000",
        "所属": "ME",
        "資産名": "PC",
        "場所": "405",
        "担当": "uchida",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "96",
        "資産番号": "00000-99999999-00000",
        "所属": "EE",
        "資産名": "PC",
        "場所": "406",
        "担当": "uchida",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "97",
        "資産番号": "00000-99999999-00000",
        "所属": "ME",
        "資産名": "PC",
        "場所": "406",
        "担当": "utsugi",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "98",
        "資産番号": "00000-99999999-00000",
        "所属": "ME",
        "資産名": "PC",
        "場所": "401",
        "担当": "utsugi",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "99",
        "資産番号": "00000-99999999-00000",
        "所属": "ME",
        "資産名": "PC",
        "場所": "404",
        "担当": "ooshima",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "100",
        "資産番号": "00000-99999999-00000",
        "所属": "CS",
        "資産名": "PC",
        "場所": "402",
        "担当": "uchida",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    }
]*/