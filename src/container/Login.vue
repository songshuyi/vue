<template>
    <div class="login_wrap" :style="height">
        <div class="login_title">欢迎光临人众金服</div>
        <div class="login_content">
            <Inp v-on:msg="getName" :value="name" type="number" ph="请输入手机号/用户名">
                <div>
                    <a class="close" @click="close"></a>
                </div>
            </Inp>
            <Inp v-on:msg="getPwd" :value="pwd" :type="pwd_type" ph="请输入登录密码">
                <div>
                    <a :class="eye_class" @click="change_eye"></a>
                </div>
            </Inp>
            <div class="forget_pwd">
                <router-link to="/resetPwd/1">忘记密码?</router-link>
            </div>
            <Btn label="登录" type="red" :click="login"></Btn>
            <router-link class="register_btn" to="/register">新用户注册</router-link>
        </div>
    </div>
</template>
<script>
    import Btn from '@/component/Btn'
    import Inp from '@/component/Input'
    export default {
        name: 'login',
        data() {
          return {
              height: '',
              name: '',
              pwd: '',
              eye_class: 'close_eye',
              pwd_type: 'password'
          }
        },
        methods:{
            login(){
//                sessionStorage.setItem('user','sony')
//                window.history.go(-1)
            },
            close(){
                this.name = ''
            },
            change_eye(){
                if(this.eye_class == 'close_eye'){
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
            }
        },
        created() {
            this.height = `height:${document.body.getBoundingClientRect().height}px`
        },
        components:{
            Btn,
            Inp
        }
    }
</script>
<style lang="scss" scoped>
    .login_wrap{
        @include box((p:0.4rem 0.75rem,bg:$white));
    }
    .login_title{
        @include box((c:$red,fs:0.4rem));
        margin-bottom: 0.8rem;
    }
    .forget_pwd{
        @include box((ta:right,m:0.15rem 0 0.5rem 0));
    }
    .forget_pwd a{
        @include box((c:$blue,fs:0.24rem));
    }
    .register_btn{
        @include box((d:block,c:$blue,fs:0.24rem,m:0.3rem 0,ta:center));
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
</style>