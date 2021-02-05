<template>
  <div>
    <span v-show="apptype === 'H5'" ref="dateselect-text" @click="openPicker">
      <span v-if="value">{{ value }}</span>
      <span v-else-if="placeholder" style="color: #777">{{ placeholder }}</span>
      <span v-else-if="readonly && !!value">{{ formatDateValue }} </span>
    </span>
    <component
      :is="tagName"
      v-bind="attrObj"
      ref="datepicker"
      :value="apptype === 'H5' ? showPicker : value"
    >
    </component>
  </div>
</template>

<script>
/**
 * @example ../../../examples/docs/examples/TDatePicker.md
 */

export default {
  name: "TDatePicker",
  data() {
    return {
      tagName: "",
      showPicker: false,
    };
  },
  model: {
    prop: "value",
    event: "change",
  },
  computed: {
    attrObj() {
      let attrs = {};
      attrs["readonly"] = this.readonly;
      attrs["value"] = this.value;
      let _type = this.type;
      if (this.apptype === "H5") {
        switch (this.type) {
          case "date":
            _type = "single";
            break;
          case "daterange":
            _type = "range";
            break;
        }
      }
      attrs["type"] = _type;

      if (this.apptype === "PC") {
        attrs["placeholder"] = this.placeholder;
        attrs["start-placeholder"] = "开始日期";
        attrs["end-placeholder"] = "结束日期";
        attrs["clearable"] = false;
        attrs["pickerOptions"] = {
          disabledDate: (time) => {
            let minDate = +this.minDate;
            let maxDate = +this.maxDate;
            let curDate = +new Date(time);
            return curDate < minDate || curDate > maxDate;
          },
        };
      } else if (this.apptype === "H5") {
        attrs["title"] = this.placeholder;
        attrs["color"] = "#07c160";
        attrs["close-on-click-overlay"] = false;
        attrs["min-date"] = this.minDate;
        attrs["max-date"] = this.maxDate;
      }
      return attrs;
    },
    formatDateValue() {
      const type = Object.prototype.toString.call(this.value);
      let curValue;
      if (type === "[object Date]") {
        curValue = this.formatDate(this.value);
      } else if (type === "[object Array]") {
        const [start, end] = this.value;
        curValue = `${this.formatDate(start)} - ${this.formatDate(end)}`;
      }
      return curValue;
    },
  },
  props: {
    /**
     * 绑定值
     *
     */
    value: {
      type: [Boolean, String, Date, Array],
    },
    /**
     * 日期类型
     * @value data,daterange
     */
    type: {
      type: String,
      validator(value) {
        return ["date", "daterange"].includes(value);
      },
      default: () => "date",
    },
    /**
     * 占位符
     *
     */
    placeholder: {
      type: String,
      default: () => "请选择日期",
    },
    /**
     * 是否只读
     * @value true,false
     */
    readonly: {
      type: Boolean,
      default: () => false,
    },
    /**
     * 可选择的最小时间
     *
     */
    minDate: {
      type: Date,
    },
    /**
     * 可选择的最大时间
     *
     */
    maxDate: {
      type: Date,
    },
  },
  beforeMount() {
    if (this.apptype === "PC") {
      this.tagName = "el-date-picker";
    } else if (this.apptype === "H5") {
      this.tagName = "van-calendar";
    }
  },
  mounted() {
    this.$nextTick(() => {
      if (this.apptype === "PC") {
        this.$refs["datepicker"].$on("blur", (e) => {
          let curValue;
          let picker = e.picker;

          if (this.type === "daterange") {
            let st = picker.$children[0].minDate;
            let et = picker.$children[1].rangeState.endDate;
            curValue = [st, et];
          } else if (this.type === "date") {
            curValue = picker.date;
          }
          this.$emit("change", curValue);
        });
      } else if (this.apptype === "H5") {
        this.$refs["datepicker"].$on("confirm", (value) => {
          console.log(value);
          let type = Object.prototype.toString.call(value);
          let curValue;
          if (type === "[object Date]") {
            curValue = this.formatDate(value);
          } else if (type === "[object Array]") {
            const [start, end] = value;
            curValue = `${this.formatDate(start)} - ${this.formatDate(end)}`;
          }
          this.$emit("change", curValue);
          this.showPicker = false;
        });
      }
    });
  },
  methods: {
    formatDate(date) {
      return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
    },
    openPicker() {
      if(!this.readonly){
        this.showPicker = true;
        setTimeout(() => {
          this.$refs["datepicker"].$parent.$el
            .querySelector(".van-icon-cross")
            .addEventListener("click", () => {
              this.showPicker = false;
            });
        }, 0);
      }
    },
  },
};
</script>
