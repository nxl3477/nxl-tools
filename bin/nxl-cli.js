#!/usr/bin/env node
// 命令行信息
const program = require('commander')
const createReactTsApp = require('../src/cli/create-react-ts-app')
const createVueApp = require('../src/cli/create-vue-app')
const chalk = require('chalk')
const inquirer = require('inquirer');



program.on('--help', () => { 
  console.log('  目前支持命令:  ')
  console.log()
  console.log(chalk.yellow('    # 创建脚手架项目'))
  console.log('    $ nxl-tools init react-ts-app')
  console.log()
  console.log(chalk.yellow('    # 其他'))
  console.log('    $ nxl-tools')
  console.log()
})


// 脚手架命令行
program
  .version('0.1.0')
  .description('用于创建项目脚手架')
  .command('create <cliName>')
  .action(async function (cliName) {

    if( cliName === 'react-ts-app' ) {
     const answers = await askCreateAppInfo()
     createReactTsApp(answers)
    }

    if( cliName === 'vue-app' ) {
      const answers = await askCreateAppInfo()
      createVueApp(answers)
    }
  });
 
program.parse(process.argv);




async function askCreateAppInfo () {
  const name = await inquirer.prompt([{
    type: "input",
    message: "项目名称:",
    name: "name",
    default: 'my-project'
  }])
  return name
}