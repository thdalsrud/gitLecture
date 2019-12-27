var http=require('http')
var fs=require('fs') //파일을 가져오는거
var app=http.createServer()
var port=3000;
app.listen(port, ()=>{ //listen: 대기
    console.log(`Server is starting at http://localhost:${port}`);
})

app.on('request',(request,response)=>{
    console.log("웹으로부터 요청이 있습니다.");
    var fileName='./image/horse.png' //fs라이브러리를 이용해서 경로 저장
    var infile=fs.createReadStream(fileName, {flags:"r"}) //flage: 이상한 요청 들어오면 걍 종료하는 단순 옵션
    infile.pipe(response) //pipe: infile에 들어와있는 스트림을 resp에 실어준다
})