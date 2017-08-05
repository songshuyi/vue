<template>
    <div>
        <div class="card">
            <img src="/static/img/my_head.png"/>
            <span>招商银行</span>
            <p>
                <span>****</span>
                <span>****</span>
                <span>****</span>
                <span>8461</span>
            </p>
        </div>
        <p class="tip">如需更换或解绑银行卡<br/>
            请拨打客服电话：<span class="black2">400-655-8858</span></p>
    </div>
</template>
<script>
    export default {
        name: '',
        data() {
            return {}
        },
        methods: {},
        computed: {},
        components: {}
    }
</script>
<style lang="scss" scoped>
    .card{
        @include box((bg:#425476,m:0.3rem,bdr:0.08rem,p:0.3rem 0.4rem,c:$white));
        img{
            @include box((w:0.68rem,h:0.68rem));margin-right: 0.3rem;
        }
        p{
            @include box((p:0.2rem 0 0 0.3rem));
            span{
                margin-left: 0.8rem;
                @include box((lh:0.36rem,o:0.24));
            }
            span:last-child{
                @include box((fs:0.44rem,o:1));
            }
        }
    }
    .tip{
        @include box((ta:center,fs:0.24rem,c:$black9));
    }
</style>