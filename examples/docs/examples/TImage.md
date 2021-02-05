### 基本用法
```vue

<t-image src="https://img.yzcdn.cn/vant/cat.jpeg"/> 

```

### 填充模式
```vue

<t-image style="width:200px;height:200px" fit="contain" src="https://img.yzcdn.cn/vant/cat.jpeg"/> 
<t-image style="width:200px;height:200px" fit="cover" src="https://img.yzcdn.cn/vant/cat.jpeg"/> 
<t-image style="width:200px;height:200px" fit="fill" src="https://img.yzcdn.cn/vant/cat.jpeg"/> 

```

### 图片懒加载
```vue

<t-image lazy src="https://img.yzcdn.cn/vant/cat.jpeg"/> 

```

### 移动端预览

```vue

<template>
    <iframe class="phone-frame" src="https://bindy.github.io/t-component-ui-guide/site/#/image"></iframe>
</template>

```