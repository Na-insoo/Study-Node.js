var fs = require('fs');
// 파일을 읽는 방법
// readFile <- txt파일을 읽는다 , utf8은 문자열 오류를 막아준다. , data가 잘 읽히는지 console.log를 통해서 확인한다.
fs.readFile('sample.txt', 'utf8', function(err, data){
    console.log(data);
})