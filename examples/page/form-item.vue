<template>
  <div>
    <h3>基本用法</h3>
    <t-form :model="form" label-width="140px" ref="validateForm">
      <t-form-item 
        v-model="form.textarea" 
        type="textarea" 
        label="设置type:textarea"  />
      <t-form-item 
        v-model="form.password" 
        type="password" 
        label="设置type:password"  />
      <t-form-item 
        v-model="form.number" 
        type="number" 
        label="设置type:digit"  />
      <t-form-item 
        v-model="form.text" 
        type="text" 
        label-width="160px"
        label="设置表单域标签的宽度"  />
      <t-form-item 
        v-model="form.text1" 
        type="text" 
        :maxlength="10"
        label="设置最大长度"/>
      
      <t-form-item 
        v-model="form.textarea1" 
        type="textarea" 
        :autosize="{minRows: 2, maxRows: 6}"
        label="设置自适应内容高度"  />
      <t-form-item 
        v-model="form.textarea2" 
        type="textarea" 
        :maxlength="100"
        showWordLimit
        label="设置字数统计" />
      <t-form-item 
        v-model="form.text2" 
        type="text" 
        left-icon="location" 
        label="设置leftIcon" />
      <t-form-item 
        v-model="form.text3" 
        type="text" 
        right-icon="star" 
        label="设置rightIcon"/>
      <t-form-item 
        v-model="form.text4" 
        type="text" 
        placeholder="请输入用户名"
        label="设置占位符"   />
      <t-form-item 
        v-model="form.text5" 
        type="text" 
        clearable
        label="设置可清空"   />
      <t-form-item 
        v-model="form.text6" 
        type="text" 
        disabled
        label="设置禁用"   />
      <t-form-item 
        v-model="form.text7" 
        type="text" 
        readonly
        label="设置只读"   />
      
    </t-form>

  </div>
</template>
<script>
 export default {
    data() {
      return {
        form: {
          number:'',
          text:'',
          text1:'',
          text2:'',
          text3:'',
          text4:'',
          text5:'',
          text6:'',
          text7:'',
          textarea:'',
          textarea1:'',
          textarea2:'',
          password:''
        },
      }
    },
    methods:{
      async submit(){
        console.log(this.form)
      }
    }
  };
</script>