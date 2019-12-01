#!/usr/bin/env node

let http = require('http')
let {version}= require('./package.json')

let server=http.createServer()
let htp=8080

if(process.argv[2]=='-v'){
    console.log(version)
}else if(process.argv[2]=='-p'){
    let sss=process.argv[3]?process.argv[3]:htp
    server.listen(sss,()=>{
        console.log(`端口号是${sss}`)
    })
}