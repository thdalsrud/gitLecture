//http를 활용하여 구글 사이트의 데이터 가져오기 ->근데 아무 의미 없음
var http=require('http')

var options={
    host:'www.google.com',
    port:80,
    path:'/'
}

var req=http.get(options,(res)=>{
    var resData='';
    res.on('data',(chunk)=>{
        resData+=chunk;
    })
    res.on('end',()=>{
        console.log(resData)
    })
})

req.on('error',(err)=>{
    console.log("error"+err.message)
})
