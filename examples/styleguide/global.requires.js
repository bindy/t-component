import Vue from 'vue'
import {
    TButton,
    TCol,
    TRow,
    TCollapse,
    TCollapseItem,
    TDatePicker,
    TForm,
    TFormItem,
    TIcon,
    TImage,
    TList,
    TMultiSelect,
    TRadio,
    TRadioGroup,
    TSelect,
    TSwitch,
    TTable,
    TTimeline,
    TTimelineItem,
    TAlert,
    TConfirm,
    TLoading
} from '../../packages'

Vue.prototype.apptype = 'PC'
const components = [TButton,
    TCol,
    TRow,
    TCollapse,
    TCollapseItem,
    TDatePicker,
    TForm,
    TFormItem,
    TIcon,
    TImage,
    TList,
    TMultiSelect,
    TRadio,
    TRadioGroup,
    TSelect,
    TSwitch,
    TTable,
    TTimeline,
    TTimelineItem];

components.forEach((item) => Vue.use(item))
Vue.prototype.$TAlert = TAlert
Vue.prototype.$TConfirm = TConfirm
Vue.prototype.$TLoading = TLoading
