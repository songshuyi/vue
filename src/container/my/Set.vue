<template>
    <div>
        <ul class="info">
            <router-link :key="index" tag="li" :to="item.path" v-for="(item,index) in list">
                <div>
                    <p v-text="item.name"></p>
                </div>
                <div>
                    <p class="my_arrow"></p>
                </div>
            </router-link>
        </ul>
    </div>
</template>
<script>
    export default {
        name: 'set',
        data() {
            return {
                is_set: false,
                data: [
                    {
                        name: '修改登录密码',
                        path: '/my/setPwd/1'
                    },
                    {
                        name: '修改交易密码',
                        path: '/my/setPwd/2'
                    },
                    {
                        name: '找回交易密码',
                        path: '/resetPwd/2'
                    },
                    {
                        name: '设置交易密码',
                        path: '/my/setPwd/3'
                    }
                ]
            }
        },
        methods: {},
        computed: {
            list(){
                if(this.is_set){
                    this.data.pop()
                    return this.data
                }else{
                    return [this.data[0],this.data[3]]
                }
            }
        },
        components: {}
    }
</script>
<style lang="scss" scoped>
    .info{
        @include box((p:0 0.3rem,fs:0.3rem,c:$black2,bg:$white));
        margin-top: 0.2rem;
        li{
            @include box((lh:1rem,d:flex));justify-content:space-between;
            @include thin(bottom,#E5E5E5);
            div{
                @include box((d:flex));
            }
            .my_arrow{
                @include box((w:0.3rem,h:0.3rem,m:0.35rem 0));
            }
        }
    }
    .my_arrow{
        @include bg_img('my_arrow.png');
    }
</style>