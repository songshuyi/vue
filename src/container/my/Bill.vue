<template>
    <div>
        <div class="month" v-for="(item,index) in list">
            <p class="title" v-text="item.date"></p>
            <router-link :key="index" v-for="(data,index) in item.data"
                    tag="div"
                    to="/my/billDetail"
                    class="list">
                <div class="box">
                    <div v-text="data.date"></div>
                    <div>
                        <p v-text="data.money"></p>
                        <p v-text="data.type"></p>
                    </div>
                    <div v-text="data.state"></div>
                </div>
            </router-link>
        </div>
    </div>
</template>
<script>
    export default {
        name: '',
        data() {
            return {
                list: [
                    {
                        date: '本月',
                        data: [
                            {
                                date: '07-28 16:56',
                                money: '+200,902.02',
                                type: '充值',
                                state: '成功'
                            },
                            {
                                date: '07-28 16:56',
                                money: '+200,902.02',
                                type: '充值',
                                state: '成功'
                            }
                        ]
                    }
                ]
            }
        },
        methods: {},
        computed: {},
        components: {}
    }
</script>
<style lang="scss" scoped>
    .month{
        .title{
            @include box((c:$black3,fs:0.28rem,lh:0.68rem,m:0 0.2rem));
        }
        .list{
            @include box((bg:$white));
            .box{
                margin-left: 0.2rem;
                @include box((p:0.2rem 0,d:flex,c:$black9,fs:0.24rem,lh:0.34rem,h:1.2rem));justify-content:space-between;
                @include thin(bottom,#ddd);
                div:nth-child(1){
                    @include box((w:0.8rem));
                }
                div:nth-child(2){
                    @include box((w:60%));
                    p:nth-child(1){
                        @include box((c:$black2,fs:0.28rem));
                        margin-bottom: 0.1rem;
                    }
                }
                div:nth-child(3){
                    @include box((m:0 0.25rem));
                }
            }
        }
    }
</style>