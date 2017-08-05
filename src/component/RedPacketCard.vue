<!--红包加息券card
type        required           0:红包 1：加息券
cardData    required           加息券数据
clickType   no-required        select ：点击后选取
circleBg    no-required        圆环的背景颜色 white
-->
<template>
    <div >
        <!--红包 -->
        <div  v-if='type==0' class="cardItem" :class="[circleBg,{active:cardData.status==0,lock:cardData.status==1}]">
            <p class="left_money"><span v-text="cardData.amount||0"></span>元</p>

            <div class="cont">
                <h4>五月理财闯三关活动</h4>
                <p>投资满500元可用</p>
                <p>限投资180天产品</p>
                <label v-if="cardData.status!=1">有效期：2017.12.12</label>
                <label v-if="cardData.status==1">激活时间：2017.12.12</label>
            </div>

            <p class="right_mes">
                <span v-if="clickType!='select'">立<br/>即<br/>使<br/>用</span>
                <slot v-if="clickType=='select'"></slot>
            </p>
            <span class="dashline before"></span>
            <span v-if="clickType!='select'" class="dashline after"></span>
        </div>
        <!--加息券-->
        <div v-if='type==1' class="jiaxi cardItem" :class="[circleBg,{active:cardData.status==0,lock:cardData.status==1}]">
            <p class="left_money"><span v-text="cardData.up_apr||0"></span>%</p>
            <div class="cont">
                <h4>五月理财闯三关活动</h4>
                <p >最高加息本金1000万，加息90天</p>
                <p>限投资180天产品</p>
                <label v-if="cardData.status!=1">有效期：2017.12.12</label>
                <label v-if="cardData.status==1">激活时间：2017.12.12</label>
            </div>
            <p class="right_mes">
                <span v-if="clickType!='select'">立<br/>即<br/>使<br/>用</span>
                <slot v-if="clickType=='select'"></slot>
            </p>
            <span class="dashline before"></span>
            <span v-if="clickType!='select'" class="dashline after"></span>
        </div>
    </div>
</template>
<script>

    export default {
        name: 'RedPacketCard',
        data() {
            return {}
        },
        props:['cardData','type','clickType','circleBg'],
        methods: {},
        computed: {},
        components: {}
    }
</script>
<style lang="scss" scoped>
    .cardItem{
        $LeftSize:2.1rem;
        $rightSize:0.86rem;
        $radioSize:0.32rem;
        $radioToLeft:1.6rem;
        @include box((bg:$white,p:0.24rem 0,m:0.3rem 0 0));
        @include thin(top right bottom left,#E5E5E5);
        position: relative;
        &:before,&:after{
            content:'';
            @include box((d:block,w:$radioSize,h:$radioSize / 2,bg:#F6F6F6,bdr:50%));
        }
        &.white{
            &:before,&:after{
                @include box((bg:$white));
            }
        }
        &:before{
            @include box((bdr:0  0 $radioSize / 2 $radioSize / 2));
            @include position((p:absolute,l:$radioToLeft,t: -0.02rem));
            @include thin(bottom right left,#E5E5E5);
        }
        &:after{
            @include box((bdr:$radioSize / 2 $radioSize / 2 0  0 ));
            @include position((p:absolute,l:$radioToLeft,b: -0.02rem));
            @include thin(top right left,#E5E5E5);
        }
        .dashline {
            @include box((w:0.02rem,d:block));
            @include position((p:absolute,t:0.3rem,b:0.3rem));
            /**@include bg_img('my_redCard_line.png');**/
            border-left:1px dashed #e5e5e5;
            &.before{
                left:$radioToLeft + $radioSize / 2
            }
            &.after{
                right:0.8rem;
            }
        }
        .left_money{
            @include box((w:$LeftSize,ta:center,lh:0.84rem,fs:0.26rem,c:$gray));
            @include position((p:absolute,t:50%,l:0));
            @include prefix(transform,translateY(-50%));
            span{
                @include box((fs:0.6rem));
            }
        }
        .cont{
            @include box((m:0.24rem $rightSize 0.24rem $LeftSize));
            h4{
                @include box((lh:0.4rem,fs:0.28rem,c:$gray,m:0 0 0.06rem 0));
            }
            p{
                @include box((lh:0.36rem,fs:0.24rem,c:$gray));
            }
            label{
                @include box((d:block,m:0.3rem 0 0 0,lh:0.33rem,fs:0.24rem,c:$gray));
            }
        }
        .right_mes{
            @include box((w:0.8rem,ta:center,fs:0.26rem,c:$gray));
            @include position((p:absolute,t:50%,r:0));
            @include prefix(transform,translateY(-50%));
        }
        &.active{
            .left_money,.right_mes{
                @include box((c:$yellow));
            }
            .cont{
                h4{
                    color:$black2;
                }
                p{
                    color:$black5;
                }
                label{
                    color:$black9;
                }
            }
        }
        &.lock{
            .left_money,.right_mes{
                color:#FFCD84 ;
            }
            .cont{
                h4,p,label{
                    color:$black9;
                }
            }
        }
        &.jiaxi.active{
            .left_money,.right_mes{
                @include box((c:$blue));
            }
        }
        &.jiaxi.lock{
            .left_money,.right_mes{
                color:#9FC3FF ;
            }
        }
    }

</style>