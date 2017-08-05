<template>
    <div class="wrap">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">Slide 1</div>
                <div class="swiper-slide">Slide 2</div>
                <div class="swiper-slide">Slide 3</div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
        </div>
        <div class="remind_wrap">
            <div class="remind" v-for="(item,index) in remind" v-if="index == remind_index">
                <div :class="item.img"></div>
                <p v-html="item.msg"></p>
                <a v-text="item.btn"></a>
            </div>
        </div>
        <ul class="nav">
            <li v-for="(item,index) in nav">
                <a>
                    <div :class="item.className"></div>
                    <p v-text="item.name"></p>
                </a>
            </li>
        </ul>
        <div class="project">
            <p>众金宝-23982</p>
            <p><span>8.4</span><span>+1.5%</span></p>
            <p><span>期限30天</span><span>100元起投</span></p>
            <Btn type="red" label="立即投资"></Btn>
        </div>
        <Menu_nav></Menu_nav>
    </div>
</template>
<script>
    import {mapGetters,mapActions} from 'vuex'
    import Menu_nav from '@/component/Menu'
    import Swiper from 'swiper'
    import Btn from '@/component/Btn'
    export default {
        name: 'index',
        data() {
            return {
                nav: [
                    {
                        name: '新手任务',
                        className: 'index_xs'
                    },
                    {
                        name: '邀请有礼',
                        className: 'index_yq'
                    },
                    {
                        name: '每日签到',
                        className: 'index_qd'
                    },
                    {
                        name: '安全保障',
                        className: 'index_aq'
                    }
                ],
                remind: [
                    {
                        msg: '开通北京银行<span class="red">资金存管</span>账户',
                        btn: '立即开通',
                        img: 'index_remind1'
                    },
                    {
                        msg: '您有<span class="red">70元</span>红包即将过期',
                        btn: '立即使用',
                        img: 'index_remind2'
                    },
                    {
                        msg: '您有<span class="red">2398元</span>红包待领',
                        btn: '立即领取',
                        img: 'index_remind3'
                    },
                    {
                        msg: '邀请好友得<span class="red">现金</span>奖励',
                        btn: '立即邀请',
                        img: 'index_remind4'
                    }
                ],
                remind_index: 2
            }
        },
        mounted() {
            this.setIndex()
            this.setSlide()
        },
        methods: {
            ...mapActions([
                'setIndex',
                'showMsg'
            ]),
            setSlide(){
                const swiper = new Swiper('.swiper-container',{
                    autoplayDisableOnInteraction: false,
                    autoplay: 3000,
                    loop: true,
                    pagination: '.swiper-pagination',
                })
            }
        },
        computed: {
            ...mapGetters([
                'index'
            ])
        },
        components:{
            Menu_nav,
            Btn
        },
        created(){}
    }
</script>
<style lang="scss" scoped>
    @import "./../css/swiper.min.css";
    .wrap{padding-bottom: 1rem}
    .swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction{
        bottom: 0.9rem;
    }
    .swiper-container{height: 5rem;background: #FBE9C3;}
    .remind_wrap{
        max-width: 750px;
        @include position((p:absolute,t:4.2rem,l:0,r:0,z:10));
        @include box((w:100%,h:1.6rem,p:0 0.2rem,m:auto));
        background: -webkit-gradient(linear, 0 0, 0 50%, from(rgba(255,255,255,0)), to(rgba(255,255,255,1)));
    }
    .remind{
        @include box((w:100%,h:100%,bg:$white,bdr:4px,p:0.25rem 0.4rem,bs:0 0.13rem 0.3rem 0 rgba(0,0,0,0.04)));
        p{
            @include box((fs:0.28rem));margin-bottom: 0.2rem;
            span{
                @include box((c:$red));
            }
        }
        a{
            @include box((d:block,w:1.6rem,h:0.44rem,lh:0.44rem,bdr:0.22rem,c:$red,ta:center));
            @include thin(all,$red);
        }
        div{
            @include box((w:1.2rem,h:1.2rem,fl:right));
        }
    }
    .nav{
        margin-top: 0.8rem;
        @include box((d:flex,bg:$white,ta:center));
        li{
            @include box((fx:1,h:1.8rem,fs:0.22rem,c:$black5));
            div{
                @include box((w:0.64rem,h:0.64rem,m:0.3rem auto 0.2rem));
            }
        }
    }
    .project{
        @include box((bg:$white,ta:center,p:0.4rem 1.4rem,m:0.2rem 0));
        p:nth-child(1){
            @include box((fs:0.32rem,c:$black2));
        }
        p:nth-child(2){
            @include box((c:$red,m:0.3rem 0,fs:0.36rem));
            span:nth-child(1){
                @include box((c:$red,m:0.3rem 0,fs:0.6rem));
            }
        }
        p:nth-child(3){
            @include box((c:$black5));margin-bottom: 0.4rem;
            span:nth-child(1){
                margin-right: 0.5rem;
            }
        }
    }

    @each $img in xs,yq,qd,aq,remind1,remind2,remind3,remind4 {
        .index_#{$img}{
            @include bg_img('index_#{$img}.png');
        }
    }
</style>