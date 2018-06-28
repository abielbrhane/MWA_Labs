var util = require('util');
var EventEmitter =require('events');

 function Violin(){
     EventEmitter.call(this);
 }

 util.inherits(Violin,EventEmitter);

 var vio = new Violin();
 vio.on('note',function(){
                         console.log('violin is playing music');
                            });

 Violin.prototype.create=function(){this.emit('note');}
 
 setInterval(() => {vio.create();}, 1000);