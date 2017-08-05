<template>
    <div class="wrap" :style="height">
        <div v-show="step === 1">
            <Inp readonly="true" type="text" value="原绑定手机 182****2134">
            </Inp>
            <Inp v-on:msg="getCode" type="tel" ph="请输入短信验证码">
                <SendCode></SendCode>
            </Inp>
            <Inp v-on:msg="getPhone" type="tel" ph="请输入您要更换的手机号码">
            </Inp>
            <Btn type="red" label="下一步" class="mt"></Btn>
        </div>
        <div v-show="step === 2">
            <div class="send_title">
                已向手机号码 <span>188****1993</span> 发送短信
            </div>
            <Inp v-on:msg="getCode" type="tel" ph="请输入短信验证码">
                <SendCode></SendCode>
            </Inp>
            <Btn type="red" label="确定" class="mt"></Btn>
        </div>
    </div>
</template>
<script>
    import Inp from '@/component/Input'
    import SendCode from '@/component/SendCode'
    import Btn from '@/component/Btn'
    export default {
        name: 'phoneUpdate',
        data() {
            return {
                height: '',
                step: 1,
                code: '',
                phone: ''
            }
        },
        methods: {
            getCode(val){
                this.code = val
            },
            getPhone(val){
                this.phone = val
            }
        },
        created() {
            this.height = `height:${document.body.getBoundingClientRect().height}px`
        },
        components: {
            Inp,
            SendCode,
            Btn
        }
    }
</script>
<style lang="scss" scoped>
    .wrap{
        @include box((p:0.4rem 0.75rem,bg:$white));
    }
    .mt{margin-top: 0.8rem;}
    .send_title{
        @include box((lh:1rem,ta:center,fs:0.3rem,c:$black9));
        span{
            @include box((fs:0.32rem,c:$black2));
        }
    }
</style>