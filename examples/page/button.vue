<template>
<div class="btn-wrap">
    <h3>基本按钮风格</h3>
    <div>
        <t-button type="default">按钮</t-button>
        <t-button type="primary">主要按钮</t-button>
        <t-button type="info">信息按钮</t-button>
        <t-button type="warning">警告按钮</t-button>
        <t-button type="danger">危险按钮</t-button>
        
    </div>

    <div style="margin-top:20px">
        <t-button type="default" plain>线框按钮</t-button>
        <t-button type="primary" plain>线框主要按钮</t-button>
        <t-button type="info" plain>线框信息按钮</t-button>
        <t-button type="warning" plain>线框警告按钮</t-button>
        <t-button type="danger" plain>线框危险按钮</t-button>
    </div>

    <div style="margin-top:20px">
        <t-button type="default" round>圆角按钮</t-button>
        <t-button type="primary" round>圆角主要按钮</t-button>
        <t-button type="info" round>圆角信息按钮</t-button>
        <t-button type="warning" round>圆角警告按钮</t-button>
        <t-button type="danger" round>圆角危险按钮</t-button>
    </div>

    <!-- <div style="margin-top:20px">
        <t-button _pc-circle >圆形按钮</t-button>
    </div> -->

    <h3>按钮大小</h3>
    <div>
        <t-button size="large">大按钮</t-button>
        <t-button size="default">普通按钮</t-button>
        <t-button size="small">小型按钮</t-button>
        <t-button size="mini">超小按钮</t-button>
    </div>

    <h3>禁用状态</h3>
    <div>
        <t-button type="default" disabled>按钮</t-button>
        <t-button type="primary" disabled>主要按钮</t-button>
        <t-button type="info" disabled>信息按钮</t-button>
        <t-button type="warning" disabled>警告按钮</t-button>
        <t-button type="danger" disabled>危险按钮</t-button>
    </div>

    <div style="margin-top:20px">
        <t-button type="default" plain disabled>线框按钮</t-button>
        <t-button type="primary" plain disabled>线框主要按钮</t-button>
        <t-button type="info" plain disabled>线框信息按钮</t-button>
        <t-button type="warning" plain disabled>线框警告按钮</t-button>
        <t-button type="danger" plain disabled>线框危险按钮</t-button>
    </div>

    <h3>图标按钮</h3>
    <t-button type="default" icon="star"></t-button>
    <t-button type="primary" icon="share"></t-button>
    <t-button type="primary" icon="search" >搜索</t-button>

    <h3>加载中</h3>
    <t-button type="default" :loading="true">加载中</t-button>
</div>
    
</template>
<style>
.btn-wrap .van-button{
    margin:5px
}
</style>
