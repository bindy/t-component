<template>
    <div>
      <h3>基本用法</h3>
      <t-button @click="loading">准备加载</t-button>

    </div>

</template>

<script>
export default{
    methods:{
        loading(){
            const loading = this.$TLoading({
                content:'正在加载中...'
            })
            setTimeout(()=>{
                loading.close()
            },1000)
        }
    }
}
</script>