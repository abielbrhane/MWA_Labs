var fs = require('fs');
var zlib = require('zlib');
var gzip = zlib.createGzip();

var readable = fs.createReadStream(__dirname + '/source.txt');
var compressed = fs.createWriteStream(__dirname + '/destination.txt.gz');

readable.pipe(gzip).pipe(compressed);