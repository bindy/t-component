### 基本用法
```vue

<template>
    <t-timeline :data="timelineData" />
</template>
<script>
 export default {
    data() {
      return {
        timelineData:[
            {
                'time':'2016-07-10 09:30',
                'label':'快件已发货',
                'status':'default',
                'link':'123',
                'content':'进展情况'
            },
            {
                'time':'2016-07-10 09:30',
                'label':'快件已发货',
                'status':'normal',
                'link':'',
                'content':'进展情况'


            },{
                'time':'2016-07-10 09:30',
                'label':'快件已发货',
                'status':'warning',
                'link':'',
                'content':'进展情况'

            },{
                'time':'2016-07-10 09:30',
                'label':'快件已发货',
                'status':'danger',
                'link':'',
                'content':'进展情况'

            }
        ],
      }
    },
    methods:{
      
      
      
    }
 }
</script>

```

### 移动端预览
基本用法
```vue

<template>
    <iframe class="phone-frame" src="https://bindy.github.io/t-component-ui-guide/site/#/timeline"></iframe>
</template>

```