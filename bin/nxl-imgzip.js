#!/usr/bin/env node
const ora = require('ora');
const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');
 
(async () => {
    const imagePath = process.cwd()
    const spinner = ora('正在压缩中...').start();
    const files = await imagemin([`${imagePath}/*.{jpg,png,gif}`], {
      destination: 'zip',
      plugins: [
        imageminJpegtran(),
        imageminPngquant({
            quality: [0.6, 0.8]
        })
      ]
    });

    spinner.succeed('图片压缩完毕， 存放至 zip 文件夹下')
    //=> [{data: <Buffer 89 50 4e …>, path: 'build/images/foo.jpg'}, …]
})();