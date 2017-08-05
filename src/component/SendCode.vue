<template>
    <div>
        <div class="phone_get" v-show="phone_state" v-text="phone_text" @click="get_phone">
            获取验证码
        </div>
        <div class="phone_wait" v-show="!phone_state">
            <span v-text="phone_time"></span>后重新获取
        </div>
    </div>
</template>
<script>
    export default {
        name: '',
        props: ['click'],
        data() {
            return {
                phone_state: true,
                phone_time: '60秒',
                phone_text: '获取验证码',
            }
        },
        mounted() {

        },
        methods: {
            //获取短信验证码
            get_phone(){
                this.phone_state = !this.phone_state
                let time = parseInt(this.phone_time)
//                this.click()
                this.change_time(time)
            },
            change_time(time){
                setTimeout(() => {
                    if(time > 1){
                        time -= 1
                        this.phone_time = `${time}秒`
                        this.change_time(time)
                    }else{
                        this.phone_state = !this.phone_state
                        this.phone_text = '重新获取'
                        this.phone_time = '60秒'
                    }
                },1000)
            },
        },
        computed: {},
        components: {}
    }
</script>
<style lang="scss" scoped>
    .phone_get{
        @include box((c:$blue,w:2.4rem));
    }
    .phone_wait{
        @include box((c:#3F3F3F,w:2.4rem));
        span{
            @include box((c:#FF9B09));
        }
    }
</style>