<template>

<component :is="tagName" v-bind="attrObj" >
    <div v-if="apptype === 'PC'" class="timeline-item-pc">
        <div class="line"></div>
        <div class="verticalLine" :style="{top: index%2===0 ?'-10px' :'10px'}"></div>
        <div class="dot"></div>
        <el-tooltip placement="top" popper-class="tipContent">
            <div slot="content" class="tipContent">
                <div>
                    <span>名称 :</span>
                    <span>{{data.label}}</span>
                </div>
                <div>
                    <span>时间 :</span>
                    <span>{{data.time}}</span>
                </div>
                <div>
                    <span>状态 :</span>
                    <span>{{data.status}}</span>
                </div>
                <!-- <div>
                    <span>概要 :</span>
                    <span>{{data.description}}</span>
                </div> -->
                <div>
                    <span>进展 :</span>
                    <span>{{data.content}}</span>
                </div>
            </div>
            <div class="info" :style="{top:index%2===0 ?'0' :'70px'}">
                <el-row>
                    <span :class="[`level-${data.status}`]"></span>
                    <span class="name">{{data.label}}</span>
                </el-row>
                <el-row>
                    <span>{{data.time}}</span>
                </el-row>
            </div>
        </el-tooltip>
    </div>
    <div v-if="apptype === 'H5'" class="timeline-item-h5">
        <h3>{{data.time}}</h3>
        <p :class="data.link !== '' ?'link':''" @click="openTips"><span :class="data.status" /> {{data.label}} <i v-if="data.link" class="van-icon van-icon-arrow van-step__icon" /></p>
    </div>
    <van-action-sheet v-if="apptype === 'H5'" v-model="tipPopover" title="提示" closeable>
      <van-row class="tip" >
        <van-cell title="名称" :value="data.label" />
        <van-cell title="时间" :value="data.time" />
        <van-cell
          title="状态"
          :value="data.status"
        />
        <!-- <van-cell title="概要" :value="data.description" /> -->
        <van-cell title="进展" :value="data.content" />
      </van-row>
      
    </van-action-sheet>
</component>

   
</template>

<script>
export default {
    name: 'TTimelineItem',
    data() {
        return {
            tagName: '',
            tipPopover: false,
            tipObj:null
        }
    },
    computed: {
        attrObj() {
            let attrs = {}

            return attrs
        }
    },

    props: {
        data: {
            type: Object
        },
        index: {
            type: Number
        },
        // status: {
        //     type: String,
        //     //['default','normal','warning','danger']

        // }
    },
    beforeMount() {
        if (this.apptype === 'PC') {
            this.tagName = 'div'
        } else if (this.apptype === 'H5') {
            this.tagName = 'van-step'
        }
    },
    methods: {
        openTips(){
            this.tipPopover = true;
        }
    },
}
</script>

<style>
.timeline-H5 .van-step .van-step__circle{
  width:8px!important;
  height:8px!important;
  background-color: #000
}

.timeline-H5 .van-step .van-step--vertical:first-child::before,
.timeline-H5 .van-step .van-step__line,
.timeline-H5 .van-step .van-step:last-child .van-step__line{
  background-color: #000;
  width:1px!important
}
.timeline-item-h5 h3 {
    font-size: 14px;
    color: #666
}

.timeline-item-h5 p {
    font-size: 14px;
    color: #222;
}

.timeline-item-h5 p.link {
    text-decoration: underline;
    color: #4591FF;
}

.timeline-item-h5 p span {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 10px;
}

.timeline-item-h5 p span.default {
    background: #fff;
    border: 1px solid #979797
}

.timeline-item-h5 p span.normal {
    background: #13CA00;
}

.timeline-item-h5 p span.warning {
    background: #FFBC00;
}

.timeline-item-h5 p span.danger {
    background: #E30000;
}

.timeline-item-h5 p .van-icon {
    vertical-align: middle;

}

.timeline-item-h5 h3,
.timeline-item-h5 p {
    margin: 0
}

.timeline-item-h5 .van-step__circle {
    width: 8px;
    height: 8px;
}

.timeline-item-pc {
    width: 200px;
    height: 100px;
    position: relative;
    font-size: 14px;
}

.timeline-item-pc .line {
    position: absolute;
    width: 100%;
    top: 0;
    bottom: 0;
    margin: auto;
    height: 1px;
    background: #4591ff;
}

.timeline-item-pc .verticalLine {
    position: absolute;
    width: 1px;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    height: 20px;
    top: -10px;
    background: #4591ff;
}

.timeline-item-pc .dot {
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    background: #4591ff;
}

.timeline-item-pc .info {
    cursor: pointer;
    width: 120px;
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    margin: auto;
}

.timeline-item-pc .info .name {
    color: #4591ff;
    padding-left: 5px;
    display: inline-block;
    padding-bottom: 3px;
}

.timeline-item-pc .level-default {
    width: 10px;
    height: 10px;
    border: 1px solid #222;
    background: #fff;
    border-radius: 50%;
    display: inline-block;
}

.timeline-item-pc .level-normal {
    width: 10px;
    height: 10px;
    border: 1px solid #13ca00;
    background: #13ca00;
    border-radius: 50%;
    display: inline-block;
}

.timeline-item-pc .level-warning {
    width: 10px;
    height: 10px;
    border: 1px solid #ffbc00;
    background: #ffbc00;
    border-radius: 50%;
    display: inline-block;
}

.timeline-item-pc .level-danger {
    width: 10px;
    height: 10px;
    border: 1px solid #e30000;
    background: #e30000;
    border-radius: 50%;
    display: inline-block;
}

.timeline-item-pc .tipContent {
    width: 140px;
}

.timeline-item-pc .tipContent div {
    color: #fff;
    font-size: 10px;
    line-height: 20px;
    white-space: nowrap;
    font-size: 14px;
}

.timeline-item-pc .tipContent div span:nth-of-type(1) {
    width: 30px;
    display: inline-block;
}

.timeline-item-pc .tipContent div span:nth-of-type(2) {
    white-space: normal;
}
</style>
