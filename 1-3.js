var http=require('http')

var app=http.createServer()

var port=3000;

app.listen(port, ()=>{
    console.log(`Server is staring at http://localhost:${port}`)
})

app.on('connection', (socket)=>{
    var soc=socket.address();
    console.log('Web client is connected' +soc.address+ ',' +soc.port)
})

app.on('request', (request,response)=>{
    console.log(`웹 요청이 들어왔습니다.`)
    response.write("<!DOCTYPE html>")
    response.write("<html>") 
    response.write("<head>")
    response.write("<meta charset='utf-8'>")
    response.write("<title>응답페이지</title>")
    response.write("</head>")
    response.write("<body>")
    response.write("<p>노드제이에스로부터 응답한 페이지</p>")
    response.write("</body>")
    response.write("</html>")
})