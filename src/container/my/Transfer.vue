<template>
    <div class="wraper">
        <div class="top_cont">
            <p class="title">众金宝 — 1182标的信息</p>
            <div class="content">
                <p><span>投资本金</span><label>51,544</label></p>
                <p><span>预期年化</span><label class="red">10%</label></p>
                <p><span>持有时间</span><label>56天</label></p>
                <p><span>已获收益</span><label>45元</label></p>
            </div>
        </div>
        <div class="transfer_form">
            <ul class="form_group">
                <li class="input_item">
                    <label>转让金额(元)</label>
                    <input type="number" ref="transferMoney" placeholder="建议价格 1,000~1,045">
                </li>
                <li class="input_item">
                    <label>转让密码</label>
                    <input type="text" ref="transferPass" placeholder="方便朋友间转让，可选填">
                </li>
            </ul>
            <p class="btn_wraper">
                <Btn label="确认转让" type="red" :click="submitTransfer"/>
            </p>
        </div>

        <transition name="fade1">
            <div class="shade" v-show="showBomb" @click="closeConfirmPass"></div>
        </transition>

        <transition name="bounce">
            <div class="bomb" v-show="showBomb">
                <span class="close" @click="closeConfirmPass"></span>
                <div class="bomb_cont">
                    <div class="input_row">
                        <input type="number" ref="payPssInput" placeholder="请输入支付密码"/>
                        <router-link to="/">忘记密码？</router-link>
                    </div>
                    <Btn label="确认" type="red" :click="confirmPass"/>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
    import Btn from '@/component/Btn'
    export default {
        name: 'Transfer',
        data() {
            return {
                showBomb:false
            }
        },
        mounted() {

        },
        methods: {
            submitTransfer(){//验证并提交转让信息
                const transferMoneyVal = this.$refs['transferMoney'].value;
                const moneyReg = /^\d+(\.\d{1,2})?$/;

                const transferPassVal = this.$refs['transferPass'].value;

                const moneyValied = transferMoneyVal != 0 && moneyReg.test(transferMoneyVal);
                console.log(moneyReg.test(transferMoneyVal));
                if (moneyValied) {
                    console.log('验证通过',transferMoneyVal);
                    this.showBomb=true;
                }else{
                    alert('验证错误');
                }
                console.log('transferPassVal:',transferPassVal);
            },
            closeConfirmPass(){
                this.showBomb=false;
                this.$refs.payPssInput.value='';
            },
            confirmPass(){
                const val=this.$refs.payPssInput.value;
                const reg=/^[a-zA-Z0-9_]{6,12}$/;
                alert(reg.test(val));
                alert(val);
            },
        },
        computed: {},
        components: {
            Btn
        }
    }
</script>
<style lang="scss" scoped>

    .wraper {

    }

    .top_cont {
        @include box((m:0.2rem 0, p:0 0 0 0.3rem, lh:1rem, c:$black2, bg:$white));
        .title {
            @include position((p:relative));
            @include thin(bottom, #E5E5E5);
            &:after {
                content: '';
                @include box((d:block, w:0.3rem, h:0.3rem, bg:$red, m:-0.15rem 0 0));
                @include position((p:absolute, r:0.24rem, t:50%));
                @include bg_img('icon_arrow_right.png');
            }
        }
        .content {
            @include box((p:0.1rem 0.3rem 0.1rem 0));
            p {
                @include box((lh:0.37rem, fs:0.26rem, m:0.1rem 0));
                span {
                    @include box((c:$black9));
                }
                label {
                    @include box((c:$black5, fl:right));
                    &.red {
                        @include box((c:$red));
                    }
                }
            }
        }
    }

    .btn_wraper {
        @include box((m:0.8rem 0.75rem));
    }

    .form_group {
        .input_item {
            @include box((h:1rem, lh:1rem, bg:$white, d:flex));
            &:first-child {
                @include box((m:0 0 0.3rem));
            }
            label {
                @include box((w:2.26rem, p:0 0 0 0.3rem, c:$black2, fs:0.3rem));
                &.long {
                    width: 2.6rem;
                }
            }
            input, p {
                @include box((h:1rem, lh:1rem, fs:0.28rem, c:$black2));
                flex: 1;
            }
        }
        .normal_msg_line {
            @include box((lh:0.8rem, h:0.8rem, c:$black9, fs:0.24rem, p:0 0 0 0.3rem));
        }
        .rules {
            @include box((lh:0.74rem, c:$blue, p:0 0 0 0.3rem, fs:0.24rem));
        }
        .bottom_sxf {
            @include box((lh:0.28rem, ta:center, fs:0.2rem, c:$black9, m:0.17rem 0));
        }
    }


    .bomb_cont{
        @include box((p:0.8rem 0.3rem 0.4rem));
        .input_row {
            @include box((h:0.8rem, lh:0.8rem, fs:0.28rem, d: flex,m:0 0 0.4rem 0));
            @include thin(all,#e5e5e5);
            input{
                @include box(( fs:0.28rem));
                text-indent: 0.2rem;
                flex:1;
            }
            a{
                @include box((w:1.6rem,ta:center,c:$blue));
            }
        }
    }

</style>