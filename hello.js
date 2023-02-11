//server creation
//HTTP module
//1.http
const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
   console.log("request has been made from broswser to server");
   //console.log(req.method);
    //console.log(url);
   res.setHeader('Content-Type','text/html');
   res.write('<h1>hello lily </h1');
   res.write('<p >m moti but not fatty </p>')
    res.end();
})
server.listen(3000,'localhost',()=>{
  console.log('server is listen on port 3000');
});