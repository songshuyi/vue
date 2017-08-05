<template>
    <div class="bg_white" :style="height">
        <ul class="info">
            <router-link tag="li"
                         :key="index"
                         :to="item.path"
                         @click="show_toast"
                         v-for="(item,index) in info">
                <div>
                    <p v-text="item.name"></p>
                </div>
                <div>
                    <p
                            :class="index === 0 ? item.val : ''"
                            v-text="index !== 0 ? item.val : ''"
                            class="data"></p>
                    <p v-if="index !== 2 && index !== 4" class="my_arrow"></p>
                </div>
            </router-link>
        </ul>
        <Toast v-on:msg="change_toast" :show="toast_show"></Toast>
    </div>
</template>
<script>
    import Toast from '@/component/Toast'
    export default {
        name: 'info',
        data() {
            return {
                height: '',
                toast_show: true,
                info: [
                    {
                        name: '头像',
                        val: 'my_head',
                        path: ''
                    },
                    {
                        name: '昵称',
                        val: 'Mint',
                        path: '/my/nameUpdate'
                    },
                    {
                        name: '账户名',
                        val: 'rz182****9876',
                        path: ''
                    },
                    {
                        name: '更换手机',
                        val: '182****9876',
                        path: '/my/phoneUpdate'
                    },
                    {
                        name: '存管账户',
                        val: 'ECH7219278172817827182718',
                        path: '/my/bankOpen'
                    },
                    {
                        name: '我的银行卡',
                        val: '',
                        path: '/my/bankCard'
                    },
                    {
                        name: '风险评估',
                        val: '未评估',
                        path: ''
                    }
                ]
            }
        },
        methods: {
            show_toast() {
                this.toast_show = true
            },
            change_toast(val) {
                this.toast_show = val
            }
        },
        created() {
            this.height = `height:${document.body.getBoundingClientRect().height}px`
        },
        components:{
            Toast
        }
    }
</script>
<style lang="scss" scoped>
    .bg_white{
        @include box((bg:$white));
    }
    .info{
        margin-left: 0.3rem;
        @include box((fs:0.3rem,c:$black2,bg:$white));
        li{
            @include box((lh:1rem,d:flex));justify-content:space-between;
            @include thin(bottom,#E5E5E5);padding-right: 0.2rem;
            div{
                @include box((d:flex));
            }
            .data{
                @include box((fs:0.24rem,c:$black9));
            }
            .my_arrow{
                @include box((w:0.3rem,h:0.3rem,m:0.35rem 0 0.35rem 0.2rem));
            }
        }
    }
    @each $img in arrow,head {
        .my_#{$img}{
            @include bg_img('my_#{$img}.png');
            @if($img == head){
                @include box((d:block,w:0.8rem,h:0.8rem,bdr:0.4rem,m:0.1rem 0));
            }
        }
    }
</style>