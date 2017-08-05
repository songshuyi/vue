<template>
    <div class="wraper">
        <section>
            <p v-text="tenderName"></p>
            <h4>
                <span>理财期限 <i v-text="tenderLimit"></i>天</span>
                <span>剩余可投 <i v-text="UnitWan(tenderMoneyLeft)"></i>万元</span>
            </h4>
        </section>
        <div class="buy_area">
            <p class="title">投资金额</p>
            <div class="buy_row">
                <span>¥</span>
                <input type="text" v-model="moneyInput" placeholder="金额为100的整数倍">
                <label @click="fillMaxMoney">最大</label>
            </div>
            <p class="footer">
                账户余额<span v-text="acountMoneyLeft"></span>元
            </p>
        </div>
        <div class="award_area">
            <p class="title">使用奖励</p>
            <p class="arrow_item" @click="showRedPacket">
                <span>红包</span>
                <label class="no" v-if="!hasPacketToUse">暂无可用红包</label>
                <label v-if="!curRedPacket&&hasPacketToUse">选择可用红包</label>
                <label class="yes" v-if="hasPacketToUse &&　curRedPacket" v-text="(curRedPacket.amount||0)+'元'"></label>
            </p>
            <p class="arrow_item" @click="showJiaXiCard">
                <span>加息券</span>
                <label class="no" v-if="!hasJiaxiToUse">暂无可用加息券</label>
                <label v-if="!curJiaXiCard&&hasJiaxiToUse">选择可用加息券</label>
                <label class="yes" v-if="hasJiaxiToUse && curJiaXiCard" v-text="(curJiaXiCard.up_apr||0)+'%'"></label>
            </p>
            <p class="footer">预期收益 <span v-text="profitTxt">----</span></p>
        </div>
        <p class="msg"><span class="circle"></span>提示：投资后红包金额将返还至您的账户余额</p>
        <p class="msg">
            同意签署 <a href="">《自动投标投资及服务协议》</a><a href="">《个人投资与服务协议》</a>
        </p>
        <div class="amount_area">
            <p>
                实际支付(元)
                <label>6,554.02</label>
            </p>
            <span class="btn" @click="confirmSubmit">确认投资</span>
        </div>

        <!--红包toast-->
        <Toast :show="showPacketToast" v-on:msg="changePacketToast" :onlyslot="true">
            <div class="toast_wraper">
                <p class="title">
                    选择可用红包 <span class="close" @click="changePacketToast(false)"></span>
                </p>
                <div class="toast_lists">
                    <RedPacketCard :type="0" :key="index" :cardData="card" v-for="(card,index) in redPacketLists"
                                   :clickType="'select'" :circleBg="'white'" @click.native="selectRedPacket(card)">
                        <span v-show="card==curRedPacket" class="select_icon"></span>
                    </RedPacketCard>
                </div>
            </div>
        </Toast>

        <!--加息券toast-->
        <Toast :show="showJiaXiToast" v-on:msg="changeJiaXiToast" :onlyslot="true">
            <div class="toast_wraper">
                <p class="title">
                    选择可用加息券 <span class="close" @click="changeJiaXiToast(false)"></span>
                </p>
                <div class="toast_lists">
                    <RedPacketCard :type="1" :key="index" :cardData="card" v-for="(card,index) in jiaXiLists"
                                   :clickType="'select'" :circleBg="'white'" @click.native="selectJiaXi(card)">
                        <span v-show="card==curJiaXiCard" class="select_icon"></span>
                    </RedPacketCard>
                </div>
            </div>
        </Toast>

        <!--输入支付密码弹框-->
        <VDialog :show="showBomb" :close="closeConfirmPass">
            <div class="bomb_cont">
                <Inputs :type="'border'">
                    <input type="password" v-model="payPassval" placeholder="请输入支付密码"/>
                    <router-link to="/resetPwd/2">忘记密码？</router-link>
                </Inputs>
                <Btn :label="'确认'" :type="'red'" :click="confirmPass"/>
            </div>
        </VDialog>
    </div>
