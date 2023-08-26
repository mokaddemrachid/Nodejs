const http=require('http')
const fs=require('fs')
const path = require('path')
const port=3000
const server=http.createServer((req,res)=>{
    res.end(`
    <!doctype html>
    <html>
        <body>
            <h1>Hello Node!!!!</h1>
        </body>
    </html>`) 
})
fs.writeFile('welcome.txt','Hello Node', (err)=>{
    if (err) {
        console.error('error creating the file:', err)
    }else {
        console.log('file "welcome.txt" created with success.')
    }
})

fs.readFile("welcome.txt","Utf8",(err,data)=>{
            if(err){
                console.error('error reading from the file:', err)
                
            }else{
                console.log('Data from "welcome.txt":',data)
            }
        })

server.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})