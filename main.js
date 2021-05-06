var http = require('http');
var fs = require('fs');
// url이라는 모듈은 url이라는 변수로 칭한다.
// nodejs 안에서 비슷한 것 끼리 모아둔 것을 모듈이라고 한다/
var url = require('url');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var title = queryData.id
    // queryDaya 객체 안에 id라는 키를 이용해 답을 얻는다
    console.log(queryData.id);
    if(_url == '/'){
      title  = 'welcome';
    }
    if(_url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    // readFile로 이용해서 data폴더 안에 있는 txt파일을 불러온다
    // quertData.id = HTML 클릭하면 HTML, CSS 클릭하면 CSS
    // txt파일명을 description 변수 자리에 배치된다. = txt 파일 본문이 배치된다.
    fs.readFile(`data/${queryData.id}`,'utf8',function(err, description){
        var template = `
        <!doctype html>
        <html>
        <head>
        <title>WEB1 - ${title}</title>
        <meta charset="utf-8">
        </head>
        <body>
        <h1><a href="/">WEB</a></h1>
        <ul>
            <li><a href="/?id=HTML">HTML</a></li>
            <li><a href="/?id=CSS">CSS</a></li>
            <li><a href="/?id=JavaScript">JavaScript</a></li>
        </ul>
        <h2>${title}</h2>
        <p>${description}</p>
        </body>
        </html>
    `;
    // 웹페이지에 Query String 주소에다가 css를 적으면 css가 웹페이지에 뜨고 html로 고치면 html이 뜬다.
    response.end(template);

    })
   
    
});
app.listen(3000);