</template>
<script>
    import Toast from '@/component/Toast'
    import RedPacketCard from '@/component/RedPacketCard'
    import VDialog from '@/component/Dialog'
    import Inputs from '@/component/Inputs'
    import Btn from '@/component/Btn'

    export default {
        name: 'Buy',
        data() {
            return {
                id: this.$route.params.id,//tender id
                tenderName: '众金宝-1182',//标的名称
                tenderLimit: 90,//标的期限
                tenderMoneyLeft: 210000.25,//剩余可购买
                acountMoneyLeft: '5000.00',//账户余额
                moneyInput: '',
                hasPacketToUse: true,//boolean 是否有可用红包
                curRedPacket: null,//当前选中的红包
                redPacketLists: [//可用的红包列表
                    {
                        status: 0,
                        amount:10
                    },
                    {
                        status: 0,
                        amount:5
                    }
                ],
                hasJiaxiToUse: true,//boolean 是否有可用加息券
                curJiaXiCard: null,//当前选中的加息券
                jiaXiLists: [//可用的加息券列表
                    {
                        status: 0,
                        up_apr: 0.7,//加息比例
                    },
                    {
                        status: 0,
                        up_apr: 0.8
                    }
                ],
                showPacketToast: false,//是否显示红包列表的toast
                showJiaXiToast: false,//是否显示加息券列表的toast
                showBomb: false,//是否显示输入密码弹框
                payPassval: '',//支付密码
            }
        },
        mounted() {

        },
        methods: {
            showRedPacket(){
                if (this.hasPacketToUse) {//有可用加息券
                    this.showPacketToast = true;
                }
            },
            changePacketToast(val){
                this.showPacketToast = val;
            },
            selectJiaXi(card){
                if (card == this.curJiaXiCard) {
                    this.curJiaXiCard = null;
                } else {
                    this.curJiaXiCard = card;
                }
            },
            showJiaXiCard(){
                if (this.hasJiaxiToUse) {//有可用加息券
                    this.showJiaXiToast = true;
                }
            },
            selectRedPacket(card){
                if (card == this.curRedPacket) {
                    this.curRedPacket = null;
                } else {
                    this.curRedPacket = card;
                }
            },
            changeJiaXiToast(val){
                this.showJiaXiToast = val;
            },
            fillMaxMoney(){//填充输入框的最大可投资额度
                this.moneyInput = Math.min(this.acountMoneyLeft, this.tenderMoneyLeft)
            },
            UnitWan(num){
                return (num / 10000).toFixed(2);
            },
            confirmSubmit(){//点击底部确认按钮  弹出输入支付密码弹框
                this.showBomb = true;
                this.payPassval = '';
            },
            closeConfirmPass(){
                this.showBomb = false;
            },
            confirmPass(){//确认交易密码
                let data = {
                    id: this.id,
                    money: this.moneyInput,
                    redPacket: this.curRedPacket && this.curRedPacket.id,
                    jiaxi: this.curJiaXiCard && this.curJiaXiCard.id,
                    payPass: this.payPassval
                }
                this.$router.push('/tender/buySuccess');
            }
        },
        computed: {
            profitTxt(){
                const moneyReg=/^\d+(\.\d+)?$/;

                if(!moneyReg.test(this.moneyInput)){//输入了非法的购买金额值
                    return '0元'
                }else{
                    let inputCalProfit=this.moneyInput*0.01*3;//根据输入的金额和选择的红包加息券进行计算后的值

                    if(this.curRedPacket&&this.curJiaXiCard){//选中有红包和加息券
                        return `0元 (包含加息券收益${this.curJiaXiCard.up_apr}元 + 红包${this.curRedPacket.amount}元)`;
                    }else if(this.curRedPacket){//选中有红包
                        return `0元 (包含红包${this.curRedPacket.amount}元)`;
                    }else if(this.curJiaXiCard){//选中有加息券
                        return `0元 (包含加息券收益${this.curJiaXiCard.up_apr}元)`;
                    }else{
                        return '20元';
                    }
                }
            }
        },
        components: {
            Toast,
            RedPacketCard,
            VDialog,
            Inputs,
            Btn
        }
    }
