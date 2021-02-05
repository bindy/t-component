<template>
<div class="loading-wrap">
    <div class="loading-main" v-for="(item,index) in loadings" :key="index">
        <div class="el-loading-mask is-fullscreen" v-if="apptype === 'PC'">
            <div class="el-loading-spinner"><svg viewBox="25 25 50 50" class="circular">
                    <circle cx="50" cy="50" r="20" fill="none" class="path"></circle>
                </svg>
                <p class="el-loading-text">{{item.content}}</p>
            </div>
        </div>
        <div v-if="apptype === 'H5'" class="van-toast van-toast--middle van-toast--loading" style="z-index: 2017; ">
            <van-loading />
            <div class="van-toast__text">{{item.content}}</div>
        </div>
    </div>
</div>
</template>

<script>
import {
    uuid
} from '../utils'

export default {
    name: 'TLoading',
    data() {
        return {
            tagName: '',
            loadings: [],
            show: true,
        }
    },
    
    methods: {
        add(loading) {
            const name = uuid();
            let _loading = Object.assign({
                name: name
            }, loading);
            this.loadings.push(_loading)

        },
        remove() {
            this.loadings = []
            
        }
    }
}
</script>

<style>


</style>
