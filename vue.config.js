module.exports = {
    pages:{
        index:{
            entry:'examples/main.js'
        }
    },
    publicPath:process.env.NODE_ENV === 'production'?'/t-component-ui-guide/site':''
}