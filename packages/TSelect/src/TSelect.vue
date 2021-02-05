<template>
  <div>
    <div v-if="apptype === 'H5' " ref="select-text">
      <van-icon v-if="icon" :name="icon" :size="+tempsize / 2" />
      <span class="select-text" @click="openPicker" v-else :class="disabled?'disabled':''">
        <span v-if="value">{{ value }}</span>
        <span v-else style="color: #777">{{ placeholder }}</span>
      </span>
    </div>
    <component
      :is="tagName"
      v-bind="attrObj"
      ref="select"
      :value="apptype === 'H5' ? showPicker : value"
    >
      <div v-if="apptype === 'PC' && isSingleType">
        <el-option
          v-for="item in optionData"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </div>
      <van-picker
        v-if="apptype === 'H5'"
        v-bind="pickerObj"
        @confirm="onConfirm"
        @cancel="showPicker = false"
      />
    </component>
  </div>
</template>

<script>
/**
 * @example ../../../examples/docs/examples/TSelect.md
 */
export default {
  name: "TSelect",
  data() {
    return {
      tagName: "",
      showPicker: false,
      tempsize: 0,
    };
  },
  model: {
    prop: "value",
    event: "change",
  },
  watch: {},
  computed: {
    optionData() {
      let options = [];
      if (this.apptype === "H5") {
        options = this.getOptions(this.options);
      } else {
        options = this.options;
      }
      return options;
    },
    type() {
      let type = "single";
      if (
        this.options.filter((item) => item["children"] !== undefined).length > 0
      ) {
        type = "cascader";
      }
      return type;
    },
    isSingleType() {
      return this.type === "single";
    },
    pickerObj() {
      let attrs = {};
      let _size, _count;
      switch (this.size) {
        case "medium":
          _size = "46";
          _count = 8;
          break;
        case "small":
          _size = "44";
          _count = 6;
          break;
        case "mini":
          _size = "42";
          _count = 4;
          break;
      }
      //   this.tempsize = _size
      attrs["title"] = this.placeholder;
      attrs["readonly"] = this.disabled;
      attrs["item-height"] = _size;
      attrs["visible-item-count"] = _count;
      attrs["show-toolbar"] = true;
      attrs["columns"] = this.optionData;
      return attrs;
    },
    attrObj() {
      let attrs = {};
      attrs["value"] = this.value;

      if (this.apptype === "PC") {
        attrs["disabled"] = this.disabled;
        attrs["size"] = this.size;
        attrs["placeholder"] = this.placeholder;
        //attrs['filterable'] = true
        attrs["options"] = this.optionData;
        if (this.isSingleType) {
          // attrs["name"] = this.name;
        }
      } else if (this.apptype === "H5") {
        attrs["position"] = "bottom";
        attrs["round"] = true;
      }
      return attrs;
    },
  },
  props: {
    /**
     * 绑定值
     *
     */
    value: {
      type: [Boolean, String, Number, Array],
    },
    /**
     * 选项值
     *
     */
    options: {
      type: Array,
    },
    
    // name: {
    //   type: String,
    // },
    /**
     * 占位符
     *
     */
    placeholder: {
      type: String,
      default: () => "请选择",
    },
    /**
     * 是否禁用
     * @value true,false
     */
    disabled: {
      type: Boolean,
      default: () => false,
    },
    /**
     * 输入框尺寸
     *
     */
    size: {
      type: String,
      validator(value) {
        return ["small", "medium", "mini"].includes(value);
      },
      default: () => "small",
    },

    icon: {
      type: String,
    },
  },
  beforeMount() {
    if (this.apptype === "PC") {
      if (this.type === "single") this.tagName = "el-select";
      else if (this.type === "cascader") this.tagName = "el-cascader";
    } else if (this.apptype === "H5") {
      this.tagName = "van-popup";
    }
  },
  mounted() {
    this.$nextTick(() => {
      if (this.apptype === "PC") {
        this.$refs["select"].$on("change", (e) => this.$emit("change", e));
      } else if (this.apptype === "H5") {
        
        this.$refs["select"].$on("click-overlay", () => {
          this.showPicker = false;
        });
      }
    });
  },
  methods: {
    getOptions(options) {
      let data = [];
      options.forEach((element) => {
        let item = {};
        item["text"] = element["label"];
        if (element["children"]) {
          item["children"] = this.getOptions(element["children"]);
        }
        data.push(item);
      });
      return data;
    },
    onConfirm(value) {
      let type = Object.prototype.toString.call(value);
      let curValue;
      if (type === "[object Object]") {
        curValue = value["text"];
      } else if (type === "[object Array]") {
        curValue = value.join("/");
      }
      this.$emit("change", curValue);
      this.showPicker = false;
    },
    openPicker(){
      if(!this.disabled) this.showPicker = true;
    }
  },
};
</script>

<style scoped>
.select-text{
  display: inline-block;
  line-height: 24px;
  height: 24px;
  min-height: 24px;
  width: 100%;
}
.select-text.disabled{
  opacity:.6;
  background:#ddd
}
</style>
