#! /usr/bin/env/ node

let fs = require('fs')
let user = require('./user.json')
let program = require('commander')
let inquirer = require('inquirer')

program
    .version('1.0.0')
    .description

const program = require('commander');
const inquirer =require('inquirer')
let user=require('./list.json')
const fs=require('fs')
const promptList = [{
    type: 'input',
    message: '设置一个用户名:',
    name: 'name',
},{
    type: 'input',
    message: '请输入身份证',
    name: 'shen'
}];

program
    .version('1.0.0')
    .description('It is my cli')
    .action(()=>{
        inquirer.prompt(promptList).then(answers => {
            if(user.findIndex(item=>item.shen===answers.shen)==-1){
                user.push(answers)
                fs.writeFileSync('./user.json',JSON.stringify(user))
            }else{
                console.log('已经存在')
            }
            
        })
    })
program.parse(process.argv)