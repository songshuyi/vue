<template>
    <ul class="detailWraper">
        <li><label >标的名称</label><span v-text="name"></span></li>
        <li><label >投资金额</label><span v-text="money"></span></li>
        <li><label >投资期限</label><span v-text="limit"></span></li>
        <li><label >年化利率</label><span v-text="rate"></span></li>
        <li>
            <label >协议</label>
            <span ><i class="protocol">借款协议</i></span>
        </li>
    </ul>
</template>
<script>

    export default {
        name: 'TenderDetail',
        data() {
            return {
                id:this.$route.params.id,//id
                name:'奥迪-102',
                money:'1,001.6',
                limit:'3月',
                rate:'11%'
            }
        },
        mounted() {

        },
        methods: {},
        computed: {},
        components: {}
    }
</script>
<style lang="scss" scoped>
    .detailWraper{
        @include box((m:0.3rem 0 0 0,bg:$white,p:0 0 0 0.3rem));
        li{
            @include box((lh:1rem,d:flex,p:0 0.3rem 0 0));
            &:not(:last-child){
                @include thin(bottom,#E5E5E5);
            }
            label{
                flex:1;
                @include box((fs:0.3rem,c:$black2));
            }
            span{
                flex:1;
                text-align: right;
                @include box((fs:0.24rem,c:$black9));

            }
            .protocol{
                @include box((c:$blue,fs:0.28rem,p:0 0.2rem,lh:0.48rem,d:inline-block,bdr:0.08rem));
                @include thin(top right bottom left,$blue);
            }
        }
    }
</style>