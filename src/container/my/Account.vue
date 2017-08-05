<template>
    <div class="account_wraper">
        <section >
            <p class="title">账户余额(元)</p>
            <p class="account" v-text="account"></p>
            <p class="desc">
                <label>提现处理中</label>
                <strong>
                    <i @click="toggleMsg"></i>
                    <transition name="scale">
                        <span v-show="showMsg">提现处理中</span>
                    </transition>
                </strong>
                <span class="money">38,272.00</span>
            </p>
        </section>
        <p class="detail_title">充值提现明细(元)</p>
        <ul class="detail_ul">
            <li v-for="item in detailLists">
                <div class="left">
                    <p>07-28</p>
                    <p>15:56</p>
                </div>
                <div class="center">
                    <p>+200,902.02</p>
                    <span>充值</span>
                </div>
                <div class="right">
                    <p class="status" :class="{'msg':item.status===1,'error':item.status===0}">成功</p>
                    <p class="tip">今日24:00前到账</p>
                </div>
            </li>
        </ul>
        <div class="bottom_btns">
            <p><router-link to="withDrawCash">提现</router-link></p>
            <p><router-link to="recharge">充值</router-link></p>
        </div>
        <transition name="fade1">
            <div v-show="showMsg" class="shade" @click="toggleMsg"></div>
        </transition>

    </div>

</template>
<script>

    export default {
        name: 'Account',
        data() {
            return {
                showMsg:false,//是否显示提示框
                account:'124,451',//
                detailLists:[
                    {
                        status:0
                    },
                    {
                        status:1
                    },
                    {
                        status:2
                    },
                    {
                        status:0
                    },
                    {
                        status:1
                    },
                    {
                        status:2
                    }
                ]
            }
        },
        mounted() {

        },
        methods: {
            toggleMsg(){
                this.showMsg=!this.showMsg;
            }
        },
        computed: {},
        components: {}
    }
</script>
<style lang="scss" scoped>
    .account_wraper{
        @include box((p:0 0 1.6rem 0));
        section{
            @include box((h:3rem,bg:#425476,p:0.26rem 0.3rem,w:7.5rem));
            .title{
                @include box((fs:0.24rem,c:$white,lh:0.34rem));
                opacity:0.5;
            }
            .account{
                @include box((m:0.5rem auto,ta:center,fs:0.64rem,c:$white,lh:0.77rem));
            }
            .desc{
                @include box((ta:center,c:$white,lh:0.4rem,fs:0.28rem));
                label{
                    opacity:0.5;
                }
                strong{
                    @include box((d:inline-block,w:0.3rem,h:0.4rem,p:0.05rem 0));
                    vertical-align: top;
                    position:relative;
                    i{
                        @include box((d:inline-block,w:0.3rem,h:0.3rem));
                        @include bg_img('my_account_msg.png');
                    }
                    span {
                        @include position((p:absolute, t:0.55rem,l:-0.27rem,z:5));
                        @include box((d:block,fs:0.24rem,lh:0.6rem,c:$black2,bg:$white,bdr:0.06rem));
                        font-weight:normal;
                        min-width:1.8rem;
                        &:before{
                            @include tringle((to:top,w:0.24rem,h:0.2rem,c:$white));
                            @include position((p:absolute,t:-0.1rem,l:0.29rem));
                        }
                    }
                }
                .money{
                    @include box((m:0 0 0 0.27rem));
                }
            }
        }
    }
    .detail_title{
        @include box((lh:0.9rem,p:0 0.2rem,fs:0.26rem,c:$black5));
    }
    .detail_ul{
        @include box((bg:$white));
        li{
            @include box((m:0 0 0 0.2rem,p:0.2rem 0.2rem 0.2rem 0,d:flex));
            @include thin(bottom,#ddd);
            .left{
                @include box((w:1.37rem,lh:0.28rem,fs:0.24rem,c:$black9,p:0.1rem 0));
            }
            .center{
                flex:1;
                p{
                    @include box((fs:0.28rem,lh:0.39rem,c:$black3));
                }
                span{
                    @include box((fs:0.24rem,lh:0.33rem,c:$black9));
                }
            }
            .right{
                @include box((ta:right,p:0.06rem 0));
                .status{
                    @include box((fs:0.24rem,c:$black9,lh:0.33rem));
                    &.msg{
                        color:#D7A55E
                    }
                    &.error{
                        color:$red;
                    }
                }
                .tip{
                    @include box((fs:0.2rem,c:$black9,lh:0.28rem,m:0.1rem 0 0));
                }
            }
        }
    }

    .bottom_btns {
        @include box((h:1.3rem,w:100%,bg:$white,fs:0.36rem));
        display:flex;
        @include position((p:fixed,b:0,l:0,r:0));
        p{
            flex:1;
            @include box((ta:center));
            a {
                @include box((p:0.2rem 1.1rem,d:inline-block,m:0.21rem auto,bdr:0.44rem));
            }
            &:nth-child(1){
                a{
                    @include box((c:$blue));
                    @include thin(all,$blue);
                }
            }
            &:nth-child(2){
                a{
                    @include box((c:$white,bg:$red));
                }
            }
        }
    }

    .fade1-enter-active, .fade1-leave-active {
        transition: all ease 400ms;
    }

    .fade1-enter, .fade1-leave-to {
        opacity: 0;
    }

    .scale-enter-active, .scale-leave-active {
        transition: transform ease 400ms;
        transform-origin:0.29rem 0;
    }

    .scale-enter, .scale-leave-to {
        transform:scale(0);
    }

    .shade {
        @include box((w:100%, h:100%, bg:rgba(100, 100, 100, 0.5)));
        @include position((p:fixed, t:0, r:0, b:0, l:0));
    }
</style>