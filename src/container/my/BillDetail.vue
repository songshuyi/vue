<template>
    <div>
        <div class="money">+200,902.02</div>
        <div class="desc">交易成功</div>
        <div class="list" v-for="(item,index) in list">
            <div class="box">
                <div v-text="item.type"></div>
                <div v-text="item.val"></div>
            </div>
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
                        type: '类型',
                        val: '投资'
                    },
                    {
                        type: '时间',
                        val: '2017-12-12 09:00'
                    },
                    {
                        type: '说明',
                        val: '众金宝-023 第一期利息回款'
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
    .money{
        padding-top: 0.6rem;
        @include box((fs:0.64rem,lh:0.74rem,c:$black2,ta:center,bg:$white));
    }
    .desc{
        @include box((fs:0.24rem,c:$black9,ta:center,bg:$white,p:0.2rem 0));

    }
    .list{
        @include box((bg:$white));
        .box{
            margin-left: 0.3rem;
            @include box((d:flex,c:$black5,fs:0.28rem,lh:1rem,h:1rem));justify-content:space-between;
            @include thin(bottom,#ddd);
            div:nth-child(2){
                @include box((c:$black9,p:0 0.3rem));
            }
        }
    }
</style>