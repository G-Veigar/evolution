var modernizr = require('modernizr')

// options: https://github.com/Modernizr/Modernizr/blob/master/lib/config-all.json
modernizr.build({
  'feature-detects': [
    'img/webp',
    'css/vwunit'
  ]
}, function (result) {
  console.log(result) // the build
})
