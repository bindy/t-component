### TAlert
#### 基本用法
```vue

<template>
    <t-button @click="open">打开消息提示</t-button>
</template>

<script>
export default{
    methods:{
        open(){
            this.$TAlert('这是一条消息')
        }
    }
}
</script>
```

#### 不同类型
```vue

<template>
<div>
    <t-button @click="open">成功</t-button>
    <t-button @click="open1">警告</t-button>
    <t-button @click="open2">消息</t-button>
    <t-button @click="open3">错误</t-button>
</div>
</template>

<script>
export default{
    methods:{
        open(){
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
```
#### 移动端预览
```vue

<template>
    <iframe class="phone-frame" src="http://localhost:8080/#/alert"></iframe>
</template>

```



### TConfirm
#### 基本用法
```vue

<template>
    <t-button @click="open">打开消息确认</t-button>
</template>

<script>
export default{
    methods:{
        open(){
            this.$TConfirm({
                    title: '消息提示',
                    content: '你说什么',
                    callback: (e) => {
                        console.log(true)
                    }
            }).then(()=>{
                console.log('ok')
            }).catch(() => {
                console.log('cancel')      
            });
        }
    }
}
</script>
```
#### 移动端预览
```vue

<template>
    <iframe class="phone-frame" src="http://localhost:8080/#/confirm"></iframe>
</template>

```


### TLoading
#### 基本用法
```vue

<template>
    <t-button @click="loading">准备加载</t-button>
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
```

#### 移动端预览
```vue

<template>
    <iframe class="phone-frame" src="http://localhost:8080/#/loading"></iframe>
</template>
