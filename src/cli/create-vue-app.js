const shell = require('shelljs');
const ora = require('ora');
const download = require('download-git-repo')
const path = require('path')
const fs = require('fs')
module.exports = (config) => {
  if (!shell.which('git')) {
    shell.echo('Sorry, this script requires git');
    return shell.exit(1);
  }
  const spinner = ora('download template...').start();
  shell.exec('clear')

  // 仓库名称 gihub  用户名 nxl3477  项目名称 my-vue-app
  download('https://github.com:nxl3477/my-vue-cli#master', config.name, { clone: true }, function (err) {
    if( err ) {
      return  spinner.warn(`vue-app 构建失败, 失败原因: ${err}`)
    }
    // 获取当前命令行执行的路径
    const curPath = process.cwd()
    const packagePath = path.join( curPath, config.name, 'package.json' )
    const jsonData = require( packagePath )
    jsonData.name = config.name
    fs.writeFile(packagePath, JSON.stringify( jsonData, null, 2 ), (err) => {
      if( err ) {
        return console.log(err)
      }
      spinner.succeed(` vue-app: ${config.name}  success`)
    })
  })
}