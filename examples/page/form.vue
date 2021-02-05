<template>
  <div>
    <h3>基本用法</h3>
    <t-form :model="form" label-width="100px" >
      <t-form-item 
        v-model="form.username" 
        type="text" 
        size="small" 
        name="username" 
        label="用户名" 
        placeholder="请输入用户名"  />
      <t-form-item 
        v-model="form.password" 
        type="password" 
        size="small" 
        name="password" 
        label="密码" 
        placeholder="请输入密码"  />
      <t-form-item 
        v-model="form.content" 
        type="textarea" 
        size="small" 
        name="username" 
        label="活动说明" 
        placeholder="请输入"  />
      <t-form-item 
        type="radio" 
        label="即时配送" 
        name="switch">
        <t-switch v-model="form.radio"></t-switch>
      </t-form-item>
      <t-form-item 
        type="radio" 
        label="活动性质" 
        name="select">
        <t-radio-group v-model="form.select" size="small" :label-names="[1,2]" :label-texts="['单选框1','单选框2']" />
      </t-form-item>
      <t-form-item 
        type="select" 
        label="活动区域"
        name="comp">
        <t-select size="small" v-model="form.comp" :options="comps" />
      </t-form-item>
      <t-form-item 
        type="select"
        label="活动区域2"
        name="selects">
        <t-multi-select size="small" v-model="form.selects" :options="options" />
      </t-form-item>
      <t-form-item 
        type="select" 
        label="活动日期"
        name="date">
        <t-date-picker type="daterange" v-model="form.date" />
      </t-form-item>
      <t-form-item
        type="button">
        <t-button  @click="submit">提交</t-button>
      </t-form-item>
    </t-form>

    <h3>对齐方式</h3>
    <div class="t-row ">
      <t-radio-group v-model="align" :label-names="lValues" :label-texts="lTexts" />
    </div>
    <t-form :model="form2" label-width="100px" :label-position="align" >
      <t-form-item 
        v-model="form2.username" 
        type="text" 
        size="small" 
        name="username" 
        clearable 
        label="用户名" 
        placeholder="请输入用户名"  />
      <t-form-item 
        v-model="form2.password" 
        type="password" 
        size="small" 
        name="password" 
        clearable 
        label="密码" 
        placeholder="请输入密码"  />
      <t-form-item
        type="button">
        <t-button  @click="submit">提交</t-button>
      </t-form-item>
    </t-form>

    <h3>校验规则</h3>
    <t-form :model="form3" label-width="100px" ref="validateForm">
      <t-form-item 
        v-model="form3.username" 
        type="text" 
        :required="true" 
        size="small" 
        name="username" 
        clearable 
        label="用户名" 
        placeholder="请输入用户名" 
        :rules="[{ required: true, message: '用户名不能为空'}]" />
      <t-form-item 
        v-model="form3.password" 
        type="password" 
        :required="true" 
        size="small" 
        name="password" 
        clearable 
        label="密码" 
        placeholder="请输入密码" 
        :rules="[{ required: true, message: '密码不能为空'}]" />

      <t-form-item
        type="button">
        <t-button  @click="submit2">提交</t-button>
      </t-form-item>
    </t-form>
  </div>
</template>
<script>
 export default {
    data() {
      return {
        form: {
          username:'',
          password:'',
          content:'',
          radio:true,
          select:'',
          comp:undefined,
          date:undefined,
          selects:[]
        },
        comps: [{
            value: 'area1',
            label: '区域1',
            children:[
              { value: 'area_1a',
                label: '区域a'
              }, {
                  value: 'area_1b',
                  label: '区域b'
              }
            ]
        },{ value: 'area2',
            label: '区域2'
        }, {
            value: 'area3',
            label: '区域3'
        }],
        options: [{
                value: 'area1',
                label: '区域1',
            }, {
                value: 'area2',
                label: '区域2',
            }

        ],
         align:'right',
        lValues: ['left', 'right','top'],
        lTexts: ['左对齐', '右对齐','顶对齐'],
        form2: {
          username:'',
          password:''
        },
        form3: {
          username:'',
          password:''
        },
      }
    },
    methods:{
      submit(){
        console.log(this.form)
      },
      async submit2(){
        try {
            let r = await this.$refs['validateForm'].submitForm()
            console.log(r)
        } catch (e) {
            console.error(e)
        }
      }
    }
  };
</script>
