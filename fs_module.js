
//sync approach

// const {readFileSync,writeFileSync} = require(`fs`)

// const first = readFileSync(`./content/subfolder/first.txt`, 'utf8')
// const second = readFileSync(`./content/subfolder/second.txt`, 'utf8')

// writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`)


//asynchronous approach
const {readFile, writeFile}=require('fs')

readFile('./content/subfolder/first.txt','utf8', (err, result)=>{
    if(err){
    console.log(err)
    return
}
const first= result;
readFile ('./content/subfolder/second.txt','utf8', (err, result)=>{
    if(err){
    console.log(err)
    return
}
const second=result;
writeFile('./content/result-async.txt',`Here is the result: ${first}, ${second}`, (err,result)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(result)
})
})
})
