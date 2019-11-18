const fs = require('fs')
const path = require
exports.lstat = path => new Promise((resolve, reject) => {
  fs.lstat(path, (err, data) => { 
    if( err ) {
      return reject(err)
    }
    resolve(data)
  })
})


exports.rename = (path, newName) => new Promise((resolve, reject) => {
  fs.rename(path, newName, (err, data) => {
    if( err ) {
      return reject(err)
    }
    resolve(data)
  })
})


exports.readdir = (path) => new Promise((resolve, reject) => {
  fs.readdir(path, ( err, data) => {
    if( err ) {
      return reject(err)
    }
    resolve(data)
  })
})