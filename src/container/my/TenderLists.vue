<template>
    <div class='wraper'>
        <TabNav :navs='navs' :click="clickNavItem"/>
        <ul class='tenderUl'>
            <li v-for="(item,i) in lists" v-if="item.type===0" @click="lookProgress(item.id)">
                <div class='header'>
                    <h3>
                        <label>众车宝</label>
                        <span class="statusText fc-green">募集中</span>
                    </h3>
                    <p>2017-12-12 13:43:22</p>
                </div>
                <div class='body'>
                    <p><label>投资金额</label><span>51544.87</span></p>
                    <p><label>预期金额</label><span>44.87</span></p>
                    <p><label>投资期限</label><span>2017-07-17</span></p>
                </div>
                <div class="footer">
                    <span class="btn" @click.stop="lookProtocol(item.id)">合同协议</span>
                </div>
            </li>
            <li v-for="(item,i) in lists" v-if="item.type===1" @click="lookProgress(item.id)">
                <div class='header'>
                    <h3>
                        <label>众车宝</label>
                        <span class="statusText">待回款</span>
                    </h3>
                    <p>2017-12-12 13:43:22</p>
                </div>
                <div class='body'>
                    <p><label>投资金额</label><span>51544.87</span></p>
                    <p><label>预期收益</label><span>44.87</span></p>
                    <p><label>到期时间</label><span>2017-07-17</span></p>
                    <p><label>下一还款时间</label><span>2017-07-17</span></p>
                    <p><label>还款金额</label><span>5485.58</span></p>
                </div>
                <div class="footer">
                    <router-link class="btn" :to='"myTenderDetail/"+item.id'>标的详情</router-link>
                    <span class="btn" @click.stop="lookProtocol(item.id)">合同协议</span>
                </div>
            </li>
            <li v-for="(item,i) in lists" v-if="item.type===2" @click="lookProgress(item.id)">
                <div class='header'>
                    <h3>
                        <label class="black9">众车宝</label>
                        <span class="statusText black9">已回款</span>
                    </h3>
                    <p>2017-12-12 13:43:22</p>
                </div>
                <div class='body'>
                    <p><label>投资金额</label><span class="black9">51544.87</span></p>
                    <p><label>到期收益</label><span class="black9">44.87</span></p>
                    <p><label>到期时间</label><span class="black9">2017-07-17</span></p>
                </div>
                <div class="footer">
                    <span class="btn" @click.stop="lookProtocol(item.id)">合同协议</span>
                </div>
            </li>
            <li v-for="(item,i) in lists" v-if="item.type===3" @click="lookProgress(item.id)">
                <div class='header'>
                    <h3>
                        <label class="black9">众车宝</label>
                        <span class="statusText black9">已转让</span>
                    </h3>
                    <p>2017-12-12 13:43:22</p>
                </div>
                <div class='body'>
                    <p><label>投资金额</label><span class="black9">51544.87</span></p>
                    <p><label>转让金额</label><span class="black9">44.87</span></p>
                    <p><label>转让时间</label><span class="black9">2017-07-17</span></p>
                </div>
                <div class="footer">
                    <span class="btn" @click.stop="lookProtocol(item.id)">合同协议</span>
                </div>
            </li>
            <li v-for="(item,i) in lists" v-if="item.type===4" @click="lookProgress(item.id)">
                <div class='header'>
                    <h3>
                        <label class="black9">众车宝</label>
                        <span class="statusText black9">投资失败</span>
                    </h3>
                    <p>2017-12-12 13:43:22</p>
                </div>
                <div class='body'>
                    <p><label>投资金额</label><span class="black9">51544.87</span></p>
                    <p><label>回款本息</label><span class="black9">44.87</span></p>
                    <p><label>回款时间</label><span class="black9">2017-07-17</span></p>
                </div>
            </li>
        </ul>

        <Toast :show="showToast" :cancelText='"关闭"' :cancelType='"red"' v-on:msg="changeToastFromChild">
            <div class="ProgressContent">
                <ul class="tender_detail_ul">
                    <li v-for="(item,i) in tenderDetail"
                        :class="{active:item.status===1,unreach:item.status===-1}">
                        <h3 v-if="item.title" v-text="item.title"></h3>
                        <p class="title_desc" v-if="item.desc" v-text="item.desc"></p>
                        <p class="time" v-if="item.time" v-text="item.time"></p>
                    </li>
                </ul>
            </div>
        </Toast>

        <Toast :show="showProtocol" :cancelText='"取消"' v-on:msg="changeProtocolFromChild" >
            <div class="protocolContent" >
                <div class="content">
                    <p>融资服务居间协议</p>
                    <p>国内保理业务合同</p>
                </div>
            </div>
        </Toast>

    </div>
