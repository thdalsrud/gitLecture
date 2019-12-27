var express=require('express')
var app=express() // 실행한 exp를 app으로 전달받기

var port=process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`Server is starting at http://localhost:${port}`)
})