</script>
<style lang="scss" scoped>

    section {
        @include box((m:0.2rem 0, bg:$white, p:0.26rem 0.3rem 0.3rem, fs:0.28rem, lh:0.4rem));
        p {
            @include box((c:$black5, m:0 0 0.25rem));
        }
        h4 {
            @include box((c:$black2, d:flex));
            font-weight: normal;
            span {
                flex: 1;
            }
        }
    }

    .buy_area {
        @include box((p:0.27rem 0 0 0.3rem, bg:$white));
        .title {
            @include box((lh:0.4rem, fs:0.28rem, c:$black5, m:0 0 0.16rem));
        }
        .buy_row {
            @include box((p:0.23rem 0, d:flex, lh:0.56rem));
            span {
                @include box((w:1.1rem, fs:0.64rem, c:$black2, ta:center));
            }
            input {
                @include box((fs:0.4rem, c:$black2));
                flex: 1;
                &::-webkit-input-placeholder, &::input-placeholder {
                    color: #ccc;
                }
            }
            label {
                @include box((w:1.4rem, h:0.54rem, bdr:0.1rem, fs:0.28rem, ta:center, c:$blue, m:0 0.3rem 0));
                @include thin(all, $blue);
            }
        }
        .footer {
            @include box((lh:0.8rem, fs:0.24rem, c:$black9));
            @include thin(top, #e5e5e5);
            span {
                @include box((c:$red, m:0 0 0 0.1rem));
            }
        }
    }

    .award_area {
        @include box((p:0 0 0 0.3rem, bg:$white, m:0.2rem 0));
        .title {
            @include box((lh:0.8rem, fs:0.28rem));
        }
        .arrow_item {
            @include box((lh:1rem));
            position: relative;
            &:nth-child(3) {
                @include thin(top bottom, #e5e5e5);
            }
            &:after {
                $size: 0.3rem;
                content: '';
                @include box((w:$size, h:$size, d:block, m:- $size / 2 0 0));
                @include position((p:absolute, r:0.22rem, t:50%));
                @include bg_img('icon_arrow_right.png');
            }
            span {
                @include box((fs:0.28rem, c:$black2));
            }
            label {
                @include box((fs:0.26rem, fl:right, p:0 0.6rem 0 0));
                &.yes {
                    @include box((c:$red));
                }
                &.no {
                    @include box((c:#ccc));
                }
            }
        }
        .footer {
            @include box((lh:0.8rem, ta:right, p:0 0.3rem 0, fs:0.24rem, c:$black5));
        }
    }

    .msg {
        @include box((c:$black9, fs:0.2rem, lh:0.28rem, p:0.1rem 0.54rem));
        a {
            @include box((c:$blue));
        }
        .circle {
            $size:0.16rem;
            @include box((d:inline-block, w:$size, h:$size, bdr:50%, m:0 0.1rem 0 0));
            @include bg_img('tender_detail/icon_circle_circle.png');
        }
    }

    .amount_area {
        @include box((w:100%, h:0.88rem, lh:0.88rem, bg:$white, d:flex));
        @include position((p:fixed, l:0, b:0, z:0));
        p {
            @include box((p:0 0.8rem 0 0.3rem, fs:0.3rem, c:$black2));
            flex: 1;
            label {
                @include box((fl:right, fs:0.32rem, c:$red));
            }
        }
        .btn {
            @include box((w:2.4rem, bg:$red, c:$white, ta:center));
        }
    }

    .toast_wraper {
        @include box((bg:$white));
        .title {
            @include box((ta:center, fs:0.3rem, lh:0.42rem, p:0.3rem 0, c:$black2));
            border-bottom: 0.02rem solid #e5e5e5;
            position: relative;
            .close {
                @include box((w:0.34rem, h:0.34rem, d:block));
                @include bg_img('icon_close.png');
                @include position((p:absolute, t:0.34rem, r:0.34rem));
            }
        }
        .toast_lists {
            @include box((p:0 0.3rem 0.3rem 0.3rem));
            max-height: 6.3rem;
            overflow-y: auto;
            .select_icon {
                @include box((w:0.44rem, h:0.44rem, d:inline-block, m:0 0.3rem 0 0));
                @include bg_img('tender_detail/icon_select_packet.png');
            }
        }
    }

    .bomb_cont {
        @include box((p:0.85rem 0.3rem 0.4rem));
    }
</style>