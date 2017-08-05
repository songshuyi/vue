<template>
    <div class="reset_wrap" :style="height">
        <div class="reset_content">
            <Inp v-on:msg="getName" :value="name" type="number" ph="请输入手机号"></Inp>
            <Inp v-on:msg="getImg" :value="img" type="tel" ph="请输入右侧图形验证码">
                <div>
                    <a class="close"></a>
                </div>
            </Inp>
            <Inp v-on:msg="getPhone" :value="phone" type="tel" ph="请输入短信验证码">
                <SendCode></SendCode>
            </Inp>
            <Inp v-on:msg="getPwd" :value="pwd" :type="pwd_type"
                 :ph="type === 1 ? '请设置登录密码' : '请设置交易密码'">
                <div>
                    <a :class="eye_class" @click="change_eye"></a>
                </div>
            </Inp>
            <Btn label="确定" type="red" :click="reset" class="mt"></Btn>
        </div>
    </div>
</template>
<script>
    import Btn from '@/component/Btn'
    import Inp from '@/component/Input'
    import sha512 from 'sha512'
    import md5 from 'blueimp-md5'
    import SendCode from '@/component/SendCode'
    export default {
        name: 'reset',
        data() {
            return {
                height: '',
                type: this.$route.params.type,  //1 登录 2 交易
                name: '',
                img: '',
                phone: '',
                pwd: '',
                eye_class: 'close_eye',
                pwd_type: 'password'
            }
        },
        created(){
            const date = new Date();
            console.log(sha512(md5('dasdasdseqewqczcvdfderew')).toString('hex'))
            console.log((new Date).getTime() - date.getTime())
        },
        methods:{
            reset(){
//                sessionStorage.setItem('user','sony')
//                window.history.go(-1)
            },
            change_eye(){
                if(this.eye_class === 'close_eye'){
                    this.eye_class = 'open_eye'
                    this.pwd_type = 'text'
                }else{
                    this.eye_class = 'close_eye'
                    this.pwd_type = 'password'
                }
            },
            getName(val){
                this.name = val
            },
            getPwd(val){
                this.pwd = val
            },
            getCode(val){
                this.code = val
            },
            getImg(val){
                this.img = val
            },
            getPhone(val){
                this.phone = val
            }
        },
        created() {
            this.height = `height:${document.body.getBoundingClientRect().height}px`
        },
        components:{
            Btn,
            Inp,
            SendCode
        }
    }
</script>
<style lang="scss" scoped>
    .reset_wrap{
        @include box((p:0.4rem 0.75rem,bg:$white));
    }
    .reset_title{
        @include box((c:$red,fs:0.4rem));
        margin-bottom: 0.8rem;
    }
    .icon{
        @include box((d:block,w:0.5rem,h:0.5rem,m:0.25rem 0));
    }
    .close{
        @extend .icon;
        @include bg_img('close.png');
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
</style>