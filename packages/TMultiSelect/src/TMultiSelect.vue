<template>
  <div ref="select-wrap" class="t-multi-select">
    <span v-show="apptype === 'H5'" ref="select-text" @click="openPicker" class="select-text" :class="disabled?'disabled':''">
      <span v-if="value.length > 0">{{ value.join(",") }}</span>
      <span v-else style="color: #777">{{ placeholder }}</span>
    </span>
    <component
      :is="tagName"
      v-bind="attrObj"
      ref="select"
      :value="apptype === 'H5' ? showPicker : value"
    >
      <div v-if="apptype === 'PC' && isSingleType">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </div>
      <div v-if="apptype === 'H5'">
        <div class="select-result">
          <div class="van-picker__toolbar">
            <button
              type="button"
              class="van-picker__cancel"
              @click="setCurval(0)"
            >
              取消
            </button>
            <div class="van-ellipsis van-picker__title">{{ placeholder }}</div>
            <button
              type="button"
              class="van-picker__confirm"
              @click="setCurval(curValue)"
            >
              确认
            </button>
          </div>

          <div class="result-list">
            <van-tag
              v-for="(tag, i) in curValue"
              :key="i"
              closeable
              type="primary"
              @close="close(i)"
            >
              {{ tag }}
            </van-tag>
          </div>
          <!-- <van-search v-model="searchValue" placeholder="搜索" /> -->
        </div>
        <van-checkbox-group v-model="curValue" v-if="isSingleType">
          <van-cell-group>
            <van-cell
              v-for="(item, index) in optionData"
              clickable
              :key="index"
              :title="`${item.label}`"
            >
              <template #right-icon>
                <van-checkbox
                  v-bind="selectObj"
                  :name="item.label"
                  ref="checkboxes"
                />
              </template>
            </van-cell>
          </van-cell-group>
        </van-checkbox-group>
        <van-tree-select 
          v-else
          :items="optionData"
          :active-id.sync="curValue"
          :main-active-index.sync="activeIndex"
        />
      </div>
    </component>
  </div>
</template>

<script>
/**
 * @example ../../../examples/docs/examples/TMultiSelect.md
 */
export default {
  name: "TMultiSelect",
  data() {
    return {
      tagName: "",
      showPicker: false,
      curValue: [],
      searchValue: "",
      activeIndex:0
    };
  },
  model: {
    prop: "value",
    event: "change",
  },
  watch: {},
  computed: {
    // optionData() {
    //   return this.options.filter((item) => {
    //     return item.label.indexOf(this.searchValue) > -1;
    //   });
      
    // },
    optionData() {
      let options = [];
      if (this.apptype === "H5") {
        options = this.getOptions(this.options);
      } else {
        options = this.options;
      }
      return options
      // return options.filter((item) => {
      //   let text = item.label || item.text
      //   return text.indexOf(this.searchValue) > -1;
      // });
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
    selectObj() {
      let attrs = {};
      let _size;
      switch (this.size) {
        case "medium":
          _size = "20px";
          break;
        case "small":
          _size = "18px";
          break;
        case "mini":
          _size = "16px";
          break;
      }
      attrs["disabled"] = this.disabled;
      attrs["icon-size"] = _size;

      return attrs;
    },
    attrObj() {
      let attrs = {};
      attrs["value"] = this.value;

      if (this.apptype === "PC") {
        // attrs['name'] = this.name;
        attrs["disabled"] = this.disabled;
        attrs["size"] = this.size;
        attrs["placeholder"] = this.placeholder;
        attrs["multiple"] = true;
        attrs["options"] = this.options;
        if (!this.isSingleType) {
          attrs["props"] = { multiple: true }
        }
      } else if (this.apptype === "H5") {
        attrs["position"] = "bottom";
        // attrs['closeable'] = true
        attrs["round"] = true;
        attrs["style"] = {
          // 'height': '50%',
          "padding-top": "0px",
        };
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
        item["label"] = element["label"];
        item["id"] = element["label"]
        if (element["children"]) {
          item["children"] = this.getOptions(element["children"]);
        }
        data.push(item);
      });
      return data;
    },
    close(index) {
      this.curValue.splice(index, 1);
    },
    openPicker(){
      if(!this.disabled) this.showPicker = true;
    },
    setCurval(value) {
      if (value === 0) {
        this.curValue = [];
      }
      this.$emit("change", this.curValue);
      this.showPicker = false;
    },
  },
};
</script>

<style scoped>
.van-popup > div {
  position: relative;
  padding-top: 88px;
}

.van-popup .select-result {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: #fff;
}

.van-popup .select-result .result-list {
  height: 30px;
  padding: 0 15px;
  white-space: nowrap;
  overflow: auto;
}

.van-popup .select-result .result-list span {
  margin-right: 5px;
}

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
