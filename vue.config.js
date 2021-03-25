const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV)
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