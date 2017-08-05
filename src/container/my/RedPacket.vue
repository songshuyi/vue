<template>
    <div>
        <TabNav :navs='navs'  :click="clickItem.bind(this)"/>
        <div class="dataLists">
            <RedPacketCard v-for="(item,i) in dataLists" :cardData="item" :type="type" :key="i"/>
        </div>

        <p class="history_rules">
            <router-link v-if='type===0' to='redPacketHistory/0'>历史红包</router-link>
            <router-link v-if='type===1' to='redPacketHistory/1'>历史加息券</router-link>
            <span>使用规则</span>
        </p>
    </div>
</template>
<script>
    import TabNav from '@/component/TabNav'
    import RedPacketCard from '@/component/RedPacketCard'

    export default {
        name: 'RedPacket',
        data() {
            return {
                navs: ['红包', '加息券'],
                type:0,//0:红包  1：j加息
                dataLists:[
                    {
                        status:0
                    },
                    {
                        status:1
                    },
                    {
                        status:2
                    },
                ]
            }
        },
        mounted() {

        },
        methods: {
            clickItem(i){
                if(i===1){
                    this.$data.type=1
                }else{
                    this.$data.type=0
                }
            },
        },
        computed: {},
        components: {
            TabNav,
            RedPacketCard
        }
    }
</script>
<style lang="scss" scoped>
    .dataLists{
        @include box((p:0 0.3rem));
    }
    .history_rules {
        @include box((lh:0.37rem,ta:center,fs:0.26rem,p:0.2rem 0));
        span{
            @include box((p:0 0.3rem));
            color:$black9;
            @include thin(left,#E5E5E5);
        }
        a{
            @include box((p:0 0.3rem));
            color:$blue;
        }
    }
</style>