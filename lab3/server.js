var http = require('http');
var fs= require('fs');
var path=require('path');

// http.createServer(function(req,res){
//             var rs= fs.createReadStream('map.jpg').pipe(res);
// }).listen(1337,'127.0.0.1');


http.createServer(function(req,res){
        res.writeHead(200,{'content-Type':'image/jpg'});
        fs.readFile(path.join(__dirname,'map.jpg'),function(err,img){
            if(err) throw err;
            res.end(img);
        });
}).listen(1337,'127.0.0.1');

// http.createServer(function(req,res){
//     res.writeHead(200,{'content-Type':'image/jpg'});
//     fs.readFileSync(path.join(__dirname,'map.jpg'),function(err,img){
//         if(err) throw err;
//         res.end(img);
//     });
// }).listen(1337,'127.0.0.1');
