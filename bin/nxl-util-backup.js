#!/usr/bin/env node
// const program = require('commander')

// 命令行信息
const program = require('commander')


// console.log(process.argv)

// require('yargs') // eslint-disable-line
//     .command('serve [port]', 'start the server', (yargs) => {
//     yargs
//         .positional('port', {
//             describe: 'port to bind on',
//             default: 5000
//         })
//     }, (argv) => {
//     if (argv.verbose) console.info(`start server on :${argv.port}`)
//         serve(argv.port)
//     })
//     .option('verbose', {
//         alias: 'v',
//         default: false
//     })
// .argv



// https://github.com/SBoudrias/Inquirer.js
// const inquirer = require("inquirer");
// const promptList = [{
//   type: "checkbox",
//   message: "选择颜色:",
//   name: "color",
//   choices: [
//       {
//           name: "red"
//       },
//       // new inquirer.Separator(), // 添加分隔符
//       {
//           name: "blur",
//           checked: true // 默认选中
//       },
//       {
//           name: "green"
//       },
//       // new inquirer.Separator("--- 分隔符 ---"), // 自定义分隔符
//       {
//           name: "yellow"
//       }
//   ]
// }];

// inquirer.prompt(promptList).then(answers => {
//   console.log("哈哈", answers); // 返回的结果
// });



// 命令行信息
// const program = require('commander')


// program
//   .version('0.1.0')
//   .command('init <dir> [otherDirs...]')
//   .action(function (dir, otherDirs) {
//     console.log('rmdir %s', dir);
//     if (otherDirs) {
//       otherDirs.forEach(function (oDir) {
//         console.log('other %s', oDir);
//       });
//     }
//   });

// program.parse(process.argv);
// npm i shelljs --save
// 执行系统命令
// const exec = require('child_process').exec;

// exec('echo 1',(err,stdout,stderr)=>{
//     // console.log('运行错误',err);
//     console.log('标准输出流',stdout);
//     // console.log('错误输出',stderr);
// })


// 命令行， 高亮
// https://github.com/chalk/chalk




program
  .version('0.1.0')
  .description('用于创建项目脚手架')
  .command('init <dir> [otherDirs...]')
  .action(function (dir, otherDirs) {

    console.log('rmdir %s', dir);
    if (otherDirs) {
      otherDirs.forEach(function (oDir) {
        console.log('rmdir %s', oDir);
      });
    }
  });
 
program.parse(process.argv);