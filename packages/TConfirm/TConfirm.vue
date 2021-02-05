<template>
<div class="confirm">
    <div class="confirm-main" v-for="(item,index) in confirms" :key="index">
        <el-dialog v-if="apptype === 'PC'" :title="item.title" :visible.sync="dialogVisible" :close-on-click-modal="false">
            <span>{{item.content}}</span>
            <span slot="footer" class="dialog-footer">
                <el-button size="small" @click="closeConfirm(item,null)">{{ item.cancelText ||'取消'}}</el-button>
                <el-button size="small" type="primary" @click="closeConfirm(item,item.callback)">{{ item.confirmText ||'确定'}}</el-button>
            </span>
        </el-dialog>
        <van-popup v-if="apptype === 'H5'" v-bind="attrObj" :value="dialogVisible" :close-on-click-overlay="false">
            <div role="dialog" aria-labelledby="item.title" class="van-dialog" >
                <div class="van-dialog__header">{{item.title}}</div>
                <div class="van-dialog__content">
                    <div class="van-dialog__message van-dialog__message--has-title">{{item.content}}</div>
                </div>
                <div class="van-hairline--top van-dialog__footer">
                    <button class="van-button van-button--default van-button--large van-dialog__cancel" @click="closeConfirm(item,null)">
                        <div class="van-button__content"><span class="van-button__text">{{ item.cancelText ||'取消'}}</span></div>
                    </button>
                    <button class="van-button van-button--default van-button--large van-dialog__confirm van-hairline--left" @click="closeConfirm(item,item.callback)">
                        <div class="van-button__content"><span class="van-button__text">{{ item.confirmText ||'确定'}}</span></div>
                    </button>
                </div>
            </div>
        </van-popup>
    </div>
</div>
</template>

<script>
import {
    uuid
} from '../utils'

export default {
    name: 'TConfirm',
    data() {
        return {
            tagName: '',
            confirms: [],
            dialogVisible: true,
            name: undefined
        }
    },
    computed: {
        attrObj() {
            let attrs = {}
            attrs['position'] = 'top'
            attrs['close-on-popstate'] = true
            attrs['value'] = this.show
            return attrs
        }
    },
  
    methods: {
        add(confirm) {
            this.name = uuid();
            let _confirm = Object.assign({
                name: this.name
            }, confirm);
            this.confirms.push(_confirm)

        },
        remove(name) {
            const confirms = this.confirms
            for (let i = 0; i < confirms.length; i++) {
                if (confirms[i].name === name) {
                    this.confirms.splice(i, 1);
                    break;
                }
            }
        },
        closeConfirm(item,cb) {
            this.remove(this.name)
            if (cb !== null) {
                cb()
                item.resolve();
            }else{
                item.reject()
            }
            
        }
    }
}
</script>

<style>
.confirm {
    position: fixed;
    width: 100%;
    /* height:100%; */
    top: 0;
    left: 0;
    text-align: left;
    z-index: 2500;
}

.confirm-content {
    display: inline-block;
    padding: 8px 16px;
    background: #fff;
    border-radius: 3px;
    box-shadow: 0 1px 6px rgba(0, 0, 0, .2);
    margin-bottom: 8px;
}

.confirm .el-dialog__body {
    padding: 10px 20px;
}
.confirm .van-dialog{
    z-index: 2026;
}
</style>
