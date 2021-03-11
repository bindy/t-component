const path = require('path')
const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV)
const resolve = dir => path.resolve(__dirname,dir)
console.log(resolve('packages'))
module.exports = {
    pages:{
        index:{
            entry:'examples/main.js'
        }
    },
    publicPath:IS_PROD?'/t-component-ui-guide/site':'',
    
    chainWebpack: config => {
        config
            .optimization.usedExports(true)
  }
}