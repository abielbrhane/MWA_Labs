var fs = require('fs');
var zlib = require('zlib');
var unGzip = zlib.createGunzip();

var compressed = fs.createReadStream(__dirname + '/destination.txt.gz');
var readable = fs.createWriteStream(__dirname + '/source2.txt');

compressed.pipe(unGzip).pipe(readable);
