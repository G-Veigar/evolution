const imagemin = require('imagemin')
const imageminWebp = require('imagemin-webp')
const path = require('path')
const chokidar = require('chokidar')
const fs = require('fs')

const imgDir = '../src/assets'
// {png,jpg,jpeg}中间不能有空格
const imgInputPath = path.resolve(__dirname, imgDir + '/*.{png,jpg,jpeg}')
const imgOutputPath = path.resolve(__dirname, imgDir)

// 转换为webp图片
function generateWebpImg (path) {
  let imgPath = path || imgInputPath
  imagemin([imgPath], imgOutputPath, {
    use: [
      imageminWebp({ quality: 100 })
    ]
  }).then((data) => {
    console.log('generated webp img success')
  }).catch(e => {
    console.error(e)
  })
}

// 删除图片
function deleteWebpImg (originPath, cb) {
  let webpImgPath = originPath.replace(/(.png$)|(.jpg$)|(.jpeg$)/, '.webp')
  console.log('webpImgPath', webpImgPath)
  fs.unlink(webpImgPath, (err) => {
    if (err) {
      console.error(err)
    }
  })
}

// 监控文件夹
const watcher = chokidar.watch(path.resolve(__dirname, imgDir), {
  ignored: /(^\..+)|(.+[/\\]\..+)|(.+?\.webp$)|(.+?\.gif$)/, // 忽略文件.开头和.webp,.gif
  persistent: true // 保持监听状态
})

// 监听增加，修改，删除文件的事件
watcher.on('all', (event, path) => {
  switch (event) {
    case 'add':
    case 'change':
      // generateWebpImg(path, (status) => {
      //   log('生成图片' + getWebpImgName(path) + status)
      // })
      console.log('add or change', path)
      generateWebpImg(path)
      break
    case 'unlink':
      deleteWebpImg(path)
      // deleteWebpImg(getWebpImgName(path), (status) => {
      //   log('删除图片' + getWebpImgName(path) + status)
      // })
      break
    default:
      break
  }
})

console.log('biubiubiu~~~ 监控已经启动')
