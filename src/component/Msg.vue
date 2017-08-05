<template>
    <div class="mask" v-show="msg.show">
        <div class="dialog">
            <div class="title" v-text="msg.title"></div>
            <div class="content" v-html="msg.content"></div>
            <div v-show="msg.btn">
                <a class="ok" @click="msg.btn.ok" v-text="msg.btn.okValue"></a>
                <a class="ok" @click="showMsg()" v-text="msg.btn.cancelValue"></a>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapGetters,mapActions} from 'vuex'
    export default {
        name: 'msg',
        mounted() {
        },
        methods: {
            ...mapActions([
                'showMsg'
            ])
        },
        computed: {
            ...mapGetters([
                'msg'
            ])
        },
        components: {}
    }
</script>
<style lang="scss" scoped>
    .mask{
        @include position((p:fixed,t:0,l:0,z:10));
        @include box((w:100%,h:100%,bg:rgba(0,0,0,0.5)));
    }
    .dialog{
        @include position((p:fixed,t:35%,l:5%,z:11));
        @include box((w:90%,bg:#fff,bdr:5px,ta:center));
        padding-bottom: 0.2rem;
    }
    .title{
        @include box((bg:#ff6058,c:#fff,p:0.1rem 0,bdr:5px 5px 0 0,fs:0.28rem));
    }
    .content{
        @include box((c:#8f8f8f,lh:0.5rem,p:0.2rem,fs:0.24rem));
    }
    .ok{
        @include box((d:inline-block,w:2rem,h:0.48rem,lh:0.48rem,bg:#ff6058,
                c:#fff,bdr:0.29rem,fs:0.24rem,m:0 0.1rem));
    }
</style>