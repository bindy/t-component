### 基本用法
```vue

<template>
    <t-multi-select v-model="formComp" :options="comps" />

</template>

<script>
  export default {
    data () {
      return {
        formComp:[],
        comps: [{
                    value: "shejiyuanze",
                    label: "设计原则",
                }, {
                    value: 'yizhi',
                    label: '一致'
                }, {
                    value: 'fankui',
                    label: '反馈'
                }, {
                    value: 'xiaolv',
                    label: '效率'
                }, {
                    value: 'kekong',
                    label: '可控'
                }]
                
      };
    }
  }
</script>

```

### 基本用法2
```vue

<template>
    <t-multi-select v-model="formComp" :options="comps2" />

</template>

<script>
  export default {
    data () {
      return {
        formComp:[],
        comps2: [{
                    value: "shejiyuanze",
                    label: "设计原则",
                    children: [{
                        value: 'yizhi',
                        label: '一致'
                    }, {
                        value: 'fankui',
                        label: '反馈'
                    }, {
                        value: 'xiaolv',
                        label: '效率'
                    }, {
                        value: 'kekong',
                        label: '可控'
                    }]
                },
                {
                    value: "daohang",
                    label: "导航",
                    children: [{
                        value: 'cexiangdaohang',
                        label: '侧向导航'
                    }, {
                        value: 'dingbudaohang',
                        label: '顶部导航'
                    }]
                },
            ],
                
      };
    }
  }
</script>

```

### 禁用状态
```vue

<template>
    <t-multi-select disabled v-model="formComp" :options="comps" />

</template>

<script>
  export default {
    data () {
      return {
        formComp:[],
        comps: []
                
      };
    }
  }
</script>

```

### 样式大小
```vue

<template>
    <div>
        <div class="t-row ">
            <t-multi-select size="medium" v-model="formComp" :options="comps" />
        </div>
        <div class="t-row ">
            <t-multi-select size="small" v-model="formComp" :options="comps" />
        </div>
        <div class="t-row ">
            <t-multi-select size="mini" v-model="formComp" :options="comps" />
        </div>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        formComp:[],
        comps: [{
                    value: "shejiyuanze",
                    label: "设计原则",
                }, {
                    value: 'yizhi',
                    label: '一致'
                }, {
                    value: 'fankui',
                    label: '反馈'
                }, {
                    value: 'xiaolv',
                    label: '效率'
                }, {
                    value: 'kekong',
                    label: '可控'
                }]
                
      };
    }
  }
</script>

```

### 移动端预览

```vue

<template>
    <iframe class="phone-frame" src="http://localhost:8080/#/MultiSelect"></iframe>
</template>

```