<template>
    <div class="wrap" :style="height">
        <div>
            <div class="title">
                <div></div>
            </div>
            <Inp v-on:msg="getName" :value="name" type="text" ph="昵称只包含中文、英文、数字">
                <div>
                    <a class="close" @click="close"></a>
                </div>
            </Inp>
            <Btn type="red" label="确定" class="mt"></Btn>
        </div>
    </div>
</template>
<script>
    import Inp from '@/component/Input'
    import Btn from '@/component/Btn'
    export default {
        name: 'phoneUpdate',
        data() {
            return {
                height: '',
                name: ''
            }
        },
        methods: {
            getName(val){
                this.name = val
            },
            close(){
                this.name = ''
            }
        },
        created() {
            this.height = `height:${document.body.getBoundingClientRect().height}px`
        },
        components: {
            Inp,
            Btn
        }
    }
</script>
<style lang="scss" scoped>
    .wrap{
        @include box((p:0.4rem 0.75rem,bg:$white));
    }
    .mt{margin-top: 0.8rem;}
    .icon{
        @include box((d:block,w:0.5rem,h:0.5rem,m:0.25rem 0));
    }
    .close{
        @extend .icon;
        @include bg_img('close.png');
    }
    .title{
        @include box((h:2rem,p:0.36rem 0));
        div{
            @include box((w:1.28rem,h:1.28rem,m:auto,bdr:0.64rem));
            @include bg_img('my_head.png');
        }
    }
</style>