</template>
<script>
    import TabNav from '@/component/TabNav'
    import Toast from '@/component/Toast'

    export default {
        name: 'TenderLists',
        data(){
            return {
                navs: ['全部', '募集中', '待回款', '已回款'],
                showToast: false,
                showProtocol: false,
                lists: [
                    {
                        type: 0,
                        id: 2
                    },
                    {
                        type: 1,
                        id: 3
                    },
                    {
                        type: 2,
                        id: 4
                    },
                    {
                        type: 3,
                        id: 5
                    },
                    {
                        type: 4,
                        id: 6
                    },
                ],
                tenderDetail: [
                    {
                        title: '投标申请成功',
                        desc: '(已使用30元现金红包，已使用0.8%加息券)',
                        time: '2017.04.03',
                        status: 0
                    },
                    {
                        title: '标的满标，开始计息',
                        time: '2017.04.03',
                        status: 1,
                    },
                    {
                        title: '结束投资',
                        status: -1
                    }
                ]
            }
        },
        mounted() {

        },
        methods: {
            clickNavItem(i){
                alert(i);
            },
            lookProgress(id){//查看投资进度详情
                this.showToast = true;
            },
            lookProtocol(){//查看协议
                this.showProtocol = true;
            },
            changeToastFromChild(val){
                this.showToast = val
            },
            changeProtocolFromChild(val){
                this.showProtocol = val
            }
        },
        computed: {},
        components: {
            TabNav,
            Toast
        }
    }
</script>
<style lang="scss" scoped>
    $green: #8CBE37;
    .wraper {
        background-color: #F6F6F6;
        padding-bottom: 1.3rem;
    }

    .fc-green {
        color: $green;
    }

    .tenderUl {
        li {
            background-color: #fff;
            margin-top: 0.2rem;
            @include box((p:0.32rem 0 0 0.3rem));
            .header {
                @include box((p:0 0.26rem 0.2rem 0));
                h3 {
                    @include box((lh:0.42rem, fs:0.3rem, d:flex));
                    font-weight: normal;
                    .statusText {
                        flex: 1;
                        @include box((ta:right, fs:0.28rem));
                    }
                }
                p {
                    @include box((lh:0.37rem, fs:0.26rem, c:#999));
                }
            }
            .body {
                @include box((p:0.05rem 0.25rem 0.1rem 0));
                @include thin(top, #E5E5E5);
                p {
                    @include box((lh:0.37rem, fs:0.26rem, d:flex, m:0.05rem 0));
                    label {
                        @include box((c:#999));
                    }
                    span {
                        flex: 1;
                        @include box((ta:right));
                    }
                }
            }
            .footer {
                @include box((p:0.2rem 0.26rem 0.2rem, ta:right));
                border-top: 0.01rem solid #E5E5E5;
                .btn {
                    @include box((d:inline-block, lh:0.48rem, br:1px solid $blue, bdr:0.08rem, c:#4992EC, p:0 0.24rem, m:0 0 0 0.3rem, fs:0.28rem));
                }
            }
        }
    }

    .ProgressContent {
        $contentMinH: 4rem;
        @include box((bg:#fff, p:0.8rem 0 0 0));
        min-height: $contentMinH;
        max-height: 6.4rem;
        overflow-y: auto;
        .tender_detail_ul {
            $Line_l: -0.5rem;
            @include box((m:0 0 0 1.2rem));
            position: relative;
            &:before {
                content: '';
                @include box((d:block, w:0.01rem, bg:#E5E5E5));
                @include position((p:absolute, l:$Line_l, t:0.18rem, b:0.18rem));
            }
            li {
                @include box((m:0 0 0.36rem 0));
                h3 {
                    @include box((lh:0.37rem, fs:0.26rem, c:$black5, fw:normal));
                    position: relative;
                    &:before {
                        $size: 0.12rem;
                        content: '';
                        @include box((d:block, w:$size, h:$size, bg:#E5E5E5, bdr:50%, m:- $size /2 0));
                        @include position((p:absolute, t:50%, l:$Line_l - $size / 2));
                    }
                }
                .title_desc {
                    @include box((fs:0.2rem, c:$black9, m:0.07rem 0 0 0));
                }
                .time {
                    @include box((c:$black9, fs:0.26rem, m:0.07rem 0 0 0));
                }
                &.active {
                    h3 {
                        @include box((c:$green));
                        &:before {
                            @include box((bg:$white));
                            box-shadow: 0 0 0 0.08rem $green;
                        }
                    }
                }
                &.unreach {
                    h3 {
                        @include box((c:#ccc));
                    }
                    .time {
                        @include box((c:#ccc));
                    }
                }
            }
        }
    }

    .protocolContent{
        @include box((bg:#E5E5E5,p:0 0 0.12rem 0));
        p{
            @include box((lh:1rem,ta:center,fs:0.36rem,c:$black2,bg:$white));
        }
    }
</style>


