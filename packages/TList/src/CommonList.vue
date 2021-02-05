<template>
  <van-list
    ref="list"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
    v-model="loading"
    :immediate-check="false"
    :offset="100"
  >
    <div v-if="action">
      <van-swipe-cell v-for="(item, index) in tableData" :key="index">
        <van-cell
          :title="item.title"
          :title-style="{ color: '#1989fa' }"
        >
          <div slot="label">
            <slot :data="item"></slot>
          </div>
        </van-cell>
        <template #right>
          <van-button
            v-if="editIcon"
            style="height: 100%"
            :icon="editIcon"
            square
            type="primary"
            text=""
            @click="editAction(item, index)"
          />
          <van-button
            v-else
            style="height: 100%"
            square
            type="primary"
            text="编辑"
            @click="editAction(item, index)"
          />
          <van-button
            v-if="deleteIcon"
            style="height: 100%"
            :icon="deleteIcon"
            square
            type="danger"
            text=""
            @click="deleteAction(item, index)"
          />
          <van-button
            v-else
            style="height: 100%"
            square
            type="danger"
            text="删除"
            @click="deleteAction(item, index)"
          />
        </template>
      </van-swipe-cell>
    </div>
    <van-cell
      v-else
      v-for="(item, index) in tableData"
      :key="index"
      :title="item.title"
      clickable
      :title-style="{ color: '#1989fa' }"
    >
      <div slot="label">
        <slot :data="item"></slot>
      </div>
    </van-cell>
  </van-list>
</template>

<script>
import iconName from "../../iconName";
const iconlist = Array.from(
  new Set(Object.keys(iconName).map((item) => item.slice(0, -3)))
);

export default {
  name: "CommonList",
  data: () => ({
    error: false,
    loading: false,
    finished: false,
    list: [],
    curPage: 0,
  }),
  props: {
    tableData: {
      type: Array,
      required: true,
    },
    action: {
      type: Boolean,
      default: () => false,
    },
    editIcon: {
      type: String,
      validator(value) {
        return iconlist.includes(value);
      },
    },
    deleteIcon: {
      type: String,
      validator(value) {
        return iconlist.includes(value);
      },
    },
    editAction: {
      type: Function,
    },
    deleteAction: {
      type: Function,
    },
    total: {
      type: Number,
    },
    pageSize: {
      type: Number,
    },
    size: {
      type: String,
    },
  },
  computed: {},
  mounted() {
    this.onLoad();
    // this.list = this.tableData
  },
  methods: {
    async onLoad() {
      if (
        this.total / (this.tableData.length + this.pageSize) > 1 ||
        this.total === 0
      ) {
        this.curPage += 1;
        let param = {
          pageNo: this.curPage,
          pageSize: this.pageSize,
        };
        this.$emit("load", param);
        this.loading = false;
      } else {
        this.finished = true;
      }
    },
  },
};
</script>

<style >
</style>
