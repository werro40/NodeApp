const fs = require('fs')

//reading

/*fs.readFile('./blog1.txt', (err, data) =>{
    if(err){
        console.log(err);
    }
    console.log(data.toString());
});//Asynchorous task that calls back a callback function

if(fs.existsSync('./Documents/blog2.txt')){
    fs.unlink('./Documents/blog2.txt',(err)=>{
        if(err){
            console.log(err);
        }
        console.log('file deleted!');
    })
}*/

/*if(!fs.existsSync('./Documents')){
    fs.mkdir('./Documents',(err)=>{
        if(err) {
            console.log(err);
        }
        console.log('folder created');
    });
}else{
    fs.rmdir('./Documents', (err)=>{
        if(err){
            console.log(err);
        }
        console.log('folder deleted');
    })
}*/


//fs.writeFile('./Documents/blog2.txt','allo, wurld', ()=>{
//    console.log('written!');
//});

//data stream. every time a buffer fills 
//read streams and write streams
