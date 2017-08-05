<template>
    <div>
        <div class="header">
            <div class="title">
                <router-link to="/my/info" tag="div">
                    <p class="my_head"></p>
                    <span>182***216</span>
                </router-link>
                <div>
                    <p class="my_msg"></p>
                    <router-link to="/my/set" tag="p" class="my_set"></router-link>
                </div>
            </div>
            <div class="content">
                <div class="content_desc">
                    总资产(元)<p></p>
                 </div>
                <p>110,980.32</p>
            </div>
            <div class="money">
                <router-link tag="div" to="/my/account">
                    <p>账户余额(元)</p>
                    <p>180.32</p>
                </router-link>
                <div>
                    <p>待收本息(元)</p>
                    <p>1,123,180.32</p>
                </div>
            </div>
        </div>
        <ul class="nav">
            <li v-for="(item,index) in nav">
                <router-link :to="item.path">
                    <div :class="item.className"></div>
                    <p v-text="item.name"></p>
                </router-link>
            </li>
        </ul>
        <ul class="info">
            <router-link tag="li" :key="index" :to="item.path" v-for="(item,index) in info">
                <div>
                    <div class="className" :class="item.className"></div>
                    <p v-text="item.name"></p>
                </div>
                <div>
                    <p v-if="item.transfer" class="transfer">
                        <span>1</span>个标的等待承接
                    </p>
                    <p class="my_arrow"></p>
                </div>
            </router-link>
        </ul>
        <Menu_nav></Menu_nav>
    </div>
</template>
<script>
    import Menu from '@/component/Menu'
    export default {
        name: 'my',
        data() {
            return {
                nav: [
                    {
                        name: '充值',
                        className: 'my_cz',
                        path: '/my/recharge'
                    },
                    {
                        name: '提现',
                        className: 'my_tx',
                        path: '/my/withDrawCash'
                    },
                    {
                        name: '福利',
                        className: 'my_fl',
                        path: '/my/redPacket'
                    },
                    {
                        name: '日历',
                        className: 'my_rl',
                        path: '/my/calendar'
                    }
                ],
                info: [
                    {
                        name: '我的投资',
                        className: 'my_tz',
                        path: '/my/tenderLists'
                    },
                    {
                        name: '我的账单',
                        className: 'my_bill',
                        path: '/my/bill'
                    },
                    {
                        name: '我的转让',
                        className: 'my_transfer',
                        path: '/my/transferLists',
                        transfer: true
                    },
                    {
                        name: '客服中心',
                        className: 'my_kf',
                        path: ''
                    }
                ]
            }
        },
        components:{
            'Menu_nav': Menu
        }
    }
</script>
<style lang="scss" scoped>
    .header{
        position:relative;
        @include box((h:4.36rem,bg:$red,c:$white,p:0.3rem));
        .title{
            @include box((d:flex));justify-content:space-between;
            div{
                @include box((d:flex,lh:0.46rem));
                p{
                    @include box((w:0.46rem,h:0.46rem));
                }
                p:nth-child(1){
                    margin-right: 0.2rem;
                }
                span{
                    @include box((fs:0.24rem));
                }
            }
        }
        .content{
            @include box((ta:center));
            .content_desc{
                padding-top: 0.7rem;
            }
            p{
                @include box((fs:0.6rem,c:$white));
            }
        }
        .money{
            @include position((p:absolute,b:0,l:0,z:10));
            @include box((d:flex,w:100%,h:1.2rem,bg:rgba(0,0,0,0.06),ta:center,p:0.2rem 0));
            div{
                @include box((fx:1));
                p:nth-child(2){
                    @include box((fs:0.32rem));
                }
            }
            div:nth-child(1){
                @include thin(right,rgba(255,255,255,0.20));
            }
        }
    }
    .nav{
        @include box((d:flex,bg:$white,ta:center));
        li{
            @include box((fx:1,h:1.6rem,fs:0.26rem,c:$black5));
            div{
                @include box((w:0.64rem,h:0.64rem,m:0.3rem auto 0));
            }
        }
    }
    .info{
        @include box((p:0 0.3rem,fs:0.3rem,c:$black2,bg:$white));
        margin-top: 0.2rem;padding-bottom: 0.4rem;
        li{
            @include box((lh:1rem,d:flex));justify-content:space-between;
            @include thin(bottom,#E5E5E5);
            div{
                @include box((d:flex));
            }
            .className{
                @include box((w:0.54rem,h:0.54rem,m:0.24rem 0.1rem 0.24rem 0));
            }
            .my_arrow{
                @include box((w:0.3rem,h:0.3rem,m:0.35rem 0));
            }
            .transfer{
                @include box((c:#3F3F3F,fs:0.24rem));

            }
            span{
                @include box((c:$red));
            }
        }
    }
    @each $img in cz,tx,fl,rl,msg,set,tz,bill,transfer,kf,arrow,head {
        .my_#{$img}{
            @include bg_img('my_#{$img}.png');
        }
    }
</style>