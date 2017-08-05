<template>
    <div>
        <div class="banner"></div>
        <div v-show="step === 1">
            <ul class="info">
                <li>
                    <span>姓名</span>
                    <input type="text" placeholder="请输入您的真实姓名"/>
                </li>
                <li>
                    <span>身份证</span>
                    <input type="text" placeholder="请输入您的身份证号"/>
                </li>
                <li>
                    <span>卡号</span>
                    <input type="text" placeholder="请输入您的银行卡号"/>
                </li>
                <li>
                    <span>手机号</span>
                    <input type="text" placeholder="请输入银行预留手机号"/>
                </li>
            </ul>
            <Btn class="mt" type="red" label="提交" :click="show_dialog"></Btn>
        </div>
        <div v-show="step === 2">
            <div class="success"></div>
            <p class="success_title">北京银行存管账户开通成功</p>
            <Btn class="mt" type="red" label="设置交易密码"></Btn>
            <Btn class="mt" type="red" label="确定"></Btn>
        </div>
        <VDialog :close="close" :show="d_state">
            <div class="dialog">
                <p>已向手机号码 188****1993 发送短信</p>
                <Inputs type="border">
                    <input type="tel" placeholder="请输入短信验证码"/>
                    <SendCode class="sd"></SendCode>
                </Inputs>
                <Btn type="red" label="确定"></Btn>
            </div>
        </VDialog>
    </div>
</template>
<script>
    import Btn from '@/component/Btn'
    import VDialog from '@/component/Dialog'
    import Inputs from '@/component/Inputs'
    import SendCode from '@/component/SendCode'
    export default {
        name: '',
        data() {
            return {
                step: 1,
                d_state : false
            }
        },
        methods: {
            show_dialog() {
                this.d_state = true
            },
            close() {
                this.d_state = false
            }
        },
        computed: {},
        components: {
            Btn,
            VDialog,
            Inputs,
            SendCode
        }
    }
</script>
<style lang="scss" scoped>
    .banner{
        @include box((h:1.2rem));
        @include bg_img('bank_open.png');
    }
    .info{
        padding-left: 0.3rem;
        @include box((bg:$white));
        li{
            @include box((h:1rem,lh:1rem,c:$black2));
            &:not(:last-child){
                @include thin(bottom,#ddd);
            }
            span{
                @include box((d:inline-block,w:1.5rem,fs:0.3rem));
            }
            input{
                @include box((fs:0.28rem));
            }
        }
    }
    .dialog{
        @include box((p:0.4rem 0.3rem));
        p{
            @include box((ta:center,p:0.3rem 0));
        }
        input{
            @include box((w:2.8rem));
        }
    }
    .sd{text-align: right;flex:1}
    .mt{margin: 0.8rem 0.3rem;}
    .success{
        @include box((w:1rem,h:1rem,m:0.6rem auto 0.4rem));
        @include bg_img('bank_open_ok.png');
    }
    .success_title{
        @include box((ta:center,fs:0.32rem,c:$black5));
    }
</style>