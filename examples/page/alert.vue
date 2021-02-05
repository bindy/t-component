<template>
    <div>
      <h3>基本用法</h3>
      <t-button @click="open">打开消息提示</t-button>

      <h3>不同类型</h3>
      <t-button @click="open0">成功</t-button>
      <t-button @click="open1">警告</t-button>
      <t-button @click="open2">消息</t-button>
      <t-button @click="open3">错误</t-button>
    </div>

</template>

<script>
export default{
    methods:{
        open(){
            this.$TAlert('这是一条消息')
        },
        open0(){
            this.$TAlert({
                content: '这是一条消息',
                duration: 3000,
                type: 'success'
            })
        },
        open1(){
            this.$TAlert({
                content: '这是一条消息',
                duration: 3000,
                type: 'warning'
            })
        },
        open2(){
            this.$TAlert({
                content: '这是一条消息',
                duration: 3000,
                type: 'info'
            })
        },
        open3(){
            this.$TAlert({
                content: '这是一条消息',
                duration: 3000,
                type: 'error'
            })
        },
    }
}
</script>