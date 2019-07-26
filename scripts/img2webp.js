const imagemin = require('imagemin')
const imageminWebp = require('imagemin-webp')
const path = require('path')
const chokidar = require('chokidar')
const fs = require('fs')
// 监控的文件夹
const imgDir = '../src/assets'
// {png,jpg,jpeg}中间不能有空格
const jpgInputPath = path.resolve(__dirname, imgDir + '/*.{jpg,jpeg}')
const pngInputPath = path.resolve(__dirname, imgDir + '/*.png')
const imgOutputPath = path.resolve(__dirname, imgDir)

// 转换为webp图片
function generateWebpImg (path) {
  let jpgPath, pngPath
  if (path) {
    if (path.endsWith('.png')) {
      pngPath = path
    } else if (path.endsWith('.jpg') || path.endsWith('.jpeg')) {
      jpgPath = path
    }
  } else {
    pngPath = pngInputPath
    jpgPath = jpgInputPath
  }
  jpgPath && imagemin([jpgPath], imgOutputPath, {
    use: [
      // doc: https://github.com/imagemin/imagemin-webp
      imageminWebp({ quality: 75 })
    ]
  })
  pngPath && imagemin([pngPath], imgOutputPath, {
    use: [
      // doc: https://github.com/imagemin/imagemin-webp
      imageminWebp({
        lossless: false
      })
    ]
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
