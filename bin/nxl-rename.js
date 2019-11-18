#!/usr/bin/env node
const program = require('commander')
const path = require('path')
const chalk = require('chalk')
const fsPromise = require('../src/module/fsPromise')

program.on('--help', () => {
  console.log('  目前支持命令:  ')
  console.log(chalk.yellow('    # 重命名当前目录下的文件（加-r 包括所有子目录）'))
  console.log('    $ nxl-rename [-r/-R] <filename> ')
  console.log()
})


// 脚手架命令行
program
  .version('0.1.0')
  .usage('[options] <filename>')
  .option('-R, --recursion', '递归文件')
  .option('-r, --recursion', '递归文件')
  .action(function (filename, cmd) {
    // 获取当前命令行执行的路径, 是否需要递归
    renamefile(process.cwd(), filename,  cmd.recursion )
  }); 

program.parse(process.argv);


async function renamefile(dirPath, newFilename, isRecursion) {
  // 读取目录信息
  const filesData = await fsPromise.readdir(dirPath)
  for( let i = 0; i < filesData.length; i++ ) {
    // 当前文件名
    const filename = filesData[i]
    // 获取当前文件的绝对路径
    const curFilePath = path.join(dirPath, filename)
    // 获取文件后缀名称
    const extname = path.extname(curFilePath);
    // 判断是否是文件夹
    try {
      const stat = await fsPromise.lstat(curFilePath)
      if( stat.isDirectory() ) {
        // 判断是否需要递归
        if( isRecursion ) {
          // 递归 
          await renamefile( curFilePath, newFilename, isRecursion )
        }
        // 如果该文件是文件夹则结束本次循环， 避免文件夹被重命名
        continue;
      }
      // 重写文件名
      await fsPromise.rename(curFilePath, path.join(dirPath, `${newFilename}-${i}${extname}`))
    }catch(e) {
      console.log(e)
    }
  }
}