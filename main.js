var http = require('http');
var fs = require('fs');
// url이라는 모듈은 url이라는 변수로 칭한다.
// nodejs 안에서 비슷한 것 끼리 모아둔 것을 모듈이라고 한다/
var url = require('url');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    // queryDaya 객체 안에 id라는 키를 이용해 답을 얻는다
    console.log(queryData.id);
    if(_url == '/'){
      _url = '/index.html';
    }
    if(_url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    // 웹페이지에 Query String 주소에다가 css를 적으면 css가 웹페이지에 뜨고 html로 고치면 html이 뜬다.
    response.end(queryData.id);

});
app.listen(3000);