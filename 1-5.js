var http=require('http')
var app=http.createServer()
var fs=require('fs')
var port=3000;

app.listen(port, ()=>{
    console.log(`Server is starting at http://localhost:${port}`)
})

app.on('request',(req,res)=>{
    console.log(`웹에서 요청이 들어왔습니다.`);
    var filename="./image/horse.png"
    var infile=fs.createReadStream(filename,{flags:'r'})
    var fileLenght=0;
    var curLenght=0;

    res.writeHead(200, {"Content-Type":"image/png"})
    infile.on('readable', ()=>{
        var chunk;
        while(null!==(chunk=infile.read())){
            console.log(`읽어들인 데이터 크기: ${chunk.lenght}`);
            curLenght+=chunk.lenght;
            res.write(chunk, 'utf8',(error)=>{
                if(error){
                    console.log(error)
                }
                else{
                    console.log(`파일 부분 쓰기 완료 ${curLenght}, ${fileLenght}`);
                    if(curLenght>=fileLenght){
                        res.end();
                    }
                }
            })
        }
    })
})