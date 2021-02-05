import Vue from 'vue';
import Router from 'vue-router'

const button = ()=>import('../page/button')
const icon = ()=>import('../page/icon')
const row = ()=>import('../page/row')
const col = ()=>import('../page/col')
const image = ()=>import('../page/image')
const radioGroup = ()=>import('../page/radio-group')
const select = ()=>import('../page/select')
const multiSelect = ()=>import('../page/multi-select')
const tswitch = ()=>import('../page/switch')
const datePicker = ()=>import('../page/date-picker')
const form = ()=>import('../page/form')
const formItem = ()=>import('../page/form-item')
const list = ()=>import('../page/list')
const list2 = ()=>import('../page/list2')
const table = ()=>import('../page/table')
const timeline = ()=>import('../page/timeline')
const alert = ()=>import('../page/alert')
const confirm = ()=>import('../page/confirm')
const loading = ()=>import('../page/loading')

const routes = [
    {
        path:"/button",
        component:button,
        name:"Button"
    },
    {
        path:"/icon",
        component:icon,
        name:"Icon"
    },
    {
        path:"/row",
        component:row,
        name:"Row"
    },
    {
        path:"/col",
        component:col,
        name:"Col"
    },
    {
        path:"/image",
        component:image,
        name:"Image"
    },
    {
        path:"/radioGroup",
        component:radioGroup,
        name:"RadioGroup"
    },
    {
        path:"/select",
        component:select,
        name:"Select"
    },
    {
        path:"/multiSelect",
        component:multiSelect,
        name:"MultiSelect"
    },{
        path:"/switch",
        component:tswitch,
        name:"Switch"
    },{
        path:"/datePicker",
        component:datePicker,
        name:"DatePicker"
    },{
        path:"/form",
        component:form,
        name:"Form"
    },{
        path:"/formItem",
        component:formItem,
        name:"FormItem"
    },{
        path:"/list",
        component:list,
        name:"List"
    },{
        path:"/list2",
        component:list2,
        name:"List2"
    },{
        path:"/table",
        component:table,
        name:"Table"
    },{
        path:"/timeline",
        component:timeline,
        name:"Timeline"
    },{
        path:"/alert",
        component:alert,
        name:"alert"
    },{
        path:"/confirm",
        component:confirm,
        name:"confirm"
    },{
        path:"/loading",
        component:loading,
        name:"loading"
    },
]

Vue.use(Router)

let r = new Router({
    mode:'hash',
    routes
})

export default r;