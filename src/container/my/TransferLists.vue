<template>
    <div class="wraper">
        <ul class="transfer_ul">
            <li v-for="(item,index) in dataLists">
                <p class="title">
                    <span :class="{black9:item.status===3}">众车宝0245号</span>
                    <label class="normal" v-if="item.status===0">剩余<i v-text="item.days"></i>天可转让</label>
                    <router-link class="btn" tag="label" to="transfer" v-if="item.status===1">转让</router-link>
                    <label class="btn" v-if="item.status===2" @click="cancelTransferBtn(item)">取消转让</label>
                    <label class="black9" v-if="item.status===3">已转让</label>
                </p>
                <div class="content" :class="{has_zhuan_rang:item.status===3}">
                    <p><span>投资本金</span><label >51,544</label></p>
                    <p><span>预期年化</span><label :class="{red:item.status!=3}">10%</label></p>
                    <p><span>投标时间</span><label >2017-12-21</label></p>
                    <p><span>到期时间</span><label >2017-12-21</label></p>
                    <p><span>持有时间</span><label >56天</label></p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>

    export default {
        name: 'TransferLists',
        data() {
            return {
                dataLists:[//status 0 不可转让 1 可转让 2 转让中 3 已转让
                    {
                        status:0,
                        days:10
                    },
                    {
                        status:1
                    },
                    {
                        status:2
                    },
                    {
                        status:3
                    }
                ]
            }
        },
        mounted() {

        },
        methods: {
            cancelTransferBtn(item){
                console.log(item);
                alert('确认转让');
            }
        },
        computed: {},
        components: {}
    }
</script>
<style lang="scss" scoped>

    .transfer_ul{
        li{
            @include box((m:0.2rem 0,bg:$white,p:0 0 0 0.3rem));
            .title{
                @include box((h:1rem,p:0 0.3rem 0 0));
                @include thin(bottom,#E5E5E5);
                span{
                    @include box((lh:1rem,fs:0.3rem,c:$black2));
                    &.black9{
                        color:$black9
                    }
                }
                label{
                    @include box((lh:0.48rem,fs:0.28rem,p:0 0.2rem,fl:right,m:0.26rem 0));
                    i{
                        color:$red;
                    }
                    &.btn{
                        @include box((c:$blue,bdr:0.1rem));
                        @include thin(all,$blue);
                    }
                }
            }
            .content{
                @include box((p:0.1rem 0.3rem 0.1rem 0));
                p{
                    @include box((lh:0.37rem,fs:0.26rem,m:0.1rem 0));
                    span{
                        @include box((c:$black9));
                    }
                    label{
                        @include box((c:$black5,fl:right));
                        &.red{
                            @include box((c:$red));
                        }
                    }
                }
                &.has_zhuan_rang{
                    p{
                        label{
                            @include box((c:$black9));
                        }
                    }
                }
            }
        }
    }














</style>

