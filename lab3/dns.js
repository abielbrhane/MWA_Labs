/*############# resolve4() ##############*/

// const dns = require('dns');
// var ip= dns.resolve4('www.mum.edu', function(err,addresses,family){
//                 console.log(addresses);
// });

/*############ resolve4() with promise Object ##########*/

// const {promisify} = require('util');
// const dns = require('dns');
// const ipResolver= promisify(dns.resolve4);
// ipResolver('www.mum.edu').then((addresses) => {console.log('IP4: ',addresses);})
//                         .catch((err)=>{console.log('ERROR: ',err);});

/* ################ resolve4() with async/await ########*/

const {promisify} = require('util');
const dns = require('dns');

const ipResolverAsync = promisify(dns.resolve4);

async function main(){
    try{
        const addresses= await ipResolverAsync('www.mum.edu');
        console.log('CONTENT: ', addresses);
    }catch(err){
        console.log('ERROR: ',err);
    }
}

main();