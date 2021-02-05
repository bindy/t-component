<template>
    <div>
      <h3>基本用法</h3>
      <t-button @click="open">打开消息确认</t-button>

    </div>

</template>

<script>
export default{
    methods:{
        open(){
            this.$TConfirm({
                    title: '消息提示',
                    content: '你说什么',
                    callback: () => {
                        console.log(true)
                    }
            }).then(()=>{
                console.log('ok')
            }).catch(() => {
                console.log('cancel')      
            });
        },
    }
}
</script>