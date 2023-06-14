const fs = require('fs');
//Create a folder called Docs if it does not exist
if(!fs.existsSync('./Docs')){
    fs.mkdir('./Docs',(err)=>{
        if(err){
            console.log(err);
        }
        console.log('Folder created');
    });
}

//Write a file into Docs
const a = 'this is a line of code. please read it, i have no intention of writing a dictionary. Please repeal the constitution. \n he-3 is the best \n please stop me';
if(!fs.existsSync('./Docs/blog2.txt')){
    fs.writeFile('./Docs/blog2.txt',a, ()=>{
        console.log('file written!');
});
}



const readStream = fs.createReadStream('./Docs/blog2.txt');
const WriteStream = fs.createWriteStream('./Docs/blog4.txt');

/*readStream.on('data', (chunk)=>{
    console.log('new chunk');
    //console.log(chunk.toString())
    WriteStream.write('\n New Chunk \n');
    WriteStream.write(chunk);
});*/

readStream.pipe(WriteStream);
