<template>
    <div class="wrap" :style="height">
        <Inp    v-if="ph[type].old"
                v-on:msg="getOldPwd"
                :value="old_pwd"
                type="password"
                :ph="ph[type].old">
        </Inp>
        <Inp
                v-on:msg="getPwd"
                :value="pwd"
                :type="pwd_type"
                :ph="ph[type].new">
            <div>
                <a :class="eye_class" @click="change_eye"></a>
            </div>
        </Inp>
        <p class="tip">请使用6-16个字母、数字、符号组合</p>
        <Btn label="确定" type="red" class="mt" :click="ok"></Btn>
    </div>
</template>
<script>
    import Btn from '@/component/Btn'
    import Inp from '@/component/Input'
    export default {
        name: 'setPwd',
        data() {
            return {
                height: '',
                type: this.$route.params.type,  //1 改登录密码 2 改交易密码 3 设置交易密码
                eye_class: 'close_eye',
                pwd_type: 'password',
                old_pwd: '',
                pwd: '',
                ph: {
                    1: {
                        old: '请输入原登录密码',
                        new: '请设置新登录密码'
                    },
                    2: {
                        old: '请输入原交易密码',
                        new: '请设置新交易密码'
                    },
                    3: {
                        new: '请设置新交易密码'
                    }
                }
            }
        },
        methods:{
            ok() {
            },
            change_eye() {
                if(this.eye_class === 'close_eye'){
                    this.eye_class = 'open_eye'
                    this.pwd_type = 'text'
                }else{
                    this.eye_class = 'close_eye'
                    this.pwd_type = 'password'
                }
            },
            getOldPwd(val) {
                this.old_pwd = val
            },
            getPwd(val) {
                this.pwd = val
            }
        },
        created() {
            this.height = `height:${document.body.getBoundingClientRect().height}px`
        },
        components: {
            Btn,
            Inp
        }
    }
</script>
<style lang="scss" scoped>
    .wrap{
        @include box((p:0.4rem 0.75rem,bg:$white));
    }
    .icon{
        @include box((d:block,w:0.5rem,h:0.5rem,m:0.25rem 0));
    }
    .close_eye{
        @extend .icon;
        @include bg_img('close_eye.png');
    }
    .open_eye{
        @extend .icon;
        @include bg_img('open_eye.png');
    }
    .mt{
        margin-top: 0.8rem;
    }
    .tip{
        @include box((fs:0.24rem,c:$yellow,m:0.2rem 0));
    }
</style>