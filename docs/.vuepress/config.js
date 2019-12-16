module.exports = {
  title: 'evolution',
  description: '一个不断改进的单页vue应用',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'CDN', link: '/cdn' },
      { text: '存储', link: '/store' },
    ],
    sidebar:[
      '/',
      '/cdn',
      '/webp',
      '/mock',
      ['/store', '存储'],
      ['/lint', '代码规范'],
      ['/optimize', '性能优化'],
      ['/awesomes', '常用工具/类库'],
      ['/bc', '兼容性'],
      ['/issue', '遇到的问题']
    ]
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': '../../src/'
      }
    }
  }
}
