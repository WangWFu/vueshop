var path = require('path')
function resolve (dir) {
  //console.log(__dirname)
  return path.join(__dirname, dir)
}
module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('components',resolve('src/components'))
      .set('assets',resolve('src/assets'))
      .set('common',resolve('src/common'))
      .set('network',resolve('src/network'))
      .set('views',resolve('src/views'))
  }
}

// module.export={
//   configurewebpack:{
//     resolve:{
//       alias:{
//         'assets':'@/assets',
//         'common':'@/common',
//         'components':'@/components',
//         'network':'@/network',
//         'views':'@/views'
//       }
//     }
//   }
// }